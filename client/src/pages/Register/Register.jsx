import { Hand } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import aiHand from "../../assets/images/pexels-tara-winstead-8386437.jpg";

function Register() {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    job: "",
    age: "",
    gender: "",
    state: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormComplete =
    Object.values(formData).every((value) => value !== "");

  const handleRegister = () => {
  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match!");
    return;
  }

  setError("");

  setShowPopup(true);

  setTimeout(() => {
    navigate("/login");
  }, 2000);
};

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col justify-center px-16 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
            <Hand size={28} />
          </div>

          <h1 className="text-3xl font-bold">
            SignSense <span className="text-cyan-200">AI</span>
          </h1>
        </div>

        <h2 className="text-5xl font-bold leading-tight">
          Join SignSense AI
        </h2>

        <p className="mt-6 text-lg text-blue-100 max-w-md">
          Create your account and experience AI-powered Indian Sign Language
          recognition with our Smart Glove platform.
        </p>

        <div className="mt-12 space-y-4">
          <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
            <h3 className="font-semibold">🤖 AI Recognition</h3>
            <p className="text-blue-100 text-sm mt-1">
              Translate ISL gestures into readable text instantly.
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
            <h3 className="font-semibold">📊 Personal Dashboard</h3>
            <p className="text-blue-100 text-sm mt-1">
              View your recognition history and learning progress.
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
            <h3 className="font-semibold">📚 Learn ISL</h3>
            <p className="text-blue-100 text-sm mt-1">
              Practice Indian Sign Language with guided lessons.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center bg-slate-50 px-6 py-10">
       <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl p-10">

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
              <Hand size={22} />
            </div>

            <h2 className="text-2xl font-bold">
              SignSense <span className="text-blue-600">AI</span>
            </h2>
          </div>

          <h3 className="text-3xl font-bold text-center">
            Create Account
          </h3>

         <p className="text-center text-slate-500 mt-2">
  Fill in your details to get started.
</p>

{/* Personal Information */}

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">

  {/* First Name */}
  <div>
    <label className="block mb-2 font-medium text-slate-700">
      First Name
    </label>

    <input
  type="text"
  name="firstName"
  value={formData.firstName}
  onChange={handleChange}
  placeholder="Enter first name"
  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
/>
  </div>

  {/* Last Name */}
  <div>
    <label className="block mb-2 font-medium text-slate-700">
      Last Name
    </label>

   <input
  type="text"
  name="lastName"
  value={formData.lastName}
  onChange={handleChange}
  placeholder="Enter last name"
  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
/>
  </div>

</div>

{/* Username */}

<div className="mt-5">
  <label className="block mb-2 font-medium text-slate-700">
    Username
  </label>

 <input
  type="text"
  name="username"
  value={formData.username}
  onChange={handleChange}
  placeholder="Enter username"
  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
/>
</div>

{/* Email */}

<div className="mt-5">
  <label className="block mb-2 font-medium text-slate-700">
    Email Address
  </label>

 <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter email address"
  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
/>
</div>
{/* Job Description */}

<div className="mt-5">
  <label className="block mb-2 font-medium text-slate-700">
    Job Description
  </label>

  <input
  type="text"
  name="job"
  value={formData.job}
  onChange={handleChange}
  placeholder="Student, Teacher, Software Engineer..."
  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
/>
</div>

{/* Age & Gender */}

<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">

  <div>
    <label className="block mb-2 font-medium text-slate-700">
      Age
    </label>
<input
  type="number"
  name="age"
  value={formData.age}
  onChange={handleChange}
  placeholder="Enter age"
  min="1"
  max="120"
  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
/>
  </div>

  <div>
    <label className="block mb-2 font-medium text-slate-700">
      Gender
    </label>

    <select
  name="gender"
  value={formData.gender}
  onChange={handleChange}
  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
>
  <option value="">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Prefer not to say">Prefer not to say</option>
</select>
  </div>

</div>

{/* State */}

<div className="mt-5">
  <label className="block mb-2 font-medium text-slate-700">
    State
  </label>

  <select
  name="state"
  value={formData.state}
  onChange={handleChange}
  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
>
  <option value="">Select State</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
  <option value="Delhi">Delhi</option>
  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
  <option value="Ladakh">Ladakh</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Puducherry">Puducherry</option>
</select>
</div>

{/* Password */}

<div className="mt-5">
  <label className="block mb-2 font-medium text-slate-700">
    Password
  </label>

 <input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Create a password"
  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
/>
</div>

{/* Confirm Password */}

<div className="mt-5">
  <label className="block mb-2 font-medium text-slate-700">
    Confirm Password
  </label>

 <input
  type="password"
  name="confirmPassword"
  value={formData.confirmPassword}
  onChange={handleChange}
  placeholder="Confirm your password"
  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
/>
</div>

{/* Terms */}

<div className="mt-6 flex items-start gap-3">
  <input
    type="checkbox"
    className="mt-1 h-4 w-4 accent-blue-600"
  />

  <p className="text-sm text-slate-600">
    I agree to the{" "}
    <span className="text-blue-600 font-medium">
      Terms of Service
    </span>{" "}
    and{" "}
    <span className="text-blue-600 font-medium">
      Privacy Policy
    </span>.
  </p>
</div>

{/* Error Message */}

{error && (
  <p className="mt-4 text-center text-red-600 font-medium">
    {error}
  </p>
)}

{/* Create Account Button */}

<button
  onClick={handleRegister}
  disabled={!isFormComplete}
  className={`mt-8 w-full rounded-xl py-3 text-lg font-semibold text-white transition ${
    isFormComplete
      ? "bg-blue-600 hover:bg-blue-700"
      : "bg-gray-400 cursor-not-allowed"
  }`}
>
  Create Account
</button>

{/* Login Link */}

<p className="mt-6 text-center text-slate-500">
  Already have an account?{" "}
  <Link
    to="/login"
    className="font-semibold text-blue-600 hover:underline"
  >
    Sign In
  </Link>
</p>

        </div>
      </div>
      {showPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-96 text-center animate-bounce">
      <div className="text-5xl mb-4">✅</div>

      <h2 className="text-2xl font-bold text-green-600">
        Account Created!
      </h2>

      <p className="text-slate-600 mt-2">
        Your account has been created successfully.
      </p>

      <p className="text-sm text-slate-400 mt-4">
        Redirecting to Login...
      </p>
    </div>
  </div>
)}
    </div>
  );

}
export default Register;