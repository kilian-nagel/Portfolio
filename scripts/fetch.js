
const apiUrl = process.env.API_URL;
const authToken = process.env.AUTH_TOKEN;


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