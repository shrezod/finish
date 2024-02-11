import './gallery-div.scss'

import React from 'react'
import gallery1 from '../../assets/images/1.png'
import gallery2 from '../../assets/images/2.png'
import gallery3 from '../../assets/images/3.png'
import gallery4 from '../../assets/images/4.png'
import gallery5 from '../../assets/images/5.png'
import gallery6 from '../../assets/images/6.png'
import gallery7 from '../../assets/images/7.png'
import gallery8 from '../../assets/images/8.png'
export default function GalleryDiv() {
  return (
    <div className="gallery-div">
        <div className="left">
            <div className="top-img-1"><img src={gallery1} alt="" /></div>
            <div className="bottom">
                <div className="left-img-2"><img src={gallery5} alt="" /></div>
                <div className="m-right">
                    <div className="top-img-3"><img src={gallery6} alt="" /></div>
                    <div className="bottom-img-4"><img src={gallery7} alt="" /></div>
                </div>
            </div>
        </div>

        <div className="middle-img-5"><img src={gallery2} alt="" /></div>

        <div className="right">
            <div className="r-top">
                <div className="left-img-6"><img src={gallery3} alt="" /></div>
                <div className="right-img-7"><img src={gallery4} alt="" /></div>
            </div>
            <div className="bottom-img-8"><img src={gallery8} alt="" /></div>
        </div>
    </div>
  )
}
