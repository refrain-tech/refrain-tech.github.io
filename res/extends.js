"use strict";
Array.prototype.shuffle = function() {
	for (let index = this.length - 1; index > 0; index --) {
		const random = (Math.random() * index) | 0;
		[this[index], this[random]] = [this[random], this[index]];
	}
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
String.prototype.pattern = function(regexp) {
	return this.replace(regexp, "") === "";
};
String.prototype.replaceAll = function(regexp, newSubstr) {
	return this.replace(new RegExp(regexp, "g"), newSubstr);
};
window.isNumber = value => typeof value === "number" && isFinite(value);
XMLHttpRequest.requestSync = function(url) {
	const request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.send(null);
	return request;
};