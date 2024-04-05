import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username 
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BUILD = gql`
  mutation addBuild($buildText: String!) {
    addBuild(buildText: $buildText) {
      _id
      buildText
      buildAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($buildId: ID!, $commentText: String!) {
    addComment(buildId: $buildId, commentText: $commentText) {
      _id
      buildText
      buildAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const ADD_BLOCK_SET = gql`
  mutation addBlockSet($setName: String!, $setNumber: String!, $description: String!, $image: String!, $author: String!) {
    addBlockSet(setName: $setName, setNumber: $setNumber, description: $description, image: $image, author: $author) {
      _id
      setName
      setNumber
      description
      image
      author
    }
  }
`;

