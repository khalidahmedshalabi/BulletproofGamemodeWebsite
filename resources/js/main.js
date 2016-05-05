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