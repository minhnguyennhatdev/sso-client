echo "Feching origin..."

git fetch --all && git reset --hard @{u}

echo "Deploying..."

SERVICE='sso-client'
PORT=3001

docker stop $SERVICE
docker rm $SERVICE
docker build --tag $SERVICE .
docker run --name $SERVICE -d -p $PORT:$PORT $SERVICE

echo "Done."