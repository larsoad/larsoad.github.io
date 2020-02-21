$(function()
{
	var name = $("#name");
	var email = $("#email");
	var message = $("#message");
	var success = $("#result-success");
	var failure = $("#result-failure");
	var form = $("#contact-form");
	var button = $(".send-button");

	form.submit(function()
	{
		button
			.html('<span class="spinner-border spinner-border-sm mr-2"></span>Sending...')
			.addClass('disabled');

		var data =
		{
			name: name.val(),
			email: email.val(),
			message: message.val()
		};

		console.log(data);

		setTimeout(function()
		{
			button.html("Sent!");
				
			success.show();
			//failure.show();
		}, 1000);

		event.preventDefault();
	});
});