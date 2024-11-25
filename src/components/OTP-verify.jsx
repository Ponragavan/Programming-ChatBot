import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
import Spinner from "./Spinner";

const OtpValidation = (props) => {
  const [email, setEmail] = useState("");
  const [otpPage, setOtpPage] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [receivedOtp, setReceivedOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const OTPgeneration = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setLoading(true);    
    // Send OTP to the email
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/mail`, { otp: otp, mail: email })
      .then((res) => {
        alert("OTP sent successfully");
        setLoading(false);
        setOtpPage(true);
      })
      .catch((err) => {
        alert("Failed to send OTP");
        setLoading(false);
      });
  };

  const verifyOtp = (otp) => {
    if (otp === receivedOtp) {
      props.handleVerification();
    } else {
      alert("Invalid OTP");
      setReceivedOtp("");
    }
  };

  return (
    <>
      <div className="absolute top-1/3 left-8 max-md:left-4  w-11/12">
        {!otpPage ? (
          <>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to send OTP"
              className="left-0 h-12 pl-5 pr-28 max-[450px]:pr-24 text-lg outline-none bg-white w-full border border-slate-500 rounded-lg focus:border-blue-500 transition duration-200"
            />
            <Button
              disabled={!email || loading}
              onClick={() => OTPgeneration()}
              className="absolute top-0 right-0 min-w-20 z-10 h-12 disabled:bg-slate-500"
            >
              {loading ? <Spinner /> : 'Send'}
            </Button>
          </>
        ) : (
          <>
            <input
              value={receivedOtp}
              type="text"
              onChange={(e) => setReceivedOtp(e.target.value)}
              placeholder="Enter OTP"
              className="left-0 h-12 pl-5 pr-28 text-lg outline-none bg-white w-full border border-slate-500 rounded-lg focus:border-blue-500 transition duration-200"
            />
            <Button
              disabled={!receivedOtp}
              onClick={() => verifyOtp(generatedOtp)}
              className="absolute top-0 right-0 z-10 h-12 disabled:bg-slate-500"
            >
              Verify OTP
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default OtpValidation;
