git pull
yarn build
docker build -t pms-v3-stage .
docker rm -f pms-v3-stage
docker run -d --name pms-v3-stage -p 81:80 pms-v3-stage