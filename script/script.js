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

// Constructor For Form Data
function ApplicantDetails(
  firstName,
  lastName,
  dob,
  email,
  fatherFirstName,
  fatherLastName,
  motherFirstName,
  motherLastName,
  nationality,
  streetAddress,
  city,
  country,
  mobile,
  hscInstitution,
  hscBoard,
  hscScore,
  sscInstitution,
  sscBoard,
  sscScore,
  currentlyPursuing,
  currentInstitution,
  overallScore,
  backlogs,
  photo,
  hscMarksheet,
  sscMarksheet,
  allMarksheets
) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.dob = dob),
    (this.email = email),
    (this.fatherFirstName = fatherFirstName),
    (this.fatherLastName = fatherLastName),
    (this.motherFirstName = motherFirstName),
    (this.motherLastName = motherLastName),
    (this.nationality = nationality),
    (this.streetAddress = streetAddress),
    (this.city = city),
    (this.country = country),
    (this.mobile = mobile),
    (this.hscInstitution = hscInstitution),
    (this.hscBoard = hscBoard),
    (this.hscScore = hscScore),
    (this.sscInstitution = sscInstitution),
    (this.sscBoard = sscBoard),
    (this.sscScore = sscScore),
    (this.currentlyPursuing = currentlyPursuing),
    (this.currentInstitution = currentInstitution),
    (this.overallScore = overallScore),
    (this.backlogs = backlogs),
    (this.photo = photo),
    (this.hscMarksheet = hscMarksheet),
    (this.sscMarksheet = sscMarksheet),
    (this.allMarksheets = allMarksheets);
}

// Function to validate the form
function storeData(event) {
  event.preventDefault();

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
  var currentlyPursuing = document.getElementById("currentlyPursuing").value;
  var currentInstitution = document.getElementById("currentInstitution").value;
  var overallScore = document.getElementById("overallScore").value;
  var backlogs = document.getElementById("backlogs").value;
  // var photo = document.getElementById("photo").value;
  // var hscMarksheet = document.getElementById("hscMarksheet").value;
  // var sscMarksheet = document.getElementById("sscMarksheet").value;
  // var allMarksheets = document.getElementById("allMarksheets").value;

  // Perform validation
  if (
    firstName === "" ||
    lastName === "" ||
    dob === "" ||
    email === "" ||
    fatherFirstName === "" ||
    fatherLastName === "" ||
    motherFirstName === "" ||
    motherLastName === "" ||
    nationality === "" ||
    streetAddress === "" ||
    city === "" ||
    country === "" ||
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
  // Read photo file as Data URL
  var photoFile = document.getElementById("photo").files[0];
  var photoReader = new FileReader();
  photoReader.onloadend = function () {
    photo = photoReader.result;

    // Read hscMarksheet file as Data URL
    var hscMarksheetFile = document.getElementById("hscMarksheet").files[0];
    var hscMarksheetReader = new FileReader();
    hscMarksheetReader.onloadend = function () {
      hscMarksheet = hscMarksheetReader.result;

      // Read sscMarksheet file as Data URL
      var sscMarksheetFile = document.getElementById("sscMarksheet").files[0];
      var sscMarksheetReader = new FileReader();
      sscMarksheetReader.onloadend = function () {
        sscMarksheet = sscMarksheetReader.result;

        // Read allMarksheets file as Data URL
        var allMarksheetsFile =
          document.getElementById("allMarksheets").files[0];
        var allMarksheetsReader = new FileReader();
        allMarksheetsReader.onloadend = function () {
          allMarksheets = allMarksheetsReader.result;

          let formData = new ApplicantDetails(
            firstName,
            lastName,
            dob,
            email,
            fatherFirstName,
            fatherLastName,
            motherFirstName,
            motherLastName,
            nationality,
            streetAddress,
            city,
            country,
            mobile,
            hscInstitution,
            hscBoard,
            hscScore,
            sscInstitution,
            sscBoard,
            sscScore,
            currentlyPursuing,
            currentInstitution,
            overallScore,
            backlogs,
            photo,
            hscMarksheet,
            sscMarksheet,
            allMarksheets
          );

          let formDataLS = JSON.parse(localStorage.getItem("applicant")) || [];

          // Store form data in localStorage
          formDataLS.push(formData);

          // Convert form data to JSON string && Store form data in localStorage with a key
          localStorage.setItem("applicant", JSON.stringify(formDataLS));

          alert("Registration Successfully Done !");
          window.location.reload();
        };
        allMarksheetsReader.readAsDataURL(allMarksheetsFile);
      };
      sscMarksheetReader.readAsDataURL(sscMarksheetFile);
    };
    hscMarksheetReader.readAsDataURL(hscMarksheetFile);
  };
  photoReader.readAsDataURL(photoFile);
}
