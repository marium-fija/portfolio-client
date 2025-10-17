import React from 'react';
import Banner from './Banner';
import SkillsSection from './SkillsSection';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <SkillsSection></SkillsSection>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;