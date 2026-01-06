//?javascript comparison

/*

*1. < less than 
!ছোট / কম কিনা চেক করে । [উদাহরণ: 5 < 10 → ৫, ১০-এর চেয়ে ছোট]

*2. <= minus than, or equal to
!কম বা সমান কিনা চেক করে । [উদাহরণ: 5 <= 5 → ৫, ৫-এর সমান]

*3. > greater than
!বড় কিনা চেক করে । [উদাহরণ: 10 > 5 → ১০, ৫-এর চেয়ে বড়]

*4. >= greater than, or equal to
!বড় বা সমান কিনা চেক করে । [উদাহরণ: 10 >= 10 → ১০, ১০-এর সমান]

*5. ! not equal to
!সমান নয় কিনা চেক করে । [উদাহরণ: 5 != 10 → ৫, ১০-এর সমান নয়]

*6. == equal to
!সমান কিনা চেক করে । [উদাহরণ: 5 == '5' → ৫, '৫'-এর সমান]

*7. === strict equal
!কঠোর সমান কিনা চেক করে । [উদাহরণ: 5 === '5' → মিথ্যা, কারণ একটি সংখ্যা এবং অন্যটি স্ট্রিং]

*8 And (&&)
!উভয় শর্তই সত্য কিনা চেক করে । [উদাহরণ: (5 > 3 && 10 > 5) → সত্য, কারণ উভয় শর্তই সত্য]

*9 Or (||)
!উভয় শর্তই সত্য কিনা চেক করে । [উদাহরণ: (5 > 3 || 10 > 5) → সত্য, কারণ একটি শর্ত সত্য]
*/

/* 

TODO--> JavaScript basic comparison Practice:

* তুই আর তোর ছোট ভাইয়ের মধ্যে খাবার কে বেশি খেয়েছে, সেটা তুলনা করবি। তুই 7টা স্যান্ডউইচ খেয়েছিস, আর তোর ছোট ভাই 5টা খেয়েছে। একটা প্রোগ্রাম লিখে দেখ, কে বেশি খেয়েছে ।

* তোর ক্লাসে 45 জন ছাত্র আছে, আর পাশের ক্লাসে 50 জন। একটা প্রোগ্রাম লিখে দেখ, কোন ক্লাসে বেশি ছাত্র আছে।

* তুই আর তোর বন্ধু পরীক্ষায় নম্বর পেয়েছিস। তুই 75 পেয়েছিস, আর তোর বন্ধু পেয়েছে 75। একটা প্রোগ্রাম লিখে চেক কর, তোর আর তোর বন্ধুর নম্বর সমান কি না ।

*তুই 100 টাকা জমানোর টার্গেট করেছিস। এখন পর্যন্ত 95 টাকা জমাইছিস। একটা প্রোগ্রাম লিখে চেক কর, তুই টার্গেটে পৌঁছাইছিস কি না বা তার চেয়ে বেশি জমাইছিস কি না।

* একটা প্রোগ্রাম লিখে দেখ, 10 এবং 7 কি অসমান (Different)।

* 20 কি 15-এর চাইতে কম বা সমান কি না, সেটা চেক কর।

* তুই আর তোর বন্ধু একই সাথে পরীক্ষা দিছস। পরীক্ষার দেয়ার পর তোর বন্ধু কেঁদে কেঁদে বুক ভাসিয়ে ফেলছে। তার    পরীক্ষা জঘন্য হইছে, সে ফেল করবে। এক মাস পরে রেজাল্টে দেখা গেছে, তুই পাইছস 45 নম্বর আর বন্ধু পাইছে 97 নম্বর। এইবার চেক করে দেখ, তোর বন্ধু কি তোর চাইতে কম নম্বর পাইছে কি না।

*/

// Example Solutions:

// 1. Compare food intake
let mySandwiches = 7;
let brotherSandwiches = 8;
console.log("Who ate more sandwiches?", mySandwiches > brotherSandwiches ? "I did!" : "My brother did!"); //ES6

// 2. Compare class sizes
let myClassSize = 45;
let neighborClassSize = 50;
console.log("Which class has more students?", myClassSize < neighborClassSize ? "Neighbor's class" : "My class"); //ES6

// 3. Compare exam scores
let myScore = 75;
let friendScore = 75;
console.log("Are our scores equal?", myScore == friendScore);

// 4. Check savings target
let savingsTarget = 100;
let currentSavings = 95;
console.log("Have I reached my savings target?", currentSavings >= savingsTarget);

// 5. Check if numbers are different
let num1 = 10;
let num2 = 7;
console.log("Are 10 and 7 different?", num1 != num2);

// 6. Check if 20 is less than or equal to 15
let num3 = 20;
let num4 = 15;
console.log("Is 20 less than or equal to 15?", num3 <= num4);

// 7. Compare exam scores after results
let myExamScore = 45;
let friendExamScore = 97;
console.log("Did my friend score less than me?", friendExamScore < myExamScore);

// End of JavaScript basic comparison Practice

//! ভেরিয়েবলের তুলনা

/*
TODO:--> Operator(Description){Example}:
? ** Let X=10, Y=5; ** 

* + -->(Addition)-->{X+Y=15}
* - -->(Subtraction)-->{X-Y=5}
* * -->(Multiplication)-->{X*Y=50}
* / -->(Division)-->{X/Y=2}
* % -->(Modulus)-->{X%Y=0}
* ++ -->(Increment)-->{X++=11}
* -- -->(Decrement)-->{Y--=4}

*/

/*

TODO--> JavaScript Variable Comparison Practice:

*1. তোর ছোট ভাইয়ের বয়স 10 বছর, আর তোর বয়স 15 বছর। একটা প্রোগ্রাম লিখে দেখ, তোর ছোট ভাইয়ের বয়স কি তোর বয়স থেকে কম বা সমান কি না।

*2. একটা পরীক্ষায় পাস মার্কস 33। ধর, তুই 45 পেয়েছিস। চেক কর, তুই পাস করেছিস কি না।

*3. দুইটা ভেরিয়েবলে জাম্বুরা আর কদবেলের দাম রাখা হলো। জাম্বুরা কি কদবেলের চেয়ে সস্তা কি না, সেটার তুলনা কর।

*4. তুই 10টা বই পড়েছিস, আর তোর বন্ধু পড়ছে 10টা। চেক কর, তোরা কি সমান সংখ্যক বই পড়েছিস কি না।

*5. তোর কাছে 15টা বিস্কুট আর তোর বন্ধুর কাছে 20টা। চেক কর, তুই কি তোর বন্ধুর থেকে কম বিস্কুট পেয়েছিস কি না।

*6. একটা ফুটবল ম্যাচে রিয়াল মাদ্রিদ 2টা গোল করছে, আর বার্সা 3টা গোল করছে। চেক কর, রিয়াল মাদ্রিদ কি বার্সার চেয়ে কম গোল করেছে কি না।

*7. তোর নাম "Rahim", আর তোর বন্ধুর নাম "Karim"। চেক কর, তোর নাম কি তোর বন্ধুর নামের সমান কি না।

*৪. তুই আজকে পড়াশোনা করেছিস (true), আর তোর বন্ধু পড়াশোনা করেনি (false)। চেক কর, তোরা কি একই রকম কাজ করেছিস কি না।

*/

// Example Solutions:

// 1. Compare ages
let myAge = 15;
let brotherAge = 10;
console.log("Is my brother's age less than or equal to mine?", brotherAge <= myAge);

// Compare exam scores
let passMarks = 33;
let myExamMarks = 45;
console.log("Did I pass the exam?", myExamMarks >= passMarks);

// 2. Compare prices
let jambaPrice = 100;
let kodelPrice = 150;
console.log("Is jamba more expensive than kodel?", jambaPrice > kodelPrice);

// 3. Compare number of books read
let myBooksRead = 10;
let friendBooksRead = 10;
console.log("Did we read the same number of books?", myBooksRead == friendBooksRead);

// 4. Compare number of biscuits
let myBiscuits = 15;
let friendBiscuits = 20;
console.log("Do I have fewer biscuits than my friend?", myBiscuits < friendBiscuits);

// 5. Compare football goals
let realMadridGoals = 2;
let barcaGoals = 3;
console.log("Did Real Madrid score fewer goals than Barca?", realMadridGoals < barcaGoals);

// 6. Compare names
let myName = "Rahim";
let friendName = "Karim";
console.log("Are our names the same?", myName === friendName);

// 7. Compare study status
let myStudyStatus = true;
let friendStudyStatus = false;
console.log("Did we do the same activity?", myStudyStatus === friendStudyStatus);
// End of JavaScript Variable Comparison Practice

/* 

TODO-->JavaScript Advanced Comparison Practice:

*1. তোর কাছে 50 টাকা আছে, আর বন্ধুর কাছে আছে "50" টাকা (স্ট্রিং হিসেবে)। একটা প্রোগ্রাম লিখে দেখ, 50 == "50" দিলে আর 50 === "50" দিলে আউটপুট কী আসবে।

*2. তোর প্রোগ্রামিং নোটবুকে "JavaScript" লিখে রেখেছিস, আর এটা একটা স্ট্রিং টাইপ ডাটা। এখন তুই দেখতে চাস "JavaScript" "JavaScript" ==== 'JavaScript' দিলে কী আউটপুট আসবে। ব্যাখ্যা কর, কেন একই আউটপুট আসছে। == 'JavaScript' আর

*3. একটা প্রোগ্রাম লিখে দেখ, 25 এবং "25"-এর মধ্যে 25 == "25" এবং 25 === "25" দিলে কী আউটপুট আসবে এবং কেন সেটা হয়, সেটা কমেন্ট করে লিখ।

*4. "apple" এবং "apple" লিখে তুলনা করলে, "apple" == : "apple" এবং "apple "apple"-এর আউটপুট কী হবে। ===

* 5. একটা প্রোগ্রাম লিখে দেখ, "test" এবং "TEST"-এর মধ্যে "test" == "TEST" এবং "test" === "TEST"-এর আউটপুট কী হবে।

* 6. variableX-এর মান 15 আর variableY-এর মান "20" দিলে variableX != variabley এবং variableX ! == variableY-এর আউটপুট কী হবে।

* 7. variableA-এর মান hello আর variableB-এর মান "Hello"। এখন variableA == variableB এবং variableA === variableB চেক করার প্রোগ্রাম

*/

// Example Solutions:

// 1. Compare number and string

let myMoney = 50;
let friendMoney = "50";
console.log("50 == '50':", myMoney == friendMoney);
console.log("50 === '50':", myMoney === friendMoney);

// 2. Compare identical strings
let note = "JavaScript";
console.log("'JavaScript' == 'JavaScript':", note == 'JavaScript');
console.log("'JavaScript' === 'JavaScript':", note === 'JavaScript');

// 3. Compare number and string again
let numA = 25;
let strA = "25";
console.log("25 == '25':", numA == strA);
console.log("25 === '25':", numA === strA);

// 4. Compare identical strings again
let strB1 = "apple";
let strB2 = "apple";
console.log("'apple' == 'apple':", strB1 == strB2);
console.log("'apple' === 'apple':", strB1 === strB2);

// 5. Compare different case strings
let strC1 = "test";
let strC2 = "TEST";
console.log("'test' == 'TEST':", strC1 == strC2);
console.log("'test' === 'TEST':", strC1 === strC2);

// 6. Compare number and string with inequality
let variableX = 15;
let variableY = "20";
console.log("variableX != variableY:", variableX != variableY);
console.log("variableX !== variableY:", variableX !== variableY);

// 7. Compare different case strings with variables
let variableA = "hello";
let variableB = "Hello";
console.log("variableA == variableB:", variableA == variableB);
console.log("variableA === variableB:", variableA === variableB);

// End of JavaScript Advanced Comparison Practice