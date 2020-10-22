//boton de no saber la contra xD
var nose = document.getElementById("contra");
nose.addEventListener("click", function () {
  window.location.replace(
    "https://api.whatsapp.com/send?phone=50360739651&text=Mi%20querido%20y%20guapo%20novio,%20pues%20f%C3%ADjate%20que%20no%20se%20cual%20es%20la%20contra,%20me%20podrias%20decir%20porfi,%20te%20amo%20y%20te%20dare%20pinguinos%20merinela%20cuando%20te%20vea,%20tu%20esposa"
  );
});
//comprovacion
var count_click = 0;
var inciar = document.getElementById("entrar");
inciar.addEventListener("click", function () {
  const nombre = "stefany";
  const paswword = "situeresfelizyolosoy";

  var nom = document.getElementById("exampleInputEmail1").value;
  var contra = document.getElementById("exampleInputPassword1").value;

  if (nom == nombre && contra == paswword) {
    window.location.href = "carta.html";
  } else {
    var input = document.querySelectorAll("input");
    input.forEach((input) => (input.value = ""));
    count_click += 1;
    var gronw = document.getElementById("grongpass");
    gronw.innerHTML = "ño, esa no es ";
    console.log(count_click);
  }
  switch (count_click) {
    case 2:
      gronw.innerHTML = "ya me va a decir, mal caes XD";
      break;
    case 3:
      gronw.innerHTML = "es algo que siempre te digo";
      break;
    case 5:
      gronw.innerHTML = "mi mayor deseo hacia ti";
      break;
    case 7:
      gronw.innerHTML = "ay amor xD";
      break;
  }
});
