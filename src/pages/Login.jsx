import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, AlertCircle } from 'lucide-react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await signIn(email, password);
      navigate('/admin');
    } catch (err) {
      setError(err.message || 'Failed to sign in. Please check your credentials.');
      console.error('Sign in error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Demo mode
  const handleDemoLogin = async () => {
    setError('');
    setIsLoading(true);
    try {
      // In demo mode, we'll just navigate to admin
      setTimeout(() => {
        navigate('/admin');
      }, 500);
    } catch (err) {
      setError('Demo mode error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-light tracking-wider mb-2">
            Admin Portal
          </h1>
          <div className="w-12 h-1 bg-gold-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Sign in to manage your collections and bookings
          </p>
        </div>

        {/* Form Card */}
        <div className="card-luxury p-8 md:p-10">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded flex items-start gap-3">
              <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold tracking-wide text-gray-700 mb-2 flex items-center gap-2">
                <Mail size={16} />
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@elegance.com"
                required
                className="w-full"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold tracking-wide text-gray-700 mb-2 flex items-center gap-2">
                <Lock size={16} />
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="luxury-button w-full disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Demo Button */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center mb-4">
              Demo mode available
            </p>
            <button
              onClick={handleDemoLogin}
              className="luxury-button-outline w-full"
            >
              Enter Demo Mode
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Back to <Link to="/" className="text-gold-600 hover:text-gold-700 font-semibold">
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
