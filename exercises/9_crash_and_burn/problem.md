In this exercise we want to see how CloudFoundry deals with the recovery from an error. A bug has been "planted" in the implementation of the chef worker app, which causes it to crash if he is trying to prepare a "Schnitzel".
Analyze the live application logs in the Papertrail event viewer and see what happens

----------------------------------------------------------------------

## STEPS

* Open Papertrail's event viewer https://papertrailapp.com/events and watch the logs
* In parallel open your frontend application and order a "Schnitzel".
* What happens to the chef application instances? What is CloudFoundry doing and how are other apps/containers affected?
* Having seen this scenario, what are some properties that any 12factor should meet have in order to assure that your system is able to recover from an error?
