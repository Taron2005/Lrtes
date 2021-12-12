let topic = document.querySelector(".topic");
let game__settings = document.querySelector(".game__settings");
let back = document.querySelector(".game__settings > i");
let playing = document.querySelector(".playing");
let playing1 = document.querySelector(".playing1");
let word = document.querySelector(".playing");
let topicBtns = document.querySelectorAll(".topic button");
let playerPlus = document.querySelector(".playeravel");
let playerMinus = document.querySelector(".playerpakas");
let lrtesPlus = document.querySelector(".lrtesavel");
let lrtesMinus = document.querySelector(".lrtespakas");
let lrtesner = document.querySelector(".detectives > p");
let players = document.querySelector(".players > p");
let time = document.querySelector(".minutes > p");
let minuteMinus = document.querySelector(".minutepakas");
let minutePlus = document.querySelector(".minuteavel");
let begin = document.querySelector(".begin");
let look = document.querySelector(".look");
let startGame = document.querySelector(".games");
let book = document.querySelector(".word");
let mainword = document.querySelector(".word p");
let close1 = document.querySelector(".word .close");
let words = {
	texanunner: [
		"Լեռ",
		"Զեդեա",
		"Տուն",
		"Եղեգնաձոր",
		"Երևան",
		"Անգլիա",
		"Ձոր",
		"Վանաձոր",
		"Ջերմուկ",
		"Արթիկ",
		"եկեղեցի",
		"Նորավանք",
	],
	masnagitutyunner: [
		"Բժիշկ",
		"Ծրագրավորող",
		"Տնտեսագետ",
		"Մանկավարժ",
		"Որմնադիր",
		"Հաշվապահ",
		"Խառատ",
		"Հացթուխ",
		"Դերասան",
	],
	kendaniner: [
		"Փիղ",
		"Շուն",
		"Կատու",
		"Կապիկ",
		"Ընձուղտ",
		"Առյուծ",
		"Մրջյուն",
		"Կով",
		"Ձի",
		"Գոմեշ",
		"Գայլ",
		"Արջ",
		"Այծ",
	],
};
let j = 0;
let words3;
let wordstex;
topicBtns[0].addEventListener("click", () => {
	wordstex = words["texanunner"];
	let max = wordstex.length - 1;
	let min = 0;
	let wordindex = Math.floor(Math.random() * (max - min + 1)) + min;
	words3 = wordstex[wordindex];
	topic.classList.toggle("active");
	game__settings.classList.toggle("active");
	return words3;
});

topicBtns[1].addEventListener("click", () => {
	wordstex = words["masnagitutyunner"];
	let max = wordstex.length - 1;
	let min = 0;
	let wordindex = Math.floor(Math.random() * (max - min)) + min;
	words3 = wordstex[wordindex];
	topic.classList.toggle("active");
	game__settings.classList.toggle("active");
	return words3;
});

topicBtns[2].addEventListener("click", () => {
	wordstex = words["kendaniner"];
	let max = wordstex.length - 1;
	let min = 0;
	let wordindex = Math.floor(Math.random() * (max - min + 1)) + min;
	words3 = wordstex[wordindex];
	topic.classList.toggle("active");
	game__settings.classList.toggle("active");
	return words3;
});

back.addEventListener("click", () => {
	topic.classList.toggle("active");
	game__settings.classList.toggle("active");
});
playerPlus.addEventListener("click", function () {
	if (Number(players.textContent) < 32)
		players.textContent = Number(players.textContent) + 1;
});

playerMinus.addEventListener("click", function () {
	if (
		Number(players.textContent) > 3 &&
		Number(players.textContent) > Number(lrtesner.textContent) + 1
	) {
		players.textContent = Number(players.textContent) - 1;
	}
});

lrtesMinus.addEventListener("click", function () {
	if (Number(lrtesner.textContent) > 1) {
		lrtesner.textContent = Number(lrtesner.textContent) - 1;
	}
});
lrtesPlus.addEventListener("click", function () {
	if (Number(lrtesner.textContent) < Number(players.textContent) - 1) {
		lrtesner.textContent = Number(lrtesner.textContent) + 1;
	}
});
minutePlus.addEventListener("click", () => {
	if (Number(time.textContent) < 60) {
		time.textContent = Number(time.textContent) + 1;
	}
});
minuteMinus.addEventListener("click", () => {
	if (Number(time.textContent) > 1) {
		time.textContent = Number(time.textContent) - 1;
	}
});

let arr = [];
let d = 0;
let g = 0;
let z = 0;

function game() {
	let min2 = 0;
	let max2 = 1;
	let det1 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
	if (d == 0) {
		arr.push("lrtes");
		arr.push(words3);
		d++;
	}
	if (
		det1 == 1 &&
		g < Number(players.textContent) - Number(lrtesner.textContent)
	) {
		mainword.textContent = words3;
		g++;
	} else if (z < Number(lrtesner.textContent)) {
		mainword.textContent = "Լրտես";
		z++;
	} else {
		mainword.textContent = words3;
		g++;
	}
	playing.classList.toggle("active");
	book.classList.toggle("active");
	j++;
	bool = false;
	if (j > Number(players.textContent)) {
		d = 0;
		g = 0;
		z = 0;
		arr = [];
		playing.classList.remove("active");
		book.classList.remove("active");
		playing1.classList.add("active");
		mainword.textContent = "";
		startGame.addEventListener("click", function () {
			this.textContent = "Ավարտել";
			this.addEventListener("click", function () {
				playing1.classList.remove("active");
				topic.classList.add("active");
			});
		});
		j = 0;
	}
}
begin.addEventListener("click", () => {
	game__settings.classList.toggle("active");
	playing.classList.toggle("active");
});
close1.addEventListener("click", () => {
	book.classList.toggle("active");
	playing.classList.toggle("active");
});
look.addEventListener("click", game);
