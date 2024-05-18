import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

function SignIn() {

  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error: errorMessage, loading } = useSelector(state => state.user);

  const handleChange = (event) => {

    setFormData({ ...formData, [event.target.id]: event.target.value.trim() });

  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.password || !formData.email) {
      return dispatch(signInFailure('All fields are required!'));
    }

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        return dispatch(signInFailure(data.message));
      }

      dispatch(signInSuccess(data));
      navigate('/');

    }
    catch (error) {
      dispatch(signInFailure(error.message));
    }

  }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to={'/'} className='font-bold text-white bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 rounded px-2 py-1 text-4xl'>
            Blogger
          </Link>
          <p className='text-sm mt-6'>
            A platform to express <span className='text-pink-700'> Yourself</span>. Sign in with email or continue with google instead.
          </p>
        </div>

        {/* Right */}
        <div className='flex-1'>

          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Email' />
              <TextInput
                type='email'
                placeholder='darth@empire.com'
                id='email'
                onChange={handleChange}
              />
            </div>

            <div>
              <Label value='Password' />
              <TextInput
                type='password'
                placeholder='lightsaberboiii'
                id='password'
                onChange={handleChange}
              />
            </div>

            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>
                    Signing in...
                  </span>
                </>)
                : 'Sign In'
              }
            </Button>

            
            <OAuth />
          </form>

          <div className='flex gap-2 mt-5'>
            <span>
              Don't have an account?
            </span>
            <Link to={'/sign-up'} className='text-blue-700'>
              Sign up
            </Link>
          </div>

          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}

        </div>
      </div>
    </div>
  )
}

export default SignIn;
