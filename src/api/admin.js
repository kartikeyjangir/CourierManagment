// const api = "http://localhost:8000";
const api="https://couriermanagementdbms.herokuapp.com";

//add branch
export const addbranch = (data) => {
  return fetch(api + "/admin/addbranch", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => { 
      if (response.ok) {
      response.json();
      alert("Branch Added Successfully");
    } else alert("Not succeful");})
    .catch((error) => {
      console.log(error);
    });
};


//fgetbranch
export const getBranch = () => {
  return fetch(api + "/admin/managebranch", {
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



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>STAFF>>>>>>>>>>>>>>>>>>
//single staff
export const getsinglestaff = (data) => {
  return fetch(api + "/admin/getsinglestaff", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: data }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
};

//update staff
export const updatestaff = (data) => {
  return fetch(api + "/admin/updatestaff", {
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

//for all staffs
export const getstaff = () => {
  return fetch(api + "/admin/getstaff", {
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

//add staff
export const addstaff = (data) => {
  return fetch(api + "/admin/addstaff", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        response.json();
        alert("Staff Added");
      } else alert("Not succeful");
    })
    .catch((error) => {
      console.log(error);
    });
};
