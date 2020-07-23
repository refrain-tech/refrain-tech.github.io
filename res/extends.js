"use strict";
HTMLElement.prototype.copy = function() {
	const range = document.createRange();
	range.selectNode(this);
	const selection = getSelection();
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
