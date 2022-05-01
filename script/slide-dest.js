import { data } from "./data.js";

$(() => {
	const navElem = $(".des-nav li");
	const title = $(".title");
	const text = $(".text");
	const avgDist = $(".avg-dist");
	const travelTime = $(".travel-time");
	const img = $(".left img");
	let effect = (id) => {
		$(".nav-content, .bottom-content,.left img").fadeOut(350, async () => {
			await img.attr("src", data.destinations[id].images.png);
			$(".des-nav").find(`li#${id}`).addClass("active");
			$(`.des-nav li:not(#${id})`).removeClass("active");
			title.text(data.destinations[id].name);
			text.text(data.destinations[id].description);
			avgDist.text(data.destinations[id].distance);
			travelTime.text(data.destinations[id].travel);
		});
	};
	navElem.click(function (e) {
		let id = +e.target.id;
		// after image finishes loading fade in
		$.when(effect(id)).done(() => {
			$(".nav-content, .bottom-content,.left img").fadeOut(100).fadeIn();
		});
		// $(".nav-content, .bottom-content,.left img")
		// 	.promise()
		// 	.done(() => {});
	});
});
