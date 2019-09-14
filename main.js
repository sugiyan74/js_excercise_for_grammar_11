/**
 * 課題1: 1匹の猫を表すオブジェクトを作る
 *   - 変数名はcatとする
 *   - catオブジェクトは次の情報(プロパティ)を持つ
 *     - name : 名前。好きな名前をつける
 *     - age : 年齢。好きな年齢をつける
 *     - sex : 性別（オス or メス）
 */

// ここでcatオブジェクトを作る
const cat = {
    name: 'ナナ',
    age: 4,
    sex: 'メス'
};

// ここでconsole.logを使ってcatオブジェクトの内容を出力する
console.log(cat);

/**
 * 課題2: 課題1で作ったcatオブジェクトに次の情報を追加する
 *   - 追加する情報
 *     - owner : 飼い主の名前。自分の名前を入れる。
 */

// ここでownerを追加するコードを書く
cat.owner = 'sugiyan';
// ここでconsole.logを使ってcatオブジェクトの内容を出力する
console.log(cat);

/**
 * 課題3: 課題1で作ったcatオブジェクトの次の情報を更新する
 *   - 更新する情報
 *     - age : 元々の年齢から1追加する
 */

// ここでageを更新するコードを書く
cat.age = 5;
// ここでconsole.logを使ってcatオブジェクトの内容を出力する
console.log(cat);

/**
 * 課題4: 課題1で作ったcatオブジェクトから次の情報を削除する
 *   - 削除する情報
 *     - owner
 */

// ここでownerを削除するコードを書く
delete cat.owner;
// ここでconsole.logを使ってcatオブジェクトの内容を出力する
console.log(cat);