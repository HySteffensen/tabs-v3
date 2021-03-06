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
			var elementClass = testSetup();

			tabs.initialize(elementClass.defaultTab, "super_container tabs_container span", ".super_container .panels_container div");

			assert.equal(elementClass.tab1.getAttribute("class"), "previouslyExistingClass", "tab 1 should not be selected");
			assert.equal(elementClass.defaultTab.getAttribute("class"), "previouslyExistingClass selected", "default tab should be selected");
			assert.equal(elementClass.tab3.getAttribute("class"), "previouslyExistingClass", "tab3 should not be selected");

			assert.equal(elementClass.content1.getAttribute("class"), "previouslyExistingClass", "content 1 should not be visible");
			assert.equal(elementClass.content2.getAttribute("class"), "previouslyExistingClass visible", "content 2 should be visible");
			assert.equal(elementClass.content3.getAttribute("class"), "previouslyExistingClass", "content 3 should not be visible");
		});	

		function addElement(tagName) {
			var element = document.createElement(tagName);
			container.appendChild(element);
			
			return element;
		}

		function removeElement(element) {
			element.parentNode.removeChild(element);
		}

		function createTab() {
			var tab = addElement("span");
			tab.innerHTML = "tab";

			return tab;
		}

		function createTabContent() {
			var content = addElement("div");
			content.innerHTML = "content";

			return content;
		}

		function createContainer(className) {
			var container = addElement("div");
			container.setAttribute("class", className);

			return container;
		}

		function testSetup() {
			// container setup
			var superContainer = createContainer("super_container");
			var tabsContainer = createContainer("tabs_container");
			var panelsContainer = createContainer("panels_container");
			var panels = createContainer("panels");
			var panel = createContainer("panels");
			
			// tab creation
			var tab1 = createTab();
			var defaultTab = createTab();
			var tab3 = createTab();

			// content creation
			var content1 = createTabContent();
			var content2 = createTabContent();
			var content3 = createTabContent();

			// append tabsContainer to superContainer
			superContainer.appendChild(tabsContainer);
			tabsContainer.appendChild(tab1);
			tabsContainer.appendChild(defaultTab);
			tabsContainer.appendChild(tab3);

			// append panelsContainer to superContainer
			superContainer.appendChild(panelsContainer);
			panelsContainer.appendChild(panels);
			panels.appendChild(panel);

			// append content to panel
			panel.appendChild(content1);
			panel.appendChild(content2);
			panel.appendChild(content3);

			tab1.setAttribute("class", "previouslyExistingClass");
			defaultTab.setAttribute("class", "previouslyExistingClass");
			tab3.setAttribute("class", "previouslyExistingClass");

			content1.setAttribute("class", "previouslyExistingClass");
			content2.setAttribute("class", "previouslyExistingClass");
			content3.setAttribute("class", "previouslyExistingClass");

			var elementClass = {};
			elementClass.tab1 = tab1;
			elementClass.defaultTab = defaultTab;
			elementClass.tab3 = tab3;

			elementClass.content1 = content1;
			elementClass.content2 = content2;
			elementClass.content3 = content3;

			return elementClass;
		}
		
	});
}());