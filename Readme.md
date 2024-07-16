
# Crystal Cove

A Typical React & Express app with typesript and Prisma ORM


## Run Locally

Clone the project

```bash
  git clone https://github.com/muztahiddurjoy/typical-react-express/
```

Go to the project directory

```bash
  cd typical-react-express
```

## Frontend

Install dependencies

```bash
  cd frontend
  npm install
```


#### check the .env.example file and add these all variables to your .env file


Start the server

```bash
  npm run dev
```

## Backend

Install dependencies

```bash
  cd backend
  npm install
```


#### check the .env.example file and add these all variables to your .env file


Compile the code ([Prisma](https://www.prisma.io/docs/getting-started/quickstart) must be installed in your system) 

```bash
  prisma generate
```
```bash
  npm run build
```
Start the database server server
```bash
  docker compose up
```

```bash
  prisma migrate deploy
```
Start the Server
```bash
  npm run start
```


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## API Reference

#### Create an Account
```http
 POST /signup
```
Body
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of the user |
| `password`      | `string` | **Required**. password of the user |

#### Login to Your Account
```http
 POST /login
```
Body
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of the user |
| `password`      | `string` | **Required**. password of the user |

#### Get all Contact Informations

```http
 GET /info
```

#### Get item

```http
 POST /info
```
Body
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. The Text on the url |
| `url`      | `string` | **Required**. The main URL |

Headers
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. Send the jwt token as Bearer token in Headers |


#### Get Contact Form Responses
```http
 GET /contact
```
Headers
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. Send the jwt token as Bearer token in Headers |

#### Submit The Form

```http
 POST /contact
```
Body
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**.|
| `phone`      | `string` | **Required**.|
| `email`      | `string` | **Required**.|
| `query`      | `string` | **Required**.|

#### Get the Reviews

```http
 GET /review
```
#### Add a Review
```http
 POST /review
```
Body
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of the user|
| `image`      | `string` | **Required**. Image of the user|
| `text`      | `string` | **Required**. What s/he said|

Headers
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. Send the jwt token as Bearer token in Headers|

#### Get All Rooms
```http
 GET /rooms
```
#### Get Room Information
```http
 GET /rooms/:room-id
```
#### Create a New Room
```http
 POST /rooms
```
Body
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of the room|
| `image`      | `string` | **Required**. Image of the room|
| `desc`      | `string` | **Required**. Description of the room|
| `desc`      | `string` | **Required**. Description of the room|
| `bed`      | `number` | **Required**. Number of beds in the room|
| `bath`      | `number` | **Required**. Number of bathrooms in the room|
| `price`      | `number` | **Required**. Price per night of the room|

Headers
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. Send the jwt token as Bearer token in Headers|

### Search a Room
```http
 GET /rooms
```
Queries
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bed`      | `number` | **Required** Number of beds you want|
| `bath`      | `number` | **Required** Number of bathrooms you want|

#### Get User Details
```http
 GET /user/:id
```

#### Book a Room
```http
 POST /booking
```

Body
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `roomID`      | `string` | **Required** ID of the room|
| `date`      | `string` | **Required** Date in ISO string format|

Headers
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. Send the jwt token as Bearer token in Headers|

#### Get All Bookings

```http
 GET /booking
```
Headers
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. Send the jwt token as Bearer token in Headers|

#### Get All Bookings of a Date
Queries
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `date`      | `string` | **Required**. Date in ISO string format|
| `roomID`      | `string` | **Required**. ID of the room|

#### Get All Bookings of a User
```http
 GET /booking/user
```

Headers
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. Send the jwt token as Bearer token in Headers|

## Authors

- [@muztahiddurjoy](https://www.github.com/muztahiddurjoy)
- [@bundulogic](#)
