const menu = document.querySelectorAll('li');
const anchor = document.querySelectorAll('li a');

function scrollingTo(position){
	window.scrollTo({
		top: position,
		behavior: 'smooth'
	})
}

menu.forEach(m => {
	m.addEventListener('click', function(e){
		const target = e.target;

		anchor.forEach(a => a.classList.remove('color-white'));

		target.classList.add('color-white');

		const screenWidth = window.innerWidth;

		if(target.classList.contains('sejarah')){
			if(screenWidth < 480){
				scrollingTo(430);
			}else {
				scrollingTo(450);	
			}
		}

		if(target.classList.contains('geografis')){
			if(screenWidth < 480){
				scrollingTo(1890);

			}else if(screenWidth <= 768){
				scrollingTo(1620)
			}else {
				scrollingTo(1614);	
			}
		}

		if(target.classList.contains('budaya')){
			if(screenWidth < 480){
				scrollingTo(2870);
			}else if(screenWidth <= 768){
				scrollingTo(2630)
			}else {
				scrollingTo(2530);	
			}
		}

		if(target.classList.contains('wisata')) {
			if(screenWidth < 480){
				scrollingTo(3550);
			}else if(screenWidth <= 768){
				scrollingTo(3470)
			}else {
				scrollingTo(3320);	
			}
		}

		e.preventDefault();
	})
})


const navbar = document.querySelector('nav');

window.addEventListener('scroll', function(){
	console.log(window.pageYOffset);

	if(window.pageYOffset > 460){
		navbar.classList.add('shadow');
	}else {
		navbar.classList.remove('shadow');
	}
})