var db = /* なんか初期化処理 */ null;

db.init({password: xxxx}); //最初のコミットでパスワードを追加してたけど、修正しました
// データベースに何か値を突っ込む
db.save({id: 1, name: "ちさ"});
db.close();

