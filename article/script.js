/**
 * @overview script.js 記事ページの制御スクリプト
 * @since 2020/7/28
 * @version 1.0
 * @author Refrain Tech <refrain.tech@gmail.com>
 * @copyright (c) Copyright 2020 refrain.tech All Rights Reserved
 */
(() => {
	"use strict";
	const { category = "", key = "" } = getParameter();
	/** @summary 記事のカテゴリーが一覧に存在するか判定 */
	const currentCategory = categories.find(currentValue => currentValue[0] === category);
	/** @summary 一覧に存在しなければメインページへ遷移 */
	if (currentCategory === undefined) return location.href = "/";
	YFoSPTA3.innerHTML += `<li class = "q6kpK1jH"><a class = "TnBfB6P0" href = "/article/?category=${category}">${currentCategory[1]}</a></li>`;
	const ref = key === "" ? database.ref("article").orderByChild("category").equalTo(category).limitToLast(4) : database.ref(`article/${key}`);
	/** @event ref#value */
	ref.once("value", snapshot => {
		const val = snapshot.val() ?? {};
		if (key === "") Object.keys(val).forEach(createListItem, val);
		else {
			const { content = "", title = "" } = val;
			if (content === "" || title === "") location.href = "/";
			else {
				document.title = title;
				YFoSPTA3.innerHTML += `<li class = "q6kpK1jH"><a class = "TnBfB6P0" href = "/article/?category=${category}&key=${key}">${title}</a></li>`;
				FE9UGRQR.innerHTML = `<section id = "WSeaG6gm">${content}</section>`;
			}
		}
		dismissDialog();
	});
})();
