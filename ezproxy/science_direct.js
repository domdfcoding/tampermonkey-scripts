// ==UserScript==
// @name         Science Direct ezproxy
// @namespace    http://davis-foster.co.uk/
// @version      0.1
// @description  Redirect to https://www-sciencedirect-com.ezproxy.staffs.ac.uk/ when visiting https://www.sciencedirect.com/
// @author       Dominic Davis-Foster
// @match        https://www.sciencedirect.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.href = "https://"+window.location.hostname.replace(/\./g,'-')+".ezproxy.staffs.ac.uk"+window.location.pathname+window.location.search;
})();