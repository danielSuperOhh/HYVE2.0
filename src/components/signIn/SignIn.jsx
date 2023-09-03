import './signIn.css'
import hyvelogo from '../../assets/hyvelogo.jpg'
import Input from '../inputField/Input'
import Button from '../button/Button'
import PasswordInput from '../PasswordInput/PasswordInput'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const SignUp = () => {
  const notify = () => {
    toast.success("Successful", {
      className: "my-toast-success", 
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

    // toast.info("Info notification", {
    //   className: "my-toast-info", 
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 3000,
    // });

    // toast.warning("Warning notification", {
    //   className: "my-toast-warning",
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 3000,
    // });

    // toast.error("Error notification", {
    //   className: "my-toast-error", 
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 3000,
    // });
  };
  
  return (
    <div>
      <div className="signup">
        <div className="signin-logo">
          <img src={hyvelogo} alt="" />
        </div>
        <div className="signup-container">
          <p className='req'>All field are required*</p>

          <div className="email-side">
            <p className='email-space'>Email Address</p>

            <Input 
              padding='15px 0px 14px 14px' 
              backgroundColor='#f4ecec' 
              marginBottom='23px' 
              border='none' 
              width='100%' 
              placeholder='Enter Email Address'
              type='email'/>

            <p className='email-space'>Password</p>

            <PasswordInput />
          </div>

          <div className="reset">
            <div className="keep">
              <input type="checkbox" />
              <p className='logg'>Keep me logged in</p>
            </div>
            <p className='r-pass'>Reset password</p>
          </div>

          <Link to='/dashboard'>
            <Button 
            width='100%' 
            borderRadius='10px' 
            backgroundColor="#093D8B" 
            hoverColor="#032356" 
            color="#FBFBFB"
            onClick={notify}>
              Sign in
            </Button>
          </Link>
          

        </div>

        <div className="dont">
          <p>Don't have an account? <span>Sign up</span></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp