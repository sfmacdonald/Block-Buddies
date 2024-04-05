const db = require('../config/connection');
const { User, Set } = require('../models');
const userSeeds = require('./userSeeds.json');
const buildSeeds = require('./buildSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Build', 'builds');

    await cleanDB('User', 'users');

    await User.create(userSeeds);

    for (let i = 0; i < buildSeeds.length; i++) {
      const { _id, buildAuthor } = await Set.create(buildSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: buildAuthor },
        {
          $addToSet: {
            builds: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
