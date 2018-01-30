$(function() {
	$('.am-slider').flexslider({
		playAfterPaused: 0,
		animationLoop: true,
		pauseOnAction: true,
		slideshow: true,
		pauseOnHover: true,
		slideshowSpeed: 3000, // Integer: ms 滚动间隔时间
		controlNav: false,
		directionNav: false,
		before: function(slider) {
			if (slider._pausedTimer) {
				window.clearTimeout(slider._pausedTimer);
				slider._pausedTimer = null;
			}
		},
		after: function(slider) {
			var pauseTime = slider.vars.playAfterPaused;
			if (pauseTime && !isNaN(pauseTime) && !slider.playing) {
				if (!slider.manualPause && !slider.manualPlay && !slider.stopped) {
					slider._pausedTimer = window.setTimeout(function() {
						slider.play();
					}, pauseTime);
				}
			}
		}
	});
	$("#li-img").click(function() {
		$("#icons").slideToggle(200);
	});
});