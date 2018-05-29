var indicatorW = 0, indicatorL = 0;
var curhash = window.location.hash.substr(1),curhash2;
var wst = 0;

$(document).ready(function(){
	wst = $(window).scrollTop();
	if(wst > 96){
		$("header").addClass("shadowed");
	}else{
		$("header").removeClass("shadowed");
	}

	// get started button
	$(".get-start").click(function(){
		$("#modal").stop().fadeIn(500);
	});

	$(".got-it").click(function(){
		$("#modal").stop().fadeOut(500);
	});
	
	if($(window).width() > 1024){
		$("body,html").css({"overflow-y":"hidden"});
		// init
		if(curhash != null && curhash != ""){
			$("header ul.main-nav li.common-link a").each(function(){
				$(this).removeClass("active");
			});
			$("body,html").stop().animate({scrollTop:$("#"+curhash).offset().top},500);
			$("header ul.main-nav li.common-link a[href='#"+curhash+"']").addClass("active");
			$("#"+curhash).removeClass("pause-ani");
			$("#"+curhash).addClass("start-ani");
		}

		setTimeout(function(){
			$("body,html").css({"overflow-y":"auto"});

			if($(".main-nav a.active").length > 0){
				indicatorW = $(".main-nav a.active").innerWidth() + 40;
				indicatorL = $(".main-nav a.active").offset().left - 20;
			}else{
				indicatorW = 0;
				indicatorL = 0;
			}


			$("header .content .nav-indicator").css({
				width:indicatorW,
				left:indicatorL,
			}).stop().animate({"opacity":1},300);


			$(".main-nav li.common-link a,.main-nav li a.button").each(function(){
				$(this).click(function(e){
					e.preventDefault();

					if($(this).parent().hasClass("common-link")){
						//navi indicator
						$(".main-nav a.active").removeClass("active");
						$(this).addClass("active");

						indicatorW = $(".main-nav a.active").innerWidth() + 40;
						indicatorL = $(".main-nav a.active").offset().left - 20;

						$("header .content .nav-indicator").stop().animate({
							left:indicatorL,
							width:indicatorW
						},300);
					}
					

					//scroll ani
					curhash = $(this).attr("href");
					$("html,body").stop().animate({scrollTop:$(curhash).offset().top},500,function(){
						window.location.hash = curhash;
					});
				});
			});

			// learn more
			$("a.learn-more").click(function(){
				$("html,body").stop().animate({scrollTop:$("#about").offset().top},500,function(){
					window.location.hash = "#about";
				})
			});

			//parallax
			$(".about-layer-0").paroller({ factor: '-0.1', type: 'foreground', direction: 'vertical' });
			$(".about-layer-1").paroller({ factor: '0.1', type: 'foreground', direction: 'vertical' });
			$(".about-layer-2").paroller({ factor: '0.5', type: 'foreground', direction: 'vertical' });
			$(".about-layer-3").paroller({ factor: '0.8', type: 'foreground', direction: 'vertical' });
			$(".about-layer-4").paroller({ factor: '-0.1', type: 'foreground', direction: 'vertical' });

			// $(".features-button").each(function(e){
			// 	$(this).click(function(){
			// 		$(".features-button,.feature-display").removeClass("active");
			// 		$(this).addClass("active");
			// 		$(".feature-display.feature-"+e).addClass("active");

			// 	});
			// });
		},500);
	}else{
		$("header .content .menu-btn").click(function(){
			if($(this).hasClass("open")){
				$(this).removeClass("open");
				$("header").removeClass("show-menu");
			}else{
				$(this).addClass("open")
				$("header").addClass("show-menu")
			}
		});

		$(".main-nav li.common-link a").each(function(){
			$(this).click(function(){
				$(".main-nav li.common-link a").removeClass("active");
				$(this).addClass("active");
			});
		});

	}

	$(".features-button").each(function(e){
		$(this).click(function(){
			$(".features-button,.feature-display,.feature-display-tablet").removeClass("active");
			$(this).addClass("active");
			$(".feature-display.feature-"+e+",.feature-display-tablet.feature-"+e).addClass("active");

		});
	});

	// clients

	$(".client-container .client-hover").each(function(){
		$(this).html("<img src='"+$(this).attr("data-img-bw")+"'/>");
		$(this).mouseover(function(){
			$(this).find("img").attr("src",$(this).attr("data-img-color"));
		}).mouseout(function(){
			$(this).find("img").attr("src",$(this).attr("data-img-bw"));
		});
	});

	// sliders
	if($(window).width() > 480){
		$(".profile-container .content").slick({
			autoplay:true,
			autoplaySpeed: 5000,
			dots:true
		});
	}else{
		$(".profile-container .content").slick({
			arrows:false,
			dots:true
		});
	}


	$(".mobile-feature").slick({
		autoplay:false,
		arrows:false,
		dots:true
	});

	$(".client-container").slick({
		dots:false,
	});


});


$(document).scroll(function(){
	wst = $(window).scrollTop();
	if(wst > 96){
		$("header").addClass("shadowed");
	}else{
		$("header").removeClass("shadowed");
	}

	if($(window).width() > 1024){
		//ani trigger
		$("section[data-sect-type]").each(function(){
			if(wst >= ($(this).offset().top - 200) && wst < ($("#how-it-works2").offset().top + $("#how-it-works2").height())){
				curhash2 = $(this).attr("id");
				$("#"+curhash2).removeClass("pause-ani");
				$("#"+curhash2).addClass("start-ani");
				if($("a[href='#"+curhash2+"']").length > 0 ){
					$(".main-nav a.active").removeClass("active");
					$("a[href='#"+curhash2+"']").addClass("active");

					indicatorW = $(".main-nav a.active").innerWidth() + 40;
					indicatorL = $(".main-nav a.active").offset().left - 20;

					$("header .content .nav-indicator").stop().animate({
						left:indicatorL,
						width:indicatorW
					},300,function(){
						if(history.pushState) {
							history.pushState(null, null, "#"+curhash2);
						}
						else {
							location.hash = "#"+curhash2;
						}
					});
				}
			}if(wst >= $("#features").offset().top && wst <= ($("#how-it-works").offset().top) - ($("#how-it-works").height())){
				var posD = ($(window).scrollTop() - $("#features").offset().top);
				$(".feature-device-container").css({top:posD});
			}else if(wst < $("#features").offset().top){
				$(".feature-device-container").css({top:0});
			}
		});
	}
});	
			