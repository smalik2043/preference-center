## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docker

# run through docker

# docker build

$ docker-compose build

# docker start

$ docker-compose up

# remove docker container

$ docker-compose down

# to run the migrations

# For now there is an issue with my loopback address but you can change the host in typeorm.config.ts to localhsot

npm run typeorm:generate test
or
docker-compose run nestjs npm run typeorm:generate test

npm run typeorm migration:run
or
docker-compose run nestjs npm run typeorm:run

# Create a user

http://localhost:3000/api/user

Post request
Body: {
"email": "sulaiman.malik@gmail.com"
}

# Create a consent of a user

http://localhost:3000/api/consent

Post request
Body: {
"userId": "fd2f5eb4-8fca-4e3e-bb5b-1b19bbd65c79",
"consents": [
{
"id": "email_notifications",
"enabled": true
},
{
"id": "sms_notifications",
"enabled": true
}
]
}

# Get user consents

http://localhost:3000/api/user/fd2f5eb4-8fca-4e3e-bb5b-1b19bbd65c79
Get Request

For Delete request I have a question clear.
