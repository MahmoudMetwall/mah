var sign = sessionStorage.getItem("signIn");

function checkerSignIn(link, file) {
  console.log("he");
  if (sign == "true") {
    window.location.href = link;
  } else if (file == 0) {
    window.location.href = "regSystem/registirationSystem.html";
  } else if (file == 1) {
    window.location.href = "../regSystem/registirationSystem.html";
  }
}