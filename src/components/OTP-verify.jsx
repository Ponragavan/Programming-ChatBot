import React, { useState } from "react";
import Button from "./Button";

const OtpValidation = (props) => {
  const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState();
  const [otpPage, setOtpPage] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [receivedOtp, setReceivedOtp] = useState("");

  const OTPgeneration = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    // const config = {
    //   Username: "mponragavan@gmail.com",
    //   Password: "E2798A8261661D4E1B8321CCCB34C9B81E84",
    //   Server: "smtp.elasticemail.com",
    //   Port: 2525,
    //   // SecureToken: "46da29ec-c16e-46f7-ab77-fd97ec5ba3ea",
    //   To: email,
    //   From: "mponragavan@gmail.com",
    //   Subject:
    //     "This email is from ChatBot for your java question verification.",
    //   Body: `And your OTP is ${otp}`,
    // };
    // Email.send(config)
    //   .then((message) => {
    //     alert(`OTP has been sent to your email.${email}`);
    //   })
    //   .catch((error) => {
    //     console.error("Error sending OTP:", error);
    //   });
      alert(`OTP has been sent to your email. ${otp}`);
      setOtpPage(true);
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
              disabled={!email}
              onClick={() => OTPgeneration()}
              className="absolute right-0 z-10 h-12 disabled:bg-slate-500"
            >
              Send
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
              className="absolute right-0 z-10 h-12 disabled:bg-slate-500"
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
