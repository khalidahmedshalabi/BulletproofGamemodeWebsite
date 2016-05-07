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

var FeedbackContainerScrolled = false;

function FixFeedbackContainer()
{
	if($(window).scrollTop() > $(window).innerHeight() * 0.08)
	{
		if(!FeedbackContainerScrolled)
		{
			$(".FeedbackButtonsContainer").animate(
				{
					right:0,
					bottom:0,
					fontSize:"70%"
				},
				{
					queue: false,
					duration: 1000
				}
			);
			FeedbackContainerScrolled = true;
		}
	}
	else if(FeedbackContainerScrolled)
	{
		$(".FeedbackButtonsContainer").animate(
			{
				right:"3%",
				bottom:"9%",
				fontSize:"90%"
			},
			{
				queue: false,
				duration: 1000
			}
		);
		FeedbackContainerScrolled = false;
	}
}

$(window).scroll(function () { FixFeedbackContainer(); });