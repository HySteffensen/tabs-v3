(function() {
	"use strict";

	var assert = require("./assert");
	var tabs = require("./tabs.js");

	describe("Tabs", function() {
		it("adds 'selected' class to an element", function() {
			var element = document.createElement("div");
			document.body.appendChild(element);
			tabs.initialize(element);
			assert.equal(element.getAttribute("class"), "selected");
			element.parentNode.removeChild(element);
		});

		it("adds 'selected' to a previously existing class", function() {
			var element = document.createElement("div");
			element.classList.add("previouslyExistingClass");
			document.body.appendChild(element);
			tabs.initialize(element);
			assert.equal(element.getAttribute("class"), "previouslyExistingClass selected");
			element.parentNode.removeChild(element);
		});	
		
	});
}());