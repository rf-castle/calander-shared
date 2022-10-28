## 基本的な起動コマンド
```
docker compose up -d
```
これでサーバーが起動するよ（まだ起動しない

## マイグレーション（最初 & db/migrationsが変更されたとき
Todo: まだないよ

## Goのソース更新時の手順
Dockerイメージをビルドしなおす
```
docker compose build
```

Webサービスを再起動する
```
docker compose restart web
```
## サーバーを止める
```
docker compose down -v
```
