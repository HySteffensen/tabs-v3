(function() {
    "use strict";
    
    exports.initialize = function(defaultTab, tabList) {
        tabList.forEach(function(tab) {
            tab.classList.remove("selected");
        });
        defaultTab.classList.add("selected");
    };

}());