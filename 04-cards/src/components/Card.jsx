import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = ({ data }) => {
  return (
    <div className="card">

      {/* TOP */}
      <div className="top">
        <img src={data.logo} alt={data.companyName} />
        <button>
          Save <Bookmark size={13} />
        </button>
      </div>

      {/* CENTER */}
      <div className="center">
        <h3>
          {data.companyName} <span>{data.days}</span>
        </h3>

        <h2>{data.jobProfile}</h2>

        <div className='tag'>
          <h4>{data.tag1}</h4>
          <h4>{data.tag2}</h4>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bottom">
        <div className="bottom-content">
          <div>
            <h3>{data.pay}</h3>
            <p>{data.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>

    </div>
  )
}

export default Card