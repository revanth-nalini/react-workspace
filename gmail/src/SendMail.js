import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'
import './SendMail.css'
import { useForm } from 'react-hook-form';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firbase';
import firebase from 'firebase'
import { useDispatch } from 'react-redux';

function SendMail() {

    const dispatch = useDispatch();

    const {register,handleSubmit, errors } = useForm();

    const onSubmit = (formData) =>{
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        dispatch(closeSendMessage());
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={()=>dispatch(closeSendMessage())} className="sendMail__close" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" ref={register({required: true})} type="email" placeholder="To" />
                {errors.to && <p className="sendMail__error">To is required</p>}
                <input name="subject" ref={register({required: true})} type="text" placeholder="Subject" />
                {errors.subject && <p className="sendMail__error">Subject is required</p>}
                <textarea name="message" ref={register({required: true})} type="text" className="sendMail__message" placeholder="Message" />
                {errors.message && <p className="sendMail__error">Message is required</p>}
                <div className="sendMail__options">
                    <Button className="sendMail__send" 
                        variant="contained" 
                        color="primary" 
                        type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
