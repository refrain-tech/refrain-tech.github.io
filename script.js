"use strict";
const {keyword = ""} = getParameter();
const ref = database.ref("article");
(() => keyword === "" ? ref : (function() {
	YFoSPTA3.innerHTML += `<li class = "q6kpK1jH"><a class = "TnBfB6P0" href = "/?keyword=${keyword}"><span>検索結果: ${keyword}</span></a></li>`;
	return ref.limitToLast(4);
})())().once("value", snapshot => {
	const val = snapshot.val();
	if (val !== null) Object.keys(val).filter(key => keyword === "" || String(val[key].title).includes(keyword)).forEach(createListItem, val);
	MsDGo7Eg.style.display = "none";
	m7eOG5wP.style.animation = "none";
});
