import React, {useState} from "react";
// import mailbox from './images/mailbox.gif';
// import received from './images/receiving-mail.gif'

const BuyerInfo = ({openWindow, setOpenWindow}) => {
    const [input, setInput] = useState('')
    const [infoSent, setInfoSent] = useState(false)

    const sendInfo =() =>{
        setInfoSent(true);
        setTimeout(() =>{ //set timer for shipping info input window to close 3 seconds after the use hit Submit button
            setOpenWindow(false);
        }, 3000)
    }
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
                onClick={sendInfo}
                >
                Submit</button>
                <button className='cancel-button' onClick={() => {
                    setOpenWindow(false);
                }}
                 >
                Cancel</button>
                </div>
            </div>
        </div>
        }

        {infoSent && <div className='shipping-info-container-sent'>
            <h3>Information Received!</h3>
        </div>
        }
     </div>
    )
}

export default BuyerInfo;