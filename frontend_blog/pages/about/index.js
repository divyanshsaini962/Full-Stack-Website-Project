import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenImage from'../../public/profile.png';

const index = () => {
  return (
    <section className="header_data_section">
            <div className="container flex flex-sb w-100">
               <div className="leftheader_info">
                  <h1>Hi I am <span>Divyanshu Saini</span><br />
                     UX/UI Designer</h1>
                  <h3>Specilized in Java Script and Next js</h3>
                  <div className="flex gap-2">
                     <Link href="/contact"><button> contact Us</button></Link>
                     <Link href="/about"><button> About Me</button></Link>
                  </div>
               </div>
               <div className="rightheader_img">
                  <div className="image_bg_top"></div>
                  <div className="image_bg_top2"></div>
                  <Image src={MenImage} alt="image" />
               </div>
            </div>
         </section>
  )
}

export default index