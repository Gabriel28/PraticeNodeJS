# PraticeNodeJS - Repo for training

# This repository aims to create a CRUD to training of basics concepts with:

- Node
- MySql 

This project is also for pratice the using the DOCKERFILE and Docker compose in the create the develop environment. 

## How do use

First of all, if you don't have Docker installed, please, install Docker 

#0078D6 - https://docs.docker.com/desktop/install/windows-install/
#FCC624 - https://docs.docker.com/desktop/install/linux-install/


clone this project

After cloning, use this command in your terminal: 

`docker-compose up -d -build`

### In your client (Insomnia or Postman): export this curl: 

`curl --request GET \
  --url http://localhost:3000/` 

### Or in your browser go to: 
`localhost:3000`