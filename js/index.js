//var swiper = new Swiper('.swiper-container', {
	//centeredSlides: true,
	//autoplay: 2500,
	//autoplayDisableOnInteraction: false
//});


$(function(){

	/*
	 *page1 animation
	 */
	var mainTeen = new TimelineLite();
	var snowTeen = new TimelineMax({repeat:-1});
	var fireCrackerTeen = new TimelineMax({repeat:-1, delay:4, yoyo:true});

	mainTeen.from($('.page1 .brand'), 1, { top:"+=20px", opacity:"0", ease:Power0.easeIn })
		.from($('.page1 main :not(.bow)'), 0.5, {top:"+=20px", opacity:"0", ease:Power0.easeIn})
		.from($('.page1 main .bow'), 0.5, {width:0, opacity:"0", ease:Power0.easeIn}, 1.4)
		.staggerFrom($('.page1 footer img'), 1, {top:"+=20px", opacity:0, delay: 0.5}, 0.2)

	snowTeen.from($('.page1 main [class^=snow]'), 0.5, {rotation:360});
	//--公共的
	fireCrackerTeen.from($('.fire-cracker'), 1, {opacity:0,ease:Power0.easeIn}, 0.2);

	//TweenLite.set($(".page1"), {visibility:"visible"});


	 /*
	  *page2 animation
	  */
	var teen2 = new TimelineLite();
	teen2.from($('.page2 .desc'), 1, {opacity: "0", ease:Power0.easeIn, delay: 0.5})
		.from($('.page2 .detail'), 1, {opacity: "0", x:20, ease:Power0.easeIn}, 1)
		.from($('.page2 .brand'), 1, {opacity: "0", x:-20, ease:Power0.easeIn}, 1)
		.from($('.page2 .splitter'), 1, {opacity: "0",height:0, ease:Power0.easeIn}, 1)

	//TweenLite.set($(".page2"), {visibility:"visible"});

	/*
	 *page3 animation
	 */
	var teen3 = new TimelineLite();
	teen3.from($('.page3 .main-bg'), 1, {x:-20, ease:Power0.easeIn})
		.from($('.page3'), 0.2, {backgroundImage:"none", ease:Power0.easeIn}, 0.5)
		.from($('.page3 .desc'), 1, {width:0, ease:Power0.easeOut}, 0)
		.from($('.page3 .desc .zi1'), 0.5, {y:20, opacity: "0", ease:Power0.easeOut})
		.from($('.page3 .desc .zi2'), 0.5, {x:-20, opacity: "0", ease:Power0.easeOut})
		.from($('.page3 .desc .splitter'), 0.5, {width:0, opacity: "0", ease:Power0.easeOut})
		.from($('.page3 .desc .zi3'), 0.5, {opacity: "0", ease:Power0.easeOut})

	TweenLite.set($(".page3"), {visibility:"visible"});
})

