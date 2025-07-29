
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Eye, EyeOff } from 'lucide-react';

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('crypto');

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1C2125] mb-2">Create Password</h1>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Set Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Set Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                {/* Pay by Crypto */}
                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                  <RadioGroupItem value="crypto" id="crypto" />
                  <label htmlFor="crypto" className="flex items-center space-x-2 cursor-pointer flex-1">
                    <span className="text-sm font-medium text-gray-700">Pay by Crypto</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-600 text-sm font-bold">⬥</span>
                      <span className="text-yellow-600 text-sm font-bold">BINANCE</span>
                      <span className="text-sm font-medium">PAY</span>
                    </div>
                  </label>
                </div>

                {/* Pay by Credit Card */}
                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                  <RadioGroupItem value="credit" id="credit" />
                  <label htmlFor="credit" className="flex items-center space-x-2 cursor-pointer flex-1">
                    <span className="text-sm font-medium text-gray-700">Pay by Credit Card</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">🔒</span>
                      <div className="flex space-x-1">
                        <div className="w-8 h-5 bg-red-500 rounded-sm flex items-center justify-center">
                          <span className="text-white text-xs font-bold">MC</span>
                        </div>
                        <div className="w-8 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                          <span className="text-white text-xs font-bold">V</span>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </RadioGroup>
            </div>

            {/* Proceed Button */}
            <Button 
              type="submit"
              className="w-full bg-[#3AA6B9] hover:bg-[#3293a3] text-white py-3 rounded-md text-base font-medium"
            >
              Proceed
            </Button>
          </form>

          {/* Footer links */}
          <div className="mt-12 flex justify-center space-x-6 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-gray-700">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-gray-700">Terms & Conditions</Link>
            <span>|</span>
            <Link to="/refund" className="hover:text-gray-700">Refund Policy</Link>
          </div>
        </div>
      </div>

      {/* Right side - Branding */}
      <div className="flex-1 bg-[#3AA6B9] flex flex-col items-center justify-center relative">
        {/* FOCUS text */}
        <div className="text-white text-8xl font-bold tracking-wider">
          FOCUS
        </div>
        
        {/* VORZA logo at bottom */}
        <div className="absolute bottom-8 right-8">
          <img 
            src="/lovable-uploads/362c3864-a645-46bf-a2e7-eed81df9f0bd.png" 
            alt="Vorza Logo" 
            className="h-12 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Password;
