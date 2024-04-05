
const { User, Thought } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('builds');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('builds');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Build.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { buildId }) => {
      return Build.findOne({ _id: buildId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('builds');
      }
      throw AuthenticationError;
    },
  },


  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });


      if (!user) {
        throw AuthenticationError;
      }


      const correctPw = await user.isCorrectPassword(password);


      if (!correctPw) {
        throw AuthenticationError;
      }


      const token = signToken(user);


      return { token, user };
    },
    addBuild: async (parent, { buildText }, context) => {
      if (context.user) {
        const build = await Build.create({
          buildText,
          buildAuthor: context.user.username,
        });


        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { builds: build._id } }
        );


        return build;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
    addComment: async (parent, { buildId, commentText }, context) => {
      if (context.user) {
        return Build.findOneAndUpdate(
          { _id: buildId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removeBuild: async (parent, { buildId }, context) => {
      if (context.user) {
        const build = await Build.findOneAndDelete({
          _id: buildId,
          buildtAuthor: context.user.username,
        });


        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { builds: tbuild._id } }
        );


        return build;
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { buildId, commentId }, context) => {
      if (context.user) {
        return Build.findOneAndUpdate(
          { _id: buildId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};


module.exports = resolvers;