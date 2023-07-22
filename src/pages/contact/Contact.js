import React, { useState, useEffect, useRef } from "react";
import { MdLocationOn } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { BsPhoneFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import Maps from "../../components/Maps";

import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jm2nzdf",
        "template_w48k6vc",
        form.current,
        "qb5GfL1JfbgwU32nD"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: `<h5 style='color:green'>Message Sent Successfully</h5>`,
            confirmButtonColor: "green",
          });
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: `<h5 style='color:red'>Ooops, something went wrong</h5>`,
            confirmButtonColor: "red",
          });
        }
      );
  };

  const ButtonStyle = {
    // background: "#333333",
    // color: "white",
    padding: "15px 25px ",
    fontWeight: "600",
    border: "2px solid #333333",
    transition: "all 0.7s",
  };
  const cardStyle = {
    transition: "all 0.7s",
  };
  return (
    <div
      className="flex flex-col justify-between px-7 py-10 h-full"
      data-aos="fade-up"
    >
      <div className="flex items-center ">
        <p className="w-[40%] xl:w-[25%] font-bold tracking-[0.35rem]">
          GET IN TOUCH
        </p>
        <div className="h-[2px] w-[60%] xl:w-[75%] flex">
          <div className="w-[50%] h-[100%] bg-[#333333]"></div>
          <div className="w-[50%] h-[100%] bg-[#ffbc6a]"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 justify-between md:h-[6rem] mt-8 md:mt-0">
        <a
          href="https://www.google.ng/maps/place/Federal+Capital+Territory/@8.9138653,6.9223605,10z/data=!3m1!4b1!4m6!3m5!1s0x104e6157ce3eeda9:0x32af1c368be32dfc!8m2!3d8.8940691!4d7.1860402!16zL20vMDRzdnlo?entry=ttu"
          target="_blank"
          style={cardStyle}
          className="lg:text-[90%] h-[6rem] w-[100%] md:w-[35%] xl:w-[30%] border border-solid border-[#E5E9ED]-500 hover:bg-[#333333] hover:text-[#fff] text-[#7D7789] flex flex-col gap-2 justify-center items-center"
        >
          <MdLocationOn />
          <p>Abuja, Nigeria</p>
        </a>
        <a
          href="mailto:englamakuceli@gmail.com"
          style={cardStyle}
          className="lg:text-[90%] h-[6rem] w-[100%] md:w-[40%] xl:w-[30%] border border-solid border-[#E5E9ED]-500 text-[#7D7789] hover:bg-[#333333] hover:text-[#fff] flex flex-col gap-2 items-center justify-center"
        >
          <HiMail />
          <p>englamakuceli@gmail.com</p>
        </a>
        <a
          href="tel:+2349030091183"
          style={cardStyle}
          className="lg:text-[90%] h-[6rem] w-[100%] mb-8 md:mb-0 md:w-[35%] xl:w-[30%] border border-solid border-[#E5E9ED]-500 text-[#7D7789] hover:bg-[#333333] hover:text-[#fff] flex flex-col gap-2 items-center justify-center"
        >
          <BsPhoneFill />
          <p>+234 903 009 1183</p>
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-x-5 w-[100%]">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-y-5 w-[100%] md:w-[50%] pb-5 md:pb-0"
        >
          <input
            type="text"
            placeholder="Name"
            name="from_name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="p-3 border border-solid border-[#E5E9ED]-500 bg-[#F6FBFF] hover:border-[#ffbc6a] focus:border-[#ffbc6a] text-sm w-full outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            name="from_email"
            className=" p-3 border border-solid border-[#E5E9ED]-500 bg-[#F6FBFF] hover:border-[#ffbc6a] focus:border-[#ffbc6a] text-sm w-full outline-none"
          />
          <textarea
            placeholder="Message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 border border-solid border-[#E5E9ED]-500 bg-[#F6FBFF] hover:border-[#ffbc6a] focus:border-[#ffbc6a] text-sm w-full h-40 outline-none"
          />
          <input
            type="submit"
            style={ButtonStyle}
            className=" bg-[#333333] hover:bg-[#F6FBFF] text-[#ffffff] hover:text-[#333333] w-[60%] xl:w-[50%] cursor-pointer"
            value="Send Message"
          />
        </form>
        <div className="hidden md:block w-[50%] h-[100%]">
          <Maps />
        </div>
      </div>
    </div>
  );
};

export default Contact;
