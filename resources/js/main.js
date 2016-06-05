// Click button to navigate to section
$("nav").find("a").click(function(e)
{
	// Prevent default event to make ours happen
	e.preventDefault();

	// Get the value of 'href' attribute for the clicked element
	var section = $(this).attr("href");

	// Scroll to it with animation
	$("html, body").animate(
	{
		scrollTop: $(section).offset().top
	});
});

var FeedbackContainerScrolled = false, FeedbackContainerAnimating = false;

function FixFeedbackContainer()
{
	if(FeedbackContainerAnimating)
		return;

	if($(window).scrollTop() > $(window).innerHeight() * 0.08)
	{
		if(!FeedbackContainerScrolled)
		{
			FeedbackContainerAnimating = true
			$(".FeedbackButtonsContainer").animate(
				{
					fontSize:"80%"
				},
				{
					queue: false,
					duration: 700,
					complete: function () { FeedbackContainerAnimating = false; }
				}
			);
			FeedbackContainerScrolled = true;
		}
	}
	else if(FeedbackContainerScrolled)
	{
		FeedbackContainerAnimating = true
		$(".FeedbackButtonsContainer").animate(
			{
				fontSize:"100%"
			},
			{
				queue: false,
				duration: 700,
				complete: function () { FeedbackContainerAnimating = false; }
			}
		);
		FeedbackContainerScrolled = false;
	}
}

$(window).scroll(function () { FixFeedbackContainer(); });
