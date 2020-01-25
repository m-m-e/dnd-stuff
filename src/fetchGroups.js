const ENDPOINT = 'http://localhost:3004/groups';

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
 };
 
export const fetchGroups = () => {
  return fetch(ENDPOINT)
    .then(handleErrors)
    .then(res => res.json())
    .catch(error => console.error(error))
}


export const saveGroups = groups =>  {
  fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify({ "groups": groups }),
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  })
};