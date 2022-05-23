import React from 'react'

const Marquee = () => {
    return (
      <>
        <section className='section1'>
          <marquee>
              <a href='#' className='text-light pr-5'>
                <b>
                  <u>Flash Sale</u> <i className='fa fa-bolt'></i> Up to 86% Off
                </b>
              </a>
                <a href="#" className="text-light pl-5">
                    <b><u>Valentine Sale</u> <i className="fa fa-gift"></i> Up to 86% Off</b>
                </a>
    
                <a href="#"className="text-light pl-5">
                    <b> <u>Weekly Deals</u> <i className="fa fa-gift"></i> FREE NEXT DAY AIR</b>
                </a>
          </marquee>
        </section>
      </>
    );
}

export default Marquee
