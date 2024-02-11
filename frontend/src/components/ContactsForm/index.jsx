import { useState } from "react"
import React from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss'


function ContactsForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        notes: ""
    })
    const templateParams = {
        from_name: form.name,
        email: form.email,
        number: form.number,
        message: form.notes
    }
    function fireSetForm(e) {
        let key = e.target.name
        let val = e.target.value
        setForm({ ...form, [key]: val })
    }
    function submit(e) {
        e.preventDefault()
        emailjs.send('service_4n1fris', 'template_gzhw5d5', templateParams, '3HB9qa4M2SQc2pglx')
            .then((response) => {
                toast.success(`Successfully sent!`, {
                    theme: "dark"
                })
            }, (err) => {
                toast.error(`Ooops! Something went wrong. try again`, {
                    theme: "dark"
                })
            });
        e.target.reset()
    }
 
    return (
        
        <div className="contacts-form-wrapper">
            <ToastContainer />
            <form onSubmit={submit}>
                <h3>Остались вопросы?</h3>
                <span>Оставь заявку и мы ответим</span>
                <div className="div">
                    <div className="hr">
                        <input
                            id="full-name-input" type="text"
                            placeholder='Полное имя' name="name"
                            onChange={fireSetForm} required
                        />
                    </div>
                    <div className="hr">
                        <input
                            id="number-input" type="number" placeholder="Номер телефона"
                            onChange={fireSetForm} name='number' required />
                    </div>
                    <div className="hr">
                        <input
                            id="email-input" type="email" placeholder="Почта"
                            onChange={fireSetForm} name='email' required />
                    </div>

                </div>
                <button className='info-btn'>Подать Заявку</button>
            </form>
        </div>
    );
}

export default ContactsForm;