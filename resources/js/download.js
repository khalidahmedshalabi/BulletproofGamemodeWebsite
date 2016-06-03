$(window).resize
(
	function()
	{
		$(".MainSections").animate
		(
			{
				width: ($(window).width() * 0.5)
			},
			{
				queue: false,
				duration: 300
			}
		);
	}
);

$(".MainSections").hover
(
	function()
	{
		$(".MainSections").animate
		(
			{
				width: ($(window).width() * 0.3),
				fontSize: "100%"
			},
			{
				queue: false,
				duration: 800
			}
		);
		$(".MainSections").css("background-color", "#000000");
		$(".MainSections").addClass("Blurry");

		$(this).animate
		(
			{
				width: ($(window).width() * 0.7),
				fontSize: "120%"
			},
			{
				queue: false,
				duration: 800
			}
		);
		$(this).css("background-color", "#111111");
		$(this).removeClass("Blurry");
	}
);
