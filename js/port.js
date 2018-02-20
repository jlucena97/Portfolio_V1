$(document).ready(function(){

	$("#mn").on("click",function(){
		if($(this).hasClass("cerrado")){
			$(this).removeClass("cerrado");
			$(this).addClass("abierto");
			$("nav").css("opacity",1);
			$(".top").css("background", "rgba(255,255,255,0.7)");
		}else{
			$(this).removeClass("abierto");
			$(this).addClass("cerrado");
			$("nav").css("opacity",0);
			$(".top").css("background", "rgba(255,255,255,0.4)");
			$("i").css("background","black");
		}
	});

	$(".enter, .exit").on("click",function()
	{
		doc = document.documentElement;

		if($(this).attr("class") === "enter")
		{
			$(this).removeClass("enter").addClass("exit");
			doc.webkitRequestFullScreen();
		}else {
			$(this).removeClass("exit").addClass("enter");
			document.webkitCancelFullScreen();
		}

	});

	//Fullpages
	$("#fullpage").fullpage({
		//Navigation
		sectionsColor: [],
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage','thirdPage','fourthPage',"fifthPage"],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 750,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: true,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: true,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: true,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 25,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: false,
		verticalCentered: true,
		paddingTop: '3rem',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: true,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

	//Skills peity
	$("#skills span").peity("donut");
	$("#skills div").on("mouseover", function(){
		//$(this).addClass("resaltado");
		$("#skills div").css("filter","blur(5px)");
		$(this).css("filter","blur(0px)");
	});

	$("#skills div").on("mouseout", function(){
		$(this).removeClass("resaltado");
		$("#skills div").css("filter","blur(0px)");
	});
});	
