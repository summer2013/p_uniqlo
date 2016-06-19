//var swiper = new Swiper('.swiper-container', {
	//centeredSlides: true,
	//autoplay: 2500,
	//autoplayDisableOnInteraction: false
//});


$(function(){

	//page1 animation
	var mainTeen = new TimelineLite();
	var snowTeen = new TimelineMax({repeat:-1});
	var fireCrackerTeen = new TimelineMax({repeat:3, delay:4, yoyo:true});

	mainTeen.from($('.page1 .brand'), 1, { top:"+=20px", opacity:"0", ease:Power0.easeIn })
		.from($('.page1 main :not(.bow)'), 0.5, {top:"+=20px", opacity:"0", ease:Power0.easeIn})
		.from($('.page1 main .bow'), 0.5, {width:0, opacity:"0", ease:Power0.easeIn}, 1.4)
		.staggerFrom($('.page1 footer :not(.fire-cracker)'), 1, {top:"+=20px", opacity:0, delay: 0.5}, 0.2)

	snowTeen.from($('.page1 main [class^=snow]'), 0.5, {rotation:360});
	fireCrackerTeen.from($('.page1 footer .fire-cracker'), 1, {opacity:0,ease:Power0.easeIn}, 0.2);


	TweenLite.set($(".page1"), {visibility:"visible"});

})

