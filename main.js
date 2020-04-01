         var container = document.querySelector(".full-container");
		 var add = document.querySelector(".fa-search");
		 var remove = document.querySelector(".fa-remove");
		 var search = document.querySelector(".search");
		 var service = document.querySelector(".service");
		 var corona = document.querySelector(".corona");
		 var row = document.getElementById("row");
		 var divLeft = document.getElementById("left");
		 // show  the search bar coatainer
		 add.addEventListener("click", function () {
		    container.style.height = "100%";
			search.style.opacity = 1;
		 });
		 //  hide the search bar container
		 var remove = document.querySelector(".fa-remove");
		 remove.addEventListener("click", function () {
		    container.style.height = 0;
			search.style.opacity = 0;
		 });
		 // show the service items
		 window.addEventListener("scroll", function () {
		    if (window.pageYOffset + window.innerHeight >= 1720) {
			   row.style.bottom = "-5px";
			   row.style.opacity = 1;
			   service.style.top = "25px";
			   service.style.opacity = 1;
			   corona.style.opacity = 1;
			}
		 });
		 // display the hidden contact form
		 window.addEventListener("scroll", function () {
		    if (window.pageYOffset + window.innerHeight >= 2800) {
			   divLeft.style.left = "50%";
			   divLeft.style.transform = "translate(-50%)";
			}
		 });