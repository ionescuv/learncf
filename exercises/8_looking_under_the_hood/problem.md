We now have a running environment, but what if we want to analyze the behavior in more detail (or debug an error), we will have to look under the hood, which means checking the log stream. In CloudFoundry logs can be tailed directly using the CLI (`cf logs <app-name>`), but in our example we are going to use Papertrail. Papertrail is a 3rd party tool that we will configure as a log "drain" for our applications, meaning that any content written to `stdout` will be redirected by CloudFoundry to the Papertrail endpoint provided by us.

----------------------------------------------------------------------

## STEPS

* Create a Papertrail account, login to it and define a new source system for your logs (https://papertrailapp.com/systems/new)
* Back in the CloudFoundry CLI, create a new user-provided-service pointing to the API endpoint indicated on the Papertrail page. This user-provided-service  will act as a log drain for your apps
* Bind the log drain service to the backing_service and the worker app
* Restart both applications
* Open Papertrail's event viewer https://papertrailapp.com/events and watch logs appear in real-time while you are using your application
