// ==UserScript==
// @name         ACS ezproxy
// @namespace    http://davis-foster.co.uk/
// @version      0.1
// @description  Redirect to https://pubs-acs-org.ezproxy.staffs.ac.uk/ when visiting https://pubs.acs.org/
// @author       Dominic Davis-Foster
// @match        https://pubs.acs.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.href = "https://"+window.location.hostname.replace(/\./g,'-')+".ezproxy.staffs.ac.uk"+window.location.pathname+window.location.search;
})();