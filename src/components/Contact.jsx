import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-blue-900">
        Contact
      </h1>
      <h3 className="flex justify-center p-4">
        <span>Please send a message to me here or you can contact me via Gmail:&nbsp;<a href="mailto:ryau91@gmail.com" className="text-blue-400 hover:underline active:text-blue-800">ryau91@gmail.com</a></span>
      </h3>
      <form
        action="https://getform.io/f/52b4bc80-6995-4488-adf8-85bc006f7570"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone number</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 flex border-gray-300"
            rows="10"
            name="message"
          ></textarea>
        </div>
        <button className="bg-blue-900 text-gray-100 rounded-lg mt-4 w-full p-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
