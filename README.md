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

<h3 style="flex" align="center" id="html">
<img src="https://cdn0.iconfinder.com/data/icons/social-network-9/50/22-512.png" width="25" />
HTML (Hypertext Markup Language)
</h3>

<br>

<hr>

<h3 align="center" id="js"><img src="https://skillicons.dev/icons?i=js" width="20" />  JavaScript</h3>

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

</details>
