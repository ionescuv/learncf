const routes = require('express').Router();
const STATUS_REQUESTED = "requested";
const STATUS_READY = "ready";

var dataStore = [];

// request a new meal
routes.post('/meal', (req, res) => {
    
    req.body.forEach(
        (meal) => {            
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
	for (i = 0; i < dataStore.length; i++) { 
		if (dataStore[i].status == STATUS_REQUESTED) {				
			dataStore[i].status = STATUS_READY;
			dataStore[i].chef = req.param('chef');
			break;
		}
	}
  res.status(200).json({ message: req.param('chef') });
});


module.exports = routes;