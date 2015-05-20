/* This is to display the IE8 or less version of the page */
window.onload = function(){
	//check for IE7 or lower
	if (document.all && !document.querySelector) {
		document.getElementById('hidethis').style.display='none';
		document.getElementById('mywarning').style.display='block';
		document.body.style.backgroundColor = "#04518C";
	}

	//check for IE8
	if (document.all && document.querySelector && !document.addEventListener) {
		document.getElementById('hidethis').style.display='none';
		document.getElementById('mywarning').style.display='block';
		document.body.style.backgroundColor = "#04518C";
	}

	/* When window too small, this will remove the buttons*/
	var w = window.innerWidth;
	if (w < 768) {
		var bottom = document.getElementsByClassName('bottom'), i;

		for (var i = 0; i < bottom.length; i ++) {
			bottom[i].style.display = 'none';
		}
		document.getElementsByClassName('top')[0].style.display='none';
	}
};

window.onresize = function() {
	/* When window too small, this will remove the buttons*/
	var w = window.innerWidth;
	if (w < 768) {
		var bottom = document.getElementsByClassName('bottom'), i;

		for (var i = 0; i < bottom.length; i ++) {
			bottom[i].style.display = 'none';
		}
		document.getElementsByClassName('top')[0].style.display='none';
	}
	else {
		var bottom = document.getElementsByClassName('bottom'), i;

		for (var i = 0; i < bottom.length; i ++) {
			bottom[i].style.display = 'block';
		}
		document.getElementsByClassName('top')[0].style.display='block';
	}
};