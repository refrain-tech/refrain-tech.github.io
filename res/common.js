"use strict";
function createListItem(key) {
	const { category = "other", image = "/res/favicon.png", title = "", url = "" } = this[key];
	c6JO6k62.innerHTML += `<section class = "W1JhWxuv"><a category = ${category} class = "TVOxHpZ9" href = ${url === "" ? `/article/?category=${category}&key=${key}` : url} target = "_new"><h1 class = "eFcynxxU">${title}</h1><img class = "WaWu7Va9" src = ${image} /></a></section>`;
}
function dismissDialog() {
	[MsDGo7Eg.style.display, m7eOG5wP.style.animation] = ["none", "none"];
}
function getParameter() {
	return location.search.slice(1).split("&").filter(currentValue => /.+=.+/.test(currentValue)).map(currentValue => currentValue.split("=")).reduce((accumulator, currentValue) => {
		accumulator[currentValue[0]] = currentValue[1];
		return accumulator;
	}, {});
}
mWYXHFlu.addEventListener("keydown", event => {
	switch (event.keyCode) {
		case 13:
			location.href = `/?keyword=${mWYXHFlu.value}`;
			event.preventDefault();
			break;
	}
});
SYaLdKxJ.addEventListener("click", event => location.href = `/?keyword=${mWYXHFlu.value}`);
const categories = [
	["articles", "記事"],
	["contents", "コンテンツ"],
	["services", "サービス"]
];
