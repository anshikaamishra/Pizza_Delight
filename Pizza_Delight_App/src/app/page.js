import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
        <p className="font-bold">
        Welcome to Pizza Delight Online, your one-stop destination for delicious, handcrafted pizzas made with love and the freshest ingredients. Founded in 2024, our mission is to bring the joy of a perfect pizza to your doorstep with just a few clicks.
        </p>
        <p className="font-semibold">
        Our Story
        </p>
        <p>
        Pizza Delight was born out of a passion for creating the ultimate pizza experience. We started as a small family-owned pizzeria, where every pizza was made with care and attention to detail. Over the years, our love for pizza and dedication to quality has earned us a loyal following, and we are excited to bring our exceptional pizzas to a wider audience through our online ordering system.
        </p>
        <p className="font-semibold">
        What We Offer
        </p>
        <p>
        At Pizza Delight, we believe that great pizza starts with great ingredients. That's why we use only the finest and freshest ingredients to craft our pizzas. From our hand-tossed dough to our signature sauces and premium toppings, every bite is a testament to our commitment to quality. Our menu features a wide variety of options, including classic favorites, gourmet creations, and customizable pizzas to suit every taste and preference.
        </p>
        <p className="font-semibold">
        Our Commitment
        </p>
        <p>
        We are dedicated to providing an exceptional customer experience from start to finish. Our user-friendly online ordering system makes it easy to customize and place your order, while our efficient delivery service ensures that your pizza arrives hot and fresh at your doorstep. Whether you're craving a quick lunch, planning a family dinner, or hosting a party, Pizza Delight is here to make your pizza experience unforgettable.
        </p>
        <p className="font-semibold">
        Join Our Pizza Family
        </p>
        <p>
        At Pizza Delight, we believe that pizza is more than just food—it's a way to bring people together. We invite you to join our pizza family and experience the joy of a perfect pizza, delivered right to you. Follow us on social media for the latest updates, special offers, and a behind-the-scenes look at what makes our pizzas so special.
        </p>
        <p>
        Thank you for choosing Pizza Delight Online. We can't wait to serve you!
        </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
        <a className="text-4xl underline text-gray-500" href="tel:+911234567890">
        +91 123 456 7890
      </a>
        </div>
      </section>
    </>
  )
}
