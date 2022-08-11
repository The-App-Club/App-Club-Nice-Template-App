## 事前準備

```bash
$ cd /tmp

$ git clone https://github.com/GRI-Inc/App-Club-Nice-Template-App.git

$ cd wasm-app/
```

## WASM側ビルド

```bash
$ wasm-pack build
```

## WEB側ビルド

```bash
$ cd www

$ npm ci
```

## ローカルサーブ
```bash
$ npm run start
```
