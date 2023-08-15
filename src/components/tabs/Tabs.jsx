import { useState } from 'react';
import './tabs.css'
import hyveWallet from '../../assets/hyveWallet.png'
import hyveCoin from '../../assets/hyvecoin.png'
import hyveSend from '../../assets/hyveSend.png'
import hyveShare from '../../assets/hyveShare.png'
import hyveCash from '../../assets/hyveCash.png'
import hyveSD from '../../assets/hyveSD.png'


const Tabs = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabindex) => {
        setActiveTab(tabindex);
    }
  return (
    <div className="tabs">
        <div className="tab_controller">
            <div className={`tab ${activeTab === 1 ? 'actives' : ''}`} onClick={() => handleTabClick(1)}>
                <p className='sendMoney'>Ways to send money</p>
            </div>
            <div className={`tab ${activeTab === 2 ? 'actives' : ''}`} onClick={() => handleTabClick(2)}>
                <p className='sendMoney'>Ways to receive money</p>
            </div>
        </div>
        <div className="tab_content">
            {activeTab === 1 && <div className='tab1'>
                <p className='tab1_header'>Convenient ways to send money across 20+ African Countries</p>
                
                <div className="threeWhy">
                    <div className="box">
                        <div className="circle">
                            <img src={hyveWallet} alt="clock" />
                        </div>
                        <p className='fast'>Fast</p>

                        <p className='small'>Experience seamless transactions, which bridges the wide gap between different currencies and financial systems across the world.</p>
                    </div>
                    <div className="box">
                        <div className="circle">
                            <img src={hyveCoin} alt="padlock" />
                        </div>
                        <p className='safe'>Safe</p>

                        <p className='small'>Your funds are securely transferred using cryptographic protocols, providing you with the peace of mind you deserve.</p>
                    </div>
                    <div className="box">
                        <div className="circle">
                            <img src={hyveSend} alt="shield" />
                        </div>
                        <p className='trans'>Transparent</p>

                        <p className='small'>Each transfer is recorded on the blockchain, creating an immutable and auditable trail of the funds' journey. </p>
                    </div>
                </div>

            </div>}
            {activeTab === 2 && <div className='tab2'>
                <p className='tab2_header'>Convenient ways to receive money across 20+ African Countries</p>
                <div className="threeWhy">
                    <div className="box">
                        <div className="circle">
                            <img src={hyveShare} alt="clock" />
                        </div>
                        <p className='fast'>Fast</p>

                        <p className='small'>Experience seamless transactions, which bridges the wide gap between different currencies and financial systems across the world.</p>
                    </div>
                    <div className="box">
                        <div className="circle">
                            <img src={hyveCash} alt="padlock" />
                        </div>
                        <p className='safe'>Safe</p>

                        <p className='small'>Your funds are securely transferred using cryptographic protocols, providing you with the peace of mind you deserve.</p>
                    </div>
                    <div className="box">
                        <div className="circle">
                            <img src={hyveSD} alt="shield" />
                        </div>
                        <p className='trans'>Transparent</p>

                        <p className='small'>Each transfer is recorded on the blockchain, creating an immutable and auditable trail of the funds' journey. </p>
                    </div>
                </div>
            </div>}
        </div>
        
    </div>
  )
}

export default Tabs