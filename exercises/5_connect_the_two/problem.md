Frontend and backing service are now two independent processes running in separate containers. In this step we will configure the connection between the two(a.k.a. the `service binding`). This is achieved by configuring the NGINX web server to forward requests coming from the UI5 frontend to the URL of the backing service.

## BEFORE YOU START
Before continuing make sure you understand how the forwarding of requests by the NGINX server has been implemented. Check out the implementation and configuration of the `web` app. Hint: the URL for which requests are being forwarded is `<webapp-URL>/backingservice`. Search for it.

----------------------------------------------------------------------

## STEPS

* The binding of the backingservice to the frontend is achieved solely through environment configuration. Start by checking out the environment data of the "web" app: `cf env web`
* Define a new `user-provided-service` pointing to the URL of the backend service (set the URL as an attribute of the service named 'url')
```
cf create-user-provided-service rest_backend -p "url"
url> ...
```
* Now bind the `rest_backend` to the frontend app
* Check the environment of the "web" app again
* Now restart the frontend app and test it again
