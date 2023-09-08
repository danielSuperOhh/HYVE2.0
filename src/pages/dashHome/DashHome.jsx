import React, { useState } from 'react';
import './dashHome.css';
import { Eye, EyeSlash } from 'iconsax-react';
import TransactionTable from '../../components/transactionTable/TransactionTable';


const DashHome = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <>
        <div className="dash-home">
            <div className="dash-text">
                <h4>Overview</h4>
                <p>Send and receive funds with pleasure</p>
            </div>

            <div className="card-section">
                <div className="first-side">
                    <div className="card">
                        <div className="eye" onClick={toggleBalanceVisibility}>
                                    <p>Avaliable Wallet Balance</p>
                            {isBalanceVisible ? (
                                <Eye size="32" color="#093d8b" variant="Bulk"/>
                            ) : (
                                <EyeSlash size="32" color="#093d8b" variant="Bulk"/>
                            )}
                        </div>
                        <div className="balance">
                            <div className="wallet-cover">
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none"><path d="M13 9H7M22 10.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6H21c.56.02 1 .47 1 1.02Z" stroke="#093d8b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.48 10.55c-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87H21v1.45c0 3-2 5-5 5H7c-3 0-5-2-5-5v-7c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h9c.26 0 .51.01.75.05C19.33 3.85 21 5.76 21 8.5v1.45h-2.08c-.56 0-1.07.22-1.44.6Z" stroke="#093d8b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>

                            <p>
                                {isBalanceVisible ? '1,432' : '*****'}{' '}
                                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                USDT
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="quicks">
                        <p className='quicksP'>Quick Links</p>
                        <div className="linkis">
                            <div className="depo">
                                <div className="dep-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M14.262 15.438h-5M11.762 12.998v5"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="m12.66 2.518-.03.07-2.9 6.73H6.88c-.68 0-1.33.14-1.92.39l1.75-4.18.04-.1.07-.16c.02-.06.04-.12.07-.17 1.31-3.03 2.79-3.72 5.77-2.58Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.05 9.518c-.45-.14-.93-.2-1.41-.2H9.73l2.9-6.73.03-.07c.15.05.29.12.44.18l2.21.93c1.23.51 2.09 1.04 2.61 1.68.1.12.18.23.25.36.09.14.16.28.2.43.04.09.07.18.09.26.27.84.11 1.87-.41 3.16Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.522 14.198v1.95c0 .2-.01.4-.02.6-.19 3.49-2.14 5.25-5.84 5.25h-7.8c-.24 0-.48-.02-.71-.05-3.18-.21-4.88-1.91-5.09-5.09-.03-.23-.05-.47-.05-.71v-1.95c0-2.01 1.22-3.74 2.96-4.49.6-.25 1.24-.39 1.92-.39h9.76c.49 0 .97.07 1.41.2 1.99.61 3.46 2.47 3.46 4.68Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m6.71 5.528-1.75 4.18A4.894 4.894 0 0 0 2 14.198v-2.93c0-2.84 2.02-5.21 4.71-5.74ZM21.519 11.268v2.93c0-2.2-1.46-4.07-3.46-4.67.52-1.3.67-2.32.42-3.17-.02-.09-.05-.18-.09-.26 1.86.96 3.13 2.93 3.13 5.17Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <p>Deposit</p>
                            </div>
                            <div className="depo send">
                                <div className="dep-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none"><path d="M9.5 13.75c0 .97.75 1.75 1.67 1.75h1.88c.8 0 1.45-.68 1.45-1.53 0-.91-.4-1.24-.99-1.45l-3.01-1.05c-.59-.21-.99-.53-.99-1.45 0-.84.65-1.53 1.45-1.53h1.88c.92 0 1.67.78 1.67 1.75M12 7.5v9"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2M22 6V2h-4M17 7l5-5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <p>Send</p>
                            </div>
                            <div className="depo rec">
                                <div className="dep-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M9.5 13.75c0 .97.75 1.75 1.67 1.75h1.88c.8 0 1.45-.68 1.45-1.53 0-.91-.4-1.24-.99-1.45l-3.01-1.05c-.59-.21-.99-.53-.99-1.45 0-.84.65-1.53 1.45-1.53h1.88c.92 0 1.67.78 1.67 1.75M12 7.5v9"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 3v4h4M22 2l-5 5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <p>Receive</p>
                            </div>
                            <div className="depo with">
                                <div className="dep-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none"><path d="M14.262 15.998h-5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="m12.66 2.518-.03.07-2.9 6.73H6.88c-.68 0-1.33.14-1.92.39l1.75-4.18.04-.1.07-.16c.02-.06.04-.12.07-.17 1.31-3.03 2.79-3.72 5.77-2.58Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.05 9.518c-.45-.14-.93-.2-1.41-.2H9.73l2.9-6.73.03-.07c.15.05.29.12.44.18l2.21.93c1.23.51 2.09 1.04 2.61 1.68.1.12.18.23.25.36.09.14.16.28.2.43.04.09.07.18.09.26.27.84.11 1.87-.41 3.16Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.522 14.198v1.95c0 .2-.01.4-.02.6-.19 3.49-2.14 5.25-5.84 5.25h-7.8c-.24 0-.48-.02-.71-.05-3.18-.21-4.88-1.91-5.09-5.09-.03-.23-.05-.47-.05-.71v-1.95c0-2.01 1.22-3.74 2.96-4.49.6-.25 1.24-.39 1.92-.39h9.76c.49 0 .97.07 1.41.2 1.99.61 3.46 2.47 3.46 4.68Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m6.71 5.528-1.75 4.18A4.894 4.894 0 0 0 2 14.198v-2.93c0-2.84 2.02-5.21 4.71-5.74ZM21.519 11.268v2.93c0-2.2-1.46-4.07-3.46-4.67.52-1.3.67-2.32.42-3.17-.02-.09-.05-.18-.09-.26 1.86.96 3.13 2.93 3.13 5.17Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <p>Withdraw</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="dash-transaction-history">
                    <div className="trans">
                        <TransactionTable/>
                    </div>
                    <p>See more</p>
                </div>
            </div>
        </div>
    </>
  );
};

export default DashHome;
