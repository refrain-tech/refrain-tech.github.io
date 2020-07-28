/**
 * @overview JSの標準オブジェクトのプロトタイプを拡張する
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 * @copyright (c) Copyright 2020 refrain.tech All Rights Reserved
 */
"use strict";
/**
 * @function Array#shuffle 配列をランダムな順序に入れ換えます
 * @return {array<*>} 順序の入れ換えられた配列
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 */
Array.prototype.shuffle = function() {
	for (let index = this.length - 1; index > 0; index --) {
		const random = (Math.random() * index) | 0;
		[this[index], this[random]] = [this[random], this[index]];
	}
};
/**
 * @function HTMLCollection#filter HTMLCollectionにフィルタリングを実行します
 * @argument {function} callback フィルタリングに使用するコールバック関数
 * @return {array<HTMLElement>} フィルタリング後の配列
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 */
HTMLCollection.prototype.filter = function(callback) { return [].filter.call(this, callback) };
/**
 * @function HTMLCollection#forEach HTMLCollectionの全ての要素でcallbackを実行します
 * @argument {function} callback 実行するコールバック関数
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 */
HTMLCollection.prototype.forEach = function(callback) { [].forEach.call(this, callback) };
/**
 * @function HTMLCollection#map HTMLCollectionにマッピング実行します
 * @argument {function} callback マッピングに使用するコールバック関数
 * @return {array<*>} マッピング後の配列
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 */
HTMLCollection.prototype.map = function(callback) { return [].map.call(this, callback) };
/**
 * @function HTMLElement#copy HTML要素をクリップボードにコピーします
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 */
HTMLElement.prototype.copy = function() {
	const range = document.createRange();
	range.selectNode(this);
	const selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand("copy");
	selection.removeAllRanges();
};
/**
 * @function HTMLElement#prependChild HTML要素を指定された要素の前に追加します
 * @argument {HTMLElement} element 直前に追加される要素
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 */
HTMLElement.prototype.prependChild = function(element) { this.insertBefore(element, this.firstChild) };
/**
 * @function HTMLSelectElement#getSelection select要素で選択されているoption要素を取得します
 * @return {HTMLOptionElement} 取得されたoption要素
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 */
HTMLSelectElement.prototype.getSelection = function() { return this.options[this.selectedIndex] };
/**
 * @function NodeList#filter NodeListにフィルタリングを実行します
 * @argument {function} callback フィルタリングに使用するコールバック関数
 * @return {array<HTMLElement>} フィルタリング後の配列
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 */
NodeList.prototype.filter = function(callback) { return [].filter.call(this, callback) };
/**
 * @function NodeList#forEach NodeListの全ての要素でcallbackを実行します
 * @argument {function} callback 実行するコールバック関数
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 */
NodeList.prototype.forEach = function(callback) { [].forEach.call(this, callback) };
/**
 * @function NodeList#map NodeListにマッピング実行します
 * @argument {function} callback マッピングに使用するコールバック関数
 * @return {array<*>} マッピング後の配列
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 */
NodeList.prototype.map = function(callback) { return [].map.call(this, callback) };
/**
 * @function String#pattern 文字列が指定された文字列、正規表現と合致するかを判定します
 * @argument {string|regexp} regexp 検索に使用する文字列、正規表現
 * @return {boolean} 指定された文字列、正規表現と合致するかの真偽値
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 */
String.prototype.pattern = function(regexp) { return this.replace(regexp, "") === "" };
/**
 * @function String#replaceAll 文字列から指定された文字列、正規表現に当てはまる箇所を全て削除します
 * @argument {string|regexp} regexp 検索に使用する文字列、正規表現
 * @return {string} 指定された文字列、正規表現が削除された文字列
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 */
String.prototype.replaceAll = function(regexp, newSubstr) { return this.replace(new RegExp(regexp, "g"), newSubstr) };
/**
 * @function window.isNumber 値が数値であるかを判定します
 * @argument {*} value 数値か判定する値
 * @return {boolean} 値が数値か否かの真偽値
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 */
window.isNumber = value => typeof value === "number" && isFinite(value);
/**
 * @function XMLHttpRequest.requestSync XHRを同期処理で実行します
 * @argument {string} url リクエスト先のURL
 * @argument {object} [option = {}] リクエストに使用する値
 * @return {promise} リクエストを実行するPromiseオブジェクト
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 */
XMLHttpRequest.requestSync = (url, option = {}) => {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		const { responseType = "", timeout = 5000 } = option;
		request.responseType = responseType;
		request.timeout = timeout;
		request.open("GET", url);
		request.addEventListener("error", event => reject(this));
		request.addEventListener("load", event => resolve(this));
		request.addEventListener("timeout", event => reject(this));
		request.send();
	});
};
