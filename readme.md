# CORS対策用Node.js プロキシサーバー

## 手順
1. npmをインストールする  
    ※ nodejs インストール済を想定
    ```
    npm install
    ```

2. ソースコードの環境変数を必要に応じて変更する

3. node実行
    ```
    node index.js
    ```

4. プロキシにデータを送信する  
    以下デフォルト設定例
    ```
    fetch('http://localhost:3999/api/', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            "endpoint": "https://jsonplaceholder.typicode.com/posts", // 実際の送信先
            "method": "POST", // ["GET", "POST", "PUT", "DELETE"]
            "body": { "Name": "Taro", "Age": 20 },
        }),
    })
    ```
