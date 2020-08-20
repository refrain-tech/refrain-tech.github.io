"use strict";
Array.prototype.random = function() {
	return this[(Math.random() * this.length) | 0];
};
Array.prototype.shuffle = function() {
	let index = this.length;
	while (index > 0) {
		const random = (Math.random() * index --) | 0;
		[this[index], this[random]] = [this[random], this[index]];
	}
	return this;
};
HTMLElement.prototype.copy = function() {
	const range = document.createRange();
	range.selectNode(this);
	const selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand("copy");
	selection.removeAllRanges();
};
HTMLElement.prototype.prependChild = function(element) {
	this.insertBefore(element, this.firstChild);
};
HTMLSelectElement.prototype.getSelection = function() {
	return this.options[this.selectedIndex];
};
String.prototype.replaceAll = function(regexp, newSubstr) {
	return this.replace(new RegExp(regexp, "g"), newSubstr);
};
document.getQueryParameters = () => location.search.slice(1).split("&").filter(currentValue => /.+=.+/.test(currentValue)).map(currentValue => currentValue.split("=")).reduce((accumulator, currentValue) => {
	accumulator[currentValue[0]] = currentValue[1];
	return accumulator;
}, {});
Math.average = (...values) => {
	values = values.filter(isNumber);
	return Math.sum.apply(null, values) / values.length;
};
Math.median = (...values) => {
	values = values.filter(isNumber);
	const index = Math.floor(values.length / 2);
	return values.length % 2 ? values[index] : (values[index - 1] + values[index]) / 2;
};
Math.sum = (...values) => values.filter(isNumber).reduce((accumulator, currentValue) => accumulator + currentValue);
window.isNumber = value => typeof value === "number" && isFinite(value);
/*
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
*/
