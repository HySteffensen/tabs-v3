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
			// removeElement(container);
		});

		it("it deselects multiple tabs and selects default tab to a previously existing class", function() {
			var superContainer = addElement("div");
			superContainer.setAttribute("class", "super_container");
			var tabsContainer = addElement("div");
			tabsContainer.setAttribute("class", "tabs_container");
			
			var tab1 = addElement("span");
			var defaultTab = addElement("span");
			var tab3 = addElement("span");

			superContainer.appendChild(tabsContainer);
			tabsContainer.appendChild(tab1);
			tabsContainer.appendChild(defaultTab);
			tabsContainer.appendChild(tab3);

			tab1.setAttribute("class", "previouslyExistingClass");
			defaultTab.setAttribute("class", "previouslyExistingClass");
			tab3.setAttribute("class", "previouslyExistingClass");

			tabs.initialize(defaultTab, "super_container tabs_container span" );

			assert.equal(tab1.getAttribute("class"), "previouslyExistingClass", "tab 1 should not be selected");
			assert.equal(defaultTab.getAttribute("class"), "previouslyExistingClass selected", "default tab should be selected");
			assert.equal(tab3.getAttribute("class"), "previouslyExistingClass", "tab3 should not be selected");
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