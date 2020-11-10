// ==UserScript==
// @name         Wiley ezproxy full text
// @namespace    http://davis-foster.co.uk/
// @version      0.1
// @description  Redirect to the full text version of articles at https://onlinelibrary-wiley-com.ezproxy.staffs.ac.uk/ when visiting https://onlinelibrary.wiley.com/
// @author       Dominic Davis-Foster
// @match        https://onlinelibrary.wiley.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.href = "https://"+window.location.hostname.replace(/\./g,'-')+".ezproxy.staffs.ac.uk"+window.location.pathname.replace(/abs/,'full')+window.location.search;
})();