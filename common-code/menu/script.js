window.onload = function(){
	var btn = document.querySelectorAll('p'),
			nav = document.querySelectorAll('nav');

		document.onclick = function(event) {
			var el = event.target;
			if (el.className == "closed") {
				  btn[0].classList.remove('closed');
					nav[0].style.left = "0px";
					btn[0].classList.add('opened');
			}else{
				  btn[0].classList.remove('opened');
					nav[0].style.left = "-100px";
					btn[0].classList.add('closed');
			}
		};
}
