import Button from '../button/Button'
import './section3.css'

const Section3 = () => {
  return (
    <div>
        <div className="section3">
            <div className="section3-header">
                <h1>Pushing the boundaries of innovation to deliver swift and instant payment solutions</h1>

                <p>Bespoke payment solutions for your modern lifestyle, business connections, disbursements, security and payment processing across the globe</p>

                <Button 
                    backgroundColor="#FBFBFB" 
                    borderRadius='8px' 
                    border='1px solid #093D8B' 
                    hoverColor="#032356" 
                    color='#093D8B' 
                    hoverTextColor='#FBFBFB'
                    width='100%'
                    height='56px'
                >
                    Join Hyve
                </Button>
            </div>

            <div className="come">
                <div className="section3-banner"></div>
            </div>
        </div>
    </div>
  )
}

export default Section3