window.onload = function() {
	//下拉框
	var li = document.getElementsByTagName("li1");
	var xiala = document.getElementById("xialanav");
	for(var i = 1; i <= 6; i++) {
		var l = document.getElementById("li" + i);
		l.onmousemove = function() {
			xiala.style.display = "block";
		    xiala.style.background="red";
		}
		l.onmouseout = function() {
			xiala.style.display = "none";
		}
	}

	xiala.onmousemove = function() {
		xiala.style.display = "block";
		xiala.style.background="red";

	}
	xiala.onmouseout = function() {
		xiala.style.display = "none";
	}

	
	
	
	

}