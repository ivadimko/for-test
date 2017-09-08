document.addEventListener("DOMContentLoaded", (event) => {
//mobileNav();
rating();
});
window.onload = () => {

};
//Mobile menu function
function mobileNav() {
	var menu 			= document.querySelector('.header__menu'),
	mobilemenu 		= document.querySelector('.mobile-nav__menu'),
	JSinit 			= document.querySelector('.js_mobile-nav'),
	burger 			= document.querySelectorAll('.burger'),
	activeClass 	= 'open';
	function toggle() {
		JSinit.classList.toggle(activeClass);
	}
	if (mobilemenu.innerHTML == 0)
		mobilemenu.innerHTML = menu.innerHTML;

	/* for (var i = 0; i < burger.length; i++) {
			burger[i].addEventListener('click', toggle);
		} */
		for (var i = 0; i < burger.length; i++) {
			burger[i].onclick = toggle;
		};
	}

//Stars
function rating() {
	var stars 				= document.querySelectorAll('.stars'),
	starsRated		=	document.querySelectorAll('.stars--fill'),
	animatedStars	=	document.querySelectorAll('.animated'),
	animatedFill	=	document.querySelectorAll('.animatedFill'),
	rating 				= 0,
	fillWidth			= 0,
	rate = {
		name: ['0','0.1','0.2','0.3','0.4','0.5','0.6','0.7','0.8','0.9','1','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','2','2.1','2.2','2.3','2.4','2.5','2.6','2.7','2.8','2.9','3','3.1','3.2','3.3','3.4','3.5','3.6','3.7','3.8','3.9','4','4.1','4.2','4.3','4.4','4.5','4.6','4.7','4.8','4.9','5'],
		subname: ['0','4.00','6.00','7.00','8.00','9.30','10.00','11.00','12.00','14.00','18.00','24.40','26.40','27.40','28.40','29.50','30.40','31.40','32.40','34.40','38.40','44.80','46.80','47.80','48.80','50.00','50.80','51.80','52.80','54.80','58.80','65.20','67.20','68.20','69.20','70.40','71.20','72.20','73.20','75.20','79.20','85.60','87.60','88.60','89.60','90.80','91.60','92.60','93.60','95.60','100.00']
	};
	for (var i = 0; i < stars.length; i++) {
		rating = stars[i].getAttribute("data-ratingValue");
		var width = rate.name.indexOf(rating);
		fillWidth = rate.subname[width];
		starsRated[i].style.width = fillWidth + '%';

	}

	for (var i = 0; i < animatedStars.length; i++) {
		var myvivus = new Vivus(animatedStars[i], {
			type: 'oneByOne',
			duration: 200,
			animTimingFunction: Vivus.EASE
		});
	}
	$('.animatedFill').css('display', 'none');
	setTimeout( () => {
		$('.animatedFill').animate({width: 'toggle'}, 3000);
	},3500);


}
