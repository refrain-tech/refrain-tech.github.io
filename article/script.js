"use strict";
const {category = "", key = ""} = getParameter();
if (category === "") location.href = "/";
else if (key === "") database.ref("article").orderByChild("category").equalTo(category).limitToLast(4).once("value", snapshot => {
	const val = snapshot.val();
	if (val !== null) {
		YFoSPTA3.innerHTML += `<li class = "q6kpK1jH"><a class = "TnBfB6P0" href = "/article/?category=${category}">${category === "application" ? "アプリケーション" : category === "service" ? "サービス" : "その他"}</a></li>`;
		Object.keys(val).forEach(createListItem, val);
	}
	MsDGo7Eg.style.display = "none";
	m7eOG5wP.style.animation = "none";
});
else database.ref(`article/${key}`).once("value", snapshot => {
	const {content, title} = snapshot.val() || {};
	if (content) {
		document.title = title;
		YFoSPTA3.innerHTML += `<li class = "q6kpK1jH"><a class = "TnBfB6P0" href = "/article/?category=${category}">${category === "application" ? "アプリケーション" : category === "service" ? "サービス" : "その他"}</a></li>`;
		YFoSPTA3.innerHTML += `<li class = "q6kpK1jH"><a class = "TnBfB6P0" href = "/article/?category=${category}&key=${key}">${title}</a></li>`;
		FE9UGRQR.innerHTML = `<section id = "WSeaG6gm">${content}</section>`;
	}
	MsDGo7Eg.style.display = "none";
	m7eOG5wP.style.animation = "none";
});