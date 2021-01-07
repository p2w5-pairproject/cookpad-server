# Cookpad app Documentation

Cookpad app is an application to save your favourite recipe. This app has :
* List API 1 using axios
* List API 2 using axios
* List API 3 using axios
* Authentication and Authorization Server
* Register and Login with Google Account
* Single page application
* JSON formatted response

# URL
```
Server URL : http://localhost:3000
```

```
Client URL : http://localhost:8080
```

## ENDPOINT

### POST /google_login
> Login with google account

_Request Params_
```
Not needed
```

_Request Header_
```
Not needed
```

_Request Body_
```
{
  "id_token": <id_token>
}
```

_Response (200)_
```
{
  "access_token": <access_token>
}
```

_Response (500)_
```
{
  "message": "Internal server error!"
}
```
---
