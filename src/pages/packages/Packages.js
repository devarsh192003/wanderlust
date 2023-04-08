import React from 'react';
import PackageCard from './PackageCard';
import Heading from '../../components/Heading'
import './Packages.css'
const Packages = () => {
  return (
   <>
   <section className='recent padding'>
   <div className='container'>
   <Heading title='Packages offered' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
   <PackageCard/>
  </div>
  </section>
  </>
  );
};
  
export default Packages;