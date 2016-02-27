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

/* Set Panel on Righthand Side */
function setSidePanel(element){
	// Hide All Panels
	var panels = document.getElementsByClassName("overlay");
	for(i = 0 ; i < panels.length ; i++){
		panels[i].style.display = "none";
	}
	// Show selected panel
	element.style.display = "block";
}