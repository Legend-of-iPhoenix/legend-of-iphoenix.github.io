window.onload = function() {
	for (var i = 0; i < new Date().getTime().toString(2).split('').length; i++) {
		var s = document.createElement("pre");
		s.style = 'height: 10px; width: 10px; float: left;'
		s.id = i;
		document.getElementById("timeDiv").appendChild(s);
	}
	setInterval(function() {
		new Date().getTime().toString(2).replace(/1/g,"f").split('').forEach(function(c,i) {
			document.getElementById(i).style.backgroundColor = "#"+c.repeat(3);
		});
	});
}