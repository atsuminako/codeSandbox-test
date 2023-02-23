// var val1 = "var変数";
// console.log(val1);
// //val変数は上書き可能
// val1= "var変数を上書き";
// console.log(val1);

// //val 変数は再宣言
// var val1="var変数を際宣言";
// console.log(val1);

// let val2 ="let変数";
// console.log(val2);
// //letは上書き可能
// val2= "let変数を上書き";
// console.log(val2);

// //letは再宣言出来ない

// const val3 ="const変数";
// console.log(val3);

// const val4 = { name: "ジャケえ", age: 28 };
// console.log(val4);
// //オブジェクトの中身は変更できる
// val4.name = "jak";
// val4.addres = "hiroshima";
// console.log(val4);
// //　　constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey"); //pushはメソッド
// console.log(val5);

// const name = "ジャケえ";
// const age = 28;
// //私の名前はジャケえです。年齢は２８です。

// //従来の方法
// const message1 = "私の名前は" + name + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// //アロー関数

// //従来
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;

//   //const func3 +(num,num2)=> num1+num2; 1行でも可能
// };
// console.log(func3(10, 20));

// //分割代入
// const myProfile = {
//   name: "ジャケえ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const arr1 = [1, 2, 3];

// const sumFunc = (num1, num2,num3) => console.log(num1 + num2+num3);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [num1, num2, ...arr3] = arr2;
