import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const data = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/xovlvnlr", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="font-mono max-w-3xl mx-auto px-4 mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Connect Here</h2>
      <p className="text-center mb-2 text-gray-500">
        If you like to ask anything feel free to talk and connect with me
        <br></br>
        You can also email me at <l className="text-red-600">manavkhandelwal72@gmail.com</l>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-3 border rounded-md dark:bg-gray-900 dark:border-gray-700"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border rounded-md dark:bg-gray-900 dark:border-gray-700"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="1"
          className=" w-full p-3 border rounded-md dark:bg-gray-900 dark:border-gray-700"
          required
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
      {status && <div className="mt-4 text-center text-green-600 dark:text-green-400">{status}</div>}
    </section>
  );
}

export default Contact;
