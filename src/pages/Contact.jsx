import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Alert from '../components/Alert'
import useAlert from '../hooks/useAlert'

function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const { alert, showAlert, hideAlert } = useAlert()
const [loading, setLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_jkaza7o',
        'template_nohz8ny',
        {
          from_name: form.name,
          to_name: 'helmy',
          from_email: form.email,
          to_email: 'hellmyezzat@gmail.com',
          message: form.message,
        },
        'in4NzlOXEN8MCxNe3'
      )
      .then(() => {
        showAlert({
          show: true,
          text: 'Thank you for your message 😃',
          type: 'success',
        })

        setTimeout(() => {
          hideAlert(false)
          setForm({
            name: '',
            email: '',
            message: '',
          })
        }, [3000])
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
       showAlert({
         show: true,
         text: "I didn't receive your message 😢",
         type: 'danger',
       })

      })
  }
  const handleFocus = () => {}
  const handleBlur = () => {}
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="">{alert.show && <Alert {...alert} />}</div>
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14 "
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="helmy"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="hellmyezzat@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              type="message"
              rows={4}
              name="message"
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={loading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
