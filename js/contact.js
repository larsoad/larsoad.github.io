$(function()
{
	var name = $("#name");
	var email = $("#email");
	var message = $("#message");
	var success = $("#result-success");
	var failure = $("#result-failure");
	var form = $("#contact-form");
	var button = $(".send-button");

	var url = "https://adamdlarson-contact.azurewebsites.net/api/ContactTrigger?code=OaTKyHCwGsVC9UOGBTv9gX9Upr2O8dLEhFzAfYDH6HyED8yyUO27Wg==";

	form.submit(function(event)
	{
		button
			.html('<span class="spinner-border spinner-border-sm mr-2"></span>Sending...')
			.addClass('disabled');

		var data =
		{
			name: name.val() || "Unknown",
			from: email.val(),
			subject: "Contact request",
			content: message.val()
		};

		var request = new XMLHttpRequest();
		request.open("POST", url, true);
		request.setRequestHeader("Content-Type", "application/json");
		request.addEventListener("loadend", function()
		{
			if (request.status == 200)
			{
				button.html("Sent!");
				success.show();
			}
			else
			{
				button.html(":(");
				failure.show();
			}
		});

		request.send(JSON.stringify(data));
		event.preventDefault();
	});
});