import { useState } from 'react'
import './topDash.css'
import copy from '../../assets/copy.svg'
import hyveSvg from '../../assets/hyveSvg.svg'


const TopDash = () => {
  const [isCopied, setIsCopied] = useState(false);

  // Function to copy the user ID to the clipboard
  const copyToClipboard = () => {
    const textToCopy = 'hyve-hjgt-0098'; // Replace with your actual user ID
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      // Clear the "Copied" message after a few seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <>
      <div className="topdash">
        <div className="top-logo">
          <img src={hyveSvg} alt="" />
        </div>
        <div className="profile-top">
          <div className="profile-top-circle"></div>
          <div className="profile-info">
            <div className="text">
              <p className='namey'>John Ligma</p>
              <p className='id'>User ID: hyve-hjgt-0098</p>
            </div>
            <div className="copy" onClick={copyToClipboard}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none"><path stroke="#093d8b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9z"></path><path stroke="#093d8b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16v-3.1C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9z"></path></svg>
            </div>
            {isCopied && (
        <div className="copied-popup">
          <p>Copied</p>
        </div>
      )}
          </div>
        </div>
      </div>
    </>
  )
}

export default TopDash 



