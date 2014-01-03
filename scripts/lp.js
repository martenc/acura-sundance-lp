/*
                               __   __                   
                              /  \ /  \                  
 ______ ____   __    __      /  $$/  $$______   _______  
|      \    \ |  \  |  \    /  $$/  $$/      \ |       \ 
| $$$$$$\$$$$\| $$  | $$   /  $$/  $$|  $$$$$$\| $$$$$$$\
| $$ | $$ | $$| $$  | $$  /  $$/  $$ | $$    $$| $$  | $$
| $$ | $$ | $$| $$__/ $$ /  $$/  $$  | $$$$$$$$| $$  | $$
| $$ | $$ | $$ \$$    $$|  $$|  $$    \$$     \| $$  | $$
 \$$  \$$  \$$  \$$$$$$  \$$  \$$      \$$$$$$$ \$$   \$$
                                                         

*/

$( document ).ready(function() {

	// show initially hidden div
	$('.slide-out-div').show();


	// scene setup
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
	// var parallax = new Parallax(scene, {
	//   calibrateX: false,
	//   calibrateY: true,
	//   invertX: false,
	//   invertY: true,
	//   limitX: false,
	//   limitY: 10,
	//   scalarX: 2,
	//   scalarY: 8,
	//   frictionX: 0.2,
	//   frictionY: 0.8
	// });

	// Learn More tab
	$(function(){

		var mobiledetect = false;
		if (navigator.userAgent.match(/iPhone/i) 
			|| navigator.userAgent.match(/BlackBerry/i) 
			|| navigator.userAgent.match(/Windows Phone/i)) {
			mobiledetect = true;
		}
		//console.log("mobile: " + mobiledetect);

		var tabimageref = './images/slide_out_tab.png';
		var tabheight = '23px';
		var tabwidth = '146px';
		if (mobiledetect) {
			tabimageref = './images/slide_out_tab_mobile.png';
			tabheight = '17px';
			tabwidth = '110px';
		}
		//console.log("imgpath: " + tabimageref);

	    $('.slide-out-div').tabSlideOut({
	        tabHandle: '.handle',                     			//class of the element that will become your tab
	        pathToTabImage: tabimageref, 		//path to the image for the tab //Optionally can be set using css
	        imageHeight: tabheight,                     			//height of tab image           //Optionally can be set using css
	        imageWidth: tabwidth,                       			//width of tab image            //Optionally can be set using css
	        tabLocation: 'bottom',                      		//side of screen where tab lives, top, right, bottom, or left
	        speed: 300,                               			//speed of animation
	        action: 'click',                          			//options: 'click' or 'hover', action to trigger animation
	        //topPos: '200px',                          		//position from the top/ use if tabLocation is left or right
	        //leftPos: '200px',                          		//position from left/ use if tabLocation is bottom or top
	        fixedPosition: false                      			//options: true makes it stick(fixed position) on scroll
	    });

	});


	// floodlight tag for exit link
	$('#acura-link, #acura-link-ie').click(function() {
        var axel = Math.random() + "";
		var a = axel * 10000000000000;
		//document.write('<iframe src="http://4114412.fls.doubleclick.net/activityi;src=4114412;type=sunda819;cat=endta079;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');

		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.style.width = "1";
		iframe.style.height = "1";
		iframe.src = "http://4114412.fls.doubleclick.net/activityi;src=4114412;type=sunda819;cat=endta079;ord=" + a + "?";
		document.body.appendChild(iframe);

		//console.log("flood");
    });

	
});