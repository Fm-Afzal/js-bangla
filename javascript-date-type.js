// Data Type

/*

!Javascript Data Type Practice:

* "typeof" ব্যবহার করে প্রোগ্রাম লিখে দেখ, কোন ভেরিয়েবলের মান কী ধরনের। ধর, একটা ভেরিয়েবল "price" ডিক্লেয়ার কর, যার মান 555, এখন console-এ এই টাইপ চেক কর।

* একটা ভেরিয়েবল "learning" ডিক্লেয়ার কর, যার মান true, আর সেটা console.log() দিয়ে আউটপুট কর। পরে "typeof" ব্যবহার করে দেখ, এটা কী ধরনের ভেরিয়েবল।

* একটা ভেরিয়েবল "omegaCity নামক একটা ভেরিয়েবলের মধ্যে মান হিসেবে "Dhaka" আছে। এইবার "typeof" ব্যবহার করে দেখ, এই ভেরিয়েবলটা কী ধরনের।

* একটা ভেরিয়েবল "temperature" ডিক্লেয়ার কর, যার মান 102.5, এখন "typeof" ব্যবহার করে দেখুব কাকফাটা গরমে কপালে হাত দিয়ে দেখলি, গা পুড়ে যায় যায় অবস্থা। সেই মুহূর্তেই তুই "temperature" নামে একটা ভেরিয়েবল ডিক্লেয়ার করলি, যার মান 102.5। এটা কী ধরনের ভেরিয়েবল, সেটা "typeof" দিয়ে চেক কর।

* ক্ষিধার চোটে তুই "isHungry" নামে একটা ভেরিয়েবল বানায় ফেললি, আর সেটার মান true। এখন console.log() আর "typeof" ব্যবহার করে এর টাইপ দেখ।

* একটা ভেরিয়েবলের নাম "isRich", যার মান true। এখন console-এ এইটার টাইপ চেক কর।

*/

var prices = 555;
console.log(typeof price);

var learning = true;
console.log(typeof learning);

var omegaCity = "Dhaka";
console.log(typeof omegaCity);

var temperature = 102.5;
console.log(typeof temperature);

var isHungry = true;
console.log(typeof isHungry);

var isRich = true;
console.log(typeof isRich);

// Date Type

/*

!Javascript let, const Practice:

* বর্তমান বয়স age নামে একটি ভেরিয়েবলে রাখ। কনসোলে প্রিন্ট কর। তারপর age ভেরিয়েবলে নতুন মান সেট কর এবং আবার কনসোলে প্রিন্ট কর।

* তোমার পকেটে এখন 500 টাকা আছে, pocketMoney নামে একটি ভেরিয়েবলে রাখ। পরে pocket Money-এর মান 150 সেট কর এবং কনসোলে প্রিন্ট কর।

* তুমি 4 ঘণ্টা পড়াশোনা করার পরিকল্পনা করেছ, studyTime নামে একটি ভেরিয়েবলে রাখ। পরে studyTime-এর মান আপডেট করে তুমি আসলেই আজকে যত ঘণ্টা পড়াশোনা করছ, সেটা সেট কর। মান যদি শূন্য হয়, তাহলে 0-ই সেট কর এবং কনসোলে দেখ।

* মোট 3 জন বন্ধু আছে, friendsCount নামে একটি ভেরিয়েবলে এই সংখ্যা রাখ। পরে 2 জন ফ্রেন্ড তোমাকে ছেড়ে চলে গেল। এখন friendsCount- এর মান আপডেট কর এবং কনসোলে সেটার আউটপুট দেখ।

* তুমি একটা নতুন ফোন কিনছ 25000 টাকা দিয়ে। সেটা নিয়ে একটা ভেরিয়েবল ডিক্লেয়ার কর। আর এক মাস পর সেই ফোন বিক্রি করতে গিয়েই দেখ, দাম দিতে চায় 12000 মাত্র, কী আর করবাঁ! phonePrice নামে একটি ভেরিয়েবলের মান প্রথমে 25000 দি্বা। তারপর সেটাকে 12000 দিয়ে আপডেট কর এবং কনসোলে দেখ ।

* ক্লাসে 40টা চেয়ার আছে। কয়দিন পর 2টা চেয়ারের পা ভেঙে গেল। chairsCount নামে একটি ভেরিয়েবলে এই মান আপডেট কর। আরও কয়দিন পর পাশের রুমের সিনিয়র ভাইয়ারা এসে 6টা চেয়ার নিয়ে গেছে। এইবারও chairs Count-এর মান আপডেট কর এবং কনসোলে ফাইনাল মান আউটপুট করে দেখ।

* আজকে 3 ঘণ্টা খেলা করার পরিকল্পনা করেছ, playTime নামে একটি ভেরিয়েবলে রাখ। পরে playTime-এর মান আপডেট করে আসলেই কত ঘণ্টা খেলা করেছ, সেটি সেট কর। যদি তুমি না খেল, তাহলে playTime-এর মান 0 সেট কর এবং কনসোলে দেখ।

*/

let age = 25;
console.log(age);
age = 26;
console.log(age);

let pocketMoney = 500;
pocketMoney = 150;
console.log(pocketMoney);

let studyTime = 4;
studyTime = 0;
console.log(studyTime);

let friendsCount = 3;
friendsCount = 1;
console.log(friendsCount);

let phonePrice = 25000;
phonePrice = 12000;
console.log(phonePrice);

let chairsCount = 40;
chairsCount = 38;
chairsCount = 32;
console.log(chairsCount);

let playTime = 3;
playTime = 0;
console.log(playTime);

/*

!JavaScript Parse Practice:

* ধর তুই একটা মজার অঙ্ক করছিস। তুই ‘20’ লিখে ফেললি, কিন্তু সেটা স্ট্রিং আকারে। স্ট্রিং থেকে আসল সংখ্যায় কনভার্ট করে তার সাথে 10 যোগ করতে পারবি?

* তোর কাছে একটা ভগ্নাংশ আকারে মান আছে, যেমন '3.14159'। এই মানটা পূর্ণসংখ্যায় রূপান্তর করার জন্য একটা প্রোগ্রাম লিখ।

*তুই 'premikBoy' নামের একটা স্ট্রিংকে সংখ্যা বানানোর চেষ্টা কর। দেখ কী আউটপুট দেয়।

*তুই 3.456 আর 2.789 যোগ করলি। আউটপুটে তুই দশমিকের পর মাত্র 2 ঘর পর্যন্ত দেখতে চাস। কীভাবে দেখাবি? একটা প্রোগ্রাম লিখ।

* ধর, তুই '56.78' আর '12.34' স্ট্রিং আকারে পাইলি। এখন এই দুইটা যোগ করে কীভাবে আসল সংখ্যা বের করবি? সেটা বের করার একটা প্রোগ্রাম লিখ ।

* ধর, তোর কাছে '10.5678' আর '5.4321' আছে। তুই আউটপুটে দশমিকের পর 1 ঘর পর্যন্ত দেখতে চাস। সেটা কীভাবে দেখাবি?

* এখন '42.45689754'-কে দশমিকের পর 3 ঘর পর্যন্ত রাউন্ড কর।

*/

let strNum = '20';
let convertedNum = parseInt(strNum);
let sum = convertedNum + 10;
console.log(sum);

let fractionStr = '3.14159';
let intNum = parseInt(fractionStr);
console.log(intNum);

let premikBoy = 'premikBoy';
let convertedPremik = Number(premikBoy);
console.log(convertedPremik);

let num1 = 3.456;
let num2 = 2.789;
let total = num1 + num2;
console.log(total.toFixed(2));

let str1 = '56.78';
let str2 = '12.34';
let numA = parseFloat(str1);
let numB = parseFloat(str2);
let totalStr = numA + numB;
console.log(totalStr);

let val1 = '10.5678';
let val2 = '5.4321';
let number1 = parseFloat(val1);
let number2 = parseFloat(val2);
let totalVal = number1 + number2;
console.log(totalVal.toFixed(1));

let decimalNum = 42.45689754;
console.log(decimalNum.toFixed(3));