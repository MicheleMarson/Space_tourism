import { data } from "./data.js";

$(() => {
	const navElem = $(".carousel div");
	const title = $(".title");
	const text = $(".text");
	const name = $(".name");
	const img = $(".image img");
	const effect = (id) => {
		$(".top, .image").fadeOut(350, () => {
			img.attr("src", data.crew[id].images.png);
			$(".carousel").find(`div#${id}`).addClass("active");
			$(`.carousel div:not(#${id})`).removeClass("active");
			title.text(data.crew[id].role);
			text.text(data.crew[id].bio);
			name.text(data.crew[id].name);
		});
	};
	navElem.click(function (e) {
		let id = +e.target.id;
		// after image finishes loading fade in
		$.when(effect(id)).done(() => {
			console.log("loaded");
			$(".top, .image").fadeOut(100).fadeIn();
		});
	});
});
