$(".GoComments").click(
	function ()
	{
		$(".MainTextContainer").fadeOut(
			500,
			function ()
			{
				$(".MainTextContainer").css("display", "none");
				$(".CommentsContainer").fadeIn(500);
			}
		);
		$("body").animate({scrollTop:0}, "300");
	}
);

$(".GoDownload").click(
	function ()
	{
		$(".CommentsContainer").fadeOut(
			500,
			function ()
			{
				$(".CommentsContainer").css("display", "none");
				$(".MainTextContainer").fadeIn(500);
			}
		);
	}
);