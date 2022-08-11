#!/usr/bin/env bash

cat <<EOS
runtime: nodejs14

instance_class: F2

# https://cloud.google.com/appengine/docs/standard/php/getting-started/hosting-a-static-website?hl=ja
handlers:
  - url: /
    secure: always
    static_files: www/index.html
    upload: www/index.html

EOS

find src/pages -mindepth 1 -type d | awk -F '/' '$0=$NF' | while read url ;do
cat <<EOS | sed -r "s/URL/$url/g"
  - url: /URL
    secure: always
    static_files: www/src/pages/URL/index.html
    upload: www/src/pages/URL/index.html

EOS
done

cat <<EOS
  - url: /(.*)
    secure: always
    static_files: www/\1
    upload: www/(.*)
EOS

find src/pages -mindepth 1 -type d | while read dir; do
cat <<EOS >$dir/index.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Nice Lit</title>
    <link rel="stylesheet" href="../../../styles/global.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <script src="../../../node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
    <script src="../../../node_modules/lit/polyfill-support.js"></script>
    <script type="module" src="../../../index.js"></script>
    <script src="../../../env.config.js"></script>
  </head>
  <body>
    <div id="outlet"></div>
  </body>
</html>
EOS
done