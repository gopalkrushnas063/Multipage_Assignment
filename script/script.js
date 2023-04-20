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

// Get all text input elements
const textInputs = document.querySelectorAll('input[type="text"]');

// Loop through each input element
textInputs.forEach((input) => {
  // Listen for changes in input value
  input.addEventListener("input", () => {
    // Convert the input string to lowercase
    let str = input.value.toLowerCase();

    // Split the string into an array of words
    let words = str.split(" ");

    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back into a string and set the input value
    input.value = words.join(" ");
  });
});

// Function to validate the form
function storeData() {
  // Get form elements
  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;
  var email = document.getElementById("email").value;
  var fatherFirstName = document.getElementById("fatherFirstName").value;
  var fatherLastName = document.getElementById("fatherLastName").value;
  var motherFirstName = document.getElementById("motherFirstName").value;
  var motherLastName = document.getElementById("motherLastName").value;
  var gender = document.getElementById("gender").value;
  var nationality = document.getElementById("nationality").value;
  var streetAddress = document.getElementById("streetAddress").value;
  var pin = document.getElementById("pin").value;
  var city = document.getElementById("city").value;
  var country = document.getElementById("country").value;
  var country_code = document.getElementById("country_code").value;
  var mobile = document.getElementById("mobile").value;
  var hscInstitution = document
    .getElementById("hscInstitution")
    .value.toUpperCase();
  var hscBoard = document.getElementById("hscBoard").value;
  var hscScore = document.getElementById("hscScore").value;
  var sscInstitution = document
    .getElementById("sscInstitution")
    .value.toUpperCase();
  var sscBoard = document.getElementById("sscBoard").value;
  var sscScore = document.getElementById("sscScore").value;
  var currentlyPursuing = document.getElementById("currentlyPursuing").value;
  var currentInstitution = document
    .getElementById("currentInstitution")
    .value.toUpperCase();
  var overallScore = document.getElementById("overallScore").value;
  var backlogs = document.getElementById("backlogs").value;
  var photo = document.getElementById("photo").files[0];
  var hscMarksheet = document.getElementById("hscMarksheet").files[0];
  var sscMarksheet = document.getElementById("sscMarksheet").files[0];
  var allMarksheets = document.getElementById("allMarksheets").files[0];

  //Email Validation:
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Mobile Number Validation
  function validateMobileNumber(mobileNumber) {
    const mobileNumberRegex = /^[0-9]{10}$/; // matches exactly 10 digits
    return mobileNumberRegex.test(mobileNumber);
  }

  const isValidMobileNumber = validateMobileNumber(mobile);

  if (isValidMobileNumber) {
    console.log("Mobile number is valid!");
  } else {
    alert("Mobile number is invalid.");
  }

  // PIN Validation
  function validatePincode(pincode) {
    // Regular expression to match 6 digit pincode
    var pinRegex = /^[1-9][0-9]{5}$/;

    // Check if the pincode matches the regular expression
    if (pinRegex.test(pincode)) {
      return true;
    } else {
      return false;
    }
  }
  if (validatePincode(pin)) {
    console.log("Valid pincode");
  } else {
    alert("Invalid pincode");
  }

  // CGPA Validation
  function validateCGPA(cgpa) {
    // Check if CGPA is a number between 0 and 10
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
      return false;
    }

    // Check if CGPA has more than 2 decimal places
    const cgpaString = cgpa.toString();
    const decimalIndex = cgpaString.indexOf(".");
    if (decimalIndex !== -1 && cgpaString.length - decimalIndex > 3) {
      return false;
    }

    // CGPA is valid
    return true;
  }

  // CGPA Check For HSC Score
  if (validateCGPA(hscScore)) {
    console.log("Valid CGPA");
  } else {
    alert("Invalid HSC CGPA");
  }

  // Perform validation
  if (
    name === "" ||
    dob === "" ||
    email === "" ||
    fatherFirstName === "" ||
    fatherLastName === "" ||
    motherFirstName === "" ||
    motherLastName === "" ||
    gender === "" ||
    nationality === "" ||
    streetAddress === "" ||
    pin === "" ||
    city === "" ||
    country === "" ||
    country_code === "" ||
    mobile === "" ||
    hscInstitution === "" ||
    hscBoard === "" ||
    hscScore === "" ||
    sscInstitution === "" ||
    sscBoard === "" ||
    sscScore === "" ||
    currentlyPursuing === "" ||
    currentInstitution === "" ||
    overallScore === "" ||
    backlogs === ""
  ) {
    alert("Please fill in all fields");
  }

  if (isValidMobileNumber && validatePincode && validateCGPA) {
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
              name: name,
              dob: dob,
              email: email,
              fatherFirstName: fatherFirstName,
              fatherLastName: fatherLastName,
              motherFirstName: motherFirstName,
              motherLastName: motherLastName,
              gender: gender,
              nationality: nationality,
              streetAddress: streetAddress,
              city: city,
              country: country,
              country_code : country_code,
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
            alert("Registration Done Successfully!");
            window.location.href = "applicant.html";
          };
          fileReader4.readAsDataURL(allMarksheets);
        };
        fileReader3.readAsDataURL(sscMarksheet);
      };
      fileReader2.readAsDataURL(hscMarksheet);
    };
    fileReader.readAsDataURL(photo);
  }
}
