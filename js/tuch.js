var slider = {

	el: {
		slider: $(".tab-body"),
		holder: $(".tabs-section"),
		imgSlide: $(".tab-body")
	},

	slideWidth: $('.tabs-section').width(),
	touchstartx: undefined,
	touchmovex: undefined,
	movex: undefined,
	index: 0,
	longTouch: undefined,

	init: function () {
		this.bindUIEvents();
	},

	bindUIEvents: function () {

		this.el.holder.on("touchstart", function (event) {
			slider.start(event);
		});

		this.el.holder.on("touchmove", function (event) {
			slider.move(event);
		});

		this.el.holder.on("touchend", function (event) {
			slider.end(event);
		});

	},

	start: function (event) {
		// Test for flick.
		this.longTouch = false;
		setTimeout(function () {
			window.slider.longTouch = true;
		}, 250);

		// Get the original touch position.
		this.touchstartx = event.originalEvent.touches[0].pageX;

	},

	move: function (event) {
		// Continuously return touch position.
		this.touchmovex = event.originalEvent.touches[0].pageX;
		// Calculate distance to translate holder.
		this.movex = this.index * this.slideWidth + (this.touchstartx - this.touchmovex);
	},

	end: function (event) {
		// Calculate the distance swiped.
		var absMove = Math.abs(this.index * this.slideWidth - this.movex);
		if(absMove > 150) {
			if($(".tabs").find(".active").index() != 4) {
				var idx = $(".tabs").find(".active").index()+1;
				$(".tabs").find("span").eq(idx).click();
			}
			else {
				$(".tabs").find("span").eq(0).click();
			}
		}
	}
};

slider.init();
