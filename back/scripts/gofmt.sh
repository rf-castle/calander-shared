cd $(cd $(dirname $0)/../; pwd)
CONTAINER=$(docker-compose run --no-deps -d --rm web bash)
docker cp $PWD/src $CONTAINER:/go/src/app/src
docker exec -it ${CONTAINER} bash -c "go fmt ./src/..."
docker cp $CONTAINER:/go/src/app/src/. $PWD/src
docker rm -f ${CONTAINER}