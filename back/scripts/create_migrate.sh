MIGRATION_NAME="input_migration_name"
cd $(cd $(dirname $0)/../; pwd)
CONTAINER=$(docker-compose run --no-deps -d --rm web bash)
docker exec -it ${CONTAINER} bash -c "mkdir migrations && goose -dir migrations create ${MIGRATION_NAME} sql"
docker cp $CONTAINER:/go/src/app/migrations/. $PWD/db/migrations
docker rm -f ${CONTAINER}
