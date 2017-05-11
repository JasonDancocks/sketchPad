var pixelCount = 16;
var gridwidth = 640;
var size = 40;

$(document).ready(function(){

	createPixels(pixelCount);
	resetPixels();

});


function resetPixels(){


	$("#clear").click(function(){
	$(".pixel").removeClass("active");

		
	if($("#pixelInput").val() >0 && $("#pixelInput").val() < 101)
		{
			var pixelCount = $("#pixelInput").val();
			size = gridwidth/pixelCount;
			$(".pixel").remove();
			createPixels(pixelCount);
		}
	paint();
			
		

	});

}

function paint(){
	$(".pixel").hover(function(){
		var colorR = Math.floor((Math.random() * 256));
      	var colorG = Math.floor((Math.random() * 256));
      	var colorB = Math.floor((Math.random() * 256));
      	$(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
	}, );

}

function createPixels(number){



	for(var i = 0; i < number*number; i++){

	$("#pixelGrid").append("<div class='pixel'>")

	}

	$(".pixel").css({height:size,width:size});

	paint();
	                                                      
}

