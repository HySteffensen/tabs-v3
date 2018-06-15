(function() {
    "use strict";

    var $ = require("./jquery");
    
    exports.initialize = function(defaultTab, queryList) {
        $(queryList).each(function(){
            $(this).removeClass("selected");
        });
        $(defaultTab).addClass("selected");
    };

}());