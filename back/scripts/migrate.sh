cd $(cd $(dirname $0)/../; pwd)
CONTAINER=$(docker-compose run --no-deps -d --rm web bash)
docker cp $PWD/db $CONTAINER:/go/src/app/db
docker exec -it ${CONTAINER} bash -c "goose -dir db/migrations mysql \${MYSQL_DSN} up"
docker rm -f ${CONTAINER}