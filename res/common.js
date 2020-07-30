"use strict";
/**
 * @function createListItem Firebase Database上のデータを使用して記事の一覧に追記する
 * @argument {string} key Firebase Datebase上のデータのUID
 */
function createListItem(key) {
	const { category = "other", image = "/res/favicon.png", title = "", url = "" } = this[key];
	c6JO6k62.innerHTML += `<section class = "W1JhWxuv"><a category = ${category} class = "TVOxHpZ9" href = ${url === "" ? `/article/?category=${category}&key=${key}` : url} target = "_new"><h1 class = "eFcynxxU">${title}</h1><img class = "WaWu7Va9" src = ${image} /></a></section>`;
}
/** @function dismissDialog 読み込み中に表示されるダイアログを非表示にする */
function dismissDialog() {
	[MsDGo7Eg.style.display, m7eOG5wP.style.animation] = ["none", "none"];
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
/** @constant {array<array<string>>} categories Github Pagesで表示する記事のカテゴリー */
const categories = [
	["article", "記事"],
	["content", "コンテンツ"],
	["service", "サービス"],
	["other", "その他"]
];
