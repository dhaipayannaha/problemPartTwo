
//problem  filter even numbers
// function eventNumber (number) {
//     const even = [];
//     for(let i = 0; i < number.length; i++){
//         if(number[i] % 2 === 0){
//             even.push(number[i]);
//         }
//     }
//     return even;
// }
// const number = eventNumber([54, 67,85, 98, 89, 46]);
// console.log(number);


// Problem expansive phone
// const phones = [
//     {name: 'oppo', price: 50000, camera: '12mp', color: 'black'},
//     {name: 'oneplus', price: 60000, camera: '20mp', color: 'blue'},
//     {name: 'samsung', price: 70000, camera: '48mp', color: 'red'},
//     {name: 'vivo', price: 40000, camera: '76mp', color: 'green'},
//     {name: 'apple', price: 90000, camera: '99mp', color: 'pink'},
//     {name: 'zte', price: 95000, camera: '19mp', color: 'yellow'},
// ]

// function expansivePhone(phones) {
//     let max = phones[0];
//     for (const phone of phones){
//         if (phone.price > max.price){
//             max = phone;
//         }
//     }
//     return max;
// }
// console.log(expansivePhone(phones));



//Problem chacking number and multiplication

// function multiply (num1, num2){
//     if (typeof num1 !== 'number'){
//         return 'Invalid input! Please enter a number.';
//     }else {
//         const mult = num1 * num2;
//     return mult;
//     }
// }

// const result = multiply(5, 10);
// console.log(result);



/// problem  return height number from an array
// const heights2 = [167, 190, 120, 165, 137];

// function higestArray (num){
//     let max = num[0];
//     for(const i of num){
//         if (i > max){
//             max = i;
//         }
//     }
//     return max;
// }

// console.log(higestArray(heights2));




// problem  largest length of name
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// function stringLength (num){
//     let height = num[0];
//     for (const i of num){
//         if (i.length > height.length){
//             height = i;
//         }
//     }
//     return height;
// }
// console.log(stringLength(heights2));



// problem  average phone price
// function findAveragePhonePrice (phones){
//     let allPrice = 0
//     for(const phone of phones){
//         const price = phone.price
//         allPrice = allPrice + price;

//     }
//     const avaragePrice = allPrice / phones.length;
//     return parseInt(avaragePrice);

// }

// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// console.log(findAveragePhonePrice(phones));




//problem company cast for employ
// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];

// function companyCast (array){
//     let totalAmount = 0;
//     for(const name of array){
//         const total = name.starting + (name.increment * name.experience);
//         totalAmount = totalAmount + total;
//     }
//     return totalAmount;
// } 

// console.log(companyCast(employees));




//problem cinema hall cast

// বাকে র ভাই মি রপুর চি ড়ি য়াখানার ম্যানে জার । প্রতি দি ন তাকে অসংখ্য টি কে ট বি ক্রি করতে হয় । টাকার হি সে ব এ
// তি নি সবসময় গড়মি ল বাধি য়ে ফে লে ন । তুমি যে হে তুসদ্য ডে ভে ল োপার হচ্ছ ো বাকে র ভাই ত োমার কাছে একটি
// হে ল্প চে য়ে ছে । বাকে র ভাই কে calculateMoney( ) নামে একটি ফাংশন বানি য়ে দি তে হবে যাকে প্রতি দি ন
// টি কে ট সে ল করার সংখ্যা ইনপুট দি লে সে সকল খরচ বাদ দি য়ে ম োট কত টাকা বাকে র ভাইর কাছে থাকে তা বলে
// দি তে পারে ।

// চি ড়ি য়াখানায় প্রতি টি কে ট বি ক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতি দি ন ১ জন দার োয়ান কে দি তে হয় ৫০০
// টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে ।


// const ticketPrice = 120;
// const gardCast = 500;
// const staff = 8;
// const staffCast = 50;

// function calculateMoney(ticket, ticketcast, gard, staff, staffCast) {

//     if (ticket <= 0) {
//         return 'Invalid';
//     } else if (typeof ticket === 'number') {
//         const cast = (ticket * ticketcast) - (gard + (staffCast * staff));
//         return cast;
//     }
// }
// console.log(calculateMoney(93, ticketPrice, gardCast, staff, staffCast));



// problem check name

// সালমান ভাই ও রাশে দা ভাবীর ক োল জুড়ে এসে ছে একটা পুত্র সন্তান । সালমান ভাই পুত্র সন্তানে র একটা ভাল ো নাম
// রাখতে চান । কি ন্তু তাদে র এলাকায় গ্রামে র মানষু রা নাম কে ব্যাংগ করে উচ্চারন করে । যে মন কার ো নাম salman
// হলে তারা বলে সালমাইন্যা । কার ো নাম jafor হলে তারা বলে জাফইর্যা । সালমান ভাই চান না তার পুত্র সন্তান কে
// কে উ এভাবে ক্ষে পাক ।
// সালমান ভাই দে খতে পে লে ন যে যাদে র নামে র শে ষে a, y, i , e , o , u, w থাকে তাদে র কে আসলে ক্ষে পান ো
// যায় না । যমন Tonoy, utsho , Roide, shanto এসব ধরনে র নাম গুল ো কে ব্যাংগ করে উচ্চারন করা যায় না ।

// const sym = ["a", "y", "i", "e", "o", "u", "w", "A", "Y", "I", "E", "O", "U", "W"];

// function countVowels(sentence){
//     const lastChar = sentence[sentence.length - 1];
//     if(sym.includes(lastChar)){
//         return 'goodName'
//     }
//     return 'badName'
// }
// console.log (countVowels("dippot"));




// problem 

// ত োমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রি য়ে ট করতে হবে যা ইনপুট হি সে বে একটি Array
// নে বে । ফাংশন টি আরে কটি Array রি টার্ন করবে যে খানে ভ্যালুগুল ো হবে শুধুনাম্বার । অর্থাৎ Array এর যে সকল
// elements নাম্বার না , তাদে র ডি লি ট করে শুধুমাত্র নাম্বার গুল ো কে Array আকারে রি টার্ন করতে হবে ।
// তুমি যদি এই ফাংশনে এই [ NaN, 1,12,0 ,-1 , undefined ] Array টি পাস কর ো কর ো তাহলে সে ত োমাকে
// রি টার্ন করবে [ 1 , 12 , 0 , -1 ]

// function deleteInvalids (array){
//     if (!Array.isArray(array)){
//         return 'Invalid input! Please provide an array.';
//     }else{
//         const add = [];
//     for(const i of array){
//         if (typeof i === 'number'){
//             add.push(i);
//         }
//     }
//     return add;
//     }

// }
// const number = {num: [ 1 , 2 , 3 ]};
// console.log(deleteInvalids(number));





//problem 

// কলি মুদ্দি ন সাহে ব নতুন ফ োন কি নে বি ভি ন্ন ওয়ে বসাইটে ভি জি ট করে ন এবং বি ভি ন্ন এপ্লি কে শনে একাউন্ট ক্রি য়ে ট
// করে ন । কি ন্তু তি নি পাসওয়ার্ড মনে রাখতে পারে ন না । তি নি এমন একটি ফাংশন চান, যে খানে তার ইনফরমে শন
// এবং ওয়ে বসাইট নে ম দি লে সে টা কলি মুদ্দি ন সাহে ব কে একটি মনে রাখার মত ো পাসওয়ার্ড জে নারে ট করে দি তে
// পারবে ।
// তার জন্য password() নামে একটা ফাংশন লি খতে হবে ।

// function password(obj){
//     if(Object.entries(obj).length !== 3 || obj.birthYear.toString().length !== 4){
//         return 'invalid';
//     }else{
//         for (const i in obj){
//             const siteNames = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
//             return `${siteNames}#${obj.name}@${obj.birthYear}`;
//         }
//     }

// }
// console.log(password({ name: "kolimuddin" , birthYear: 199, siteName: "google"}));



//problem 

// ফ্রি ল্যান্সার শাহে দ প্রতি মাসে বে শ কি ছুপে মে ন্ট ক্লায়ে ন্ট দে র থে কে পায় । কি ন্তু পে মে ন্ট এর কি ছুট্যাক্স পরি শ োধ
// এবং নি জে র লি ভি ং কস্ট এর কারনে সে সে ভি ংস করতে পারে না । তার সে ভি ংস এর হি সে ব করার জন্যে তাকে
// monthlySavings() নামে একটি ফাংশন তৈ রী করে দি তে যে টা ইনপুট হি সে বে নে বে একটি Array (প্রতি মাসে
// পাওয়া সকল পে মে ন্ট ) এবং একটি Number ( শাহে দে র লি ভি ং কস্ট ) ।
// শাহে দে র যে সকল পে মে ন্ট 3000 টাকা বা তার বে শি সে সকল পে মে ন্ট থে কে ব্যাংক Tax হি সে বে ২০% টাকা কে টে
// নে য় । এখন ম োট ইনকাম থে কে Tax গুল ো বাদ দি য়ে এবং Living cost বাদ দি য়ে বাকী যে টাকা থাকে সে টা ই
// হল ো শাহে দে র সে ভি ংস । অর্থাৎ ফাংশন টি শাহে দে র সে ভি ংস কে রি টার্ন করবে । যদি সে ভি ংস করার মত ো টাকা না
// থাকে অর্থাৎ সে ভি ংস এর ভ্যালুযদি ০ এর চে য়ে কম হয় তাহলে ফাংশন টি রি টার্ন করবে একটি স্ট্রি ং তাহল ো “earn
// more” ।

// function monthlySaving(arr, livingCast) {
//     let total = [];  // [1000, 2000, 2800];
//     let sum = 0;
//     if (Array.isArray(arr) && !isNaN(livingCast)) {
//         for (const i of arr) {
//             if (i < 3000) {
//                 total.push(i);
//             } else if (i >= 3000) {
//                 let tax = i * (20 / 100);
//                 let net = i - tax;
//                 total.push(net);
//             }
//         }

//         for (const i of total) {
//             sum += i;
//         }
//         sum -= livingCast;

//         if (sum < 0) {
//             return 'Not enough money for saving';
//         }


//         return 'Saving' + " " + sum;
//     }else{
//         return 'Invalid';
//     }

// }
// console.log(monthlySaving([900, 2700, 2400], 5000));