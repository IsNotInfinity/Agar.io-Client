// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://agar.io/cigar2
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

if (location.host === 'agar.io' && location.href !== 'https://agar.io/cigar2') {
    location.href = 'https://agar.io/cigar2';
    return;
};

GM_xmlhttpRequest({
    method: "GET",
    url: "http://localhost:3000/",
    onload: function($t){
        document.open();
        document.write($t.responseText);
        document.close();
    }
});
