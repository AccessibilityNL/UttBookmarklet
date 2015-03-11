"use strict";

define(["./userkey"], function (userkey) {
    var launcher = {};

    launcher.create = function (options) {
        /*jshint scripturl:true*/
        var bookmarkletString = "javascript:";
        var elm = options.elm;

        // Catch input errors
        if (elm.nodeName.toLowerCase() !== "a") {
            throw new Error("Bookmarklets launcher requires an <a /> element.");
        }

        // Prevent the bookmarklet from launching directly
        elm.addEventListener("click", function (event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        });

        bookmarkletString += launcher.getBookmarkletString(options);
        elm.setAttribute("href", bookmarkletString);
    };

    launcher.getBookmarkletString = function (options) {
        var host = options.host || window.location.hostname;
        var port = options.port || ":" + window.location.port;
        var scriptPath = options.scriptPath || "bookmarklet.js";
        var userKey = options.userKey || userkey.getKey();
        var folder = options.folder || "/";
        var modules = options.modules || [];

        var query = "?key=" + userKey + "&mds=" + modules.join();

        var url = "//" + host + port + folder + scriptPath + query;

        return "(function(){" + "var d=document,i=\"utt-bookmarklet\",a=\"setAttribute\";" + "if(!d.getElementById(i)){" + "var s=d.createElement(\"script\");" + "s[a](\"src\",\"" + url + "\");" + "s[a](\"id\",i);" + "d.body.appendChild(s);" + "}" + "}());";
    };

    return launcher;
});
//# sourceMappingURL=main.js.map