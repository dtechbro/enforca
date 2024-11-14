'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import AuthImage from '../../assets/auth-carousel-image-2.png';

const AuthPage = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (isLogin && email === 'user@example.com' && password === 'password') {
      router.push('./home');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section (Carousel/Slider) */}
      <div className="lg:w-1/2 w-full bg-blue-900 flex items-center justify-center relative p-4">
        <div className="bg-opacity-50 p-4 text-white rounded-lg max-w-md text-center">
          <Image
            src={AuthImage}
            alt="Background Image"
            className="object-cover rounded-md opacity-75 w-full"
          />
          <blockquote className="text-lg italic mt-4">
            “You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.”
          </blockquote>
          <p className="mt-2">- Maya Angelou</p>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {isLogin ? 'Log in' : 'Sign up'}
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            {isLogin ? (
              <>
                Don’t have an account?{' '}
                <span
                  onClick={() => setIsLogin(false)}
                  className="text-blue-600 cursor-pointer"
                >
                  Sign up.
                </span>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <span
                  onClick={() => setIsLogin(true)}
                  className="text-blue-600 cursor-pointer"
                >
                  Log in.
                </span>
              </>
            )}
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Enter your last name"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Email*</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password*</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Enter your password"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password*
                </label>
                <input
                  type="password"
                  className="input-field"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md mt-4">
              {isLogin ? 'Log in' : 'Sign up'}
            </button>

            <p className="text-sm text-center mt-4 text-gray-500 cursor-pointer">
              Forgot password?
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
