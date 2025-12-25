import React, { useState } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState("signin"); 

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-800 dark:text-white w-[90%] sm:w-[400px] rounded-lg p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">
          {mode === "signin" && "Sign In"}
          {mode === "signup" && "Create Account"}
          {mode === "forgot" && "Forgot Password"}
        </h2>

        {mode === "signin" && (
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded dark:bg-slate-700"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded dark:bg-slate-700"
            />

            <div className="text-right text-sm">
              <span
                className="text-primary cursor-pointer"
                onClick={() => setMode("forgot")}
              >
                Forgot Password?
              </span>
            </div>

            <button className="w-full bg-primary text-white py-2 rounded">
              Sign In
            </button>

            <p className="text-sm text-center">
              Don’t have an account?
              <span
                className="text-primary cursor-pointer ml-1"
                onClick={() => setMode("signup")}
              >
                Sign Up
              </span>
            </p>
          </form>
        )}

        {mode === "signup" && (
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded dark:bg-slate-700"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded dark:bg-slate-700"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded dark:bg-slate-700"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-3 py-2 border rounded dark:bg-slate-700"
            />

            <button className="w-full bg-primary text-white py-2 rounded">
              Sign Up
            </button>

            <p className="text-sm text-center">
              Already have an account?
              <span
                className="text-primary cursor-pointer ml-1"
                onClick={() => setMode("signin")}
              >
                Sign In
              </span>
            </p>
          </form>
        )}

        {/* ================= FORGOT PASSWORD ================= */}
        {mode === "forgot" && (
          <form className="space-y-3">
            <p className="text-sm text-center text-gray-500">
              Enter your registered email to reset your password
            </p>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded dark:bg-slate-700"
            />

            <button className="w-full bg-primary text-white py-2 rounded">
              Send Reset Link
            </button>

            <p className="text-sm text-center">
              Remembered your password?
              <span
                className="text-primary cursor-pointer ml-1"
                onClick={() => setMode("signin")}
              >
                Sign In
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
