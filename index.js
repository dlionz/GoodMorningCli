//use sites.json to set the websites you want to load
'use strict';
const open = require('open');

//sites is an object from sites.js
const OpenSites = async ( sites ) => {
    if(!sites){
        console.log('Sorry there was a problem');
    }

    for (let item in sites) {
       await open(sites[item]);
    }
};

exports.OpenSites =  OpenSites;
