import React from 'react'
import location from './tools/location.svg'
import search from './tools/search.svg'
import back from './tools/rArrow.svg'
export default function SecondPage() {
  return (
    <div className='secondpg'>
      <div>
      <div className='steptwo'>
            <img src={back} alt="" className="arrow" />
            <h4>Step 2 of 2</h4>
        </div>
        <div>
            <h1>Select you preferred location</h1>
            <p>With over 1 million+ homes available on the app, We can
m\tch you with a house you will want to call a home. </p>
        </div>
        <div className='searchbar'>
        <div>
        <img src={search} alt="" className="iconsearch" />

<input type="text" />
        </div>
        </div>
        <div className='line'>
            <hr />
            <p>Or</p>
            <hr />
        </div>
        <div className='location'> 
       <div>
       <img src={location} alt="location" className='locator' />
            <p>Use my current location</p>
       </div>
        </div>
       
      </div>

         <div className="btn">
         <button>
                Next
            </button>
         </div>
      
    </div>
  )
}
