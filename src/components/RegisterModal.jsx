import React, { useState, useEffect } from 'react';
import { X, Eye, EyeOff, ArrowRight, User, Mail, Lock, Building2 } from 'lucide-react';

const RegisterModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: '',
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center font-sans">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-[95%] max-w-md bg-white rounded-[2rem] shadow-2xl animate-modalSlideUp max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1A1A1A] transition"
        >
          <X size={18} />
        </button>

        {/* Top Accent Bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#8C7A6B] via-[#A89585] to-[#8C7A6B] rounded-t-[2rem]" />

        <div className="px-6 sm:px-8 pt-8 pb-8">
          {/* Header */}
          <div className="mb-7 text-center">
            <div className="font-bold text-lg tracking-wide text-[#1A1A1A] mb-4">
              WORKSPC <span className="text-gray-300 font-light">|</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">
              Create Account
            </h2>
            <p className="text-gray-500 font-medium text-sm">
              Already have an account?{' '}
              <button className="text-[#8C7A6B] font-bold hover:underline">
                Sign in
              </button>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F9F8F4] border border-transparent focus:border-[#8C7A6B] focus:bg-white focus:ring-2 focus:ring-[#8C7A6B]/20 outline-none transition-all text-sm font-medium text-[#1A1A1A] placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F9F8F4] border border-transparent focus:border-[#8C7A6B] focus:bg-white focus:ring-2 focus:ring-[#8C7A6B]/20 outline-none transition-all text-sm font-medium text-[#1A1A1A] placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                Company <span className="text-gray-300 normal-case">(optional)</span>
              </label>
              <div className="relative">
                <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F9F8F4] border border-transparent focus:border-[#8C7A6B] focus:bg-white focus:ring-2 focus:ring-[#8C7A6B]/20 outline-none transition-all text-sm font-medium text-[#1A1A1A] placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  className="w-full pl-10 pr-11 py-3 rounded-xl bg-[#F9F8F4] border border-transparent focus:border-[#8C7A6B] focus:bg-white focus:ring-2 focus:ring-[#8C7A6B]/20 outline-none transition-all text-sm font-medium text-[#1A1A1A] placeholder:text-gray-400"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#8C7A6B] transition"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  className="w-full pl-10 pr-11 py-3 rounded-xl bg-[#F9F8F4] border border-transparent focus:border-[#8C7A6B] focus:bg-white focus:ring-2 focus:ring-[#8C7A6B]/20 outline-none transition-all text-sm font-medium text-[#1A1A1A] placeholder:text-gray-400"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#8C7A6B] transition"
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                id="modal-terms"
                required
                className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#8C7A6B] focus:ring-[#8C7A6B] accent-[#8C7A6B]"
              />
              <label htmlFor="modal-terms" className="text-[11px] text-gray-500 font-medium leading-relaxed">
                I agree to the{' '}
                <a href="#" className="text-[#8C7A6B] font-bold hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-[#8C7A6B] font-bold hover:underline">Privacy Policy</a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#1A1A1A] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#8C7A6B] transition-colors duration-300 flex items-center justify-center gap-2.5 group shadow-lg mt-1"
            >
              Create Account
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Sign-ups */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 hover:border-[#8C7A6B]/40 hover:bg-[#F9F8F4] transition-all text-sm font-semibold text-[#1A1A1A]">
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 hover:border-[#8C7A6B]/40 hover:bg-[#F9F8F4] transition-all text-sm font-semibold text-[#1A1A1A]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
