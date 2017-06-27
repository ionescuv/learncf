## WELCOME
Welcome to the introductory workshop on cloud-native application development!
For background information about this workshop check out https://slides.com/victorionescu/understanding-cloud-native-apps/

## SOURCES

Throughout this workshop we are not focusing on implementation, but on understanding the underlying cloud concepts and how they are implemented using CloudFoundry. As a result sources for the .msg Kitchen application are readily available with the `learncf` package https://github.com/ionescuv/learncf/ under the `sources` folder. 

## LET'S GET STARTED

In this first exercise you will use the CF CLI to connect to your CloudFoundry account and check if you have any running apps.

----------------------------------------------------------------------
## PREREQUISITES

* You must have the CF CLI installed for this. https://github.com/cloudfoundry/cli
* You must have access to a CloudFoundry installation. Trial versions are available from Pivotal or SAP. Alternatively you can install your own CloudFoundry using BoshLite
* If you are within a corporate network, make sure you have configured your proxy settings:

```
set http_proxy=<host:port>
set https_proxy=<host:port>
```



## STEPS

* Use CF TARGET to set the API endpoint of your cloud foundry provider. For the SAP Cloud Platform, this is https://api.cf.us10.hana.ondemand.com
* LOGIN to your account
* Target an ORG and a SPACE in your cloud foundry installation. These are logical separations which can be used to group together applications based on various criteria
* Check to see if you have any apps running in your account


## HINTS

The CF CLI commands are extremely intuitive. Type `cf` to see a list of available commands or use `cf help <command>` to find out the exact syntax of a CF command.