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

<h3 align="center" id="js"><img src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" width="20" />  HTML5</h3>

<div>
<details>
<summary> এম্পটি ট্যাগ কী? </summary>

উত্তর : যে ট্যাগ ডকুমেন্ট নির্দেশনায় শুধু একবার ব্যবহার করা হয়, তাকে এম্পটি ট্যাগ বলে। ইনপুট ট্যাগ, ইমেজ ট্যাগ ইত্যাদির শুরু ট্যাগ থাকলেও শেষ ট্যাগ নেই।

</details>

<details>
<summary>  অ্যাট্রিবিউট কী? </summary>

উত্তর : HTML-এ যে এলিমেন্টগুলো রয়েছে তাতে অতিরিক্ত তথ্য প্রকাশ করার জন্য যে পদ্ধতি ব্যবহার করা হয়, তাকে অ্যাট্রিবিউট বলে।

</details>

<details>
<summary>  নেস্টেড এলিমেন্ট কী? </summary>

উত্তর : একটি এলিমেন্টের মধ্যে আরেকটি এলিমেন্ট থাকলে তাকে নেস্টেড এলিমেন্ট বলে।

</details>

<details>
<summary>  বর্তমানে ওয়েব পেজে হাইপারলিঙ্ক একটি গুরুত্বপূর্ণ উপাদান ব্যাখ্যা কর।? </summary>

উত্তর : হাইপারলিঙ্ক হচ্ছে একটি ওয়েব পেজের কোনো একটি অংশের সাথে বা কোনো পেজের সাথে অন্যান্য পেজের সংযোগ স্থাপন করা। লিঙ্কের সিনটেক্সটি নিম্নরূপ : link text

</details>

</div>

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

<details>

<summary>  জাভাস্ক্রিপ্টে Falsy ভ্যালু কোনগুলেকে বলে? </summary>

#### <span style="color:#f43f5e;">উঃ</span>

0, "", null, undefined, NaN, false এগুলোকে falsy ভালু বলে ।

#### <span style="color:#f43f5e;">Example</span>

```javascript
// ###  Example 1

let myValue = '';

if (myValue) {
  console.log('I am truthy');
} else {
  console.log('I am Falsy'); // Result  I am Falsy
}

// ###  Example 2

let myValue = 0;

if (myValue) {
  console.log('I am truthy');
} else {
  console.log('I am Falsy'); // Result  I am Falsy
}
```

</details>

<details>

<summary>  জাভাস্ক্রিপ্টে getElement এবং Query সিলেক্টর্স এর পার্থক্য </summary>

এই দুটি পদ্ধতির মধ্যে সুস্পষ্ট মিল হল যে তারা উভয়ই একটি ওয়েব পৃষ্ঠা থেকে উপাদান নির্বাচন করে। তারা বিভিন্ন উপায়ে তা করে।

#### <span style="color:#f43f5e;">উঃ</span> getElement getElementById পদ্ধতি ব্যবহার করে, আপনি শুধুমাত্র তার ID দ্বারা একটি উপাদান নির্বাচন করতে পারেন। শুধুমাত্র একটি উপাদান নির্বাচন করতে পারেন। getElementByClassName আপনাকে শুধুমাত্র তার class নামের উপর ভিত্তি করে যেকোনো উপাদান নির্বাচন করতে দেয়। getElementsByTagName() পদ্ধতি একটি নির্দিষ্ট ট্যাগ নামের সাথে সমস্ত উপাদানের একটি সংগ্রহ প্রদান করে।

```Javascript

document.getElementById(“demo”).style.color = “red”;
const collection = document.getElementsByClassName(“example color”);
document.getElementsByTagName(“p”)[0].innerHTML = “Hello World!”


```

#### <span style="color:#f43f5e;">উঃ</span> QuerySelector দিয়ে, আপনি একটি CSS Selector উপর ভিত্তি করে একটি উপাদান নির্বাচন করতে পারেন। querySelectorAll দিয়ে, আপনি সমস্ত উপাদান নির্বাচন করতে পারেন। querySelector(“css-selectors”) আপনাকে CSS Selector প্যাটার্নের উপর ভিত্তি করে যেকোনো উপাদান নির্বাচন করতে দেয়।

```javascript
document.querySelector(“.example”).style.backgroundColor = “red”;
document.querySelectorAll(“.example”).style.backgroundColor = “red”;

```

</details>

<details>
<summary>  হোস্ট অবজেক্ট এবং নেটিভ অবজেক্টের মধ্যে পার্থক্য কি? </summary>

#### <span style="color:#f43f5e;">উঃ</span> নেটিভ অবজেক্ট হল এমন বস্তু যা জাভাস্ক্রিপ্ট ভাষার অংশ যা ECMAScript স্পেসিফিকেশন দ্বারা সংজ্ঞায়িত করা হয়, যেমন String , Math , RegExp , অবজেক্ট , ফাংশন , ইত্যাদি। হোস্ট অবজেক্ট রানটাইম পরিবেশ (ব্রাউজার বা নোড) দ্বারা প্রদান করা হয়, যেমন window , XMLHTTPRequest , ইত্যাদি

</details>

<details>

<summary>  HTML এ খালি ইলিমেন্টস কি? </summary>

#### <span style="color:#f43f5e;">উঃ</span> খালি বা অকার্যকর উপাদান হল এইচটিএমএল উপাদান যেগুলির জন্য একটি ক্লোজিং ট্যাগের প্রয়োজন হয় না কারণ এতে কোনও সামগ্রী নেই ৷ তারা স্বয়ংসম্পূর্ণ, স্বাধীনভাবে সম্পূর্ণ, এবং কাজ করার জন্য অন্যান্য উপাদানের উপর নির্ভর করে না।

```html
<!-- Example of an empty div tag -->
<div></div>

<!-- Example of an empty span tag -->
<span></span>

<!-- Example of an empty img tag -->
<img src="path/to/image.jpg" alt="" />

<!-- Example of an empty input tag -->
<input type="text" name="username" value="" />
```

</details>

<details>

<summary>  জাভাস্ক্রিপ্টে ইভেন্ট কী এবং কীভাবে কাজ করে </summary>

#### <span style="color:#f43f5e;">উঃ</span> যখন একটি ব্রাউজার বা একজন ইউজার পেজ ম্যানিপুলেট করে তখন javaScript এবং HTML -এর মধ্যে ইন্টারঅ্যাকশনের সৃষ্টি হয় । ধরুন, যখন একটা ওয়েবসাইটের পেজ লোড করা হল, তখন সেটাকে একটা ইভেন্ট বলা হয়, পেজের মধ্যে কোনো একটা বাটনে ক্লিক করা হলে, সেটাকেও একটা ইভেন্ট বলা হয়। অর্থাৎ ইউজার ওয়েব পেজের মধ্যে কিছু একটা করলে কোনো একটা ঘটনা ঘটতেছে এমন একটা কিছুকে ইভেন্ট বলা হচ্ছে । পেজের মধ্যে জাভাস্ক্রিপ্ট-এর কোনো নির্দিষ্ট অ্যাক্টিভিটিগুলোকে সচল করার জন্য এই ইভেন্টগুলো অ্যাড করা থাকে। যেটা হতে পারে কোনো একটা বাটনে ক্লিক করলে উইনডো ক্লোজ হবে, ইউজারকে একটা মেসেজ দেখানো, ইউজারের ডাটা নেওয়া ইত্যাদি

</details>

</div>

<hr>

<!-- React Question  -->
<h3 align="center" id="js"><img src="https://camo.githubusercontent.com/ff077b866cdc3fc2b0fa50ca6f8fa395451ffa625bc9c1133643b40e8afa2e2c/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7265616374" width="20" />  React JS</h3>

<div>

<details>

<summary> React ও React-DOM কী? Website বানাতে ২টি আলাদা আলাদা ইন্সটল কেন করতে হয়? </summary>

React.js বলতে React ও React-DOM এর সমন্বয়ে একটা প্যাকেজ বুঝায় । যদিও ২টি আলাদা আলদা ভূমিকা রাখে ।

React : এটি মূলত JavaScript ওয়েব ও অ্যাপ এর জন্য একটি প্যাকেজ ও কাচামাল বলা যায় ।
কিভাবে রিয়েক্ট কাজ করবে তার নির্ধারণ করে ।

React-DOM : Browser DOM এর একটি কপি বা শেডো ডম । মূলত React এ কোনো State পরিবর্তন হলে সেটি আগে Virtual-DOM (V-DOM) এ সেটি পরিবর্তন করে এবং তা ডিফিং বা রি- কনসালেসশন এলগোরিদম এর মাধ্যমে কোন component এ পরিবর্তন হয়েছে সেটি এই খসড়া ডমে পরিবর্তনের এরপর সারর্জিক্যাল অপারেশনের এর মাধ্যমে মূল ডমে পরিরর্তন করে|

</details>

<details>

<summary>  “React is Reactive ” এইটি দ্বারা React কি বুঝাতে চাচ্ছে? </summary>
React এর কোনো State পরিবর্তনের সাথে সাথে Component Re-render এর মাধ্যমে Updated Sate টি Brower DOM এ Automatically পরিরর্তন করে । তাই বলে হয় রিয়েক্ট রিয়েক্টিভ মানে State পরিবর্তনের সাথে সাথে তা রিয়েক্ট করে ও তার ফলাফল মূল ডমে রিফলেক্ট করে

</details>

<details>

<summary> React State Update এর ক্ষেত্রে Batch Update বলতে কি বুঝায় ? </summary>
React এর কোনো State Update হলে তা সাথে সাথে মূল ডমে পরিবর্তন রিফলেক্ট করে না । অর্থাৎ, একত্রে পরিবর্তিত Sate সমূহ মূল ডমে Update করে ।
অনেক State একত্রে গ্রুপ আকারে update করাকেই Batch Update বলা হয় ।

</details>

<details>

<summary>  একাধিক DOM Operations এর ক্ষেত্রে Browser DOM কি আসলেই Slow? এক্ষেত্রে React কিভাবে DOM Operations Optimize করতে পারে ।  </summary>
Browser DOM Operations Slow নয় তবে পার্সিনং থেকে Display পার্ট প্রতি অপারেশনের করতে হয় । এক্ষেত্রে React.js Batch Update এর মাধ্যমে একত্রে সব State update করে ।
ফলে কম ওপারেশন হয় সেটির ক্ষেত্রে কম Parsing and Display process থাকায় DOM Optimize হয়

</details>

<details>

<summary>  React Component এর নাম Capital Letter দিয়া শুরু কেন করতে হয় ?  </summary>
Application এর function JSX রিটার্ন করতে পারে আবার অন্য যেকোনো ভ্যালু ।
এক্ষেত্রে কোনটি JSX রিটার্ন করে এমন , অর্থাৎ কোনটী কোম্পোনেন্ট আর কোনটি সাধারণ function তার নির্নয়ের জন্য Component এর নামে Capital Letter দিয়ে শুরু করতে হয় ।

</details>

<details>

<summary>  List রেন্ডার এর ক্ষেত্রে প্রতিটি element কে কেন আলাদা আলাদা key দিতে হয় ? যদি key না দেয়া হয় তাহলে default ভাবে কি কী হিসেবে নেয়?   </summary>
React এ List Render করার ক্ষেত্রে প্রতিটি element কে আলাদা আলাদা key দিতে হয় । যদি প্রোগ্রামার key না দেয় তাহলে এটি Default ভাবে Index কে key হিসেবে নিয়ে থাকে ।
index কে key হিসেবে দেয়া কেন উচিত নয় ?
index কে যদি key হিসেবে দেই তাহলে এক্ষেত্রে কিছু সমস্যা হতে পারে । যেমনঃ

ধরি,

List of Components যা map করে UI তে দেখানো হল । এখানে প্রতিটি elements এর key তাদের index কে দেয়া হল ।

onClick কোনো event এ ১ম index এর Component কে remove করা হল ।

এখন ২য় element টি হয়ে যাবে ১ম element ।
যেহেতু array এর ১ম elements টি remove করা হয়েছে তাই ২য়টির index হবে ১ম টির index অর্থাৎ 1 .
রিয়েক্ট মূলত index দিয়ে ট্রাক রাখে । এক্ষেত্রে React সঠিকভাবে ট্রাক রাখাতে পারবে না ।

কারন তার অনুযায়ী 1 index ওলা Component টি remove করা হয়েছে কিন্তু এখন আবার আবার দেখা যাচ্ছে যে আবার 1 index এর কোনো component আছে । এক্ষেত্রে React কনফিউসড হয়ে যাবে ।

এসল ক্ষেত্রে Wired Behave করতে পারে ।

</details>

<details>
<summary>  JSX Components কে কেন কোনো প্যারেন্ট কম্পোনেন্ট বা Fragment দিয়ে Wrap করতে হয় ? </summary>

React Component JSX রিটার্ন করে । JSX মূলত একটি Object । প্রতিটী html tag Object হিসেবে শেষে কম্পাইল করে ।

আমরা জানি, কোনো function যেকোনো একটি মাত্র ভ্যালু রিটার্ন করে ।

তাই যদি একটি মাত্র element বা Fragment দিয়া Wrap করা থাকে তাহলে একটি Object এর মধ্যে বাকি সব element গুলো nested object আকারে থাকে ও তা রিটার্ন করে ।

</details>

<details>
<summary> React এ List রেন্ডার করতে হলে Array.prototype.map ব্যবহার করা হয়। map ব্যাতিত forEach,for loop,while loop এর মাধ্যমেও কি List রেন্ডার করা যায় ? হ্যা হলে কিভাবে? </summary>

### List Render এর ক্ষেত্রে আমরা map ব্যবহার করে থাকি ।

যেমনঃ

```Javascript

import { Fragment } from "react";
import { Component1, Component2, Component3 } from "./Components";

const App = () => {
  const list = [Component1, Component2, Component3];
  return (
    <div>
      <h1>App</h1>
      {list.map((Val, index) => {
        return (
          <Fragment key={index}>
            <Val /> {/* প্রতিটি JSX Component এখানে  Call হচ্ছে  */}
          </Fragment>
        );
      })}
    </div>
  );

```

আমরা Array.prototype.map কেন ব্যবহার করি ?
React এর রেন্ডারের জন্য চাই JSX Return করে এমন function বা React কম্পোনেন্ট ।

এক্ষেত্রে map একটি নতুন modified array রিটার্ন করে । যা সরাসরি UI এর মাঝে ব্যবহার করতে পারে । উপরের Examples এর ক্ষেত্রে Array.prototype.map ব্যবহার করায় list এর modified একটি Array of Components আমরা পাই যা React তা সরাসরি UI তে রেন্ডার করতে পারছে ।

map ছাড়া অন্য method চাইলে ব্যবহার করা যায় ।
এক্ষেত্রে একটু অতিরিক্ত কাজ করতে হবে । UI তে সরাসরি রেন্ডার করতে পারবে না । তাই একটি অতিরিক্ত Array বা List এর মধ্যে সব Component গুলো রাখতে হবে । এবং এক্ষেত্রে কোনো key দিতে হবে ।

উদাহরণঃ

```Javascript

export const App = () => {
  const data = ['Item 1', 'Item 2', 'Item 3'];
  const items = [];

  data.forEach((item, index) => {
    items.push(<li key={index}>{item}</li>);
  });

  return <ul>{items}</ul>;
};

export default MyComponent;

```

</details>

<details>

 <summary> React Dev Mood এ State পরিবর্তন এর সাথে সাথে ২ ভার রি-রেন্ডার করে কেন ? </summary>

React Development mood এ কোনো পরিবর্তন হলে সেই component ও এর সকল Child components কে re-render করে ।
তবে Dev Mood এ এটি ২ বার করে ।

```Javascript

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


```

মূলত main.jsx আমরা React.StrictMode ব্যবহার এর জন্য এই Behavior পেয়ে থাকি।

এক্ষেত্রে React প্রটিতি component ও এর সকল Child components কে ২ বার re-render করার মাধ্যমে Module Dependency Tree এর কোথায় কোন Error হয়েছে তা চেক করে ।

এর ফলে কোনো error হলে উক্ত file ও কত নাম্বার লাইনে হয়েছে তা show করতে পারে ।

তবে এটি Production Deployment এর পর আর কাজ করে না ।

</details>

<details>
<summary>
Local ও Global Component Mutation বলতে কি বুঝায় ?
</summary>
React Development mood এ কোনো পরিবর্তন হলে সেই component ও এর সকল Child components কে re-render করে ।

তবে Dev Mood এ এটি ২ বার করে ।

</details>
<div>

<hr>

<!-- Next Js Question  -->
<h3 align="center" id="js"><img src="https://camo.githubusercontent.com/369ce0f9d1b9e5e69b4b6df1752862ce1fc99699d6bb17d84cc2825c75d1e2d6/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6e6578746a73" width="20" />  Next JS</h3>

<div>
<details>

<summary>  Server Side Rendering এর সুবিধা কি ?  </summary>

উঃ সার্ভার সাইড রেন্ডারিং এ ইনিশিয়াল এইচটিএমএল সার্ভারেই রেন্ডার হয়ে ক্লায়েন্ট এ আসে বিধায় ক্লায়েন্ট এর নতুন করে রেন্ডার করা লাগে না। এতে করে ওয়েব পেজ এর ইনিশিয়াল লোডিং টাইম কমে যায়। এছাড়া সার্চ ইঞ্জিন এই ইনিশিয়াল এইচটিএমএল কন্টেন্ট থেকেই ইন্ডেক্সিং করে বিধায় ওয়েবসাইট এর SEO র‍্যাংক বৃদ্ধি পায়।

</details>

<details>

<summary> Client Components এর মধ্যেও কিভাবে Server Components রেন্ডার করা যায় ?  </summary>
উঃ

</details>

</div>
