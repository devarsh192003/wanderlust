import React from "react"
import { blog } from "../Data"

const BlogCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {blog.map((val, index) => {
          const { cover, category, author, date, description } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <div style={{ background: category === "Customer" ? "#25b5791a" : "#ff98001a", color: category === "Creator" ? "#25b579" : "#ff9800" }}>{category}</div>
                  <i className='fa fa-heart'></i>
                </div>
                <div><i class="fa-solid fa-address-book" ></i><span><h4>{author}</h4></span></div>
                

              
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn3'>{date}</button>
                </div>
              </div>
              <div>{description}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default BlogCard
