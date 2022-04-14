$(() => {
	$(".burger").click(() => {
		$(".nav-bar").fadeToggle(300);
		$("nav").toggleClass("active");
		$("section").toggleClass("active");
	});
});
