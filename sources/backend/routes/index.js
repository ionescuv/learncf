const routes = require('express').Router();
const STATUS_REQUESTED = "requested";
const STATUS_READY = "ready";

var dataStore = [];

// request a new meal
routes.post('/meal', (req, res) => {
    
    req.body.forEach(
        (meal) => {            
			console.log("New meal ordered: "+meal.name);
            dataStore.push({name: meal.name, status: STATUS_REQUESTED, chef:"N/A"});
			}
		);
	res.status(200).end('{"status": "ok"}');    
});

// get all meals
routes.get('/meal', (req, res) => {
    res.send(dataStore);
});

// prepare a meal
routes.get('/prepareFood', (req, res) => {
	meal = "NONE";
	
	console.log("Chef reporting for duty: "+req.param('chef'));
	for (i = 0; i < dataStore.length; i++) { 
		if (dataStore[i].status == STATUS_REQUESTED) {				
			dataStore[i].status = STATUS_READY;
			dataStore[i].chef = req.param('chef');
			meal = dataStore[i].name;
			console.log("Food is ready: " + meal);
			break;
		}
	}
    
  res.status(200).json({ message: meal });
});


module.exports = routes;