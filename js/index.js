//var swiper = new Swiper('.swiper-container', {
	//centeredSlides: true,
	//autoplay: 2500,
	//autoplayDisableOnInteraction: false
//});


$(function(){

	//page1 animation
	var tl = new TimelineLite();

	function getBrandAnimation() {
		var brandTimeline = new TimelineLite();
		brandTimeline.from($('.page1 .brand'), 1, { top:"+=20px", opacity:"0", ease:Power0.easeIn });
		return brandTimeline;

	}

	function getSnowAnimation() {
		var snowTimeline = new TimelineMax({repeat:-1});
		snowTimeline.from($('.page1 main [class^=snow]'), 0.5, {rotation:360});
		return snowTimeline;
	}

	function getMainAnimation() {
		var mainTimeline = new TimelineLite();
		mainTimeline .from($('.page1 main :not(.bow)'), 0.5, {top:"+=20px", opacity:"0", ease:Power0.easeIn})
					 .from($('.page1 main .bow'), 0.5, {width:0, opacity:"0", ease:Power0.easeIn});
		return mainTimeline;
	}

	function getFooterAnimation() {
		var footerTimeline = new TimelineLite();
		footerTimeline.staggerFrom($('.page1 footer :not(.fire-cracker)'), 1, {top:"+=20px", opacity:0}, 0.25);
		return footerTimeline;
	}

	function getFireCrackerAnimation() {
		var fcTimeline = new TimelineMax({repeat:3});
		fcTimeline.from($('.page1 footer .fire-cracker'), 0.5, {opacity:0});
		return fcTimeline;
	}

	tl.add(getBrandAnimation(), "brand")
	  //.add(getSnowAnimation(), "snow")
	  .add(getMainAnimation, "main")
	  .add(getFooterAnimation, "footer")
	  .add(getFireCrackerAnimation, "fire")


})

