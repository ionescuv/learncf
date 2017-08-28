Let's push our first app to CloudFoundry. CloudFoundry supports multiple runtimes through the use of buildpacks. This first application will be a static html page, deployed using the CF `staticfile_buildpack`. This means that CloudFoundry will be running a simple web server for this app.

----------------------------------------------------------------------

## STEPS

* Create a new folder `web` and put a file named `index.html` in it
* Put some static content in the .html file(something like "Hello World!")
* Use `cf push` to deploy the application to Cloud Foundry using the app-name `web`. When pushing make sure to limit the memory of the application to `128M` (no need to waste memory) AND use the `--random-route` option, which appends some random words to the URL of your app (making sure it is unique)
* Copy the generated random URL of your app and open it in your browser
* Delete the app from CloudFoundry

## HINTS

Due to the existence of the `index.html` file, CloudFoundry will automatically infer that a staticfile buildpack is required. In case this should not happen, use the option `-b staticfile_buildpack` when pushing the app. As a result a new container will be created, running an NGINX web server, which will serve out our `index.html` file.