/**const let等の変数宣言 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let宣言";
// console.log(val2);

// val2 = "let上書き";
// console.log(val2);

// val2 = "再宣言";

//const変数は上書きも再宣言も不可能

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 ={
//   name: "aaa",
//   age: 28,
// };
// val4.name = "bbb";

//constで定義した配列はプロパティの変更が可能

/**テンプレート文字列 */

//

/**アロー関数 */
//従来
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "jakee",
//   age: 28
// };
// const message1 = `名前は${myProfile.name}、年齢は${myProfile.age}歳`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}、年齢は${age}歳`;
// console.log(message2);

//配列

// const myProfile = ['じゃけえ', 28];

// const message3 = `名前は${myProfile[0]}、年齢は${myProfile[1]}歳`;
// console.log(message3);
// //配列の分割代入は順番が大事
// const [name, age] = myProfile;
// const message4 = `名前は${name}、年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("jakee");

/**
 * スプレッド構文 ... 「順番に処理する」
 */
//配列の展開
// const arr1 = [3, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunk = (num1, num2) => console.log(num1 + num2);
// sumFunk(arr1[0], arr1[1]);
// sumFunk(...arr1);

// //まとめる
// const arr2 = [1,2,3,4,5];
// const[num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0]=100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["tanaka", "yamada", "jakee"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//   if (name === "jakee"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件　? 条件がtrueのとき : 条件がfalseの時
