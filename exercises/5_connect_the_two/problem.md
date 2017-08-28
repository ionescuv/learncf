Frontend and backing service are now two independent processes running in separate containers. In this step we will configure the connection between the two(a.k.a. the `service binding`). This is achieved by configuring the NGINX web server to forward requests coming from the UI5 frontend to the URL of the backing service (like a `reverse proxy`).

## BEFORE YOU START
Before continuing have a look at how the forwarding of requests by the NGINX server has been implemented. Check out the implementation (`index.html`) and configuration(`nginx.conf`) of the `web` app. Hint: the URL for which requests are being forwarded is `<webapp-URL>/backingservice`. Search for it.

----------------------------------------------------------------------

## STEPS

* The binding of the backingservice to the frontend is achieved solely through environment configuration. Start by checking out the environment data of the "web" app: `cf env web`
* Define a new `user-provided-service` (make sure to call it `backend`)
* The user-provided-service must point to the URL of the backend service: define an attribute of the service named 'url', as described below:
```
cf create-user-provided-service rest_backend -p "url"
url> https:// < url of your backing service >  /
```
Be sure to include the `/` at the end of the url
* Now bind the `rest_backend` to the frontend app
* Check the environment of the "web" app again
* Now restart the frontend app and check the addres <FRONTEND_URL>/backingservice/meal. It should provide the same output like <BACKEND_URL>/meal
* Test the frontend web page again. It should now work on real data from the backing service. Try creating some new meals.
