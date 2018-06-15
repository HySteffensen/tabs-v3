(function() {
	"use strict";

	var assert = require("./assert");
	var tabs = require("./tabs.js");

	describe("Tabs", function() {
		var container;

		beforeEach(function() {
			container = document.createElement("div");
			document.body.appendChild(container);
			container.setAttribute("class", "container");
		});

		afterEach(function() {
			removeElement(container);
		});

		it("it deselects multiple tabs and selects default tab to a previously existing class", function() {
			var superContainer = addElement("div");
			superContainer.setAttribute("class", "super_container");
			var tabsContainer = addElement("div");
			tabsContainer.setAttribute("class", "tabs_container");
			var panelsContainer = addElement("div");
			panelsContainer.setAttribute("class", "panels_container");
			var panels = addElement("div");
			panels.setAttribute("class", "panels");
			var panel = addElement("div");
			panel.setAttribute("class", "panel");
			
			var tab1 = addElement("span");
			var defaultTab = addElement("span");
			var tab3 = addElement("span");

			var content1 = addElement("div");
			var content2 = addElement("div");
			var content3 = addElement("div");

			superContainer.appendChild(tabsContainer);
			tabsContainer.appendChild(tab1);
			tabsContainer.appendChild(defaultTab);
			tabsContainer.appendChild(tab3);

			superContainer.appendChild(panelsContainer);
			panelsContainer.appendChild(panels);
			panels.appendChild(panel);

			panel.appendChild(content1);
			panel.appendChild(content2);
			panel.appendChild(content3);

			tab1.setAttribute("class", "previouslyExistingClass");
			defaultTab.setAttribute("class", "previouslyExistingClass");
			tab3.setAttribute("class", "previouslyExistingClass");

			content1.setAttribute("class", "previouslyExistingClass");
			content2.setAttribute("class", "previouslyExistingClass");
			content3.setAttribute("class", "previouslyExistingClass");

			tabs.initialize(defaultTab, "super_container tabs_container span", ".super_container .panels_container div");

			assert.equal(tab1.getAttribute("class"), "previouslyExistingClass", "tab 1 should not be selected");
			assert.equal(defaultTab.getAttribute("class"), "previouslyExistingClass selected", "default tab should be selected");
			assert.equal(tab3.getAttribute("class"), "previouslyExistingClass", "tab3 should not be selected");

			assert.equal(content1.getAttribute("class"), "previouslyExistingClass", "content 1 should not be visible");
			assert.equal(content2.getAttribute("class"), "previouslyExistingClass visible", "content 2 should be visible");
			assert.equal(content3.getAttribute("class"), "previouslyExistingClass", "content 3 should not be visible");
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