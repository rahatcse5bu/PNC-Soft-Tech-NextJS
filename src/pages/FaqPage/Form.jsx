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
  const [form , setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loadding, setLoasdding] = useState(false)

  const handleChange = (e) =>{
    const {name, value} = e.target
    setForm({...form , [name]:value})
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    setLoasdding(true)
    emailjs.send('service_e506it7', 
    'template_0norh65',
    {
        from_name: form.name,
        to_name: 'Sabuj Das',
        from_email: form.email,
        to_email: 'sabujdas.cse5.bu@gmail.com',
        message:form.message
    },
     'PXqmVTG3cUshx1pZ7' )
     .then(() =>{
      setLoasdding(false)
      alert('Thank you,I will get back to you as soon as possible.')
      setForm({
        name: '',
        email:'',
        message:'',
      }
      )
     }), (error) =>{
      setLoasdding(false)
      console.log("error from contact Page : ", error)
      alert('Something went wrong')
     }
  }
  return (
    <div className=' h-[400px] w-[90%]  md:w-[50%]   overflow-hidden  '>
        <form ref={formRef} onSubmit={() =>{}} className='flex flex-col gap-4'  >
             
             <div className='flex flex-col md:flex-row gap-4'>

            <label className='flex flex-col w-full'>
              <input type='text' name='name' placeholder="what's your name" onChange={handleChange} value={form.name} className='bg-[#f4f7fb] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
            </label>

            <label className='flex flex-col w-full'>
              <input type='email' name='email' placeholder="what's your email" onChange={handleChange} value={form.email} className='bg-[#f4f7fb] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
            </label>
             </div>

            <label className='flex flex-col'>
              
              <textarea rows={4} name='message' placeholder="what's your message" onChange={handleChange} value={form.message} className='bg-[#f4f7fb] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
            </label>
            <div className='flex flex-wrap gap-4 justify-between'>

            <div className=''>
                <input className='bg-black '  type="checkbox" />
                <span className='ml-[10px] font-medium text-[18px] '>Also subscribe us</span>
            </div>

               <button className='bg-[#00FAA8] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' >{loadding ? 'Sending ...':'Send Data'}</button>
       
            </div>
        </form>
    </div>

  )
}

export default Form