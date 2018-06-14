(function() {
	"use strict";

	var assert = require("./assert");
	var tabs = require("./tabs.js");

	describe("Tabs", function() {
		var container;

		beforeEach(function() {
			container = document.createElement("div");
			document.body.appendChild(container);
		});

		afterEach(function() {
			removeElement(container);
		});

		it("adds 'selected' class to an element", function() {
			var element = addElement("div");
			tabs.initialize(element);
			assert.equal(element.getAttribute("class"), "selected");
		});

		it("adds 'selected' to a previously existing class", function() {
			var element = addElement("div");
			element.setAttribute("class", "previouslyExistingClass");
			tabs.initialize(element);
			assert.equal(element.getAttribute("class"), "previouslyExistingClass selected");
		});	

		function addElement(tagName) {
			var element = document.createElement(tagName);
			container.appendChild(element);
			return element;
		}

		function removeElement(element) {
			element.parentNode.removeChild(element);
		}
		
	});
}());