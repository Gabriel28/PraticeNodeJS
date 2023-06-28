# PraticeNodeJS - Repo for training

# This repository aims to create a CRUD to training of basics concepts with:

- Node
- MySql 

This project is also for pratice the using the DOCKERFILE and Docker compose in the create the develop environment. 

## How to use

First of all, if you don't have Docker installed, please, install Docker 

| OS | Install | 
| :---- | :---- |
| Windows | https://docs.docker.com/desktop/install/windows-install/ |
| Linux | https://docs.docker.com/desktop/install/linux-install/ |
| macOS | https://docs.docker.com/desktop/install/mac-install/ |

- Clone this project
- After cloning, use this command in your terminal: 


| Environment | Command | 
| :---- | :---- |
| Dev | `docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build`|
| Prod | `docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build`|

### In your client (Insomnia or Postman): export this curl: 

`curl --request GET \
  --url http://localhost:3000/` 

### Or in your browser go to: 
`localhost:3000`