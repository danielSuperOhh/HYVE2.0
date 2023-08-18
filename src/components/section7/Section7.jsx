import './section7.css'
import manTyping from '../../assets/manTyping.mp4'

const Section7 = () => {
  return (
    <div>
        <div className="section7">
            <div className="section7-video">
            <div className="video7">
                <video autoPlay loop muted playsInline>
                    <source src={manTyping} type="video/mp4" />
                </video>
            </div>
            </div>

            <div className="section7-text">
                <div className="text7">
                    <h1>It takes Less than a minute</h1>

                    <div className="text7-list">
                        <div className="ballss">
                            <div className="text7-1">
                                <div className="numb">
                                    <p>01</p>
                                    <div className="line"></div>
                                </div>
                                <div className="numb-text">
                                    <h4>Create an account</h4>
                                    <p>Create a Hyve account by signing up either with your email address and password</p>
                                </div>
                            </div>
                            <div className="text7-1">
                                <div className="numb">
                                    <p>02</p>
                                    <div className="line"></div>
                                </div>
                                <div className="numb-text">
                                    <h4>Boost account security with 2FA</h4>
                                    <p>Your security is our priority, set up your 2-factor authentication in a swoop</p>
                                </div>
                            </div>
                            <div className="text7-1">
                                <div className="numb">
                                    <p>03</p>
                                    <div className="line"></div>
                                </div>
                                <div className="numb-text">
                                    <h4>You’re all set to transact</h4>
                                    <p>Now you’re ready for a smooth ride with us</p>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section7