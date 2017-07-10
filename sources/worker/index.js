var request = require('request');
var async = require("async");
const SCHNITZEL = "Schnitzel";
const NONE = "NONE";

// Bring in the module providing the wrapper for cf env
var cfenvWr = require('./cfenv-wrapper');

// get the cloud foundry environment variables
var appEnv = cfenvWr.getAppEnv();
var my;

var applicationInstanceIndex = process.env.CF_INSTANCE_INDEX || 1;
console.log("Starting up chef "+ applicationInstanceIndex);
var chefs = [ 'Tony' , 'Giorgio', 'Larry' ]; // CF_INSTANCE_INDEX
var currentChef = chefs[applicationInstanceIndex % 3];

//var url = process.argv[2];
//if (!url)
	url = "https://rest-backend-unheard-nonporness.cfapps.eu10.hana.ondemand.com/prepareFood?chef=" + currentChef;


async.forever(

    // http client
    function(next) {        
		console.log("Chef " + currentChef + " getting ready...");
        request(url, function (error, response, body) {
			
            if (!error && response.statusCode == 200) {
				payload = JSON.parse(body);
				if (payload.message == SCHNITZEL) { // OH NO, SCHNITZEL
					val = my.undefined.attribute/0;
				}
				else {
					if (payload.message != NONE)
						console.log("Food processed succesfully: %s", payload.message);
				}                
            } else {
                console.error(error);
            };
            //Repeat after the delay
            setTimeout(function() {
                next();
            }, 10000)
        } );
    },
    function(err) {
        console.error(err);
    }
);