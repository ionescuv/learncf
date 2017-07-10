In this chapter we are going to look at how CF apps can be secured with an authentication mechanism. We will use the CF UAA component as an OAuth provider, which for the SAP CP can be reached here: https://uaa.cf.eu10.hana.ondemand.com (/login).
CF route services are an extremely convenient way for implementing authentication based on an API Gateway architecture, since it can be configured to be called for any request.

----------------------------------------------------------------------

## STEPS

* Follow the instructions here: https://github.com/EngineerBetter/cf-uaa-guard-service
* Bind the guard route service for all routes 
