import React from 'react';
import BlogCard from './BlogCard';
import Heading from '../../components/Heading'
import './blogpage.css'
const Blogpage = () => {
  return (
   <>
   <section className='recent padding'>
   <div className='container'>
   <Heading title='Blogs ' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
   <BlogCard/>
  </div>
  </section>
  </>
  );
}
  
export default Blogpage;