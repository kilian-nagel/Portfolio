
const apiUrl = API_URL;
const authToken = AUTH_TOKEN;


function getShortProjectQuery(){
  const graphqlQuery = encodeURIComponent(`
  {
    posts {
      title
      excerpt
      tags
      slug
    }
  }
`);
return graphqlQuery;
}

function getLongProjectQuery(id){
  const graphqlQuery = encodeURIComponent(`
  {
    posts (where: { id: "${id}" }) {
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

async function getProjectsShortFormat(){
  const graphqlQuery = getShortProjectQuery();
  const urlWithQuery = `${apiUrl}?query=${graphqlQuery}`;

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`,
  };
  
  const requestOptions = {
    method: 'GET',
    headers: headers,
  };
  
  const rawData = await (await fetch(urlWithQuery, requestOptions)).json();
  const data = await rawData.data.posts;
  return data;
}

async function getProjectsLongFormat(id){
  const graphqlQuery = getLongProjectQuery(id);
  const urlWithQuery = `${apiUrl}?query=${graphqlQuery}`;

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`,
  };
  
  const requestOptions = {
    method: 'GET',
    headers: headers,
  };
  
  const rawData = await (await fetch(urlWithQuery, requestOptions)).json();
  const data = await rawData.data.posts[0];
  return data;
}