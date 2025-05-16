/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
  //PXqmVTG3cUshx1pZ7
  //template_0norh65
  //service_e506it7

  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    emailjs.send(
      'service_e506it7', 
      'template_0norh65',
      {
        from_name: form.name,
        to_name: 'PNC Soft Tech',
        from_email: form.email,
        to_email: 'pncsoft.tech@gmail.com',
        subject: form.subject,
        message: form.message
      },
      'PXqmVTG3cUshx1pZ7'
    )
    .then(() => {
      setLoading(false)
      alert('Thank you for your message. We will get back to you as soon as possible.')
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    })
    .catch((error) => {
      setLoading(false)
      console.log("Error from contact form: ", error)
      alert('Something went wrong. Please try again later.')
    })
  }

  return (
    <div className='w-full'>
      <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input 
              type='text' 
              id="name"
              name='name' 
              placeholder="Your name" 
              onChange={handleChange} 
              value={form.name} 
              className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FAA8] focus:border-transparent transition duration-200' 
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input 
              type='email' 
              id="email"
              name='email' 
              placeholder="Your email address" 
              onChange={handleChange} 
              value={form.email} 
              className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FAA8] focus:border-transparent transition duration-200' 
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject *
          </label>
          <input 
            type='text' 
            id="subject"
            name='subject' 
            placeholder="What's this about?" 
            onChange={handleChange} 
            value={form.subject} 
            className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FAA8] focus:border-transparent transition duration-200' 
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea 
            id="message"
            rows={4} 
            name='message' 
            placeholder="How can we help you?" 
            onChange={handleChange} 
            value={form.message} 
            className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FAA8] focus:border-transparent transition duration-200 resize-none' 
            required
          />
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
          <div className='flex items-center'>
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              className="h-4 w-4 text-[#00FAA8] focus:ring-[#00FAA8] border-gray-300 rounded"
            />
            <label htmlFor="subscribe" className="ml-2 text-sm text-gray-600">
              Subscribe to our newsletter
            </label>
          </div>
          
          <button 
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#041436] hover:bg-[#041436]/90 focus:outline-none transition duration-300 shadow-lg w-full sm:w-auto"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
}

export default Form