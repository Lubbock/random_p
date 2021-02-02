// ==UserScript==
// @name         随机数
// @namespace    http://tampermonkey.net/
// @description     Test
// @version         0.1
// @author          author
// @include         *
// @exclude         file://*
// @grant           GM_registerMenuCommand
// @run-at          context-menu
// ==/UserScript==]


(function() {
       'use strict';
    function copyToClip(content) {
        var aux = document.createElement("input");
        aux.setAttribute("value", content);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
    }
    function rot13(str) {
        //
        return str.replace(/\w/g, (s) => {
            var s_code = s.charCodeAt(0);
            if (s_code <= 77) {
                return String.fromCharCode(s_code + 13);
            } else{
                return String.fromCharCode(s_code - 13);
            }

        });
    }
    var salt="*?"
   console.log(location.host)
   var wm = salt+location.host.substring(4)
   copyToClip(rot13(wm))
})();
