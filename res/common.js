/**
 * @overview common.js Github Pages内で共通で使用する関数・変数を実装する
 * @since 2020/7/28
 * @version 1.0
 * @author Refrain Tech <refrain.tech@gmail.com>
 * @copyright (c) Copyright 2020 refrain.tech All Rights Reserved
 */
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
/**
 * @function getParameter URLのパラメータをオブジェクトに変換する
 * @return {object<string, string>} パラメータをKey: Valueのペアに変換したオブジェクト
 */
function getParameter() {
	return location.search.slice(1).split("&").filter(currentValue => /.+=.+/.test(currentValue)).map(currentValue => currentValue.split("=")).reduce((accumulator, currentValue) => {
		accumulator[currentValue[0]] = currentValue[1];
		return accumulator;
	}, {});
}
/** @event mWYXHFlu#keydown */
mWYXHFlu.addEventListener("keydown", event => {
	switch (event.keyCode) {
		case 13:
			location.href = `/?keyword=${mWYXHFlu.value}`;
			event.preventDefault();
			break;
	}
});
/** @event SYaLdKxJ#click */
SYaLdKxJ.addEventListener("click", event => location.href = `/?keyword=${mWYXHFlu.value}`);
/** @constant {array<array<string>>} categories Github Pagesで表示する記事のカテゴリー */
const categories = [
	["article", "記事"],
	["content", "コンテンツ"],
	["service", "サービス"],
	["other", "その他"]
];
