import React from "react";

const Marquee = () => {
  return (
    <marquee
      className="py-3 bg-info borderBottom"
      width="100%"
      direction="left"
      loop="999999"
    >
      সিলেটের প্রথম বেসরকারি বিশ্ববিদ্যালয় লিডিং ইউনিভার্সিটির নবীন শিক্ষকদের
      জন‍্য প্রশিক্ষণ কর্মশালা অনুষ্ঠিত হয়েছে। সোমবার (১২ জুলাই ২১২১) সন্ধ্যায়
      লিডিং ইউনিভার্সিটির ইনস্টিটিউশনাল কোয়ালিটি এ্যাসিউরেন্স সেল (আই কিউ এ সি)
      এর উদ্যোগে চার দিনব‍্যাপী অনলাইন প্রশিক্ষণের||
    </marquee>
  );
};

export default Marquee;
