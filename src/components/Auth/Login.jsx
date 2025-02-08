import React, {useState}from 'react'

const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    const submitHandeler = (e)=>{
        e.preventDefault()
        console.log('email is:', email)
        console.log('password is:',password)
        setemail('')
        setpassword('')
    }
    
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form
            onSubmit={(e)=>{
                submitHandeler(e)
            }}
             className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }}
                required
                className='text-white text-center border-2 border-emerald-600 rounded-full text-xl py-3 px-3 outline-none bg-transparent placeholder:text-gray-400 w-full'
                type='email'
                placeholder='Enter your email'
                />
                <input
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}
                required
                className='text-white text-center border-2 border-emerald-600 rounded-full text-xl py-3 px-3 outline-none bg-transparent placeholder:text-gray-400 mt-3 w-full'
                type='password'
                placeholder='Enter Password'
                />
                <button className='text-white border-none bg-emerald-600 rounded-full text-xl py-3 px-3 mt-7 w-full'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login