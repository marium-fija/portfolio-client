import React from 'react';



const About = () => {
    return (
        <div>
           <section
      id="about"
      className="py-20 bg-[#0f0f1a] text-white flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src="https://i.ibb.co.com/gLBVbKZz/fija.jpg"
              alt="My portrait"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-lg border-2 border-cyan-400 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-3xl bg-yellow-400/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Right side - Text */}
        <div className='ml-10'>
          <h2 className="text-4xl font-bold text-[#478CCF] mb-6 ">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Hi! I’m a passionate <span className="text-[#5DEBD7] font-semibold">MERN-stack Web Developer</span> who loves creating modern, responsive, and user-friendly websites. 
            My programming journey started with curiosity about how websites actually work — and now it’s become my biggest passion.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I enjoy working with technologies like <span className="text-[#5DEBD7]  font-semibold">React.js, Node.js, and MongoDB</span>. 
            I love solving problems and bringing creative ideas to life through clean code and beautiful UI.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Outside of coding, I love <span className="text-[#5DEBD7]  font-semibold">traveling</span> and 
            <span className="text-[#5DEBD7]  font-semibold"> watching movies</span> — these help me stay inspired and see the world from new perspectives.
          </p>
        </div>
      </div>
    </section>  
        </div>
    );
};

export default About;