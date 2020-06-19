"use strict";
Element.prototype.prependChild = function(element) {
	this.insertBefore(element, this.firstChild);
};
function createListItem(key) {
	const {category = "other", image = "", title = ""} = this[key];
	c6JO6k62.innerHTML += `<article class = "W1JhWxuv">
		<a class = "TVOxHpZ9" href = "/article/?category=${category}&key=${key}">
			<h1 class = "eFcynxxU">${title}</h1>
			${image !== "" ? `<img class = "WaWu7Va9" src = ${image} />` : ""}
		</a>
	</article>`;
}
function getParameter() {
	const parameter = {};
	location.search.slice(1).split("&").forEach(query => {
		const [key, value = ""] = query.split("=");
		parameter[key] = value;
	});
	return parameter;
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
