import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <section className="bg-[#0e0e13] text-white py-16 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-2">Contact</h2>
      <p className="text-cyan-400 text-center mb-10">
        Let's Talk About Ideas
      </p>

      {/* Responsive layout */}
      <div className="flex gap-10 justify-start ml-15 items-center">

        {/* Left side (Image + Info) */}
        <div className="order-1 md:order-none">

          <h3 className="text-4xl font-bold mb-1">Marium Fija</h3>
          <p className="text-blue-400 font-medium mb-2">
            Web Developer (MERN)
          </p>
          <p className="text-gray-300 mb-6">
            Are You Looking For Your Business Online Presence?<br />
            Don’t Hesitate To Contact Me. I’m Available Here 
          </p>

          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-300" />
              <span>
                <strong>Address:</strong> Dhaka , Bangladesh
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaUserTie className="text-cyan-300" />
              <span>
                <strong>Mobile Number(Whatsapp number) : </strong> 01609358914 
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-300" />
              <span>
                <strong>Email : </strong> mariumfija@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Contact;