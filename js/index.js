

$(function(){

	/*播放场景动画*/
	function anim(n){
		switch(n)
		{
			case 1:
			case 7:
			console.log('in here!');
			teen1.play();
			break;

			case 2:
			teen2.play();
			  break;

			case 3:
			teen3.play();
			break;

			case 4:
			teen4.play();
			break;

			case 5:
			teen5.play();
			break;

			case 6:
			teen6.play();
			break;
		}
	}

	//当动画较复杂时，当前动画到最后--并清理场景动画--以释放资源
	function clear_timeline(n){
		switch(n)
		{
			case 1:
			case 7:
			teen1.progress(1).pause();
			break;

			case 2:
			teen2.progress(1).pause();
			break;

			case 3:
			teen3.progress(1).pause();
			break;

			case 4:
			teen4.progress(1).pause();
			break;

			case 5:
			teen5.progress(1).pause();
			break;

			case 6:
			teen6.progress(1).pause();
			break;


		}
	}

	/*
	 *page1 animation
	 */
	var teen1 = new TimelineMax({paused:true});
	var snowTeen = new TimelineMax({repeat:-1});
	var fireCrackerTeen = new TimelineMax({repeat:2, delay:3, yoyo:true});

	teen1.from($('.page1 .brand'), 1, { top:"+=20px", opacity:"0", ease:Power0.easeIn })
		.from($('.page1 main :not(.bow)'), 0.5, {top:"+=20px", opacity:"0", ease:Power0.easeIn})
		.from($('.page1 main .bow'), 0.2, {width:0, opacity:"0", ease:Power0.easeIn}, 1.2)
		.staggerFrom($('.page1 footer img'), 0.8, {top:"+=20px", opacity:0, ease:Power0.easeIn, delay:0.5}, 0.1)

	snowTeen.from($('.page1 main [class^=snow]'), 0.5, {rotation:360});
	//--公共的
	fireCrackerTeen.from($('.fire-cracker'), 1, {opacity:0,ease:Power0.easeIn}, 0.2);

	TweenLite.set($(".page1"), {visibility:"visible"});


	 /*
	  *page2 animation
	  */
	var teen2 = new TimelineMax({paused:true});
	teen2.from($('.page2 .desc'), 1, {opacity: "0", ease:Power0.easeIn, delay: 0.5})
		.from($('.page2 .detail'), 1, {opacity: "0", x:20, ease:Power0.easeIn}, 1)
		.from($('.page2 .brand'), 1, {opacity: "0", x:-20, ease:Power0.easeIn}, 1)
		.from($('.page2 .splitter'), 1, {opacity: "0",height:0, ease:Power0.easeIn}, 1)

	TweenLite.set($(".page2"), {visibility:"visible"});

	/*
	 *page3 animation
	 */
	var teen3 = new TimelineMax({paused:true});
	teen3.from($('.page3 .main-bg'), 1, {x:-20, ease:Power0.easeIn})
		.from($('.page3'), 0.2, {backgroundImage:"none", ease:Power0.easeIn}, 0.5)
		.from($('.page3 .desc'), 1, {width:0, ease:Power0.easeOut}, 0)
		.from($('.page3 .desc .zi1'), 0.5, {y:20, opacity: "0", ease:Power0.easeOut})
		.from($('.page3 .desc .zi2'), 0.5, {x:-20, opacity: "0", ease:Power0.easeOut})
		.from($('.page3 .desc .splitter'), 0.5, {width:0, opacity: "0", ease:Power0.easeOut})
		.from($('.page3 .desc .zi3'), 0.5, {opacity: "0", ease:Power0.easeOut})

	TweenLite.set($(".page3"), {visibility:"visible"});

	/*
	 *page4 animation
	 */
	var teen4 = new TimelineMax({paused:true});
	teen4.from($('.page4 .main-bg'), 1, {opacity: "0", ease:Power0.easeIn, delay:0.5})
		.from($('.page4 .desc .splitter1'), 0.5, {width: 0, ease:Power0.easeIn}, 1.5)
		.from($('.page4 .desc .s-red-div'), 0.5, {height:0, ease:Power0.easeOut}, 1.5)
		.from($('.page4 .desc .zi1'), 0.5, {opacity: "0", ease:Power0.easeOut})
		.from($('.page4 .desc .splitter2'), 0.5, {width:0, ease:Power0.easeOut})
		.from($('.page4 .desc .zi2'), 0.5, {opacity: "0", ease:Power0.easeOut})
		.from($('.page4 .desc .zi3'), 0.5, {y: 20, opacity: "0", ease:Power0.easeOut})

	TweenLite.set($(".page4"), {visibility:"visible"});

	/*
	 *page5 animation
	 */
	var teen5 = new TimelineMax({paused:true});
	//var teen5 = new TimelineMax();
	//teen5.from($('.page5 .page5'), 0.2, {opacity:"0"})
	teen5.from($('.page5 .desc'), 1, {opacity: "0", ease:Power0.easeIn, delay:0.5})
		.from($('.page5 .desc .splitter1'), 0.5, {width: 0, ease:Power0.easeIn}, 1.5)
		.from($('.page5 .desc .s-red-div'), 0.5, {height:0, ease:Power0.easeOut}, 1.5)
		.from($('.page5 .desc .zi1'), 0.5, {width: "0", ease:Power0.easeOut})
		.from($('.page5 .desc .splitter2'), 0.5, {width:0, ease:Power0.easeOut})
		.from($('.page5 .desc .zi2'), 0.5, {opacity: "0", ease:Power0.easeOut})
		.from($('.page5 .main-top-bg'), 0.5, {height: 130, opacity: "0", ease:Power0.easeOut})
		.from($('.page5 .main-bottom-bg'), 0.5, {opacity: "0", ease:Power0.easeOut})
		.from($('.page5 .person-man'), 0.5, {x: -30, opacity:"0", ease:Power0.easeOut})
		.from($('.page5 .main-top-bg .txt1'), 0.5, {h: 20, opacity:"0" ,ease:Power0.easeOut})
		.from($('.page5 .person-kun'), 0.5, {h: 20, opacity:"0", ease:Power0.easeOut})
		.from($('.page5 .person-nini'), 0.5, {h: 20, opacity:"0", ease:Power0.easeOut})
		.from($('.page5 .main-bottom-bg .brand'), 0.5, {opacity:"0", ease:Power0.easeOut})
		.from($('.page5 .main-top-bg .txt1'), 0.5, {h: 20, opacity:"0", ease:Power0.easeOut})

	TweenLite.set($(".page5"), {visibility:"visible"});


	/*
	 *page6 animation
	 */
	var teen6 = new TimelineMax({paused:true});
	teen6.from($('.page6 .part-img5'), 0.5, {opacity: "0",scale:"-0.5", ease: Elastic.easeOut.config(1, 0.5)})
		.from($('.page6 .part-img4'), 0.5, {opacity: 0, scale:"-0.5", ease: Elastic.easeOut.config(1, 0.5)}, 0.5)
		.from($('.page6 .part-img7'), 0.5, {opacity: 0, scale:"-0.5", ease: Elastic.easeOut.config(1, 0.5)}, 0.5)
		.from($('.page6 .part-img6'), 0.5, {opacity: 0, scale:"-0.5", ease: Elastic.easeOut.config(1, 0.5)}, 0.8 )
		.from($('.page6 .part-img3'), 0.5, {opacity: 0, scale:"-0.5", ease: Elastic.easeOut.config(1, 0.5)}, 0.8)
		.from($('.page6 .part-img2'), 0.5, {opacity: 0, scale:"-0.5", ease: Elastic.easeOut.config(1, 0.5)}, 1.1)
		.from($('.page6 .part-img1'), 0.5, {opacity: 0, scale:"-0.5", ease: Elastic.easeOut.config(1, 0.5)}, 1.3)
		.from($('.page6 .desc .splitter1'), 0.2, {width: 0, ease:Power0.easeIn})
		.from($('.page6 .desc .s-red-div'), 0.2, {height:0, ease:Power0.easeOut})
		.from($('.page6 .desc .zi1'), 0.2, {width: "0", ease:Power0.easeOut})
		.from($('.page6 .desc .splitter2'), 0.2, {width: "0", ease:Power0.easeOut})
		.from($('.page6 .desc .zi2'), 0.2, {opacity: "0", ease:Power0.easeOut})
		.from($('.page6 .desc .tips'), 0.2, {y:20, opacity: "0", ease:Power0.easeOut})

	TweenLite.set($(".page6"), {visibility:"visible"});


	var swiper = new Swiper('.swiper-container', {
		centeredSlides: true,
		autoplay: 6500,
		direction : 'vertical',
		speed: 600,
		loop: true,
		autoplayDisableOnInteraction: false,
		onSlideChangeStart:function (swiper) {
			anim(swiper.activeIndex);  	//载入完成，即播放当前页动画
			console.log('start->',swiper.activeIndex);
		},
		onSlideChangeEnd:function (swiper) {
			console.log('end->',swiper.activeIndex);
			var pre = swiper.previousIndex;
			var cur = swiper.activeIndex;

			clear_timeline(pre);	//将前页动画到末尾并清理
			anim(cur);	//开始本页动画
		},
	});

})

