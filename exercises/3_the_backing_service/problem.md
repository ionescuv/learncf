Since 12factor processes should be stateless, they must use backing services such as databases or memory caches in order to store their "state" when necessary.
While CloudFoundry platforms provide out-of-the-box services that can be used (see `cf marketplace`), in this example we will define our own `user-provided-service`, to serve as a memory cache for our demo app.

## THE SERVICE API

Since we are not currently focusing on the actual development, use the provided backing service implementation. Folder `sources/backend`
The service provides endpoints for placing and retrieving meal orders, and for preparing a meal:

```
GET <URL>/meal
```
Retrieves the list of meals

```
POST <URL>/meal
[ 
	{
		meal: meal1
	},
	{
		meal: meal2
	},
	..
]
```

Appends new meals to the order list

```
GET <URL>/prepareFood?chef=<chefName>
```

Puts the chef to work. `<chefName>` cooks the first unprepared meal in the list


----------------------------------------------------------------------

## STEPS

* Instead of manually passing command-line arguments to the `cf push` instruction, manifest files can be used. Check out what options have been provided in `backend_manifest.yml`
* Push the application to CloudFoundry using this manifest file
* The application uses a random route. Copy the generated URL and verify the endpoints using a browser/postman: Create a new meal of your choice (POST) and check if you can then read it (GET)

