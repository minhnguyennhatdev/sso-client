echo "Feching origin..."

git fetch --all && git reset --hard @{u}

echo "Deplying..."


docker stop 'sso-client'
docker rm 'sso-client'
docker build --tag 'sso-client' .
docker run --name 'sso-client' -d --restart -p 3001:3001 'sso-client'

echo "Done."