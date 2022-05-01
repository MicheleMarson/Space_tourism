import { data } from "./data.js";

$(() => {
	const navElem = $(".carousel div");
	const title = $(".title");
	const text = $(".text");
	const name = $(".name");
	const img = $(".image img");
	navElem.click(function (e) {
		console.log(e);
		let id = +e.target.id;
		$(".top, .image").fadeOut(250, () => {
			$(".carousel").find(`div#${id}`).addClass("active");
			$(`.carousel div:not(#${id})`).removeClass("active");
			title.text(data.crew[id].role);
			text.text(data.crew[id].bio);
			name.text(data.crew[id].name);
			img.attr("src", data.crew[id].images.webp);
			$(".top, .image").fadeIn();
		});
	});
});
