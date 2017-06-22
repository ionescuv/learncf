Let's push our first app to CloudFoundry. The application will be a static html page, deployed using the CF `staticfile_buildpack`.

----------------------------------------------------------------------

## STEPS

* Create a new folder `web` and put a file named `index.html` in it
* Put some static content in the .html file(something like "Hello World!")
* Use `cf push` to deploy the application to Cloud Foundry using the app-name `web`. Limit the memory of the application to `128M`

## HINTS

Due to the existence of the `index.html` file, CloudFoundry should automatically infer that a staticfile buildpack is required. As a result a new container will be created, running an instance of the NGINX web server, which will serve out our `index.html` file.