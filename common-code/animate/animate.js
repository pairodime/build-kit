window.onload = function(){
	function animate(element, speed, time, maxDistance){
		var elem = document.querySelector(element);

		movement = 0;

		var animate = setInterval(function(){
			//if element is less than max distance
			if(elem.offsetLeft < maxDistance){

				//move 1 pixel ever x amount of time
				movement = movement + 1;
				elem.style.left = movement+'px';
			}
		}, speed);

		//run function for x amount of time
		//remove time from function and comment this block out if not needed
		setTimeout(function(){
			clearInterval(animate);
		}, time);
	}

	animate('#block', 10, 5000, 300);
}
