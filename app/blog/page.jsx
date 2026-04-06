"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./blog.css";

export default function BlogPage() {

  const images = [
    "/images/blog/ring1.png",
    "/images/blog/ring2.png",
    "/images/blog/ring3.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="blog-container">

      <div className="content">

        <h1 className="title">Article or post title</h1>

        <p className="subtitle">
          Subheading that sets up context, shares more info about the author,
          or generally gets people psyched to keep reading
        </p>

        <div className="main-image">
          <Image
            src="/images/blog/main.png"
            alt="main"
            width={1200}
            height={600}
          />
        </div>

        <div className="text-content">
          <p>
            Body text for your whole article or post. We'll put in some lorem ipsum
            to show how a filled-out page might look.
          </p>

          <p>
            Excepteur efficient emerging, minim veniam anim aute carefully curated
            conversation exquisite perfect nostrud nisi intricate content.so there is
            some space between the lines so you can see the spacing and a bit of the no more life be fore purchaseing the articals
            Body text for your whole article or post. 
            We’ll put in some lorem ipsum to show how a filled-out page might look:

            Excepteur efficient emerging, minim veniam anim aute carefully 
            curated Ginza conversation exquisite perfect nostrud nisi intricate Content. 
            Qui  international first-class nulla ut. 
            Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.

            Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. 
            Sharp classic the best commodo nostrud delightful. 
            Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop 
            excepteur classic esse Asia-Pacific laboris.
          </p>
        </div>

        <div className="two-images">
          <Image src="/images/blog/img1.png" alt="img1" width={400} height={300} />
          <Image src="/images/blog/img2.png" alt="img2" width={400} height={300} />
        </div>

        {/* 🔥 Rotating Rings */}
{/* 🔥 Sliding Rings */}
<div className="slider-section">
  <h2>Related Rings</h2>

  <div className="slider">
    <div className="slide-track">

      {[
        "/images/blog/ring1.png",
        "/images/blog/ring2.png",
        "/images/blog/ring3.png",
        "/images/blog/ring1.png",
        "/images/blog/ring2.png",
        "/images/blog/ring3.png",
      ].map((img, index) => (
       <div className="slide-item" key={index}>
  <Image 
    src={img} 
    alt="ring" 
    width={200} 
    height={200}
    className="ring-img"
  />
</div>
      ))}

    </div>
  </div>

</div>
</div>
</div>
  );
}