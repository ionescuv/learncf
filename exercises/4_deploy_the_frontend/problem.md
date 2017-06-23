Using the same staticfile buildpack we will now deploy the frontend component of the .msg Kitchen app.
The frontend attemtps to connect to the REST backend (backing service) in order to retrieve the meal data. When running in the cloud, the URL to the REST service will be configured through environment variables of the NGINX server. (see `nginx.conf` to see how this is achieved)

----------------------------------------------------------------------

## STEPS

* In the `web` folder, open the `index.html` file. Since the connection to the REST backend is not available, the frontend displays some mock data (French Fries and Curry Chicken :) )
* Push the application to CloudFoundry using the `web_manifest.yml` file
* Test the application in your browser (it is still running on mock data, since we have not yet configured the connection to the backing service)

## HINTS

Due to the existence of the `index.html` file, CloudFoundry will automatically infer that a staticfile buildpack is required. As a result a new container will be created, running an NGINX web server, which will serve out our `index.html` file.