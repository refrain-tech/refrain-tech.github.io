"use strict";
Element.prototype.prependChild = function(element) {
	this.insertBefore(element, this.firstChild);
};
String.prototype.pattern = function(regexp) {
	return this.replace(regexp, "") === "";
};
String.prototype.replaceAll = function(regexp, newSubstr) {
	return this.replace(new RegExp(regexp, "g"), newSubstr);
};
function createListItem(key) {
	const { category = "other", image = "/res/favicon.png", title = "", url = "" } = this[key];
	c6JO6k62.innerHTML += `<section class = "W1JhWxuv"><a class = "TVOxHpZ9" href = ${url === "" ? `/article/?category=${category}&key=${key}` : url}><h1 class = "eFcynxxU">${title}</h1><img class = "WaWu7Va9" src = ${image} /></a></section>`;
}
function dismissDialog() {
	MsDGo7Eg.style.display = "none";
	m7eOG5wP.style.animation = "none";
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
const categories = [
	["articles", "記事"],
	["contents", "コンテンツ"],
	["services", "サービス"]
];
const database = firebase.database();
