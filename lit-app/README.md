## Description

This is Next Generation Web Component App

## Setup

```bash
npm ci
```

## Dev Server

```bash
npm run serve:dev
```

## Prod Server

```bash
npm run serve:prod

cat dist/www/index.js.map | jq -r '.sources[]' | sed -r 's_^../../__' | grep -vE '@vaadin/router/node_modules/path-to-regexp' | xargs -I @ cp --parents @ dist/www/

php -S localhost:8000 -t dist/www/
```

## Deploy App

dist ディレクトリ配下を丸ごとアップロード

```bash
bash generate-url.sh >app.dev.yaml

npm run build:prod

cat dist/www/index.js.map | jq -r '.sources[]' | sed -r 's_^../../__' | grep -vE '@vaadin/router/node_modules/path-to-regexp' | xargs -I @ cp --parents @ dist/www/

cp app.dev.yaml dist/app.dev.yaml

cp .gcloudignore dist/.gcloudignore

npm run crypt

find dist/www dist/www/src -type f | grep -P '.*obfuscated.*js$' | awk '{print $1, $1}' | awk '{gsub("-obfuscated","",$2)}{print "mv "$1, $2}'

cd dist/

gcloud auth activate-service-account --key-file /path/to/your-account-key-json-file

gcloud auth list

time gcloud app deploy app.dev.yaml --project your-project-id
```
