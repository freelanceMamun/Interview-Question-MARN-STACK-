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
| স্থায়ীত্ব | মা্যানুয়ালি বা প্রোগ্রামিক্যালি ব্রাউজার ডাটা ক্লিয়ার না করা পর্যন্ত | ট্যাব ক্লোস করার সাথে সাথে |
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

</details>

</div>

<h3 align="center" id="ts"><img src="https://skillicons.dev/icons?i=ts" width="20" />  TypeScript</h3>

<div>
<details>
<summary>১. any  ও unknown এর মাঝে কি পার্থক্য কি ?  </summary>

#### <span style="color:#f43f5e;">উঃ</span> any এবং unknown উভয়ই TypeScript এর বিশেষ ধরনের টাইপ যা যে কোন variable এ ডিক্লেয়ার করা যায় , তবে এগুলি বিভিন্ন পরিস্থিতিতে ব্যবহার করা হয়:

- `any` : এই টাইপটি TypeScript Officially নিজেরা Recommend করে না । আপনি একটি `any` টাইপে যে কোন মান নির্ধারণ করতে পারেন এবং কোন কম্পাইল সময় চেক ছাড়াই একটি `any` টাইপের যে কোন বৈশিষ্ট্য অ্যাক্সেস করতে পারেন। এটি একটি ভেরিয়েবলের জন্য টাইপ চেকিং থেকে বাদ দেওয়ার মতো।

- `unknown` : এই টাইপটি `any` এর টাইপ-নিরাপদ বিকল্প । একটি `unknown` টাইপে যে কোন মান নির্ধারণ করতে পারা যাবে , তবে আপনি কোন প্রকার টাইপ চেকিং না করলে একটি `unknown` টাইপের যে কোন বৈশিষ্ট্য অ্যাক্সেস করতে, তাদের কল করতে / বানাতে করতে বা যে কোন expresstions ব্যবহার করতে পারবেন না (সমানতা চেক ছাড়া)।
</details>

<details>
<summary>১. TypeScript generics এর  default value  কিভাবে দেয়া যায় ?    </summary>

#### <span style="color:#f43f5e;">উঃ</span> any এবং unknown উভয়ই TypeScript এর বিশেষ ধরনের টাইপ যা যে কোন variable এ ডিক্লেয়ার করা যায় , তবে এগুলি বিভিন্ন পরিস্থিতিতে ব্যবহার করা হয়:

- `any` : এই টাইপটি TypeScript Officially নিজেরা Recommend করে না । আপনি একটি `any` টাইপে যে কোন মান নির্ধারণ করতে পারেন এবং কোন কম্পাইল সময় চেক ছাড়াই একটি `any` টাইপের যে কোন বৈশিষ্ট্য অ্যাক্সেস করতে পারেন। এটি একটি ভেরিয়েবলের জন্য টাইপ চেকিং থেকে বাদ দেওয়ার মতো।

- `unknown` : এই টাইপটি `any` এর টাইপ-নিরাপদ বিকল্প । একটি `unknown` টাইপে যে কোন মান নির্ধারণ করতে পারা যাবে , তবে আপনি কোন প্রকার টাইপ চেকিং না করলে একটি `unknown` টাইপের যে কোন বৈশিষ্ট্য অ্যাক্সেস করতে, তাদের কল করতে / বানাতে করতে বা যে কোন expresstions ব্যবহার করতে পারবেন না (সমানতা চেক ছাড়া)।
</details>

</div>

<h3 align="center" id="ts"><img src="https://skillicons.dev/icons?i=ts" width="20" /> javascript</h3>

<div>
<details>
<summary>১. any  ও unknown এর মাঝে কি পার্থক্য কি ?  </summary>

#### <span style="color:#f43f5e;">উঃ</span> any এবং unknown উভয়ই TypeScript এর বিশেষ ধরনের টাইপ যা যে কোন variable এ ডিক্লেয়ার করা যায় , তবে এগুলি বিভিন্ন পরিস্থিতিতে ব্যবহার করা হয়:

- `any` : এই টাইপটি TypeScript Officially নিজেরা Recommend করে না । আপনি একটি `any` টাইপে যে কোন মান নির্ধারণ করতে পারেন এবং কোন কম্পাইল সময় চেক ছাড়াই একটি `any` টাইপের যে কোন বৈশিষ্ট্য অ্যাক্সেস করতে পারেন। এটি একটি ভেরিয়েবলের জন্য টাইপ চেকিং থেকে বাদ দেওয়ার মতো।

- `unknown` : এই টাইপটি `any` এর টাইপ-নিরাপদ বিকল্প । একটি `unknown` টাইপে যে কোন মান নির্ধারণ করতে পারা যাবে , তবে আপনি কোন প্রকার টাইপ চেকিং না করলে একটি `unknown` টাইপের যে কোন বৈশিষ্ট্য অ্যাক্সেস করতে, তাদের কল করতে / বানাতে করতে বা যে কোন expresstions ব্যবহার করতে পারবেন না (সমানতা চেক ছাড়া)।
</details>

<details>
<summary>১. TypeScript generics এর  default value  কিভাবে দেয়া যায় ?    </summary>

#### <span style="color:#f43f5e;">উঃ</span> any এবং unknown উভয়ই TypeScript এর বিশেষ ধরনের টাইপ যা যে কোন variable এ ডিক্লেয়ার করা যায় , তবে এগুলি বিভিন্ন পরিস্থিতিতে ব্যবহার করা হয়:

- `any` : এই টাইপটি TypeScript Officially নিজেরা Recommend করে না । আপনি একটি `any` টাইপে যে কোন মান নির্ধারণ করতে পারেন এবং কোন কম্পাইল সময় চেক ছাড়াই একটি `any` টাইপের যে কোন বৈশিষ্ট্য অ্যাক্সেস করতে পারেন। এটি একটি ভেরিয়েবলের জন্য টাইপ চেকিং থেকে বাদ দেওয়ার মতো।

- `unknown` : এই টাইপটি `any` এর টাইপ-নিরাপদ বিকল্প । একটি `unknown` টাইপে যে কোন মান নির্ধারণ করতে পারা যাবে , তবে আপনি কোন প্রকার টাইপ চেকিং না করলে একটি `unknown` টাইপের যে কোন বৈশিষ্ট্য অ্যাক্সেস করতে, তাদের কল করতে / বানাতে করতে বা যে কোন expresstions ব্যবহার করতে পারবেন না (সমানতা চেক ছাড়া)।
</details>

</div>
