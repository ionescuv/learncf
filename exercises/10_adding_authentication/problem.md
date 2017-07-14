In this chapter we are going to look at how CF apps can be secured with an authentication mechanism. A common approach when 12factor apps is the use of a `API-Gateway` pattern  http://microservices.io/patterns/apigateway.html. All requests pass through the gateway, which can perform certain functionality(authentication, rate limiting etc.) in a centralized manner.
With CloudFoundry defining a gateway is extremely easy using `route services`. A gateway bound to a route will receive any request targeted at that address first, thus having the possibility to alter the request, perform authentication etc.
The actual authentication will be performed using the CF UAA component as an OAuth provider, which for the SAP CP can be reached here: https://uaa.cf.eu10.hana.ondemand.com (/login).

----------------------------------------------------------------------

## STEPS

An API Gateway implementation has already been provided (see the `guard service` below). In essence following steps must be performed:

* Deploy the guard service to CloudFoundry
* Register the guard service in the CF UAA component, obtaining a unique `client secret` for the guard service. For this step you will need to use the UAA client https://github.com/cloudfoundry/cf-uaac
* Configure the guard service to use the `client secret` when making authentication requests
* Bind the guard service for all your routes, so that it intercepts any incoming request

## HINTS

Follow the instructions here: https://github.com/EngineerBetter/cf-uaa-guard-service

