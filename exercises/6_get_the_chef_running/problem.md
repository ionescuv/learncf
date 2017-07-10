We now have our .msg Kitchen app up and running with a working integration to the backing service. Time to put our chef to work. The chef is a so-called `worker app`. It is running in the background (i.e. not accessible using an own URL, see the `--no-route` option), and periodically calling the backing service to "prepare" some of the meal orders.

----------------------------------------------------------------------

## STEPS

* Push the `worker` app using it's manifest file and using the `--no-start` option. We do not want the chef to start working before the app is connected to the backing service.
* Bind the worker app to the `rest_backend`
* Start the app. What is happening?
* In a new terminal window have a look at the application logs of the worker: `cf logs <worker-app-name>`. Why do you think it is not starting up? Hint, read here: https://docs.cloudfoundry.org/devguide/deploy-apps/healthchecks.html
* Push the application again with the additional option `-u none`
* If all works fine, you should start seeing a meal get prepared every 10 second in your frontend app (you WILL need to refresh the frontend page)