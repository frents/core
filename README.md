[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![CircleCI](https://circleci.com/gh/frents/core/tree/master.svg?style=shield)](https://circleci.com/gh/frents/core/tree/master) 
# Frents

Kubernetes hackathon  

## Backend

### Configure the project

**Generate JWT keys:**

If openssl is not installed: [generate it online](https://www.csfieldguide.org.nz/en/interactives/rsa-key-generator/)

```bash
cd backend/assets
openssl genpkey -algorithm RSA -out jwt_key.pem -pkeyopt rsa_keygen_bits:512
openssl rsa -pubout -in jwt_key.pem -out jwt_key.pub
```
    
**Configure local env**

create .env file in the backend folder

```bash
# ES host
APP_ES_HOST="http://elasticsearch:9200/"
# Stage
APP_STAGE="developer_${name}"
# Facebook App id
APP_FB_ID=""
# Facebook App secret
APP_FB_SECRET=""
# Graphql server host 
APP_APOLLO_HOST="http://localhost:4000"
# User token used in integration tests
INTEGRATION_DEFAULT_USER_TOKEN=""
```

**Run the backend stack**

```bash
cd architecture/local
docker-compose up
```

**Configure ElasticSearch indexes**

```bash
# ssh into the container
docker exec -it $(docker ps -f name=graphql -q) bash
# Create indexes
yarn ts-node ./scripts/regenerate_indexes.ts
```

**Run integration tests**
```bash
# ssh into the container
docker exec -it $(docker ps -f name=graphql -q) bash
yarn test
```

            **GraphQl Playground and GraphQl documentation**

Since the local service exposes GraphQlPlayground you can easily access to the GraphQl documentation opening this [link](http://localhost:4000)