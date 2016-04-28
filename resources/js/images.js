$(".ContentImages").hover
(
	function() 
	{
		$(this).animate({	height:"45%", width:"45%"	}, 250);
	},
	function() 
	{
		$(this).animate({	height:"40%", width:"40%"	}, 100);
	}
);