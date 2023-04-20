//LocalStorage Data GetItem :
let data = JSON.parse(localStorage.getItem("formData")) || [];

//Personal Details :
document.getElementById("name").innerText = data.name;
document.getElementById("fathersName").innerText =
  data.fatherFirstName + " " + data.fatherLastName;
document.getElementById("fatherName").innerText =
  data.fatherFirstName + " " + data.fatherLastName;
document.getElementById("mothersName").innerText =
  data.motherFirstName + " " + data.motherLastName;
document.getElementById("nationality").innerText = data.nationality;
document.getElementById("gender").innerText = data.gender;
document.getElementById("streetAddress").innerText = data.streetAddress;
document.getElementById("city").innerText = data.city;
document.getElementById("country").innerText = data.country;
document.getElementById("mobile").innerText =`${data.country_code} ${data.mobile}`;
document.getElementById("dob").innerText = data.dob;

//Educational Deatils :
document.getElementById("hscInstitution").innerText = data.hscInstitution;
document.getElementById("hscBoard").innerText = data.hscBoard;
document.getElementById("hscScore").innerText = data.hscScore + " CGPA";
document.getElementById("sscInstitution").innerText = data.sscInstitution;
document.getElementById("sscBoard").innerText = data.sscBoard + "%";
document.getElementById("sscBoard").innerText = data.sscBoard;
document.getElementById("sscScore").innerText = data.sscScore + "%";
document.getElementById("currentlyPursuing").innerText = data.currentlyPursuing;
document.getElementById("currentInstitution").innerText =
  data.currentInstitution;
document.getElementById("overallScore").innerText = data.overallScore + "%";
document.getElementById("backlogs").innerText = data.backlogs;

//Photo and Documents :
document.getElementById("photo").src = data.photo;
document.getElementById("hscMarksheet").setAttribute("data", data.hscMarksheet);
document.getElementById("sscMarksheet").setAttribute("data", data.sscMarksheet);
document
  .getElementById("allMarksheets")
  .setAttribute("data", data.allMarksheets);
