var request = require('request');
var async = require("async");
const SCHNITZEL = "Schnitzel";
const NONE = "NONE";

var serviceURL;
var my;

var applicationInstanceIndex = process.env.CF_INSTANCE_INDEX || 1;
var chefs = [ 'Tony' , 'Giorgio', 'Larry' ]; // CF_INSTANCE_INDEX
var currentChef = chefs[applicationInstanceIndex % 3];

console.log("Starting up chef "+ applicationInstanceIndex + " : "+ currentChef);

var services = JSON.parse(process.env.VCAP_SERVICES)["user-provided"];

console.log("Parsing environment to search for rest backend URL..");

for (i=0; i < services.length; i++)
{
	if (services[i].name == "backend")
	{
		serviceURL = services[i].credentials.url;		
		break;
	}
}
if (!serviceURL)
{
	console.error("No service URL with ID `backend` could be identified. Is the service bound to the app?");
	return;
}
else
	console.log("Found service URL:" + serviceURL);
	
endpoint = serviceURL + "prepareFood?chef=" + currentChef;

async.forever(

    // http client
    function(next) {        
		console.log("Chef " + currentChef + " getting ready...");
        request(endpoint, function (error, response, body) {
			
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