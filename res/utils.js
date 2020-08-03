"use strict";
/**
 * @method Array#shuffle 配列をランダムな順序に入れ換える
 * @return { Array } 順序の入れ換えられた配列
 */
Array.prototype.shuffle = function() {
	let index = this.length;
	while (index > 0) {
		const random = (Math.random() * index --) | 0;
		[this[index], this[random]] = [this[random], this[index]];
	}
	return this;
};
/**
 * @method HTMLElement#copy HTML要素をクリップボードにコピーする
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
 * @method HTMLElement#prependChild HTML要素を指定された要素の前に追加する
 * @argument { HTMLElement } element 直前に追加される要素
 */
HTMLElement.prototype.prependChild = function(element) { this.insertBefore(element, this.firstChild) };
/**
 * @method HTMLSelectElement#getSelection select要素で選択されているoption要素を取得する
 * @return { HTMLOptionElement } 取得されたoption要素
 */
HTMLSelectElement.prototype.getSelection = function() { return this.options[this.selectedIndex] };
/**
 * @method String#replaceAll 文字列から指定された文字列、正規表現に合致する箇所を全て置き換える
 * @argument { String | RegExp } regexp 検索に使用する文字列、正規表現
 * @argument { String } newSubstr 置き換え後の文字列
 * @return { String } 指定された文字列、正規表現が置き換えられた文字列
 */
String.prototype.replaceAll = function(regexp, newSubstr) { return this.replace(new RegExp(regexp, "g"), newSubstr) };
/**
 * @method document.getQueryParameters URLのパラメータをオブジェクトに変換する
 * @return { Object } パラメータをKey: Valueのペアに変換したオブジェクト
 */
document.getQueryParameters = () => location.search.slice(1).split("&").filter(currentValue => /.+=.+/.test(currentValue)).map(currentValue => currentValue.split("=")).reduce((accumulator, currentValue) => {
	accumulator[currentValue[0]] = currentValue[1];
	return accumulator;
}, {});
/**
 * @method Math.average 引数の平均値を取得する
 * @argument { ...* } values 平均値を求める値
 * @return { Number } 引数の平均値
 */
Math.average = (...values) => {
	values = values.filter(isNumber);
	return Math.sum.apply(null, values) / values.length;
};
/**
 * @method Math.median 引数の中央値を取得する
 * @argument { ...* } values 中央値を求める値
 * @return { Number } 引数の中央値
 */
Math.median = (...values) => {
	values = values.filter(isNumber);
	const index = Math.floor(values.length / 2);
	return values.length % 2 ? values[index] : (values[index - 1] + values[index]) / 2;
};
/**
 * @method Math.sum 引数の合計値を取得する
 * @argument { ...* } values 合計値を求める値
 * @return { Number } 引数の合計値
 */
Math.sum = (...values) => values.filter(isNumber).reduce((accumulator, currentValue) => accumulator + currentValue);
/**
 * @method window.isNumber 値が数値であるかを判定する
 * @argument { * } value 数値か判定する値
 * @return { Boolean } 値が数値か否かの真偽値
 */
window.isNumber = value => typeof value === "number" && isFinite(value);
/**
 * @method XMLHttpRequest.requestSync XHRを同期処理で実行する
 * @argument { String } url リクエスト先のURL
 * @argument { Object } [option = {}] リクエストに使用するオプション
 *   @property { String } [responseType = ""] レスポンス型
 *   @property { Number } [timeout = 0] タイムアウトまでの時間
 * @return { Promise } リクエストを実行するPromiseオブジェクト
 */
XMLHttpRequest.requestSync = (url, option = {}) => {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		const { responseType = "", timeout = 0 } = option;
		request.responseType = responseType;
		request.timeout = timeout;
		request.open("GET", url);
		request.addEventListener("error", event => reject(this));
		request.addEventListener("load", event => resolve(this));
		request.addEventListener("timeout", event => reject(this));
		request.send();
	});
};
