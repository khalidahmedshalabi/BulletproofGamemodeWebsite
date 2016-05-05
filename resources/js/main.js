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
	
// Load external sub pages
function LoadContent(page)
{
	$(".Content").load(page);
}

/*	Nav bar positioning based on user scrolling	*/

var IsNavigatorInFixedPos = false; // A variable to indicate whether the nav bar is placed in a fixed position or not
var NavigatorFirstTopOffset = $(".Navigator").offset().top; // Initialize nav position

// Fix nav bar position based on scrolling value when window is scrolled
function FixNavBarPosition()
{
	// Check if the user has scrolled enough. In other words, the nav bar is not visible anymore in viewpoint.
	if($(window).scrollTop() > NavigatorFirstTopOffset)
	{
		// See if it's not in a fixed position already
		if(!IsNavigatorInFixedPos)
		{
			// Set fixed position
			$(".Navigator").css("position", "fixed");
			$(".Navigator").css("top", "0%");
			IsNavigatorInFixedPos = true;
		}
	}
	else if(IsNavigatorInFixedPos)
	{
		// If the user is still near the top of the main page and nav bar is in a fixed position
		
		// Return it to its default position
		$(".Navigator").css("position", "static");
		IsNavigatorInFixedPos = false;
	}
}

// Fix nav bar position based on window size when window is resized
$(window).resize
(
	function ()
	{
		// If nav bar is in a fixed position
		if(IsNavigatorInFixedPos)
		{
			// Return it to its default position
			$(".Navigator").css("position", "static");
			IsNavigatorInFixedPos = false;
			
			// Store its new static position
			NavigatorFirstTopOffset = $(".Navigator").offset().top;
			
			// Fix position
			FixNavBarPosition();
		}
	}
);

// On scroll event...
$(window).scroll(function () { FixNavBarPosition(); });

// Set window scroll value to the top of content page so that user can read everything clearly
function ScrollToTopOfContent()
{
	$(window).scrollTop(NavigatorFirstTopOffset);
}

// Handle nav button clicks
$(".NavButtons").click
(
	function()
	{
		// Remove the css 'clicked' class from all other elements
		$(".NavButtons").removeClass("NavButtonsClicked");
		
		// Set class style to this element only
		$(this).addClass("NavButtonsClicked");
		
		// Scroll to top of the content area
		ScrollToTopOfContent();
	}
);

// Load default sub page
$(".NavButtons").removeClass("NavButtonsClicked");
$("#DefaultNavButton").addClass("NavButtonsClicked");
LoadContent("page_competition.html");