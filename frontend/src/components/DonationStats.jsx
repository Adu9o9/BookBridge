import React from 'react'
import './DonationStats.css'
import useBackground from '../hooks/useBackground';

const DonationStats = ({Title , description}) => {
  const {isDark} = useBackground();
  return (
    <>
    <div className="donationcard">
      <div className="content">
        <p className="heading ">{Title}
        </p><p className="para">{description}
        </p>
      </div>
    
    </div>
    </>
  )
}

export default DonationStats
