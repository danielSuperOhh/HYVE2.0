import './section2.css'
import Clock from '../../assets/Clock.png'
import Padlock from '../../assets/Padlock.png'
import Shield from '../../assets/Shield.png'

const Section2 = () => {
  return (
    <div>
        <div className="section2">
            <div className="whyHyve">
                <h1>Why choose Hyve Finance</h1>

                <div className="bigWe">
                    <p className='we'>We are transforming the cross border remittance space using blockchain innovation for fast, secure, and cost-effective cross-border transactions</p>
                </div>

                <div className="threeWhy">
                    <div className="box">
                        <div className="circle">
                            <img src={Clock} alt="clock" />
                        </div>
                        <p className='fast'>Fast</p>

                        <p className='small'>Experience seamless transactions, which bridges the wide gap between different currencies and financial systems across the world.</p>
                    </div>
                    <div className="box">
                        <div className="circle">
                            <img src={Padlock} alt="padlock" />
                        </div>
                        <p className='safe'>Safe</p>

                        <p className='small'>Your funds are securely transferred using cryptographic protocols, providing you with the peace of mind you deserve.</p>
                    </div>
                    <div className="box">
                        <div className="circle">
                            <img src={Shield} alt="shield" />
                        </div>
                        <p className='trans'>Transparent</p>

                        <p className='small'>Each transfer is recorded on the blockchain, creating an immutable and auditable trail of the funds' journey. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2