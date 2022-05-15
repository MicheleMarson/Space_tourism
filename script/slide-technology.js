import { data } from "./data.js";

$(() => {
	const navElem = $(".carousel > div");
	const name = $(".name");
	const text = $(".text");
	let effect = (id) => {
		console.log(id);
		$(".text, .name, .right picture").fadeOut(250, () => {
			$(".carousel").find(`div#${id}`).addClass("active");
			$(`.carousel div:not(#${id})`).removeClass("active");
			name.text(data.technology[id].name);
			text.text(data.technology[id].description);
			$(".right").find(`picture#${id}`).css("display", "block");
			$(`.right picture:not(#${id})`).css("display", "none");
		});
	};
	navElem.click(function (e) {
		console.log(e);
		let id = +e.currentTarget.id;
		$.when(effect(id)).done(() => {
			$(".text, .name, .right picture").fadeIn();
		});
	});
});
