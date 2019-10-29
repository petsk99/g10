var hidden = false;
document.getElementById("tilbake").style.visibility = "hidden";
document.getElementById("srtekst").style.visibility = "hidden";
document.getElementById("uttekst").style.visibility = "hidden";
document.getElementById("htekst").style.visibility = "hidden";

function spillet() {
  hidden = !hidden;
  if (hidden) {
    document.getElementById("spilleregler").style.visibility = "hidden";
    document.getElementById("startspillet").style.visibility = "hidden";
    document.getElementById("historie").style.visibility = "hidden";
    document.getElementById("utviklerne").style.visibility = "hidden";
    document.getElementById("figur").style.visibility = "hidden";
    document.getElementById("tittel").style.visibility = "hidden";
    document.getElementById("tilbake").style.visibility = "visible";
  }
}

function spilleregler() {
  hidden = !hidden;
  if (hidden) {
    document.getElementById("spilleregler").style.visibility = "hidden";
    document.getElementById("startspillet").style.visibility = "hidden";
    document.getElementById("historie").style.visibility = "hidden";
    document.getElementById("utviklerne").style.visibility = "hidden";
    document.getElementById("figur").style.visibility = "hidden";
    document.getElementById("tittel").style.visibility = "hidden";
    document.getElementById("tilbake").style.visibility = "visible";
    document.getElementById("srtekst").style.visibility = "visible";
  }
}

function historie() {
  hidden = !hidden;
  if (hidden) {
    document.getElementById("spilleregler").style.visibility = "hidden";
    document.getElementById("startspillet").style.visibility = "hidden";
    document.getElementById("historie").style.visibility = "hidden";
    document.getElementById("utviklerne").style.visibility = "hidden";
    document.getElementById("figur").style.visibility = "hidden";
    document.getElementById("tittel").style.visibility = "hidden";
    document.getElementById("tilbake").style.visibility = "visible";
    document.getElementById("htekst").style.visibility = "visible";
  }
}

function utviklerne() {
  hidden = !hidden;
  if (hidden) {
    document.getElementById("spilleregler").style.visibility = "hidden";
    document.getElementById("startspillet").style.visibility = "hidden";
    document.getElementById("historie").style.visibility = "hidden";
    document.getElementById("utviklerne").style.visibility = "hidden";
    document.getElementById("figur").style.visibility = "hidden";
    document.getElementById("tittel").style.visibility = "hidden";
    document.getElementById("tilbake").style.visibility = "visible";
    document.getElementById("uttekst").style.visibility = "visible";
  }
}

function tilbake() {
  hidden = true;
  if (hidden) {
    document.getElementById("spilleregler").style.visibility = "visible";
    document.getElementById("startspillet").style.visibility = "visible";
    document.getElementById("historie").style.visibility = "visible";
    document.getElementById("utviklerne").style.visibility = "visible";
    document.getElementById("figur").style.visibility = "visible";
    document.getElementById("tittel").style.visibility = "visible";
    document.getElementById("tilbake").style.visibility = "hidden";
    document.getElementById("srtekst").style.visibility = "hidden";
    document.getElementById("uttekst").style.visibility = "hidden";
    document.getElementById("htekst").style.visibility = "hidden";
  }
}
