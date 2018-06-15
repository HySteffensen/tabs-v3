(function() {
    "use strict";

    var $ = require("./jquery");
    
    exports.initialize = function(defaultTab, tabsQueryList, contentQueryList ) {
        var index;

        // selects default tab 
        // TODO factor out to its own function
        $(tabsQueryList).each(function(){
            $(this).removeClass("selected");
        });
        index = $(defaultTab).index();
        $(defaultTab).addClass("selected");

        // shows default content 
        // TODO factor out to its own function
        $(contentQueryList).each(function() {
            $(this).removeClass("visible");
        });
        $(contentQueryList + ":nth-child(" + (index + 1) + ")").addClass('visible');
    };

}());