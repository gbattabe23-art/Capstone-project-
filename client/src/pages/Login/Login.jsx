import { Hand, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import aiHand from "../../assets/images/pexels-tara-winstead-8386437.jpg";

function Login() {
  const [role, setRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Section */}
      {/* Left Section */}

<div className="hidden lg:block relative h-screen">

  {/* Background Image */}
  <img
    src={aiHand}
    alt="SignSense AI"
    className="w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-blue-900/40 to-black/70"></div>

  {/* Text */}
  <div className="absolute bottom-16 left-12 right-12 text-white">

    <div className="flex items-center gap-3 mb-6">

      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
        <Hand size={28}/>
      </div>

      <h1 className="text-4xl font-bold">
        SignSense <span className="text-cyan-300">AI</span>
      </h1>

    </div>

    <h2 className="text-5xl font-bold leading-tight">
      AI Powered
      <br />
      Indian Sign Language
      <br />
      Recognition
    </h2>

    <p className="mt-6 text-lg text-blue-100 max-w-lg">
      Transform communication through our intelligent wearable glove that
      translates Indian Sign Language into readable text in real time.
    </p>

  </div>

</div>
      {/* Right Section */}
      <div className="flex items-center justify-center bg-slate-50 px-6 py-10">
        <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl p-10">

          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
              <Hand size={22} />
            </div>

            <h2 className="text-2xl font-bold">
              SignSense <span className="text-blue-600">AI</span>
            </h2>
          </div>

          {/* Heading */}
          <h3 className="text-3xl font-bold text-center">
            Sign In
          </h3>

          <p className="text-center text-slate-500 mt-2">
            Welcome back! Please login.
          </p>

          {/* Role Toggle */}
          <div className="mt-8 flex rounded-xl bg-slate-100 p-1">
            <button
              onClick={() => setRole("user")}
              className={`flex-1 rounded-lg py-2 font-semibold transition ${
                role === "user"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-600"
              }`}
            >
              User
            </button>

            <button
              onClick={() => setRole("admin")}
              className={`flex-1 rounded-lg py-2 font-semibold transition ${
                role === "admin"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-600"
              }`}
            >
              Admin
            </button>
          </div>

          {/* Email */}
          <div className="mt-6">
            <label className="block mb-2 font-medium text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="block mb-2 font-medium text-slate-700">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none focus:border-blue-600"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="mt-5 flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" />
              Remember me
            </label>

            <button className="text-blue-600 hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button className="mt-7 w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition">
            Sign In
          </button>

          {/* Register */}


<p className="mt-6 text-center text-slate-500">
  Don't have an account?{" "}
  <Link
    to="/register"
    className="font-semibold text-blue-600 hover:underline"
  >
    Create Account
  </Link>
</p>
        </div>
      </div>
    </div>
  );
}

export default Login;