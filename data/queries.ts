import { query } from '../components/interfaces/project';

export function getShortProjectQuery(): query {
    const graphqlQuery = encodeURIComponent(`
      { 
        posts {
          id
          title
          excerpt
          tags
          slug
          coverImage {
            url
          }
        }
      }
    `);
    return graphqlQuery;
}

export function getLongProjectQuery(id): query {
    const graphqlQuery = encodeURIComponent(`
    {
      posts (where: { id: "${id}" }) {
        id
        title
        excerpt
        tags
        slug
        typeOfProject
        typeOfApplication
        dates
        coverImage {
          url
        }
        content {
          html
        }
      }
    }
  `);
    return graphqlQuery;
}
