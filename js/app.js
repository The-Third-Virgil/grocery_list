$(document).ready(function() {
	// Fresh Fruit, Veggiesm, etc. Section
	$('#userinput1').submit(function(event) {
		event.preventDefault();
		var something = $('#inputbox1').val();
		console.log(something);
		// if user inputs nothing and hits enter, alert will pop up and nothing is appended
		if (something === "") {
			alert('Please enter an item!')
		}
		//otherwise, text is appended as a li to the shopping list
		else {
			$('.allitems1 ul').append("<li class='currentitem1'> <img class='checked' src='https://image.freepik.com/free-icon/check-mark-black-outline_318-49519.png'/>" + " " + something + " " + "<img src='http://www.pd4pic.com/images/cancel-delete-cross-check-box-check-tick-icon.png' class='trash'/></li>");	
		}
		// resets the textbox after item is entered
		$('#userinput1')[0].reset();
	});

	$('ul').on('click', '.trash', function(event){
		console.log('trash clicked');
		$(this).closest('li').remove();
	});	
	$('ul').on('click', '.checked', function(event) {
		$(this).closest('li').toggleClass('linethrough');
		console.log('check clicked');
	});
	
	// Meats, Cheese, & Eggs Section
});


	