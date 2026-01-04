//জাভাস্ক্রিপ্ট ভেরিয়েবল 

/*

Problem For Practice
1. জন্মসালটি একটা ভেরিয়েবলে রাখ।
2. কয় ভাই-বোন, সেটা একটা ভেরিয়েবলে রাখ।
3. ক্লাসে কতজন স্টুডেন্ট আছে, তাদের সংখ্যা দিয়ে students নামক একটা ভেরিয়েবল ডিক্লেয়ার কর।
4. লাস্ট পরীক্ষায় কত নাম্বার পাইছ, সেটা দিয়ে marks নামক একটা ভেরিয়েবল ডিক্লেয়ার কর।
5. বাসায় কয়টা রুম আছে, সেটা নিয়ে rooms নামক একটা ভেরিয়েবল ডিক্লেয়ার কর।
6. দৈনিক পড়াশোনার সময়কে ঘণ্টা হিসেবে একটি ভেরিয়েবলে রাখ।
7. ফোন নাম্বারে যতগুলা ডিজিট বা অঙ্ক যোগ করে যোগফল total নামে একটা ভেরিয়েবলে রাখ।

*/

var birthYear = 2000;
var siblings = 2;
var students = 30;
var marks = 75;
var rooms = 5;
var hours = 9;
var total = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;

/* 

Javascript Variable Problem Practice:

1. বর্তমান বয়স age নামে একটি ভেরিয়েবলে রাখ। কনসোলে তারপর এই ভেরিয়েবলটি প্রিন্ট কর।
2. এই বছর যে কয়টা বই পড়ার পরিকল্পনা করছ, সেটাকে booksToRead নামে একটি ভেরিয়েবলে রাখ। পরে booksToRead-এর মান কনসোলে আউটপুট হিসেবে দেখা।
3. প্রতিদিন সকাল কয়টার সময় ঘুম থেকে উঠ, সেটাকে wakeUpTime নামে একটি ভেরিয়েবলে ডিক্লেয়ার কর। তারপর wakeUpTime-এর নতুন মান সেটকর এবং কনসোলে আউটপুট হিসেবে দেখা।
4. আজ সারাদিনে কতঘণ্টা সময় মোবাইল ফোনে নষ্ট করছ, সেটাকে wastedTime নামে একটি ভেরিয়েবলে এই মান রাখ। তারপর এইটাকে কনসোলে দেখা।
5. এই মুহূর্তে কত টাকা ধার করে রাখছ? সেটাকে borrow নামে একটি ভেরিয়েবলে রাখ।
6. প্রিয় টিম অপোজিট টিমকে সর্বোচ্চ কয়টা গোল দিছে এক ম্যাচে। সেটা দিয়ে goals নামে একটা ভেরিয়েবলে লিখে সেটাকে আউটপুট হিসেবে দেখা।
7.বিছানায় কয়টা বালিশ আছে, সেটার জন্য pillow নামে একটা ভেরিয়েবল ডিক্লেয়ার কর। তারপর কনসোলে সেটাকে আউটপুট হিসেবে দেখা।

*/

var age = 24;
console.log(age);

var booksToRead = 12;
console.log(booksToRead);

var wakeUpTime = 6;
wakeUpTime = 7;
console.log(wakeUpTime);

var wastedTime = 3;
console.log(wastedTime);

var borrow = 5000;
var goals = 4;
console.log(goals);

var pillow = 3;
console.log(pillow);

/*

JS String Practice:

1. এখন name নামে একটি ভেরিয়েবল ডিক্লেয়ার কর, আর যার মান হবে তোমার নাম। এরপর সেটাকে কনসোলে আউটপুট হিসেবে দেখাও।
2. ঠিকানা (address) একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করে দেখ। আর সেটাকে console.log() দিয়ে আউটপুট দেখ।
3. বেস্ট ফ্রেন্ড কোন স্কুল, কলেজ বা ভার্সিটিতে পড়ে, সেই স্কুল, কলেজ বা ভার্সিটির নামে একটা ভেরিয়েবল ডিক্লেয়ার কর। তারপর সেটাকে আউটপুট হিসেবে দেখা ।
4. প্রিয় নায়িকার নাম fan নামে একটা ভেরিয়েবলে রাখ। তারপর কনসোলে দেখা।
5. এই বছরের প্রিয় সিনেমার নাম movieOfTheYear নামে একটা ভেরিয়েবলে রাখ। তারপর সেটা কনসোলে প্রিন্ট কর।
6. সবার কিছু শখ বা hobby থাকে। শখ বা hobby নামে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার কর।
7. প্রিয় রং কোনটা? color নামে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার কর।

*/

var name = "Afzal";
console.log(name);

var address = "Dhaka, Bangladesh";
console.log(address);

var college = "Dhaka College";
console.log(college);


var fan = "Meryl Streep";
console.log(fan);

var movieOfTheYear = "Inception";
console.log(movieOfTheYear);

var hobby = "Reading , Traveling, Coding, Music, Movies, Sports";
console.log(hobby);

var color = "Blue";
console.log(color);

/*

Javascript Bolean Data Type Practice:
1.তোমার বন্ধু পরীক্ষায় বাম্বু খাইছে। এখন সে হ্যাপি কি না, সেটা একটা boolean টাইপের ভেরিয়েবল ডিক্লেয়ার করে সেটার মান রাখ। আর সেটা console-এ প্রিন্ট কর।
2.নিজে একটা প্রোগ্রাম লিখে দেখ, তোমার crush তোমাকে মেসেজ দিয়েছে কি না। ধর মেসেজ দিলে true, না দিলে false। সেটা প্রিন্ট কর console.log() দিয়ে।
3.প্রিয় টিম খেলায় জিতে গেল, এখন সেই খুশিতে বগল বাজাতে বাজাতে celebrating নামে একটা boolean ভেরিয়েবল ডিক্লেয়ার করে সেটার মান দেও, আর আউটপুট দেখ।
4.এখন boolean টাইপ সম্পর্কে ভালো ধারণা হয়েছে। এবার একটা প্রোগ্রাম লিখ, যেখানে তুই তিনটা boolean ভেরিয়েবল ডিক্লেয়ার করবি: "isHappy", "hasMoney", আর "isHungry"। এই তিনটার মান যথাক্রমে true, false, আর true সেট কর। তারপর আউটপুট দেও console.log() দিয়ে।
5.আজকে পড়া শেষ হয়েছে কি না? পড়া শেষ হলে true, না হলে false হবে। আর সেটা রাখার জন্য isStudyDone নামে একটা boolean ভেরিয়েবল ডিক্লেয়ার কর।
6. এখন isPhoneCharged নামে একটা boolean ভেরিয়েবল ডিক্লেয়ার কর। চার্জ শেষ হলে true, শেষ না হলে false ।
7. তোমার কি রাতের খাওয়া শেষ? সেটা নিয়ে isDinnerDone নামে একটি boolean ভেরিয়েবল ডিক্লেয়ার কর। খাওয়া শেষ হলে কী লিখব, আর শেষ না হলে কী লিখব, সেটা তো জানো অলরেডি।

*/

var isHappy = true;
console.log(isHappy);

var hasMoney = false;
console.log(hasMoney);

var celebrating = true;
console.log(celebrating);

var isStudyDone = false;
console.log(isStudyDone);

var isPhoneCharged = true;
console.log(isPhoneCharged);

var isDinnerDone = false;
console.log(isDinnerDone);

/*

জাভাস্ক্রিপ্ট ম্যাথ অপারেটর প্র্যাকটিস:

১. ধরুন আপনি ১০০ টাকা আয় করেছেন। এর মধ্যে আপনি ৪০ টাকা খরচ করছেন। কত টাকা বাকি আছে তা জানার জন্য একটি প্রোগ্রাম লিখুন।

২. আপনার কাছে ১০টি পেন্সিল আছে। প্রতিবার আপনি ২টি পেন্সিল একসাথে ব্যবহার করলে। আপনি কতবার ব্যবহার করতে পারবেন?

৩. খুঁজে বের করার জন্য একটি প্রোগ্রাম লিখুন। আপনার কাছে ৬০ টাকা আছে। যদি আপনি প্রতিবার ১৫ টাকা খরচ করেন, তাহলে আপনি কতবার খরচ করতে পারবেন? এবং খরচ করার পরে কত টাকা বাকি আছে তা জানার জন্য একটি প্রোগ্রাম লিখুন।

৪. ধরুন আপনি "Hello" এবং "World" দুটি স্ট্রিং লিখেছেন। এই দুটি স্ট্রিং একসাথে সংযুক্ত করে "Hello World" কীভাবে তৈরি করবেন তা দেখানোর জন্য একটি প্রোগ্রাম লিখুন।

৫. আপনি যদি ১৫৩ কেজি চাল এবং ২৬১ কেজি ডাল কিনে থাকেন, তাহলে কত কেজি জিনিস কিনেছেন? মোট কেজি বের করার জন্য একটি প্রোগ্রাম লিখুন।

৬. আপনার ৫০০ টাকা আছে, আপনি প্রতিবার ৭৫ টাকা খরচ করবেন। কতবার খরচ করতে পারবেন এবং শেষে কত টাকা অবশিষ্ট থাকবে তা জানার জন্য একটি প্রোগ্রাম লিখুন।

৭. ৮ কে ৩ দিয়ে ভাগ করলে ভাগফল এবং অবশিষ্টাংশ বের করার জন্য একটি প্রোগ্রাম লিখুন।

৮. ৫০ কে ৯ দিয়ে ভাগ করলে অবশিষ্টাংশ বের করার জন্য একটি প্রোগ্রাম লিখুন।

৯. "Bangla" এবং "desh" এই দুটি স্ট্রিং যোগ করে আপনি "Bangladesh" তৈরি করতে চান। এটি কীভাবে করবেন তা দেখানোর জন্য একটি প্রোগ্রাম লিখুন।

১০. ধরুন, একদিন আপনি ঘুম থেকে উঠে ক্ষুধার কারণে একটি ছোট রাক্ষসে পরিণত হন। তারপর থেকে, আপনি প্রতিদিন ৪ কেজি চাল খাচ্ছেন। যদি আপনাকে এখন ১২ মণ (৪৮০ কেজি) চাল দেওয়া হয়, তাহলে এই চাল দিয়ে আপনি কত দিন টিকবেন। আবার, যদি একটি মাসে ৩০ দিন থাকে, তাহলে এই ১২ মণ চাল দিয়ে আপনি কত মাস টিকবেন।

*/

// ১---->

var income = 100;
var expense = 40;
var balance = income - expense;
console.log(balance);

// ২---->

var pencils = 10;
var usePerTime = 2;
var totalUse = pencils / usePerTime;
console.log(totalUse);

// ৩---->

let totalMone = 60;
let costEachTime = 15;

let time = Math.floor(totalMone / costEachTime);
let remainingMone = totalMone % costEachTime;

console.log("খরচ করা যাবে:", time, "বার");
console.log("বাকি টাকা:", remainingMone, "টাকা");

// ৪---->       

var str1 = "Hello";
var str2 = "World";
var result = str1 + " " + str2;
console.log(result);

// ৫---->

var rice = 153;
var lentil = 261;
var totalWeight = rice + lentil;
console.log(totalWeight);

// ৬---->

var totalMoney = 500;
var expensePerTime = 75;
var times = Math.floor(totalMoney / expensePerTime);
var remainingMoney = totalMoney % expensePerTime;
console.log("খরচ করা যাবে:", times, "বার");
console.log("বাকি টাকা:", remainingMoney, "টাকা");

// ৭---->   

var dividend = 8;
var divisor = 3;
// var quotient = dividend / divisor;
var quotient = Math.floor(dividend / divisor);
var remainder = dividend % divisor;

console.log("ভাগফল:", quotient);
console.log("ভাগশেষ:", remainder);

// ৮---->
var number = 50;
var divisor = 9;
var remainder = number % divisor;
console.log(remainder);

// ৯---->

var str3 = "Bangla";
var str4 = "desh";
var result = str3 + str4;
console.log(result);

// ১০---->

let totalRice = 480;     // মোট চাল (কেজি)
let dailyEat = 4;       // প্রতিদিন খাওয়া (কেজি)
let daysInMonth = 30;

let totalDays = totalRice / dailyEat;
let totalMonths = totalDays / daysInMonth;

console.log("চাল চলবে:", totalDays, "দিন");
console.log("চাল চলবে:", totalMonths, "মাস");
