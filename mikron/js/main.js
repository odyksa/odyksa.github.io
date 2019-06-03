// show-hide navigation
$(document).ready(function() {
	$('.hamburger, .nav-hidden .nav__link').click(function() {
		if ( $('.nav-hidden').is(':hidden') ) {
   			$('.nav-hidden').show();
   		} else {
   			$('.nav-hidden').hide();
    	}
	});
});
// /show-hide navigation

// slider
var slideIndex = 1;

showSlide(slideIndex);

function showSlide(n) {
    var slides = document.getElementsByClassName("slide"),
	    dots =  document.getElementsByClassName("dot");

	if (n > slides.length) {
	    slideIndex = 1;
	}

	if (n < 1) {
	    slideIndex = slides.length;
	}

	for (var i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";
	}
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

function slidePlus(n) {
    showSlide(slideIndex += n);
}

function currrentSlide(n) {
    showSlide(slideIndex = n);   
}
// /slider

// tabs
var tabs = document.getElementsByClassName("tab-item"),
    tabsContent = document.getElementsByClassName("tab-content");

    hideTabsContent(1);

function hideTabsContent(n) {
    for (var i = n; i < tabsContent.length; i++) {
        tabsContent[i].classList.remove("show");
        tabsContent[i].classList.add("hide");
    }
}

document.getElementById("tabs").onclick = function(e) {
    var target = e.target;

    if (target.className == "tab-item") {
        for (var i = 0; i < tabs.length; i++) {
            if (target == tabs[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(n) {
    if (tabsContent[n].classList.contains("hide")) {
        hideTabsContent(0);
        tabsContent[n].classList.remove("hide");
        tabsContent[n].classList.add("show");
    }
}
// end tabs
   	
	


