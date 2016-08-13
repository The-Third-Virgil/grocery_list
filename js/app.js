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
	
	// Meats, Cheese, & Eggs Section
	$('#userinput2').submit(function(event) {
		event.preventDefault();
		var something = $('#inputbox2').val();
		console.log(something);
		// if user inputs nothing and hits enter, alert will pop up and nothing is appended
		if (something === "") {
			alert('Please enter an item!')
		}
		//otherwise, text is appended as a li to the shopping list
		else {
			$('.allitems2 ul').append("<li class='currentitem2'> <img class='checked' src='https://image.freepik.com/free-icon/check-mark-black-outline_318-49519.png'/>" + " " + something + " " + "<img src='http://www.pd4pic.com/images/cancel-delete-cross-check-box-check-tick-icon.png' class='trash'/></li>");	
		}
		// resets the textbox after item is entered
		$('#userinput2')[0].reset();
	});

	// Canned & Dry Goods Section
	$('#userinput3').submit(function(event) {
		event.preventDefault();
		var something = $('#inputbox3').val();
		console.log(something);
		// if user inputs nothing and hits enter, alert will pop up and nothing is appended
		if (something === "") {
			alert('Please enter an item!')
		}
		//otherwise, text is appended as a li to the shopping list
		else {
			$('.allitems3 ul').append("<li class='currentitem3'> <img class='checked' src='https://image.freepik.com/free-icon/check-mark-black-outline_318-49519.png'/>" + " " + something + " " + "<img src='http://www.pd4pic.com/images/cancel-delete-cross-check-box-check-tick-icon.png' class='trash'/></li>");	
		}
		// resets the textbox after item is entered
		$('#userinput3')[0].reset();
	});

	// Frozen Foods & Desserts Section
	$('#userinput4').submit(function(event) {
		event.preventDefault();
		var something = $('#inputbox4').val();
		console.log(something);
		// if user inputs nothing and hits enter, alert will pop up and nothing is appended
		if (something === "") {
			alert('Please enter an item!')
		}
		//otherwise, text is appended as a li to the shopping list
		else {
			$('.allitems4 ul').append("<li class='currentitem4'> <img class='checked' src='https://image.freepik.com/free-icon/check-mark-black-outline_318-49519.png'/>" + " " + something + " " + "<img src='http://www.pd4pic.com/images/cancel-delete-cross-check-box-check-tick-icon.png' class='trash'/></li>");	
		}
		// resets the textbox after item is entered
		$('#userinput4')[0].reset();
	});

	// Liquids Section
	$('#userinput5').submit(function(event) {
		event.preventDefault();
		var something = $('#inputbox5').val();
		console.log(something);
		// if user inputs nothing and hits enter, alert will pop up and nothing is appended
		if (something === "") {
			alert('Please enter an item!')
		}
		//otherwise, text is appended as a li to the shopping list
		else {
			$('.allitems5 ul').append("<li class='currentitem5'> <img class='checked' src='https://image.freepik.com/free-icon/check-mark-black-outline_318-49519.png' , '√'/>" + " " + something + " " + "<img src='http://www.pd4pic.com/images/cancel-delete-cross-check-box-check-tick-icon.png' , 'X' class='trash'/></li>");	
		}
		// resets the textbox after item is entered
		$('#userinput5')[0].reset();
	});

	// Supplies & Misc. Section
	$('#userinput6').submit(function(event) {
		event.preventDefault();
		var something = $('#inputbox6').val();
		console.log(something);
		// if user inputs nothing and hits enter, alert will pop up and nothing is appended
		if (something === "") {
			alert('Please enter an item!')
		}
		//otherwise, text is appended as a li to the shopping list
		else {
			$('.allitems6 ul').append("<li class='currentitem6'> <img class='checked' src='https://image.freepik.com/free-icon/check-mark-black-outline_318-49519.png'/>" + " " + something + " " + "<img src='http://www.pd4pic.com/images/cancel-delete-cross-check-box-check-tick-icon.png' class='trash'/></li>");	
		}
		// resets the textbox after item is entered
		$('#userinput6')[0].reset();
	});


	$('ul').on('click', '.trash', function(event){
		console.log('trash clicked');
		$(this).closest('li').remove();
	});	
	$('ul').on('click', '.checked', function(event) {
		$(this).closest('li').toggleClass('linethrough');
		console.log('check clicked');
	});

});


	