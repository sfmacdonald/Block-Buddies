import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      builds {
        _id
        buildText
        createdAt
      }
    }
  }
`;

export const QUERY_BUILDS = gql`
  query getBuilds {
    thoughts {
      _id
      buildName
      buildNumber
      buildPieces
      buildTheme
      builderAge
      buildRating
      buildAuthor
    }
  }
`;

export const QUERY_SINGLE_BUILD = gql`
  query getSingleBuild($buildId: ID!) {
    build(buildId: $buildId) {
      _id
      buildName
      buildNumber
      buildPieces
      buildTheme
      builderAge
      buildRating
      buildAuthor
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      builds {
        _id
        buildName
        buildNumber
        buildPieces
        buildTheme
        builderAge
        buildRating
        buildAuthor
      }
    }
  }
`;

export const QUERY_BLOCK_BUILDS = gql`
  query getBlockBuilds {
    blockBuilds {
      _id
      buildName
      buildNumber
      description
      image
      author
    }
  }
`;

