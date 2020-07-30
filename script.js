/**
 * @overview script.js メインページの制御スクリプト
 * @since 2020/7/28
 * @version 1.0
 * @author Refrain Tech <refrain.tech@gmail.com>
 * @copyright (c) Copyright 2020 refrain.tech All Rights Reserved
 */
(() => {
	"use strict";
	const { keyword = "" } = getParameter();
	let ref = database.ref("article");
	keyword === "" ? ref = ref.limitToLast(4) : YFoSPTA3.innerHTML += `<li class = "q6kpK1jH"><a class = "TnBfB6P0" href = "/?keyword=${keyword}"><span>検索結果: ${keyword}</span></a></li>`
	/** @event ref#value */
	ref.once("value", snapshot => {
		const val = snapshot.val() ?? {};
		Object.keys(val).filter(key => keyword === "" || String(val[key].title).includes(keyword)).forEach(createListItem, val);
		dismissDialog();
	});
})();
