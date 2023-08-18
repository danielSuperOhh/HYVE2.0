import './section5.css'
import womanTyping from '../../assets/womanTyping.mp4'
import manWomanTyping from '../../assets/manWomanTyping.mp4'



const Section5 = () => {
  return (
    <div>
        <div className="section5">
            <div className="video-section">
                <div className="video1">
                    <video autoPlay loop muted playsInline>
                            <source src={manWomanTyping} type="video/mp4" />
                    </video>
                </div>
                <div className="video2">
                    <video autoPlay loop muted playsInline>
                        <source src={womanTyping} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="text-area">
                <div className="comt">
                    <h1>Your  Security is our priority, your money is safe with us</h1>

                    <p>We have measures in place to protect your data, money and privacy. As a user centric platform we are fully committed to earning your trust</p>

                    <div className='list-text'>
                        <li>Two-Factor Authentication</li>
                        <li>Guaranteed Transaction Security</li>
                        <li>Secure Cloud Option</li>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Section5