$(".menu-toggle").on("click", function(e) {
	$(".menu-toggle").toggleClass("hide-mobile");
	$("#menu").toggleClass("expand");
	$(".reservation-item").toggleClass("list-compress");
	e.preventDefault();

	var menuItem = $(".menuToogle");
	if (menuItem.hasClass("hide",)) {
		menuItem.removeClass("hide");
		menuItem.addClass("show");
	} else {
		menuItem.removeClass("show");
		menuItem.addClass("hide");
	}
	// 
	var mobileMenu = $("#mobileMenu");
	if (mobileMenu.hasClass("hide",)) {
		mobileMenu.removeClass("hide");
		mobileMenu.addClass("show");

	} else {
		mobileMenu.removeClass("show");
		mobileMenu.addClass("hide");
	}
	//

});

$(".mobile-menu-toggle").on("click", function(e) {
	$(".menu-toggle").toggleClass("hide-mobile");
	$("#menu").toggleClass("expand");
	// var mainBox = $(".main-container");
	e.preventDefault();

	var menuItem = $(".menuToogle");
	if (menuItem.hasClass("hide",)) {
		menuItem.removeClass("hide");
		menuItem.addClass("show");
	} else {
		menuItem.removeClass("show");
		menuItem.addClass("hide");
	}
	// 
	var mobileMenu = $("#mobileMenu");
	if (mobileMenu.hasClass("hide",)) {
		mobileMenu.removeClass("hide");
		mobileMenu.addClass("show");

	} else {
		mobileMenu.removeClass("show");
		mobileMenu.addClass("hide");
	}

});

// List Compress when Menu is Expanded
$(document).ready(function(){
	var menuExpand = $("#menu");
	if (menuExpand.hasClass("expand")) {
		$(".reservation-item").addClass("list-compress");
	} 
});

var menuSettings = $("#menuSettings");
menuSettings.on("click", function(e) {
	
	if ($(".settings-container").hasClass("hide-settings",)) {
		$(".settings-container").removeClass("hide-settings");
		$(".settings-container").addClass("show-settings");
	} else if($(".settings-container").hasClass("show-settings")) {
		$(".settings-container").removeClass("show-settings");
		$(".settings-container").addClass("hide-settings");
	}

});

// 
// var adToggle = $(".ad-toggle");
// adToggle.on("click", function(e) {

// 	if (adToggle.hasClass("button-line-active")) {
// 		this.removeClass("button-line-active");
// 		this.addClass("button-line-inactive");
// 	} else if (adToggle.hasClass("button-line-inactive")) {
// 		this.removeClass("button-line-inactive");
// 		this.addClass("button-line-active");
// 	}

// });










