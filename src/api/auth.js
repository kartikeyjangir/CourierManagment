const api = "http://localhost:8000";

export const getauth = (data) => {
  return fetch(api + "/authme", {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error)
    })
};
