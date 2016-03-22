var counter = 0;
$( document ).ready(function(){
	if(localStorage.getItem('avatar') === "guy"){
		$(".guy").show();
		$("#switch-guy-shirt").click(function (){
			
	        $(".avatar-male-color").hide();
	        if(counter == 0){
	            $(".green").show();
			}
			if(counter == 1){
	            $(".red").show();
			}
			else if(counter == 2){
	            $(".yellow").show();
			}
			else if(counter == 3){
	            $(".blue").show();
			}
	        counter++;
			if(counter == 4){
	            counter = 0;
	        }
		});
	}	
	if(localStorage.getItem('avatar') === "girl"){
		$(".girl").show();
		$("#switch-girl-shirt").click(function (){
	        $(".avatar-female-color").hide();
	        if(counter == 0){
	
	            $(".girl .green").show();
			}
			if(counter == 1){
				
	            $(".red").show();
			}
			else if(counter == 2){
	            $(".yellow").show();
			}
			else if(counter == 3){
	            $(".blue").show();
			}
	        counter++;
			if(counter == 4){
	            counter = 0;
	        }
		});
	}

});