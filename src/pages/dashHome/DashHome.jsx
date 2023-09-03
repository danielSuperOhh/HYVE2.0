import React, { useState } from 'react';
import './dashHome.css';
import walletDash from '../../assets/walletDash.svg';
import { Eye, EyeSlash } from 'iconsax-react';
import TransactionTable from '../../components/transactionTable/TransactionTable';

const DashHome = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <>
      <div className='dashhome'>
        <h3 className='over'>Overview</h3>

        <div className="card-section">
        <div className="card">
            <div className="eye" onClick={toggleBalanceVisibility}>
                <p>Wallet Balance</p>
            {isBalanceVisible ? (
                <Eye size="32" color="#093d8b" variant="Bulk"/>
            ) : (
                <EyeSlash size="32" color="#093d8b" variant="Bulk"/>
            )}
            </div>
            <div className="balance">
            <p>
                {isBalanceVisible ? '1,432' : '*****'}{' '}
                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                USDT
                </span>
            </p>
            </div>
        </div>

        <div className="quick-links">
            <h3>Quick Links</h3>
            <div className="q-links">
                <div className='deposit'>
                    <div className="icon-cover">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none"><path d="M14.262 15.438h-5M11.762 12.998v5"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="m12.66 2.518-.03.07-2.9 6.73H6.88c-.68 0-1.33.14-1.92.39l1.75-4.18.04-.1.07-.16c.02-.06.04-.12.07-.17 1.31-3.03 2.79-3.72 5.77-2.58Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.05 9.518c-.45-.14-.93-.2-1.41-.2H9.73l2.9-6.73.03-.07c.15.05.29.12.44.18l2.21.93c1.23.51 2.09 1.04 2.61 1.68.1.12.18.23.25.36.09.14.16.28.2.43.04.09.07.18.09.26.27.84.11 1.87-.41 3.16Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.522 14.198v1.95c0 .2-.01.4-.02.6-.19 3.49-2.14 5.25-5.84 5.25h-7.8c-.24 0-.48-.02-.71-.05-3.18-.21-4.88-1.91-5.09-5.09-.03-.23-.05-.47-.05-.71v-1.95c0-2.01 1.22-3.74 2.96-4.49.6-.25 1.24-.39 1.92-.39h9.76c.49 0 .97.07 1.41.2 1.99.61 3.46 2.47 3.46 4.68Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m6.71 5.528-1.75 4.18A4.894 4.894 0 0 0 2 14.198v-2.93c0-2.84 2.02-5.21 4.71-5.74ZM21.519 11.268v2.93c0-2.2-1.46-4.07-3.46-4.67.52-1.3.67-2.32.42-3.17-.02-.09-.05-.18-.09-.26 1.86.96 3.13 2.93 3.13 5.17Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                    <p>Deposit</p>
                </div>
                <div className="linee"></div>
                <div className='send'>
                    <div className="icon-cover">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="m7.4 6.32 8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92ZM10.11 13.65l3.58-3.59"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>                    
                    </div>
                    <p>Send</p>
                </div>
                <div className="linee"></div>
                <div className="receive">
                    <div className="icon-cover">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 17.5l14-14M5 7.23V17.5h10.27M3.5 22h17"></path></svg>
                    </div>
                    <p>Receive</p>
                </div>
            </div>
        </div>
        </div>

        <div className="transaction-history">
            <div className="trans">
                <TransactionTable/>
            </div>
        </div>

      </div>
    </>
  );
};

export default DashHome;
