# Cookpad app Documentation

Cookpad app is an application to save your favourite recipe. This app has :
* List API 1 Edaman API using axios
* List API 2 Weatherebit API using axios
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

### POST /register
> Register user through postman

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
  "email": <email>,
  "passowrd": <password>,
  "name": <name>
}
```

_Response (201)_
```
{
  "id": <given id by system>,
  "email": jondoer@mail.com,
  "name": jon doe
}
```

_Response (400)_
```
{
  "message": <given by sistem>
}
```
---

### POST /login
> Login user

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
  "email": <email>,
  "passowrd": <password>
}
```

_Response (200)_
```
{
  "id": <given id by system>,
  "email": jondoer@mail.com,
  "access_token": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJpZmFuQG1haWwuY29tIiwibmFtZSI6ImlmYW4gYWphIiwiaWF0IjoxNjEwMDc0MDc4fQ.0f8nEM5t_k6fNzJZnO8nWDv4ptR1jbbTijHmbHKXsS0
}
```

_Response (401)_
```
{
  "message": "Invalid email / password!"
}
```
---


### POST /recipes
> Create recipe

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
  "name": <name>,
  "description": <description>,
  "step": <step>,
  "ingredient": <ingredient>,
  "UserId": <UserId>
}
```

_Response (201)_
```
{
  "name": recipe name,
  "description": recipe description,
  "step": recipe step,
  "ingredient": ingredient step,
}
```

_Response (err)_
```
{
  "message": <given by sistem>
}
```
---

### GET /recipes
> Get recipes list

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
  "name": <name>,
  "description": <description>,
  "step": <step>,
  "ingredient": <ingredient>,
  "UserId": <UserId>
}
```

_Response (201)_
```
{
  "name": recipe name,
  "description": recipe description,
  "step": recipe step,
  "ingredient": ingredient step,
}
```

_Response (err)_
```
{
  "message": <given by sistem>
}
```
---

### GET /recipes/:id
> Get detail recipe

_login needed and must select recipe base on owner user_

_Request Params_
```
{
  "id": <id>
}
```

_Request Header_
```
{
  "access_token": <access_token>
}
```

_Request Body_
```
Not needed
```

_Response (200)_
```
{
  "name": recipe name,
  "description": recipe description,
  "step": recipe step,
  "ingredient": ingredient step,
},

```

_Response (err)_
```
{
  "message": <given by sistem>
}
```
---

### PUT /recipes/:id
> Update recipe

_login needed and must update recipe base on owner user_

_Request Params_
```
{
  "id": <id>
}
```

_Request Header_
```
{
  "access_token": <access_token>
}
```

_Request Body_
```
{
  "name": <name>,
  "description": <description>,
  "step": <step>,
  "ingredient": <ingredient>,
}
```

_Response (200)_
```
{
  "name": recipe name,
  "description": recipe description,
  "step": recipe step,
  "ingredient": ingredient step,
},

```

_Response (err)_
```
{
  "message": <given by sistem>
}
```
---

### DELETE /recipes/:id
> Delete recipe

_login needed and must delete recipe base on owner user_

_Request Params_
```
{
  "id": <id>
}
```

_Request Header_
```
{
  "access_token": <access_token>
}
```

_Request Body_
```
Not needeed
```

_Response (200)_
```
{
  "message": "recipe delete successfully"
},

```

_Response (err)_
```
{
  "message": <given by sistem>
}
```
---

### API GET EDAMAN /search
> Search food using EDAMAN API

_login needed_

_Request Params_
```
{
  "s": burger
  "app_id": 23daa481
  "app_key": 2d7e52cf491550c383b2b56ae595fd54
  "from": 0
  "to": 3
  "calories": 591-722
  "health": alcohol-free
}
```

_Request Header_
```
{
  "access_token": <access_token>
}
```

_Request Body_
```
Not needeed
```

_Response (200)_
```
[
  {
    "name": "Duck confit burger",
    "ingredient": [
        "1 tbsp olive oil",
        "1 red onion, finely sliced",
        "2 tbsp onion marmalade",
        "500g pack duck leg confit",
        "4 brioche burger buns",
        "1 tbsp butter, at room temperature",
        "1 tbsp Dijon mustard",
        "80g bag rocket or frisée salad leaves"
    ],
    "calories": 2879.531499999842
  },
    {
      "name": "The Spotted Pig's Chargrilled Burger at Home Recipe",
      "ingredient": [
          "10 ounces well-marbled boneless short rib, cut into 1-inch pieces (or 8 ounces short rib and 2 ounces beef suet—see note)",
          "10 ounces beef brisket, preferably second-cut, cut into 1-inch pieces",
          "12 ounces well-marbled chuck roast or chuck stew meat, cut into 1-inch pieces",
          "Kosher salt and freshly ground black pepper",
          "8 ounces Roquefort cheese, room temperature",
          "4 Spotted Pig Burger Buns"
      ],
      "calories": 3229.0156213402497
    },
    {
      "name": "Mediterranean Lamb Burgers recipes",
      "ingredient": [
          "1½ lbs ground lamb",
          "1/3 cup minced shallot",
          "1 large clove of garlic",
          "1 tbsp ginger, minced",
          "½ tsp cumin",
          "¼ tsp paprika",
          "1/3 cup mint, finely chopped",
          "2 tbsp parsley (optional)",
          "1 tsp salt",
          "1-2 tbsp olive oil",
          "4 whole wheat burger buns (really any type you like)",
          "2 plum tomatoes, sliced"
      ],
      "calories": 2659.3867251007946
    }
]
```

_Response (err)_
```
{
  "message": <given by sistem>
}
```
---