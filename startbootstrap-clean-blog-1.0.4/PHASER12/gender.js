$( document ).ready(function(){
	
	$( "#male" ).click(function() {
  		localStorage.setItem('avatar','guy');
  		
  		window.location.href="avatar.html";


	});
	$( "#female" ).click(function() {
  		localStorage.setItem('avatar','girl');
  		window.location.href="avatar.html";
	});
});