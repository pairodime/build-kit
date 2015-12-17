window.onload = function(){
	function QuickTabs(){
      //get tab link
		var link  = document.querySelectorAll('.tab-links a');

		for(i = 0; i < link.length; ++i){

         //get tab link name
			var linkName = link[i].getAttribute('data-src'),
            //create page alias
			    page 		 = document.getElementById(linkName+'-page');

			//hide pages onload
			page.style.display = 'none';

			//show first page onload
			document.getElementById('tab-1-page').style.display = 'block';

			//onclick
			link[i].addEventListener('click', function(event){
				event.preventDefault();

				//hide all pages on click
				var pages = document.querySelectorAll('.tab-pages > div');
				for(i = 0; i < pages.length; ++i){
					pages[i].style.display = "none";
				}

            //show desired page
				var show = this.getAttribute('data-src')+'-page';
				document.getElementById(show).style.display = "block";
			});
		}

	}
   QuickTabs();
}
