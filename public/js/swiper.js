// banner
var Bswiper = new Swiper("#banner", {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: "#banner-pag",
		clickable: true,
	},
	navigation: {
		nextEl: ".Bnext",
		prevEl: ".Bprev", 
	},
	
});
$("#banner").mouseenter(function () {
	Bswiper.autoplay.stop();
});
$("#banner").mouseleave(function () {
	Bswiper.autoplay.start();
});

// activity
var Aswiper = new Swiper("#activity", {
	loop: true,
	slidesPerView: 5,
	spaceBetween: 20,
	navigation: {
		nextEl: ".Anext",
		prevEl: ".Aprev", 
	},
	breakpoints: {
		0:{
			slidesPerView: 1.5,
			spaceBetween: 10,
		},
		414:{
			slidesPerView: 2.5,
			spaceBetween: 10,
		},
		576: {
			slidesPerView: 3.5,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 20,
		}
	}
});