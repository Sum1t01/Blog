import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {

    setFormData({ ...formData, [event.target.id]: event.target.value.trim() });

  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.username || !formData.password || !formData.email) {
      return setErrorMessage('All fields are required!');
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        setErrorMessage(data.message);
        setLoading(false);
        return;
      }

      setLoading(false);
      navigate('/sign-in');

    }
    catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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
            A platform to express <span className='text-blue-700'> Yourself</span>. Sign up with email or continue with google instead.
          </p>
        </div>

        {/* Right */}
        <div className='flex-1'>

          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Username' />
              <TextInput
                type='text'
                placeholder='DarthVader70'
                id='username'
                onChange={handleChange}
              />
            </div>

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
                    Creating...
                  </span>
                </>)
                : 'Create an Account'
              }
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

export default SignUp;
