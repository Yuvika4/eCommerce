import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-500 text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-700 mb-10">
          Have questions, feedback, or need support? We're here to help!
        </p>

        <form className="bg-orange-100 p-6 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block text-orange-500 font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-orange-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-orange-500 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-orange-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-orange-500 font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-orange-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600">
          <p>
            Or email us directly at{" "}
            <a href="mailto:support@yupick.com" className="text-orange-500 font-medium">
              support@yupick.com
            </a>
          </p>
          <p className="mt-2">Phone: +91 98765 43210</p>
          <p className="mt-2">Address: 123 Tech Lane, Chandigarh, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
