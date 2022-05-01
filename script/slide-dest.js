import { data } from "./data.js";

$(() => {
	const navElem = $(".des-nav li");
	const title = $(".title");
	const text = $(".text");
	const avgDist = $(".avg-dist");
	const travelTime = $(".travel-time");
	const img = $(".left img");
	navElem.click(function (e) {
		let id = +e.target.id;
		$(".nav-content, .bottom-content,.left img").fadeOut(350, () => {
			$(".des-nav").find(`li#${id}`).addClass("active");
			$(`.des-nav li:not(#${id})`).removeClass("active");
			img.attr("src", data.destinations[id].images.webp);
			title.text(data.destinations[id].name);
			text.text(data.destinations[id].description);
			avgDist.text(data.destinations[id].distance);
			travelTime.text(data.destinations[id].travel);
			if (img.attr("src", data.destinations[id].images.webp)) {
				$(".nav-content, .bottom-content,.left img").fadeIn();
			}
		});
	});
});
