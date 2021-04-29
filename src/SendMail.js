 import React from 'react'
import "./SendMail.css"
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';

function SendMail() {
    const {register,handleSubmit,watch,errors}=useForm();
    const onSubmit=(data)=>{
            console.log(data);
    }
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New message</h3>
                <CloseIcon className="sendMail__close"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input name="to" placeholder="To" type="text"  />
                <input  name="subject" placeholder="subject" type="text"  />
                <input name="message" placeholder="Message .." type="text" className="sendMail__message"   />
                <div className="sendMail__options">
                    <Button className="sendMail__send">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
