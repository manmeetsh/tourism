function removeall() {
  $(".cir_border").css("border", "none");
}
$("#sec").on("click", function () {
  removeall();
  $("#sec").css("border", "2px solid whitesmoke");
  $("#sec").css("border-radius", "20px");
});
$("#pri").on("click", function () {
  removeall();
  $("#pri").css("border", "2px solid whitesmoke");
  $("#pri").css("border-radius", "20px");
});
$("#tri").on("click", function () {
  removeall();
  $("#tri").css("border", "2px solid whitesmoke");
  $("#tri").css("border-radius", "20px");
});
$("#quad").on("click", function () {
  removeall();
  $("#quad").css("border", "2px solid whitesmoke");
  $("#quad").css("border-radius", "20px");
});
$("#quint").on("click", function () {
  removeall();
  $("#quint").css("border", "2px solid whitesmoke");
  $("#quint").css("border-radius", "20px");
});
$("#hex").on("click", function () {
  removeall();
  $("#hex").css("border", "2px solid whitesmoke");
  $("#hex").css("border-radius", "20px");
});

// Light/Dark toggle
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
})
// scroll button

let mybutton = document.getElementById("upbtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var myForm = document.getElementById('myForm');

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // retrieve values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var country = document.getElementById('country').value;
  var remarks = document.getElementById('remarks').value;
  // validate username and password fields
  if (name == '' || email == '' || country == '' || remarks == '') {
    alert("Please Fill all required fields");
  }
  else {


    const data = {
      name: name,
      email: email,
      country: country,
      remarks: remarks
    };


    fetch('http://127.0.0.1:8000/submit_details', {
      method: 'POST', // or 'PUT'
      mode: 'no-cors',
      referrerPolicy: 'no-referrer',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    alert("Form submission successful");
  }

})