$(document).foundation();




/*Initial load slide*/
$.fn.fadeIn2 = function() {
	$(this).css('top',"-130px").delay(5000).fadeIn("slow", function() {
    // Animation complete
  });
	return this;

}

/*slogan slide*/
$.fn.topSlide1 = function() {
	setTimeout ( function()
	{
		$('.part1').delay(1000).animate({ opacity: '1'  }, 'slow');
		console.log('part 1 read');
		    setTimeout (function() {
			$('.part2').delay(1000).animate({  opacity: '1'}, 'slow');
			console.log('part 2 read');
				setTimeout(function() {
					$('.part3').delay(1000).animate({  opacity: '1'  }, 'slow');
					console.log('part 1 read');
				}, 1100);
		}, 1100);
	
	}, 1100);



console.log('all read');
	return this;

}



/*Click slide up*/
$.fn.fadeUp = function() {
	$(this).delay(700).animate({ top: '-200px', opacity: 'toggle' }, 'slow');
	return this;

}

$.fn.fadeUp2 = function() {
	$(this).delay(700).animate({ top: '-130px', opacity: 'toggle' }, 'slow');
	return this;

}

/*slide down*/
$.fn.fadeDown = function() {
	
	$(this).animate({ top: '200px', opacity: 'toggle' }, 'slow');
	return this;

}

/*tabs*/
$.fn.blackBox = function (){
	$('.menu a').css('color', 'black').css('background-color', '#fefefe');
	$(this).css('color','white').css('background-color', 'black');
}

$.fn.blueBox = function (){
	$('.pre, .post').css('background-color', '#2199e8');
	$(this).css('background-color', '#0f598a'); 
}



/* Events Start Here */
window.current = '#mag1';

$('.part1').topSlide1();
$('.bio').delay(500).fadeIn2();
$('.menu').fadeUp();


$('.first').blackBox();




$('.tab').click( function() {


	//toggle the tabs
	$(this).blackBox();

	//Set ID
	var id = $(this).get(0).id;
	console.log(id);
 
 	//Toggle the content section

 
 	if ( id != current) {

 			
 			if (current == '#mag1')

 			{
 				

 				/*Starts the fading away transition*/

 				$('.part1').animate({ opacity:'0'}, 'slow');
 					$('.part2').animate({ opacity:'0'}, 'slow');
 						$('.part3').animate({ opacity:'0'}, 'slow');
 				$('.bio').fadeDown();

 				/*Slides up new page*/
 				$(id).fadeUp();
 				current = id;

 			}

 			else if (id == '#mag1') {

 		$(current).fadeDown();

 		$('.bio').fadeUp2();

 		setTimeout ( function (){
 		$('.part1').delay(200).animate({ opacity: '1'  }, 'slow');
 			$('.part2').delay(200).animate({ opacity: '1'  }, 'slow');
 				$('.part3').delay(200).animate({ opacity: '1'  }, 'slow');
 							}, 1000);

 		current = id; 
 		console.log('current');


 	}

 			else {
	
		$(current).fadeDown();

		$(id).fadeUp();

		$(current).css('top', '-200px');


		//Set new current
 		current = id; 

 				}

 	};

 	


	 });

/* Switch Animation */

$('#post').click( function () {


	$(this).blueBox();
	$(".prelevel").fadeOut();
	$(".postlevel").fadeIn();
	/*$(".postlevel").append("<img class='triangle' src='assets/images/greenArrow.svg'/>");*/

});

$('#pre').click( function () {


	$(this).blueBox();
	$(".postlevel").fadeOut();

	$(".prelevel").fadeIn();
	/*$(".triangle").delay(500).remove();*/


});

/*Second Switch*/

$('#post2').click( function () {


	$(this).blueBox();
	$(".remove").fadeOut();
	$(".hidden").delay(400).fadeIn();
	

});

$('#pre2').click( function () {


	$(this).blueBox();
	$(".hidden").fadeOut();
	$(".remove").delay(400).fadeIn();
	/*$(".triangle").delay(500).remove();*/


});


	
































