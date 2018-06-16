(function() {
    "use strict";

    var $ = require("./jquery");
    
    exports.initialize = function(defaultTab, tabsQueryList, contentQueryList) {
        var index = $(defaultTab).index();
        
        selectTab(defaultTab, tabsQueryList);
        showContent(index, contentQueryList);
    };
    
    function selectTab(defaultTab, tabsQueryList) {
        $(tabsQueryList).each(function(){
            $(this).removeClass("selected");
        });
        $(defaultTab).addClass("selected");
    }
    
    function showContent(index, contentQueryList) {
        $(contentQueryList).each(function() {
            $(this).removeClass("visible");
        });
        $(contentQueryList + ":nth-child(" + (index + 1) + ")").addClass('visible');
    }

}());