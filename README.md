# auth-api

docker run --name auth-db -p 5432:5432 -e POSTGRES_DATABASE=auth-db -e POSTGRES_USERNAME=user -e POSTGRES_PASSWORD=user -d postgres:11