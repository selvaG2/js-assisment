function validate() {
  var name = document.getElementById("floatingInput").value;
  var dob = document.getElementById("floatingInput1").value;
  var mark = document.getElementById("floatingInput2").value;
  var address = document.getElementById("floatingTextarea2").value;
  var contact = document.getElementById("floatingInput3").value;
  var email = document.getElementById("floatingInput4").value;

  var maleradio = document.getElementById("flexRadioDefault1");
  var femaleradio = document.getElementById("flexRadioDefault2");
  var otherradio = document.getElementById("flexRadioDefault3");
  var gender = "";

  var dip = document.getElementById("flexRadioDefault4");
  var ug = document.getElementById("flexRadioDefault5");
  var pg = document.getElementById("flexRadioDefault6");
  var pf = document.getElementById("flexRadioDefault7");
  var qualification = "";

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checkedCount = 0;

  //qualification 
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  var values = "";

  if (checkedCount >= 2) {
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        values += " " + checkbox.value + "";
      }
    });
  }

  //Reg ex

  var nameRegex = /^[a-zA-Z\s]+$/;
  var markRegex = /^[0-9]{3}.[0-9]{2}$/;
  var addressRegex = /^[a-zA-Z0-9\s.,-]+$/;
  var contactRegex = /^[0-9]{10}$/;
  var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

  //grade 

 var e = document.getElementById("floatingSelect");
 var value = e.value;
 var text = e.options[e.selectedIndex].text;

  //age calculator

  var dobDate = new Date(dob);

  var todayDate = new Date();

  var age = todayDate.getFullYear() - dobDate.getFullYear();

  var month = todayDate.getMonth() - dobDate.getMonth();

  if (month < 0 || (month === 0 && todayDate.getDate() < dobDate.getDate()));
  age--;

   //radio button conditions for gender

   if (maleradio.checked) {
    gender = "male";
  } else if (femaleradio.checked) {
    gender = "female";
  } else if (otherradio.checked) {
    gender = "others";
  }

  //radio button condition for qualification

  if (dip.checked) {
    qualification = "Diploma";
  } else if (ug.checked) {
    qualification = "Under Graduate";
  } else if (pg.checked) {
    qualification = "Post Graduate";
  } else if (pf.checked) {
    qualification = "Professional";
  }

  // Conditions for above field
  if (!name || !dob || !mark || !address || !contact || !email) {
    alert("Fields can`t be empty.");
    return false;
  } else if (!nameRegex.test(name)) {
    alert("Name should contain only alphabets.");
    return false;
  } else if (!markRegex.test(mark)) {
    alert("Mark should be in required format (eg:- 999.99).");
    return false;
  } else if (!addressRegex.test(address)) {
    alert("Address should be in correct format.");
    return false;
  } else if (!contactRegex.test(contact)) {
    alert("Phone number should conain 10 numbers.");
    return false;
  } else if (!emailRegex.test(email)) {
    alert("Email should be in a correct format.");
    return false;
  } else if (checkedCount < 2) {
    alert("Atleast 2 languages should be choosen.");
    return false;
  }else{
    console.log(`Candidate name            : ${name}`);
    console.log(`Candidate Date-of-birth   : ${dob}`);
    console.log(`Candidate Gender          : ${gender}`);
    console.log(`Candidate Qualification   : ${qualification}`);
    console.log(`Candidate Mark            : ${mark}`);
    console.log(`Candidate grade           : ${text}`);
    console.log(`Candidate languages known : ${values}`);
    console.log(`Candidate address         : ${address}`);
    console.log(`Candidate number          : ${contact}`);
    console.log(`Candidate E-Mail          : ${email}`);
    console.log(`Candidate Age             : ${age}`);

  }

}
