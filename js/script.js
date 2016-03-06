/* Executes when document is loaded */
$(document).ready(function(){
	// Load Tooptips
    $('[data-toggle="tooltip"]').tooltip();   
	setSidePanel(document.getElementById("welcome-block"));
});

/* Displays/Hides Grid Navigation Window */
function showGridPopup(){
	if(document.getElementById("grid-menu-popup").style.display == "none"){
		document.getElementById("grid-menu-popup").style.display= "block";
		document.getElementById("grid-navbar-button").className = "top-nav-button grid-button-active";
	}
	else {
		document.getElementById("grid-menu-popup").style.display = "none";
		document.getElementById("grid-navbar-button").className = "top-nav-button grid-button-inactive";
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

function setSidePanelDisplay(){
	if(document.getElementById("overlay-container").style.display == "none"){
		document.getElementById("overlay-container").style.display = "block";
		document.getElementById("collapse-panel-button").style.background = "url(images/arrow-right.png)";
		document.getElementById("collapse-panel-button").style.right = "31%";
		$(document.getElementById("collapse-panel-button")).tooltip('hide').attr('data-original-title', 'Collapse Side Panel').tooltip('show');
	}
	else {
		document.getElementById("overlay-container").style.display = "none";
		document.getElementById("collapse-panel-button").style.background = "url(images/arrow-left.png)";
		document.getElementById("collapse-panel-button").style.right = "0%";
		$(document.getElementById("collapse-panel-button")).tooltip('hide').attr('data-original-title', 'Show Side Panel').tooltip('show');
		  
		  //          .tooltip('fixTitle')
		//document.getElementById("collapse-panel-button").data-original-title = "Show Side Panel";
	}
}