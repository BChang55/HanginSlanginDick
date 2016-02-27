/* Displays/Hides Grid Navigation Window */
function showGridPopup(){
	if(document.getElementById("grid-menu-popup").style.display == "none"){
		document.getElementById("grid-menu-popup").style.display= "block";
		document.getElementById("navbar-button").className = "grid-menu-icon grid-button-active";
	}
	else {
		document.getElementById("grid-menu-popup").style.display = "none";
		document.getElementById("navbar-button").className = "grid-menu-icon grid-button-inactive";
	}
}