const api = "http://localhost:8000";

export const insertParcelDetails = (data) => {
  return fetch(api + "/staff/addparcel", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
};

//for all courier
export const getallcourier = () => {
  return fetch(api + "/staff/getallcourier", {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
};

//update status
export const updatestatus = (data) => {
  return fetch(api + "/staff/updatestatus", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
};

//get status for pending
export const getpending = () => {
  return fetch(api + "/staff/getpending", {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
};

//get status for delivered
export const getdelivered = () => {
  return fetch(api + "/staff/getdelivered", {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
};

//search parcel by ref
export const searchParcel = (data) => {
  return fetch(api + "/staff/searchParcel", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
};
