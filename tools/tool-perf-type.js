$(document).ready(function(){

	var PerfType =  function(tag, base, increment, minimum, maximum){
			this.tag 				= tag;
		  this.base 			= base;
		  this.increment 	= increment;
		  this.minimum 		= minimum;
		 	this.maximum    = maximum;

			var win = $(window),
				bas = base,
				inc = increment,
				min = minimum,
				max = maximum;

			//onload less than
	 		function lessThan(){
				if(win.width() < min){
					$(tag).css({
						'font-size'      : bas+'px',
						'line-height'    : bas * 1.5+'px',
						'letter-spacing' : max / max,
						'margin-bottom'  : bas / 2+'px'
					});
				}
			}
			lessThan();

	   //between min and max
		 function scale(){
			if(win.width() > min && win.width() < max){
					eq = ((win.width() / min) / inc) + bas;
					$(tag).css({
						'font-size'      : eq+'px',
						'line-height'    : eq * 1.5+'px',
						'letter-spacing' : (max / max) + ((win.width() / max) /100),
						'margin-bottom'  : eq / 2+'px'
					});
				}
		 }
		scale();

		//onload greater than
		 function greaterThan(){
			if(win.width() > max){
				eq = ((max / min) / inc) + bas;
				$(tag).css({
					'font-size'        : eq+'px',
					'line-height'      : eq * 1.5+'px',
					'letter-spacing'   : (max / max) + ((max / max) /100),
						'margin-bottom'  : eq / 2+'px'
				});
			}
		 }
		greaterThan();


			//on resize
			win.resize(function(){
					lessThan();
					scale();
					greaterThan();
			});
	};
													//tag, base, increment, min, max
	var heading1   = new PerfType('h1', 26, 0.06, 320, 768);
	var heading2   = new PerfType('h2', 24, 0.3, 320, 768);
	var heading3   = new PerfType('h3', 22, 0.4, 320, 768);
	var heading4   = new PerfType('h4', 18, 0.5, 320, 768);
	var heading5   = new PerfType('h5', 16, 0.6, 320, 768);
	var heading6   = new PerfType('h6, th', 14, 1, 320, 768);
	var paragraphs = new PerfType('p, li, a, td', 12, 1.1, 320, 768);

});
