import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-orange-500 mb-4">About YuPick</h1>
        <p className="text-gray-700 text-lg mb-8">
          Welcome to <span className="text-orange-500 font-semibold">YuPick</span> – your ultimate destination for top-quality electronic gadgets. Whether you're a tech enthusiast or a casual user, we’ve got something perfect for you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="text-2xl font-semibold text-orange-500 mb-2">Why Choose Us?</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Wide selection of the latest gadgets</li>
              <li>Competitive pricing and exclusive deals</li>
              <li>Fast, secure, and reliable shipping</li>
              <li>24/7 customer support</li>
              <li>Easy returns and satisfaction guaranteed</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-orange-500 mb-2">Our Mission</h2>
            <p className="text-gray-700">
              At <strong>YuPick</strong>, we aim to bridge the gap between technology and everyday life. Our goal is to bring innovation closer to you — affordably, conveniently, and confidently.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-orange-100 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-orange-500 mb-2">Get in Touch</h3>
          <p className="text-gray-700">
            Got questions or suggestions? We’d love to hear from you! Reach out via our contact page or email us at <a href="mailto:support@yupick.com" className="text-orange-500 font-medium">support@yupick.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
