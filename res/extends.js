/**
 * @overview JSの標準オブジェクトのプロトタイプを拡張する
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 * @copyright (c) Copyright 2020 refrain.tech All Rights Reserved
 */
"use strict";
/**
 * @function Array#shuffle 配列をランダムな順序に入れ換える
 * @return {array<*>} 順序の入れ換えられた配列
 */
Array.prototype.shuffle = function() {
	for (let index = this.length - 1; index > 0; index --) {
		const random = (Math.random() * index) | 0;
		[this[index], this[random]] = [this[random], this[index]];
	}
};
/**
 * @function HTMLCollection#filter HTMLCollectionにフィルタリングを実行する
 * @argument {function} callback フィルタリングに使用するコールバック関数
 * @return {array<HTMLElement>} フィルタリング後の配列
 */
HTMLCollection.prototype.filter = function(callback) { return [].filter.call(this, callback) };
/**
 * @function HTMLCollection#forEach HTMLCollectionの全ての要素でcallbackを実行する
 * @argument {function} callback 実行するコールバック関数
 */
HTMLCollection.prototype.forEach = function(callback) { [].forEach.call(this, callback) };
/**
 * @function HTMLCollection#map HTMLCollectionにマッピング実行する
 * @argument {function} callback マッピングに使用するコールバック関数
 * @return {array<*>} マッピング後の配列
 */
HTMLCollection.prototype.map = function(callback) { return [].map.call(this, callback) };
/**
 * @function HTMLElement#copy HTML要素をクリップボードにコピーする
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
 * @function HTMLElement#prependChild HTML要素を指定された要素の前に追加する
 * @argument {HTMLElement} element 直前に追加される要素
 */
HTMLElement.prototype.prependChild = function(element) { this.insertBefore(element, this.firstChild) };
/**
 * @function HTMLSelectElement#getSelection select要素で選択されているoption要素を取得する
 * @return {HTMLOptionElement} 取得されたoption要素
 */
HTMLSelectElement.prototype.getSelection = function() { return this.options[this.selectedIndex] };
/**
 * @function NodeList#filter NodeListにフィルタリングを実行する
 * @argument {function} callback フィルタリングに使用するコールバック関数
 * @return {array<HTMLElement>} フィルタリング後の配列
 */
NodeList.prototype.filter = function(callback) { return [].filter.call(this, callback) };
/**
 * @function NodeList#forEach NodeListの全ての要素でcallbackを実行する
 * @argument {function} callback 実行するコールバック関数
 */
NodeList.prototype.forEach = function(callback) { [].forEach.call(this, callback) };
/**
 * @function NodeList#map NodeListにマッピングを実行する
 * @argument {function} callback マッピングに使用するコールバック関数
 * @return {array<*>} マッピング後の配列
 */
NodeList.prototype.map = function(callback) { return [].map.call(this, callback) };
/**
 * @function String#pattern 文字列が指定された文字列、正規表現と合致するか判定する
 * @argument {string|regexp} regexp 検索に使用する文字列、正規表現
 * @return {boolean} 指定された文字列、正規表現と合致するかの真偽値
 */
String.prototype.pattern = function(regexp) { return this.replace(regexp, "") === "" };
/**
 * @function String#replaceAll 文字列から指定された文字列、正規表現に合致する箇所を全て削除する
 * @argument {string|regexp} regexp 検索に使用する文字列、正規表現
 * @return {string} 指定された文字列、正規表現が削除された文字列
 */
String.prototype.replaceAll = function(regexp, newSubstr) { return this.replace(new RegExp(regexp, "g"), newSubstr) };
/**
 * @function Math.average 引数の平均値を取得する
 * @argument {*} ...values 平均値を求める値
 * @return {number} 引数の平均値
 */
Math.average = (...values) => {
	values = values.filter(isNumber);
	return Math.sum(values) / values.length;
};
/**
 * @function Math.median 引数の中央値を取得する
 * @argument {*} ...values 中央値を求める値
 * @return {number} 引数の中央値
 */
Mat.median = (...values) => {
	values = values.filter(isNumber);
	const index = Math.floor(values.length / 2);
	return values.length % 2 ? values[index] : (values[index - 1] + values[index]) / 2;
};
/**
 * @function Math.sum 引数の合計値を取得する
 * @argument {*} ...values 合計値を求める値
 * @return {number} 引数の合計値
 */
Mat.sum = (...values) => values.filter(isNumber).reduce((accumulator, currentValue) => accumulator + currentValue);
/**
 * @function window.isNumber 値が数値であるかを判定する
 * @argument {*} value 数値か判定する値
 * @return {boolean} 値が数値か否かの真偽値
 */
window.isNumber = value => typeof value === "number" && isFinite(value);
/**
 * @function XMLHttpRequest.requestSync XHRを同期処理で実行する
 * @argument {string} url リクエスト先のURL
 * @argument {object} [option = {}] リクエストに使用する値
 * @return {promise} リクエストを実行するPromiseオブジェクト
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
