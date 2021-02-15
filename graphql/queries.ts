/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlbumCategory = /* GraphQL */ `
  query GetAlbumCategory($id: ID!) {
    getAlbumCategory(id: $id) {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistHeadline
          albumCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAlbumCategorys = /* GraphQL */ `
  query ListAlbumCategorys(
    $filter: ModelAlbumCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbumCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        albums {
          nextToken
          items {
            id
            name
            imageUri
            artistHeadline
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      name
      by
      numberOfLikes
      imageUri
      artistHeadline
      songs {
        items {
          id
          imageUri
          url
          artist
          title
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryId
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        by
        numberOfLikes
        imageUri
        artistHeadline
        songs {
          nextToken
        }
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      imageUri
      url
      artist
      title
      albumId
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistHeadline
        songs {
          nextToken
        }
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageUri
        url
        artist
        title
        albumId
        album {
          id
          name
          by
          numberOfLikes
          imageUri
          artistHeadline
          albumCategoryId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      name
      credits
      email
      library {
        items {
          imageUri
          id
          title
          artist
          albumId
          url
          accountId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        credits
        email
        library {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLibrary = /* GraphQL */ `
  query GetLibrary($id: ID!) {
    getLibrary(id: $id) {
      imageUri
      id
      title
      artist
      albumId
      url
      accountId
      createdAt
      updatedAt
    }
  }
`;
export const listLibrarys = /* GraphQL */ `
  query ListLibrarys(
    $filter: ModelLibraryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLibrarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        imageUri
        id
        title
        artist
        albumId
        url
        accountId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
