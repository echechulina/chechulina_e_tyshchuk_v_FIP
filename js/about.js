(() =>{
	//"use strict";
	console.log("fired");

	let button = document.querySelector("#button");
	 burgerCon = document.querySelector("#burgerCon");

   openBox = document.querySelector('.lightbox');

	 clickVideo = document.querySelector('.advertContent span');
  closeVideo = document.querySelector('.close h2');


	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
	}

  function openLightbox() {
		console.log('function work');
		// openBox.classList.add('.lightboxTRAA-on');
		// openBox.classList.remove('lightboxTRAA');
		openBox.style.display = 'block';

	}

	// function for close the pop-up window

	function closeWindow() {
		openBox.style.display = 'none';
	}

	// for images hide and show




    clickVideo.addEventListener('click', openLightbox );
    closeVideo.addEventListener('click', closeWindow);


	button.addEventListener("click", hamburgerMenu);

})();
