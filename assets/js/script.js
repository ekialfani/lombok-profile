const menu = document.querySelectorAll('li');
const anchor = document.querySelectorAll('li a');

menu.forEach(m => {
	m.addEventListener('click', function(e){
		anchor.forEach(a => a.classList.remove('color-white'));

		e.target.classList.add('color-white');

		if(e.target.textContent === "Sejarah"){
			window.scrollTo({
				top: 500,
				behavior: 'smooth'
			})
			
		}else if(e.target.textContent === "Geografis"){
			window.scrollBy({
				top: 1660 - window.pageYOffset,
				behavior: 'smooth'
			})
			
		}else if(e.target.textContent === "Adat & Budaya"){
			window.scrollBy({
				top: 2580 - window.pageYOffset,
				behavior: 'smooth'
			})

		}else {
			window.scrollBy({
				top: 3380 - window.pageYOffset,
				behavior: 'smooth'
			})
		}

		e.preventDefault();
	})
})


const navbar = document.querySelector('nav');

window.addEventListener('scroll', function(){
	if(window.pageYOffset > 460){
		navbar.classList.add('shadow');
	}else {
		navbar.classList.remove('shadow');
	}
})