import Image from "next/image";
import "./contact.css";

export default function ContactPage() {
  return (
    <div className="contact-page">

      {/* 🔥 HERO SECTION */}
      <div className="hero">
      <Image
    src="/images/contact/hero.png"
    alt="hero"
    fill
    className="hero-img"
  />
        <div className="hero-overlay">
          <h1>contact us</h1>

          <p>LA DIAMAS</p>
          <p>PH: (02) 8528 2848</p>
          <p>hello@leidesign.com</p>
          <p>Appointment Only - see booking link below</p>
        </div>
      </div>

      {/* 🔥 FORM SECTION */}
      <div className="form-section">

        {/* Left Image */}
        <div className="form-image">
          <Image
            src="/images/contact/thumb-1920-1070518.jpg"
            alt="jewellery"
            width={850}
            height={400}
          />
        </div>

        {/* Right Form */}
        <div className="form-box">

          <div className="row">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>

          <input type="email" placeholder="Email address" />

          <textarea placeholder="Your message"></textarea>

          <button>Submit</button>
        </div>

      </div>

      {/* 🔥 BOTTOM IMAGES */}
      <div className="bottom-images">
        <Image
          src="/images/contact/jewellery.jpg"
          alt="img1"
          width={600}
          height={400}
        />
        <Image
          src="/images/contact/img2.png"
          alt="img2"
          width={600}
          height={400}
        />
      </div>

    </div>
  );
}