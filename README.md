# React勉強会

## 環境構築
#### Pre requirements
- Nodejs
- git

はインストールしておいてください．

#### React環境構築

https://github.com/gaearon/react-hot-boilerplate を使わせてもらいます．

以下のとおり，ダウンロードしてきてセットアップします．

```
$ git clone git@github.com:gaearon/react-hot-boilerplate.git
$ cd eact-hot-boilerplate
$ npm install
$ npm start
```
これで，ダウンロード，依存パッケージのインストール，サーバーの起動が完了です．

ブラウザで http://localhost:3000/ にアクセスして  
Hello, world.  
が表示されるのを確かめてください．

`src`ディレクトリ以下のファイルをいじっていきます．
ファイルを編集するとブラウザが自動でリロードされます(`webpack`というパッケージが提供するDevelopment serverのおかげ)．

`src/App.js`にHello, world.が書かれています．
勉強会までにいろいろ触ってみても楽しいかもしれません（勉強会自体はここまでの準備でゼロベースでスタートできます）．

##### Option: ESLint
この環境には，コーディングスタイルチェッカーとして[ESLint](http://eslint.org/) 向けの設定ファイルが含まれています．
使っているエディタにESLintプラグインがあれば導入しておくとスタイルの誤りを指摘してくれます．

例えばAtomなら[linter-eslint](https://atom.io/packages/linter-eslint)を入れます．
