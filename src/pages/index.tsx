import React from 'react'
import Navbar from '../components/Navbar';
import HomePage from '../pages/Home'
import AboutMe from './About';
import Contacts from './Contacts';
import Expreriences from './Expreriences';
import Projects from './Projects';


export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Expreriences />
      <Projects />
      <AboutMe />
      <Contacts/>
    </>
  );
}
