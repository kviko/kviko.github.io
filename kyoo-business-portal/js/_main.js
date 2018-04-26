$(".menu-toggle").on("click", function(e) {
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