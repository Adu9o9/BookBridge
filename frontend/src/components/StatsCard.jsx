import React from 'react'
import './StatsCard.css'
import img1 from '../assets/images/card-img2.jpeg'
import img2 from '../assets/images/card-img.jpeg'
import img3 from '../assets/images/card-img3.jpeg'
import img4 from '../assets/images/card-img4.jpeg'

const StatsCard = () => {
  return (
    <>
    <div id='hero-section' className='sm:flex flex-col items-center mt-1 hidden'>
    <div className="container">
      <div className="palette">
        <div className="color" id='img1'>
            <img src={img1} alt="" />
            <p>Around 250 million children worldwide are currently out of school, with the number rising by 6 million since 2021. This indicates a significant challenge in providing universal education <a href='https://www.unesco.org/en/articles/250-million-children-out-school-what-you-need-know-about-unescos-latest-education-data' target='_blank'>(<u>UNESCO</u>)</a> .</p>
        </div>
        <div className="color">
            <img src={img2} alt="" />
            <p>Approximately 258 million children and youth were out of school globally as of 2018, highlighting the persistent gap in educational access​ <a href='https://www.globalcitizen.org/en/content/poverty-education-satistics-facts/' target='_blank'>(<u>Global Citizen</u>)</a>​.
            </p>
        </div>
        <div className="color">
            <img src={img3} alt="" />
            <p>Gender inequality significantly affects educational access. For example, 15 million girls will never attend school compared to 10 million boys. Economic hardship often leads families to prioritize boys' education over girls 
            <a href='https://www.globalcitizen.org/en/content/poverty-education-satistics-facts/' target='_blank'>(<u>Global Citizen</u>)</a>
            </p>
        </div>
        <div className="color">
            <img src={img4} alt="" />
            <p>Poverty is a major barrier to education, as families often cannot afford school-related expenses like uniforms, books, and exam fees. This forces many children to work or stay home, especially in regions like sub-Saharan Africa
            <a href='https://www.unesco.org/en/articles/250-million-children-out-school-what-you-need-know-about-unescos-latest-education-data' target='_blank'>(<u>UNESCO</u>)</a>
            </p>
        </div>
      </div>
    </div>
    </div>

    <div id='stats-card-sm' className='w-[90%] ml-1 sm:hidden '>
      <div className="flex flex-col ml-5">
          <div className="color" id='img1'>
              <img src={img1} alt="" />
              <p>Around 250 million children worldwide are currently out of school, with the number rising by 6 million since 2021. This indicates a significant challenge in providing universal education <a href='https://www.unesco.org/en/articles/250-million-children-out-school-what-you-need-know-about-unescos-latest-education-data' target='_blank'>(<u>UNESCO</u>)</a> .</p>
          </div>
          <div className="color">
              <img src={img2} alt="" />
              <p>Approximately 258 million children and youth were out of school globally as of 2018, highlighting the persistent gap in educational access​ <a href='https://www.globalcitizen.org/en/content/poverty-education-satistics-facts/' target='_blank'>(<u>Global Citizen</u>)</a>​.
              </p>
          </div>
          <div className="color">
              <img src={img3} alt="" />
              <p>Gender inequality significantly affects educational access. For example, 15 million girls will never attend school compared to 10 million boys. Economic hardship often leads families to prioritize boys' education over girls 
              <a href='https://www.globalcitizen.org/en/content/poverty-education-satistics-facts/' target='_blank'>(<u>Global Citizen</u>)</a>
              </p>
          </div>
          <div className="color">
              <img src={img4} alt="" />
              <p>Poverty is a major barrier to education, as families often cannot afford school-related expenses like uniforms, books, and exam fees. This forces many children to work or stay home, especially in regions like sub-Saharan Africa
              <a href='https://www.unesco.org/en/articles/250-million-children-out-school-what-you-need-know-about-unescos-latest-education-data' target='_blank'>(<u>UNESCO</u>)</a>
              </p>
          </div>
        </div>
    </div>

  </>
  )
}

export default StatsCard
