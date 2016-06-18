//var swiper = new Swiper('.swiper-container', {
	//centeredSlides: true,
	//autoplay: 2500,
	//autoplayDisableOnInteraction: false
//});


$(function(){

	//page1 animation
	var tl = new TimelineLite();
	tl.from($('.page1 .brand'),
				   1,
				   { top:"+=20px",
					   opacity:"0",
					   ease:Power0.easeIn })
	.from($('.page1 main [class^=snow]'),
				0.5,
				{rotation:360,
					repeat:-1})
    .from($('.page1 main :not(.bow)'),
				   0.5,
				   {top:"+=20px",
					   opacity:"0",
					   ease:Power0.easeIn})
	.from($('.page1 main .bow'),
				   0.5,
				   {width:0,
					   opacity:"0",
					   ease:Power0.easeIn})
	.staggerFrom($('.page1 footer :not(.fire-cracker)'),
						 1,
						 {top:"+=20px",
							 opacity:0},
							 0.25)
	.from($('.page1 footer .fire-cracker'),
				0.5,
			    {opacity:0,
					repeat:3})


})

