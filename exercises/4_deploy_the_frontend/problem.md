Using the same staticfile buildpack we will now deploy the frontend component of the .msg Kitchen app (located at `sources/web`). The frontend provides a simple interface for displaying and managing meals.
The frontend attemtps to connect to the REST backend (backing service) in order to retrieve the meal data. 

----------------------------------------------------------------------

## STEPS

* On your local computer navigate to the `web` folder and open the `index.html` file in a browser. Since the connection to the REST backend is not available, the frontend displays some mock meal data (French Fries and Curry Chicken :) )
* Push the application to CloudFoundry using the `web_manifest.yml` file
* Test the application in your browser (it is still running on mock data, since we have not yet configured the connection to the backing service)

## HINTS

When running in the cloud, the 2 components (web frontend and rest backend) are running in different containers. As a result it will be necessary to bind them together.  We will do that in the next exercise. 