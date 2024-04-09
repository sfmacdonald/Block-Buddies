import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      builds {
        _id
        buildName
        number
        pieces
        theme
        builderAge
        rating
        buildAuthor
      }
    }
  }
`;

export const QUERY_BUILDS = gql`
  query getBuilds {
    builds {
      _id
      buildName
      number
      pieces
      theme
      builderAge
      rating
      buildAuthor
    }
  }
`;

export const QUERY_SINGLE_BUILD = gql`
  query getSingleBuild($buildId: ID!) {
    build(buildId: $buildId) {
      _id
      buildName
      number
      pieces
      theme
      builderAge
      rating
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
        number
        pieces
        theme
        builderAge
        rating
        buildAuthor
      }
    }
  }
`;

export const QUERY_BLOCK_BUILDS = gql`
  query getBlockBuilds {
    builds {
      _id
      buildName
      number
      pieces
      theme
      builderAge
      rating
      buildAuthor
    }
  }
`;
