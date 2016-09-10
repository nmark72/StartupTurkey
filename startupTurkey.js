$(document).ready(function(){
resizeWindow();
});

window.onresize = function(e) {
resizeWindow();
}

function resizeWindow() {
var wth = $(window).width();
var hgt = $(window).height();
$('#topOfPage').css('height', hgt+'px');
$('#topOfPage').css('width', wth+'px');
}


$("#volumeSwitch").click(onOffsound);


$('#buttonMenu').click(function()	
{
	if ($('#OpenCloseMenu').attr('class') === 'hidenMenu')
	{
		$('#OpenCloseMenu').removeClass('hidenMenu');
		$('#OpenCloseMenu').addClass('visibleMenu');
	}
})

$('#buttonCloseMenu').click(function()	
{
	if ($('#OpenCloseMenu').attr('class') === 'visibleMenu')
	{
		$('#OpenCloseMenu').removeClass('visibleMenu');
		$('#OpenCloseMenu').addClass('hidenMenu');
	}
})


function onOffsound()
{

	switch($("#videoBck").prop("muted"))
	{
		case true:
		$("#volumeSwitch").addClass("sound");
		$("#videoBck").prop("muted", false);
		//console.log("ukljuc");
		break;

		case false:
		$("#volumeSwitch").removeClass("sound");
		$("#videoBck").prop("muted", true);
		//console.log("iskljuc");
		break;


	}
}

