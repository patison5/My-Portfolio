window.onload = function () {
	var bodyWraper = document.getElementsByClassName('body-wraper')[0];
	var preloader  = document.getElementById('preloader');

	preloader.style.opacity = 0;

	setTimeout(function () {
		preloader.style.display = "none";
		bodyWraper.style.display = "block";
	}, 300);
}