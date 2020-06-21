"use strict";
Element.prototype.prependChild = function(element) {
	this.insertBefore(element, this.firstChild);
};
function createListItem(key) {
	const {category = "other", image = "/res/favicon.png", title = ""} = this[key];
	c6JO6k62.innerHTML += `<section class = "W1JhWxuv"><a class = "TVOxHpZ9" href = "/article/?category=${category}&key=${key}"><h1 class = "eFcynxxU">${title}</h1>${image !== "" ? `<img class = "WaWu7Va9" src = ${image} />` : ""}</a></section>`;
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
firebase.initializeApp({
	apiKey: "AIzaSyC0Q1fvsfu1XevwPMJCrDx7YWBnpIwAxoo",
	appId: "1:832323625618:web:0ad8ba9f5f494b41b7bc4b",
	authDomain: "refrain-tech.firebaseapp.com",
	databaseURL: "https://refrain-tech.firebaseio.com",
	measurementId: "G-1Q8CEKJEJ6",
	messagingSenderId: "832323625618",
	projectId: "refrain-tech",
	storageBucket: "refrain-tech.appspot.com"
});
const database = firebase.database();
const categories = [
	["articles", "記事"],
	["contents", "コンテンツ"],
	["services", "サービス"]
];
