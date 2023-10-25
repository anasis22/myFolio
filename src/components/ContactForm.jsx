import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion, useScroll, useTransform } from "framer-motion";

const ContactForm = () => {
  const triggerEmail = async (data) => {
    await emailjs
      .send("service_0je0pgm", "template_cdyw60u", data, "l1Gx_BrwheAdBJagP")
      .then((success) => {
        alert(`The email was sent successfully`);
      })
      .catch((err) => {
        alert(`something went wrong`);
        console.log(err);
      });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      location: e.target[2].value,
      message: e.target[3].value,
    };
    console.log(data);
    if(data.name && data.email && data.location && data.message){
      triggerEmail(data);
    }else{
      alert("something went wrong!")
    }
    
  };

  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset : ["0 1","0.8 1"]
  })

  const scaleProgress = useTransform(scrollYProgress,[0 , 1] , [0.5, 1])


  return (
    <motion.div id="contact" style={{scale: scaleProgress , opacity: scrollYProgress}} ref={ref} className="w-screen bg-black h-fit flex flex-col items-center justify-center md:p-12">
      <form
        action="#"
        onSubmit={onFormSubmit}
        className="border-bw mt-12 md:mt-0  rounded-md p-4 md:p-8 border-l-8 flex flex-col items-start justify-center w-4/5 md:w-3/4 "
      >
        <h1 className="text-gray font-bold text-3xl tracking-wide">CONTACT</h1>
        <section className="w-full">
          <input
            placeholder="name"
            type="text"
            className="w-full h-8 md:w-4/6 md:h-12 mt-8 bg-transparent border-2 border-[#505050] text-white p-2 md:p-4 text-lg font-normal md:font-bold rounded-md focus:outline focus:border-none focus:outline-baseColor transition-all"
          />
        </section >
        <section className="w-full">
          <input type="text"
          placeholder="email"
          className="w-full h-8 md:w-4/6 md:h-12 mt-8 bg-transparent border-2 border-[#505050] text-white p-2 md:p-4 text-lg font-normal md:font-bold rounded-md focus:outline focus:border-none focus:outline-baseColor transition-all"
           />
        </section>
        <section className="w-full">
          <input type="text"
          placeholder="location"
          className="w-full h-8 md:w-4/6 md:h-12 mt-8 bg-transparent border-2 border-[#505050] text-white p-2 md:p-4 text-lg font-normal md:font-bold rounded-md focus:outline focus:border-none focus:outline-baseColor transition-all"
           />
        </section>
        <section className="w-full">
          <textarea type="text"
          placeholder="your message here..."
          className="w-full h-15 md:w-4/6 md:h-40 mt-8 bg-transparent border-2 border-[#505050] text-white p-2 md:p-4 text-lg font-normal md:font-bold rounded-md focus:outline focus:border-none focus:outline-baseColor transition-all"
           />
        </section>
        <button 
        className="w-2/5 h-8 md:w-1/6 md:h-12 mt-8 bg-transparent border-2 border-[#70F6C0] hover:border-white text-white hover:text-baseColor text-md md:font-bold rounded-md focus:outline focus:border-none focus:outline-baseColor transition-all"
        type="submit">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
