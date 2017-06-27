Frontend and backing service are now two independent processes running in separate containers. In this step we will configure the connection between the two. This is achieved solely through configuration of the environment data (a.k.a. `service binding`).

----------------------------------------------------------------------

## STEPS

* Define a new `user-provided-service` pointing to the URL of the backend service (set the URL as an attribute of the service named 'url')
```
cf create-user-provided-service rest_backend -p "url"
url> ...
```
* Now bind the `rest_backend` to the frontend app
* Test the frontend again

## HINTS

