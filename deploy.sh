echo "Feching origin..."

git fetch --all && git reset --hard @{u}

echo "Deplying..."

docker build -t 'sso-client' .
docker run -d -p 3001:3001 'sso-client'

echo "Done."