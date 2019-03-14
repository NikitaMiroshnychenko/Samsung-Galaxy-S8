setInterval(function () {
	var date = new Date();

	var format = [
	(date.getHours()<10 ? "0"+date.getHours():date.getHours()),
	(date.getMinutes()<10 ? "0"+date.getMinutes():date.getMinutes())
	].join(":");

	document.getElementById('phone_clock').innerHTML = format; 
}, 10);