"use strict";
const {category = "", key = ""} = getParameter();
category === "" ? location.href = "/" : (hasKey => {
	YFoSPTA3.innerHTML += `<li class = "q6kpK1jH"><a class = "TnBfB6P0" href = "/article/?category=${category}">${([["articles", "記事"], ["contents", "コンテンツ"], ["service", "サービス"]].find(element => element[0] === category) || ["", "その他"])[1]}</a></li>`;
	(hasKey ? database.ref(`article/${key}`) : database.ref("article").orderByChild("category").equalTo(category).limitToLast(4)).once("value", snapshot => {
		const val = snapshot.val() ?? {};
		hasKey ? (() => {
			const {content = "", title = ""} = val;
			if (content !== "" && title !== "") {
				document.title = title;
				YFoSPTA3.innerHTML += `<li class = "q6kpK1jH"><a class = "TnBfB6P0" href = "/article/?category=${category}&key=${key}">${title}</a></li>`;
				FE9UGRQR.innerHTML = `<section id = "WSeaG6gm">${content}</section>`;
			}
		})() : (() => Object.keys(val).forEach(createListItem, val))();
		MsDGo7Eg.style.display = "none";
		m7eOG5wP.style.animation = "none";
	});
})(key !== "");
