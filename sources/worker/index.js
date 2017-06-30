var request = require('request');
var async = require("async");
const SCHNITZEL = "Schnitzel";

//var url = process.argv[2];
//if (!url)
	url = "https://rest-backend-unheard-nonporness.cfapps.eu10.hana.ondemand.com/prepareFood?chef=Robo";

var applicationInstanceIndex = 10;
var chefs = [ 'Tony' , 'Giorgio', 'Larry' ]; // CF_INSTANCE_INDEX
var currentChef = chefs[applicationInstanceIndex % 3];

async.forever(

    // http client
    function(next) {        
		process.stdout.write("Chef " + currentChef + " getting ready...");
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
				if (request.body == SCHNITZEL) { // OH NO, SCHNITZEL
					val = 1/0;
				}
				else {
					console.log("Food processed succesfully: %s", response.body);
				}                
            } else {
                console.log(error);
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