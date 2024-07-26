## Interview-Question-MARN-STACK

### নিজের ভাষার এইচটিএমএল সিএসএস জাভাক্রিপ্ট , ইন্টারভিউ প্রশ্ন ও Web Development এর Eco System গভিরভাবে জানুন

##### JavaScript ও Web Development এর Eco System গভিরভাবে জানার জন্য ও ইন্টারভিউ জিজ্ঞাসা করার মত গুরুত্বপূর্ণ সব প্রশ্ন ও উত্তর সমূহ একত্রে । আশা করি প্রতিটি Developer উপকৃত হবেন ।

##### বর্তমানে সকল প্রশ্নসমুহ সংগ্রহ করা হচ্ছে । ধীরে ধীরে সকল উত্তরসমূহ যোগ করার পর তা রিডেবিলেটির জন্য একটা ওয়েবসাইটে যুক্ত করা হবে ।

### সূচিপত্র

- [HTML](#HTML)
- [CSS](#CSS)
- [JavaScript](#js)
- [TypeScript](#ts)
- [React.js](#reactjs)
- [Next.js](#nextjs)
- [Node/Express](#node-express)
- [Database](#database)
- [Guess The Output Challenge](#GTO)

<br>
<hr>

<h3 align="center" id="js"><img src="https://skillicons.dev/icons?i=js" width="20" />  JavaScript</h3>

<div>

<details>
<summary> ১.  Local storage ও  session   এর মধ্যে পার্থক্য কি ?  </summary>

#### <span style="color:#f43f5e;">উঃ</span> local storage ও session এর মধ্যে পার্থক্য হলোঃ

| পার্থক্য  | Local Storage                                                        | Session Storage            |
| --------- | -------------------------------------------------------------------- | -------------------------- |
| স্থায়ীত্ব | ম্যানুয়ালি বা প্রোগ্রামিক্যালি ব্রাউজার ডাটা ক্লিয়ার না করা পর্যন্ত | ট্যাব ক্লোস করার সাথে সাথে |
| এভাইলেবল  | সকল window তেই                                                       | নির্দিষ্ট ট্যাবেই          |
| উপযোগী    | দীর্ঘ সময় ডাটা রাখায় যায়                                             | আল্প সময় ডাটা যায় রাখায়    |

</details>

<details>
<summary> Closure কি এবং Closure  কাকে বলে ?  </summary>

#### <span style="color:#f43f5e;">উঃ</span> Closure হলোঃ

Closure হচ্ছে, একটা function এ ব্যবহৃত data, যেই data টা এই function এর scope এ ডিক্লেয়ার করা নাই, অর্থাৎ, এই নিজস্ব function এ, এই data টা own করে না । বাইরের থেকে এই data টা আসছে, মানে parent function থেকে আসছে ।

```javascript
function test() {
  let msg = 'I am learning for ';
  let month = 6;
  return function () {
    console.log(msg, month);
  };
}
var sayMsg = test();
console.dir(sayMsg);
```

আমরা জানি জাভাস্ক্রিপ্ট এ আপনি চাইলে ফাংশন থেকেও আরেকটা ফাংশন রিটার্ন করতে পারবেন। আর তখনি তৈরী হয় প্যারেন্ট-চাইল্ড রিলেশন। আর রিটার্নকৃত ফাংশনের সবকিছু চাইল্ড ফাংশন চাইলেও অ্যাক্সেস করতে পারে ক্লোজারস এর কারণে।

```javascript
function closuresDemo() {
  var x = 10;
  return function () {
    var y = 20;
    console.log('Sum: ' + (x + y));
  };
}
```

ক্লোজার কি ? ক্লোজার হল ফাংশন এর ভিতরে আরেকটা ফাংশন !! যে ফাংশন উপরের ফাংশন এর লোকাল ভেরিয়েবল গুলো এক্সেস পাবে। টুইস্ট হচ্ছে উপরের ফাংশন রান হয়ে ডেড হইলেও ভিতরের টা জীবিত থাকে । তার মানে আগে প্যারেন্ট ফাংশন মরে গেলেও প্যারেন্ট এর জমি জমা নিয়ে চাইল্ড জীবিত থাকে !!

```javascript
function sayHello2(name) {
  var text = 'Hello ' + name; // Local variable
  var say = function () {
    console.log(text);
  };
  return say;
}
var say2 = sayHello2('Bob');
say2(); // logs "Hello Bob"
```

sayHello2 নিজে শেষ হবার সময়ে var say2 = sayHello2(‘Bob’); এই লাইনে একটা ফাংশন রিটার্ন করে ! । say2 কল করলে তাই আগের কল এ text এর যে ভ্যালু ছিল সেটা পরের কলে পাচ্ছে।

কারন -

১। ভিতরের ফাংশন বাইরের ফাংশন এর ভেরিয়েবল এক্সেস পাবে

২। ভিতরের ফাংশন এর লাইফ টাইম বাইরের ফাংশন এর চাইতে বেশি, বাইরের টা শেষ হয়ে যাবার সময় ভিতরের ফাংশন কে সব ডাটা দিয়ে যায়.

</details>

<details>
<summary> (Hoisting) হয়েস্টিং  কি ?  </summary>

#### <span style="color:#f43f5e;">উঃ</span> সহজ ভাষায়, Hoisting হলো জাভাস্ক্রিপ্টের Default Behaviour যা ফাংশন বা ভ্যারিয়বলের declaration অংশকে উপরে নিয়ে যায়।

var এর ক্ষেত্রে hoisting হয়ে value = undefined হয়ে যায়, অথ্যাৎ মেমরিতে একটা reference তৈরী হয়।

```javascript
a = 10;

var a;

console.log(a); // 10
```

উপরের কোডটি লক্ষ্য করে দেখুন, ভ্যারিয়বল a এর ভ্যালু ডিক্লেয়ার করার আগে value a= 10 assign করা হয়েছে। তাহলে কি মনে হয় console log এ আমার কি output পাবো। চলুন কোডটি রান করি এখন:

#### এবার জানবো, Let or Const এর ক্ষেত্রে কি hoisting হয় কিনা?

একদম সোজাসোপ্টা উত্তর, Let এর ক্ষেত্রেও hoisting হয়। চলুন জানি কিভাবে।

```javascript
b = 20;

let b;

console.log(a);
```

Let এর ক্ষেত্রেও hoisting হয়, অর্থ্যাৎ let দিয়ে ডিক্লেয়ার করা ভ্যারিয়বলেরও, ডিক্লেয়ার অংশটুকু কোড এক্সিকিউশনে একদম উপরে চলে যাবে, কিন্তু value = undefined বা memeroy তে reference তৈরী হয় না। তাই উপরের কোডটি রান করলে কনসোল লগে reference error পাবো।

```javascript
console.log(c); // ReferenceError

let c;
console.log(c); // undefined

c = 'Javascript';

console.log(c); // Javascript
```

const এর ক্ষেত্রে syntax error হবে, কারন hoisting ত দূরের কথা const আলাদা করে declare করে assign করা যায় না , তাই কনসোলে syntax error দেখতে পাচ্ছি।

```javascript
const a;

a = 10; // which is  syntax error

console.log(a);
```

### গুরুত্বপূর্ন একটা ব্যাপারঃ

আপনি যদি কোনো ভ্যালু ডিক্লেয়ার করেন কিন্তু তাতে কিছু সেইভ না করেন তাহলে সেটা বাই ডিফল্ট আন্ডিফাইন্ড হিসাবে সেইভড হয়ঃ

```javascript
var something;

console.log(something); //  undefined
```

</details>
<details>

<summary>  জাভাস্ক্রিপ্ট এ কয় ধরনের ডাটা টাইপ রয়েছে ? </summary>

#### <span style="color:#f43f5e;">উঃ</span> জাভাস্ক্রিপ্ট এ ব্যাসিকিলি দুই ধরনের ডাটা টাইপ আছেঃ

১। প্রিমিটিভ ডাটা টাইপ

২। নন প্রিমিটিভ/রেফারেন্স ডাটা টাইপ

### প্রিমিটিভ ডাটা টাইপঃ

(i) String

(ii) Number - গাণিতিক বা numeric মান নির্ধারণ করে

(iii) Undefined - Undefined মান নির্ধারণ করে

(iV) Boolean - কেবল মাত্র দুইটি মান বা value ব্যবহার করে অর্থাৎ "true" এবং "false" ব্যবহার করে মান নির্ধারণ করে

(V) Null - শূন্য বা null মান নির্ধারণ করে

(Vi) undefined

(Vii) symbol

### নন-প্রিমিটিভ/রেফারেন্স ডাটা টাইপঃ

নন-প্রিমিটিভ ডাটা টাইপের ভ্যালু সরাসরি সেইভ করা থাকে না। বরং ভ্যালুর রেফারেন্স সেইভ থাকে। আর এই টাইপের ডাটা অবজেক্ট। মানে এদেরও আবার অনেক প্রোপ্রার্টি আছে। যেমনঃ

(i) অ্যারে

(ii) অবজেক্ট

(iii) ফাংশন

</details>

<details>
<summary>  জাভাস্ক্রিপ্টঃ ইফি ? </summary>

#### <span style="color:#f43f5e;">উঃ</span> ইফি হলো Immediately Invoked Function Expressions (IIFE)

## যে ফাংশন নিজেই নিজেকে কল করে তাকে ইফি বলে |

ইফি তে সাধারণত পুরো ফাংশনটাকে প্রথম ব্র্যাকেটস এর ভিতরে রাখতে হয় এবং সবশেষে আরো দুইটা আর্গুমেন্ট ব্র্যাকেটস দিয়ে কল করতে হয়। উদাহরন দেখলে ক্লিয়ার হয়ে যাবে। ধরি উপরের ফাংশনটাই আমি সরাসরি ক্রিয়েট করে সাথে সাথেই কল করতে চাইঃ

```javascript
(function aDemoFunc() {
  console.log('Hello World!');
})();
```

এখানে পুরো ফাংশনটা প্রথম ব্র্যাকেটস এর ভিতরে চলে যাবে। এবং সবশেষে আরো দুইটা ব্র্যাকেটস হবে যেখানে যদি উক্ত ফাংশনের কোনো আর্গুমেন্ট থাকে তাহলে পাস করতে পারবেন।

সেইমভাবে ফাংশন এক্সপ্রেশন এর ক্ষেত্রেও কাজ করবে। তবে এক্ষেত্রে ফাংশন থেকে রিটার্নকৃত ভ্যালু উক্ত ভ্যারিয়েবলটায় স্টোর হয়ে যাবে ইমিডিয়েটলি।

```javascript
var sum = (function () {
  return 10 + 20;
})();
```

এবার গেলো তো Immediately Invoked Function Expressions বা ইফি নিয়ে আলোচনা, কিন্তু এটা আসলে কিভাবে আমাদের উপকারে লাগবে? হ্যা এবার আমি সেটা নিয়েই আলোচনা করবো।

এটা দিয়ে আপনি প্রাইভেট ফাংশন ক্রিয়েট করতে পারবেন। এই ফাংশন বাইরে কোথাও ইউজ করতে পারবেন না। না পারবেন এর ভিতরের কিছু ইউজ করতে। সো প্রাইভেসি মেইন্টেইন করতে চাইলে বা আপনি যদি চান কোনো ফাংশনের ভিতরের ডাটা বাইরে এক্সপোজ না করতে তাইলে এটা খুব ভালো একটা ইউসেজ হতে পারে। যেমনঃ

```javascript
(function aDemoFunc() {
  console.log('Hello World!');
})();

aDemoFunc(); //  ReferenceError
```

এটা যেমন সাথে সাথে কন্সোলে উক্ত লেখা প্রিন্ট করে ফেলবে, কিন্তু আপনি পরে যদি কোথাও aDemoFunc() কল করেন, এটা কাজ করবে না।

</details>

<details>

<summary>  জাভাস্ক্রিপ্টে ফাংশন কত প্রকার ও  কি কি ?  </summary>

1. Normal/Regular Function / Pure Function
2. Anonymous Function
3. Calback Function
4. Function
5. Arrow Function
6. Higher-order Function

#### 1 Normal Function

নরমাল ফাংশন ডিক্লেয়ারের জন্য function কীওয়ার্ড ব্যবহার করতে হয় এর পর function কীওয়ার্ড এর সাথে তার একটি নাম দিতে হয় এবং ওই নাম ধরে function টি কে কল করতে হয় |

```javascript
function normalFun() {
  console.log(' This is Normal Function Example');
}
```

#### Pure Function

Computer Science এর ভাষায় যে সকল function ইন্টার্নাল লজিক নিয়ে থাকে ও একই Input এর জন্য একই Output দিয়ে থাকে তাকে Pure Function বলে ।

#### এর ২টা বৈশিষ্ট থাকে

নিজের বিজনেস লজিক নিয়ে কনসার্ন ।
Same Input এর জন্য Same output দিয়ে থাকে ।

#### Pure Function এর উদাহরণঃ

```javascript
function pureFun(value) {
  return value * 4;
}

pureFun(4); // 4
pureFun(4); // 4
pureFun(4); // 4
```

এখানে pureFn কে Input হিসেবে যতবারই ২ দেয়া হবে এটি প্রতিবার ৪ রিটার্ন করবে ।

এখানে Pure function নীতি ২টি সঠিকভাবে ফলো করা হয়েছে ।

১. প্রতিবার same input এর জন্য same output দিবে ।

২. বাহিরের কোনো প্রকার স্টেট বা কিছু প্ররিরর্তন করে নাই

#### অপরদিকে,

```javascript
let count = 0;

function impureFun(value) {
  count++;
  return value * count;
}

impureFun(2); // 2
impureFun(2); // 4
impureFun(2); // 6
```

impureFn এর ক্ষেত্রে Pure function নীতি ২টি সঠিকভাবে ফলো করা হয়নি ।

১. প্রতিবার same input দিলেও আলাদা আলাদা output দিচ্ছে ।

২. এটি বাহিরের count variable পরিবর্তন করছে, অর্থাৎ শুধুমাত্র নিজের লজিক নিয়ে কনসার্ন না , function টি নিজের body এর বাহিরের কিছু পরিবর্তন করে ফেলেছে ।

তাই এটি pure function না ।

### 6 Higher-order Function

#### হাইয়ার অর্ডার ফাংশন কি?

#### <span style="color:#f43f5e;">উঃ</span>

যে ফাংশনে অন্য কোন ফাংশনকে আর্গুমেন্ট হিসাবে পাস করা হয় বা কোন ফাংশন অন্য কোন ফাংশনকে রিটার্ন করে তাকে হাইয়ার অর্ডার ফাংশন বলা হয়। বাংলায় এটাকে ঊচ্চমার্গীয় ফাংশন হিসেবে ভেবে নিতে পারেন।

#### Example Higher-order Function

```javascript
// Example 1

function welcomeMsg(name) {
  console.log('Welcome Mr. ' + name);
  return function options(menu) {
    console.log('Do you like ' + menu + ' Mr. ' + name);
  };
}

welcomeMsg('Zonayed Ahmed')('Coffee');

// Example 2

function callMyName(name, callback) {
  var myAge = 20;
  callback(myAge);
  console.log('Is it interesting? Yes it is Mr.' + name);
}

function hello(age) {
  console.log('I am passed through argument and my age is: ' + age);
}

callMyName('Zonayed Ahmed', hello);
```

</details>

</div>
