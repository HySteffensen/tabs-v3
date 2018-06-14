(function() {
	"use strict";

	var assert = require("./assert");
	var tabs = require("./tabs.js");

	describe("Tabs", function() {
		it("adds 'selected' class to an element", function() {
			var element = addElement("div");
			tabs.initialize(element);
			assert.equal(element.getAttribute("class"), "selected");
			element.parentNode.removeChild(element);
		});

		it("adds 'selected' to a previously existing class", function() {
			var element = addElement("div");
			element.setAttribute("class", "previouslyExistingClass");
			tabs.initialize(element);
			assert.equal(element.getAttribute("class"), "previouslyExistingClass selected");
			element.parentNode.removeChild(element);
		});	

		function addElement(tagName) {
			var element = document.createElement(tagName);
			document.body.appendChild(element);
			return element;
		}
		
	});
}());