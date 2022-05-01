import { data } from "./data.js";

$(() => {
	const navElem = $(".carousel div");
	const title = $(".title");
	const text = $(".text");
	const name = $(".name");
	const effect = (id) => {
		$(".top, .image").fadeOut(250, () => {
			// img.attr("src", data.crew[id].images.png);
			$(".carousel").find(`div#${id}`).addClass("active");
			$(`.carousel div:not(#${id})`).removeClass("active");
			title.text(data.crew[id].role);
			text.text(data.crew[id].bio);
			name.text(data.crew[id].name);
			$(".image").find(`img#${id}`).css("display", "block");
			$(`.image img:not(#${id})`).css("display", "none");
		});
	};
	navElem.click(function (e) {
		let id = +e.target.id;
		$.when(effect(id)).done(() => {
			$(".top, .image").fadeIn();
		});
	});
});
