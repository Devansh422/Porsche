var scroller = document.querySelector('.scroller');
var scroller2 = document.querySelector('.scroller2');
var headline = document.querySelector('.headline');
var image1 = document.querySelector('.image1');
var image2 = document.querySelector('.image2');
var image3 = document.querySelector('.image3');
var infocontainer = document.querySelector('.infocontainer');
var imgcontainer = document.querySelector('.imgcontainer');
var imgcontainer2 = document.querySelector('.imgcontainer2');
var infocar = document.querySelector('.infocar');
var rpm = document.querySelector('.rpm');


function handleScroll() {
	var scrollProgress = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);

	scroller.style.marginLeft = '-' + ( scrollProgress * 7000) + 'px';
	scroller2.style.marginLeft = (-1600 + scrollProgress * 7000) + 'px';
	headline.style.marginTop = (80 + scrollProgress * 8000) + 'px';
	image2.style.marginTop = (scrollProgress * 1800) + 'px';
	image3.style.marginTop = (100 + scrollProgress * 500) + 'px';
	infocontainer.style.marginTop = (scrollProgress * 700) + 'px';
	infocar.style.marginTop = (100 + scrollProgress * 50) + 'px';
	imgcontainer.style.marginLeft = (-scrollProgress * 700) + 'px';
	imgcontainer2.style.marginLeft = (-600 + scrollProgress * 1000) + 'px';
	rpm.style.marginTop = (-400 + scrollProgress * 1000) + 'px';


}



window.addEventListener('scroll', handleScroll)
