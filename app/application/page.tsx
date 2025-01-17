'use client';

import { useState, useEffect } from 'react';

export default function ApplicationPage() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    pronouns: '',
    email: '',
    platformUsername: '',
    timezone: '',
    discoverSource: '',
    interestReason: '',
    occupation: '',
    weeklybudget: '',
    hobbies: '',
    dynamicStrengths: '',
    birthday: '',
    message: '',
  });
  const [feeAgreement, setFeeAgreement] = useState(false); // Tracks the "I understand" question
  const [status, setStatus] = useState('');
  const [countdown, setCountdown] = useState(5);
  const [formSubmitted, setFormSubmitted] = useState(false); // Tracks if the form has been submitted

  // Handle countdown logic
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle fee agreement toggle
  const handleFeeAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeeAgreement(e.target.value === 'Y');
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.birthday &&
      formData.message &&
      feeAgreement
    );
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('');
        setFormSubmitted(true); // Hide the form and show payment link
        setFormData({
          name: '',
          pronouns: '',
          email: '',
          platformUsername: '',
          timezone: '',
          discoverSource: '',
          interestReason: '',
          occupation: '',
          weeklybudget: '',
          hobbies: '',
          dynamicStrengths: '',
          birthday: '',
          message: '',
        });
        setFeeAgreement(false);
      } else {
        setStatus('Failed to submit application.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section className='relative flex items-center justify-center min-h-screen text-gray-300 overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-700 via-black to-purple-900 animate-gradientMove'></div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/40'></div>

      {/* Main Content */}
      <div className='relative z-10 w-full max-w-4xl px-4 py-8'>
        {!agreed ? (
          <div className='bg-purple-700 p-6 rounded-lg shadow-lg'>
            <h1 className='text-2xl font-bold text-gray-100 mb-4 text-center'>
              Disclaimer & Agreement
            </h1>
            <p className='text-base text-gray-200 mb-4 text-center'>
              Before proceeding, you must agree to the following:
            </p>
            <ul className='text-gray-200 mb-6 list-disc list-inside space-y-2'>
              <li>
                I will not participate in any harmful actions, including those
                that are discriminatory or put others at risk of harm or danger.
              </li>
              <li>
                By clicking “I Confirm,” I agree that I am over the age of 20
                and willing to provide verification if requested.
              </li>
            </ul>
            <button
              onClick={() => setAgreed(true)}
              disabled={countdown > 0}
              className={`w-full ${
                countdown > 0
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-purple-500 hover:bg-purple-600 cursor-pointer'
              } text-gray-900 font-semibold px-4 py-2 rounded-md shadow-lg transition`}
            >
              {countdown > 0 ? `I Confirm (${countdown}s)` : 'I Agree'}
            </button>
          </div>
        ) : formSubmitted ? (
          <div className='bg-purple-700 p-6 rounded-lg shadow-lg text-center'>
            <h1 className='text-2xl font-bold text-gray-100 mb-4'>
              Thank You for Your Submission!
            </h1>
            <p className='text-lg text-gray-200 mb-6'>
              Your application has been received. Please submit your application
              fee to complete the process.
            </p>
            <a
              href='https://find.silverdagger.xyz'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-purple-500 hover:bg-purple-600 text-gray-900 font-semibold px-6 py-3 rounded-md shadow-lg transition'
            >
              Submit Application Fee
            </a>
          </div>
        ) : (
          <>
            <h1 className='text-3xl font-bold text-purple-400 mb-6 text-center'>
              Sub Inquiry Form
            </h1>
            <form
              onSubmit={handleSubmit}
              className='bg-black/70 p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6'
            >
              {/* Form Fields */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-gray-300 font-medium mb-1'
                >
                  What is Your First Name?
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-400 focus:outline-none'
                  required
                />
              </div>
              {/* Pronouns */}
              <div>
                <label
                  htmlFor='pronouns'
                  className='block text-gray-300 font-medium mb-1'
                >
                  What Are Your Pronouns?
                </label>
                <input
                  type='text'
                  id='pronouns'
                  name='pronouns'
                  value={formData.pronouns}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-400 focus:outline-none'
                />
              </div>

              <div>
                <label
                  htmlFor='birthday'
                  className='block text-gray-300 font-medium mb-1'
                >
                  Date of Birth
                </label>
                <input
                  type='date'
                  id='birthday'
                  name='birthday'
                  value={formData.birthday}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-400 focus:outline-none'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='platformUsername'
                  className='block text-gray-300 font-medium mb-1'
                >
                  Preferred Communication Platform and Username
                </label>
                <input
                  type='text'
                  id='platformUsername'
                  name='platformUsername'
                  value={formData.platformUsername}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-400 focus:outline-none'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-gray-300 font-medium mb-1'
                >
                  What is your email?
                </label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-400 focus:outline-none'
                />
              </div>

              <div>
                <label
                  htmlFor='timezone'
                  className='block text-gray-300 font-medium mb-1'
                >
                  Current Timezone and Active Time of Day?
                </label>
                <input
                  type='text'
                  id='timezone'
                  name='timezone'
                  value={formData.timezone}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-400 focus:outline-none'
                />
              </div>
              <div>
                <label
                  htmlFor='discoverSource'
                  className='block text-gray-300 font-medium mb-1'
                >
                  Where Did You Hear About Silver Dagger?
                </label>
                <input
                  type='text'
                  id='discoverSource'
                  name='discoverSource'
                  value={formData.discoverSource}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-400 focus:outline-none'
                />
              </div>

              <div>
                <label
                  htmlFor='interestReason'
                  className='block text-gray-300 font-medium mb-1'
                >
                  What Specifically Caught Your Interest?
                </label>
                <textarea
                  id='interestReason'
                  name='interestReason'
                  value={formData.interestReason}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-400 focus:outline-none'
                  rows={3}
                />
              </div>

              <div>
                <label
                  htmlFor='occupation'
                  className='block text-gray-300 font-medium mb-1'
                >
                  Current Job / Occupation?
                </label>
                <input
                  type='text'
                  id='occupation'
                  name='occupation'
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-400 focus:outline-none'
                />
              </div>

              {/* Weekly Budget */}
              <div>
                <label
                  htmlFor='weeklybudget'
                  className='block text-gray-300 font-medium mb-1'
                >
                  Weekly Budget
                </label>
                <input
                  type='number'
                  id='weeklybudget'
                  name='weeklybudget'
                  value={formData.weeklybudget}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-400 focus:outline-none'
                />
              </div>

              <div>
                <label
                  htmlFor='hobbies'
                  className='block text-gray-300 font-medium mb-1'
                >
                  What Are Your Hobbies?
                </label>
                <textarea
                  id='hobbies'
                  name='hobbies'
                  value={formData.hobbies}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-400 focus:outline-none'
                  rows={3}
                />
              </div>

              <div>
                <label
                  htmlFor='dynamicStrengths'
                  className='block text-gray-300 font-medium mb-1'
                >
                  What is your preferred D/s dynamic?
                </label>
                <textarea
                  id='dynamicStrengths'
                  name='dynamicStrengths'
                  value={formData.dynamicStrengths}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-400 focus:outline-none'
                  rows={5}
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-gray-300 font-medium mb-1'
                >
                  What are your kinks and limits?
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-400 focus:outline-none'
                  rows={4}
                  required
                />
              </div>

              <div className='md:col-span-2'>
                <p className='text-gray-300 font-medium mb-2'>
                  I understand that I must submit an application fee of $44 upon
                  submission of this form.
                </p>
                <div className='flex items-center space-x-4'>
                  <label className='flex items-center text-gray-300'>
                    <input
                      type='radio'
                      name='feeAgreement'
                      value='Y'
                      onChange={handleFeeAgreementChange}
                      checked={feeAgreement === true}
                      className='form-radio text-purple-500'
                      required
                    />
                    <span className='ml-2'>Yes</span>
                  </label>
                </div>
              </div>

              <div className='md:col-span-2 flex justify-end'>
                <button
                  type='submit'
                  disabled={!isFormValid()}
                  className={`px-6 py-2 rounded-md shadow-lg transition ${
                    isFormValid()
                      ? 'bg-purple-600 hover:bg-purple-700 text-gray-900'
                      : 'bg-gray-500 cursor-not-allowed text-gray-400'
                  }`}
                >
                  Submit Application
                </button>
              </div>
            </form>
            {status && (
              <div className='mt-6 bg-gray-800 p-4 rounded-md shadow-lg'>
                <p className='text-lg font-semibold text-purple-400 mb-4'>
                  {status}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
