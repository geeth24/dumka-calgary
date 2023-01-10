import React from "react";

function Contact() {
  return (
    <>
      <section className="min-h-screen bg-opacity-10 bg-[url('/bg/contact.png')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto  max-w-screen-xl px-8 py-24 md:px-16  ">
          <h1 className="mb-8 mt-8 max-w-2xl text-4xl font-black  text-darkred md:text-5xl xl:text-6xl">
            Contact
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl text-midred">Address</h1>
              <p className="text-xl text-darkred">1234 Main Street</p>
              <p className="text-xl text-darkred">Calgary, AB T2T 2T2</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl text-midred">Phone</h1>
              <p className="text-xl text-darkred">1 (403) 123-4567</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl text-midred">Hours</h1>
              <p className="text-xl text-darkred">Monday - Friday</p>
              <p className="text-xl text-darkred">7am - 10pm</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
