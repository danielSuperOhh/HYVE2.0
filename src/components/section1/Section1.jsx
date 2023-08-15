import Button from '../button/Button'
import Input from '../inputField/Input'
import './section1.css'

const Section1 = () => {
  return (
    <div>
        <div className="section1">
            <div className="header-text">
                <h1>The seamless remittance platform for borderless swift transactions</h1>

                <p>With our innovative blockchain-powered solution, you can enjoy a seamless and secure remittance experience that is faster,  cost-effective, and highly transparent built just for you</p>
            </div>

            <div className="conversion">
                <div className="conv-box">
                    <p className='conv-header'>Send money anytime, anyday!!</p>

                    <Input
                        placeholder="You send"
                        type="number"
                    />
                    <Input
                        placeholder="Recipient gets"
                        readonly={true}
                    />

                    <p className='conv-info'>Transaction fee: 2.07 USDT</p>
                    <p className='conv-info'>Payment method: Bank Transfers</p>

                    <p className='conv-total'>Total pay: 117.07 USDT</p>

                    <Button  backgroundColor="#093D8B" hoverColor="#032356" borderRadius='7.725px' width='100%' hoverTextColor='#FBFBFB' color="#FBFBFB">
                        Click Me
                    </Button>                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1