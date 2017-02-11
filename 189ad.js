// ==UserScript==
// @name         189ad
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

jiechi=document.body.getAttribute('onload');
if(/a\d\.u\(\)/.test(jiechi))
{
var d = document;
var f = d.location.href;
var jiechi_url=f + (f.indexOf("?") < 0 ? '?' : '&') + '_t_t_t=' + Math.random();
window.location.href=jiechi_url;
}
