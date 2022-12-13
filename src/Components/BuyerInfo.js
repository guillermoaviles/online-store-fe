import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import received from '../media/receiving-info.gif'

// import mailbox from './images/mailbox.gif';
// import received from './images/receiving-mail.gif'

const BuyerInfo = (props) => {
    const [input, setInput] = useState('')
    const [infoSent, setInfoSent] = useState(false)
    // const[openWindow, setOpenWindow] = useState(false);

    const navigate = useNavigate()

    const sendInfo =() =>{
        setInfoSent(true);
        setTimeout(() =>{ //set timer for shipping info input window to close 3 seconds after the use hit Submit button
        navigate('/')
        }, 10000)
    }

    const deleteItem = (itemId) => {
        axios
          .delete(
            `https://online-store.herokuapp.com/api/online-store/deleteItem/${itemId}`
          )
          .then((response) => {
            props.setItems(response.data);
          });
      };

    return(
        <div className='action-page'>
        {!infoSent &&
        <div className='main-container'>
            <div className='shipping-box'>
                <h3 className='message-header'>Shipping Information</h3>
                <div className='message-content'>
                <p>Please submit your shipping information.
                </p>
                </div>
                <div className='shipping-input-label'>
                    <div className='shipping-input-box'>
                        <label className='shipping-input-text'>First Name</label>
                        <input
                        onChange={(input) => setInput(input.target.value)}
                        placeholder="Enter your first name"
                        label={'Input'}
                        type="name"
                        className='input'
                        />
                    </div>
                    <div className='shipping-input-box'>
                        <label className='shipping-input-text'>Last Name</label>
                        <input
                        onChange={(input) => setInput(input.target.value)}
                        placeholder="Enter your last name"
                        label={'Input'}
                        type="name"
                        className='input'
                        />
                    </div>
                    <div className='shipping-input-box'>
                        <label className='shipping-input-text'>Address</label>
                        <input
                        onChange={(input) => setInput(input.target.value)}
                        placeholder="Enter your address"
                        label={'Input'}
                        type="address"
                        className='input'
                        />
                    </div>
                    <div className='shipping-input-box'>
                        <label className='shipping-input-text'>City</label>
                        <input
                        onChange={(input) => setInput(input.target.value)}
                        placeholder="Enter your city"
                        label={'Input'}
                        type="address"
                        className='input'
                        />
                    </div>
                    <div className='shipping-input-box'>
                        <label className='shipping-input-text'>State/Province</label>
                        <input
                        onChange={(input) => setInput(input.target.value)}
                        placeholder="Enter your state or province"
                        label={'Input'}
                        type="address"
                        className='input'
                        />
                    </div>
                    <div className='shipping-input-box'>
                        <label className='shipping-input-text'>Postal Code</label>
                        <input
                        onChange={(input) => setInput(input.target.value)}
                        placeholder="Enter your postal code"
                        label={'Input'}
                        type="number"
                        className='input'
                        />
                    </div>
                    <div className='shipping-input-box'>
                        <label className='shipping-input-text'>Country</label>
                        <input
                        onChange={(input) => setInput(input.target.value)}
                        placeholder="Enter your country"
                        label={'Input'}
                        type="name"
                        className='input'
                        />
                    </div>
                    <div className='shipping-input-box'>
                        <label className='shipping-input-text'>Phone Number</label>
                        <input
                        onChange={(input) => setInput(input.target.value)}
                        placeholder="Enter your phone number"
                        label={'Input'}
                        type="number"
                        className='input'
                        />
                    </div>
                </div>
                <div>
                <button className='item-button' 
                onClick={() => {
                    sendInfo();
                    deleteItem(props.items._id)}}
                >
                Submit</button>
                <button className='cancel-button' onClick={() => {
                    // setOpenWindow(false);
                    navigate(-1)
                }}
                 >
                Cancel</button>
                </div>
            </div>
        </div>
        }

        {infoSent && <div className='shipping-info-container-sent'>
            <img className='sent-info-img' src={received} style={{ height: '20vh'}}/>
            <h3>Information Received!</h3>
            <p>Your information was sent to the seller. Expect a response within the next business day.</p>
            <p>You will now be redirected to the home page.</p>
        </div>
        }
     </div>
    )
}

export default BuyerInfo;