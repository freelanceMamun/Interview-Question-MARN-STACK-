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

<details>

<summary> সিমেন্টিক এলিমেন্ট কি?  </summary>

একটি সিমেন্টিক এলিমেন্ট ব্রাউজার এবং ডেভেলপার উভয়ের কাছে স্পষ্টভাবে এর অর্থ বর্ণনা করে।

সিমেন্টিক এলিমেন্ট নয় এমন কিছু এলিমেন্ট এর উদাহরণ: <div> এবং <span> এগুলো এদের ভেতরের কন্টেন্ট সম্পর্কে কোন ধারনাই দেয়না ।

কিছু সিমেন্টিক এলিমেন্ট এর উদাহরণ: <aside>, <form>, <table> এবং <article> এগুলো এদের ভেতরের কন্টেন্ট সম্পর্কে স্পষ্ট ধারণা দেয় ।

## এইচটিএমএল এ সিমেন্টিক এলিমেন্ট

অনেক ওয়েবসাইট এ HTML Code গুলো এ রকম থাকে: <div id=”nav”> <div class=”header”> <div id=”footer”> যা নেভিগেশন, হেডার ও ফুটার বোঝানোর জন্য ব্যবহার করে (এটি পদ্ধতিটি HTML4 কিংবা আগের ভার্সন গুলোতে ব্যবহার করা হতো) ।

কিন্তু HTML5 এর পর থেকে কিছু সিমেন্টিক এলিমেন্ট এসেছে যেগুলো একটি ওয়েবপেজের বিভিন্ন অংশগুলো ডিফাইন করতে ব্যবহার করা হয়। নিচে এদের কিছু এলিমেন্ট দেয়া হলো :

</details>

<br>
<br>
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
| উপযোগী    | দীর্ঘ সময় ডাটা রাখায়                                                 | আল্প সময় ডাটা রাখায়        |

</details>

<details>

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
