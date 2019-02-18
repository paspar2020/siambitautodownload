// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        <$URL$>
// @grant        none
// ==/UserScript==
var str = window.location.search;
var strsub = window.location.search.substring(str.indexOf('?id')+4,str.indexOf('&'));
if (strsub >= 7){sndReq('action=say_thank&id='+strsub, 'saythankup');

var rawtext = document.documentElement.innerHTML.indexOf("downloadnew.php?id=");
var rawtext2 = document.documentElement.innerHTML.indexOf("Download this file");
var res = document.documentElement.innerHTML.substring(rawtext, rawtext2-7);
window.location ="https://www.siambit.me/"+res;
document.title = "Download started";
                }
if (strsub >= 7){
if(document.title != "Download started"){
location.reload();
}
}
