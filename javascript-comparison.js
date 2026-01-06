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