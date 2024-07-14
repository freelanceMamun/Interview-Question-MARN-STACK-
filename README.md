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

<div>
<h3 style="flex" align="center" id="html">
<img src="https://cdn0.iconfinder.com/data/icons/social-network-9/50/22-512.png" width="25" />
HTML (Hypertext Markup Language)
</h3>
</div>

<div>
<details>

<summary> সিমেন্টিক এলিমেন্ট কি?  </summary>

একটি সিমেন্টিক এলিমেন্ট ব্রাউজার এবং ডেভেলপার উভয়ের কাছে স্পষ্টভাবে এর অর্থ বর্ণনা করে।

সিমেন্টিক এলিমেন্ট নয় এমন কিছু এলিমেন্ট এর উদাহরণ: <div> এবং <span> এগুলো এদের ভেতরের কন্টেন্ট সম্পর্কে কোন ধারনাই দেয়না ।

কিছু সিমেন্টিক এলিমেন্ট এর উদাহরণ: <aside>, <form>, <table> এবং <article> এগুলো এদের ভেতরের কন্টেন্ট সম্পর্কে স্পষ্ট ধারণা দেয় ।

## এইচটিএমএল এ সিমেন্টিক এলিমেন্ট

অনেক ওয়েবসাইট এ HTML Code গুলো এ রকম থাকে: <div id=”nav”> <div class=”header”> <div id=”footer”> যা নেভিগেশন, হেডার ও ফুটার বোঝানোর জন্য ব্যবহার করে (এটি পদ্ধতিটি HTML4 কিংবা আগের ভার্সন গুলোতে ব্যবহার করা হতো) ।

কিন্তু HTML5 এর পর থেকে কিছু সিমেন্টিক এলিমেন্ট এসেছে যেগুলো একটি ওয়েবপেজের বিভিন্ন অংশগুলো ডিফাইন করতে ব্যবহার করা হয়। নিচে এদের কিছু এলিমেন্ট দেয়া হলো :

</details>

</div>

<br>
<hr>

<div>
<h3 align="center" id="js"><img src="https://skillicons.dev/icons?i=js" width="20" />  JavaScript</h3>

</div>

<div>

<details>
<summary> ১.  Local storage ও  session   এর মধ্যে পার্থক্য কি ?  </summary>

#### <span style="color:#f43f5e;">উঃ</span> local storage ও session এর মধ্যে পার্থক্য হলোঃ

| পার্থক্য  | Local Storage                                                        | Session Storage            |
| --------- | -------------------------------------------------------------------- | -------------------------- |
| স্থায়ীত্ব | মা্যানুয়ালি বা প্রোগ্রামিক্যালি ব্রাউজার ডাটা ক্লিয়ার না করা পর্যন্ত | ট্যাব ক্লোস করার সাথে সাথে |
| এভাইলেবল  | সকল window তেই                                                       | নির্দিষ্ট ট্যাবেই          |
| উপযোগী    | দীর্ঘ সময় ডাটা রাখায় যায়                                             | আল্প সময় ডাটা রাখায় যায়    |

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

</div>
