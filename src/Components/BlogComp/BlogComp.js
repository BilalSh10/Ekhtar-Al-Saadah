import React from 'react';
import "./BlogComp.css";
import articleImg from '../../Images/blogImg.png';
import { BsChevronDoubleRight } from "react-icons/bs";


function BlogComp() {
  return (
    <div className='blog-box'>
        <div className='blog-img'>
            <img src={articleImg} id='blogImg' />
        </div>

        <div className='blog-summary'>
            <h4 className='headline'>This is the headline</h4>
            <p className='blog-intro'>Here we can have a short intro of the article. this is a paragraph.</p>
            <div className='cont'>
              <a href='www.google.com'>continue reading&nbsp;<BsChevronDoubleRight id='icon' /></a>
            </div>
        </div>
    </div>
  );
}

export default BlogComp;