// Function to show the next step in the form
function nextStep(step) {
  document.getElementById("step" + step).style.display = "none";
  document.getElementById("step" + (step + 1)).style.display = "block";
}

// Function to show the previous step in the form
function prevStep(step) {
  document.getElementById("step" + step).style.display = "none";
  document.getElementById("step" + (step - 1)).style.display = "block";
}




// Function to validate the form
function storeData() {

  // Get form elements
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var dob = document.getElementById("dob").value;
  var email = document.getElementById("email").value;
  var fatherFirstName = document.getElementById("fatherFirstName").value;
  var fatherLastName = document.getElementById("fatherLastName").value;
  var motherFirstName = document.getElementById("motherFirstName").value;
  var motherLastName = document.getElementById("motherLastName").value;
  var nationality = document.getElementById("nationality").value;
  var streetAddress = document.getElementById("streetAddress").value;
  var city = document.getElementById("city").value;
  var country = document.getElementById("country").value;
  var mobile = document.getElementById("mobile").value;
  var hscInstitution = document.getElementById("hscInstitution").value;
  var hscBoard = document.getElementById("hscBoard").value;
  var hscScore = document.getElementById("hscScore").value;
  var sscInstitution = document.getElementById("sscInstitution").value;
  var sscBoard = document.getElementById("sscBoard").value;
  var sscScore = document.getElementById("sscScore").value;
  var currentlyPursuing =
    document.getElementById("currentlyPursuing").value;
  var currentInstitution =
    document.getElementById("currentInstitution").value;
  var overallScore = document.getElementById("overallScore").value;
  var backlogs = document.getElementById("backlogs").value;
  var photo = document.getElementById("photo").files[0];
  var hscMarksheet = document.getElementById("hscMarksheet").files[0];
  var sscMarksheet = document.getElementById("sscMarksheet").files[0];
  var allMarksheets = document.getElementById("allMarksheets").files[0];


  // Convert photo and marksheets files to Base64 strings
  var photoUrl = "";
  var hscMarksheetUrl = "";
  var sscMarksheetUrl = "";
  var allMarksheetsUrl = "";

  var fileReader = new FileReader();

  fileReader.onload = function () {
    photoUrl = fileReader.result;

    var fileReader2 = new FileReader();
    fileReader2.onload = function () {
      hscMarksheetUrl = fileReader2.result;

      var fileReader3 = new FileReader();
      fileReader3.onload = function () {
        sscMarksheetUrl = fileReader3.result;

        var fileReader4 = new FileReader();
        fileReader4.onload = function () {
          allMarksheetsUrl = fileReader4.result;

          // Create an object to store form data
          var formData = {
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            email: email,
            fatherFirstName: fatherFirstName,
            fatherLastName: fatherLastName,
            motherFirstName: motherFirstName,
            motherLastName: motherLastName,
            nationality: nationality,
            streetAddress: streetAddress,
            city: city,
            country: country,
            mobile: mobile,
            hscInstitution: hscInstitution,
            hscBoard: hscBoard,
            hscScore: hscScore,
            sscInstitution: sscInstitution,
            sscBoard: sscBoard,
            sscScore: sscScore,
            currentlyPursuing: currentlyPursuing,
            currentInstitution: currentInstitution,
            overallScore: overallScore,
            backlogs: backlogs,
            photo: photoUrl,
            hscMarksheet: hscMarksheetUrl,
            sscMarksheet: sscMarksheetUrl,
            allMarksheets: allMarksheetsUrl,
          };

          // Save form data in localStorage
          localStorage.setItem("formData", JSON.stringify(formData));
          alert("Form data saved in localStorage!");
          window.location.reload();
        };
        fileReader4.readAsDataURL(allMarksheets);
      };
      fileReader3.readAsDataURL(sscMarksheet);
    };
    fileReader2.readAsDataURL(hscMarksheet);
  };
  fileReader.readAsDataURL(photo);
}



