import { data } from "./data.js";

$(() => {
	const navElem = $(".des-nav li");
	const title = $(".title");
	const text = $(".text");
	const avgDist = $(".avg-dist");
	const travelTime = $(".travel-time");
	let effect = (id) => {
		$(".nav-content, .bottom-content,.left").fadeOut(250, () => {
			// img.attr("src", data.destinations[id].images.png);
			$(".des-nav").find(`li#${id}`).addClass("active");
			$(`.des-nav li:not(#${id})`).removeClass("active");
			title.text(data.destinations[id].name);
			text.text(data.destinations[id].description);
			avgDist.text(data.destinations[id].distance);
			travelTime.text(data.destinations[id].travel);
			$(".left").find(`img#${id}`).css("display", "block");
			$(`.left img:not(#${id})`).css("display", "none");
		});
	};
	navElem.click(function (e) {
		let id = +e.target.id;
		$.when(effect(id)).done(() => {
			$(".nav-content, .bottom-content, .left").fadeIn();
		});
	});
});
