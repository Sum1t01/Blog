import { Label, TextInput, Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to={'/'} className='font-bold text-white bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 rounded px-2 py-1 text-4xl'>
            Blogger
          </Link>
          <p className='text-sm mt-6'>
            A platform to express <span className='text-blue-700'> Yourself</span>. Sign up with email or continue with google instead.
          </p>
        </div>

        {/* Right */}
        <div className='flex-1'>

          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Username' />
              <TextInput
                type='text'
                placeholder='DarthVader70'
                id='username' />
            </div>

            <div>
              <Label value='Email' />
              <TextInput
                type='text'
                placeholder='darth@empire.com'
                id='email' />
            </div>

            <div>
              <Label value='Password' />
              <TextInput
                type='password'
                placeholder='redsaberboiii'
                id='password' />
            </div>

            <Button gradientDuoTone='purpleToPink' type='submit'>
              Create an Account
            </Button>

          </form>

          <div className='flex gap-2 mt-5'>
            <span>
              Have an account? 
            </span>
            <Link to={'/sign-in'} className='text-blue-700'>
              Sign in
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUp;
