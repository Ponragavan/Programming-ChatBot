import React, { useState } from "react";
import OTPlogo from "../assets/OTP-logo.jpg";
import OtpValidation from "./OTP-verify";
import Button from "./Button";

const BackDrop = (props) => {
  const [otpVerification, setOtpVerification] = useState(false);

  const handleCancel = () => {
    props.handleVerification(false);
  };
  const handleVerify = () => {
    props.handleVerification(true)
  };
  return (
    <div className="fixed flex items-center justify-center top-0 left-0 w-full h-screen z-10 bg-black opacity-90">
      <div className="relative h-1/3 w-2/3 max-[450px]:w-full p-5 bg-white rounded-2xl">
        {!otpVerification ? (
          <div className="flex gap-4 text-lg max-md:text-base font-sans">
            <img src={OTPlogo} alt="logo" className="h-60 max-md:h-40 max-[450px]:h-20" />
            <div>
              <p>It seems like you will be trying to ask me a Java question.</p>
              <br />
              <p>
                You must use your email to verify the OTP for any Java-related
                queries.
              </p>
            </div>
          </div>
        ) : (
          <OtpValidation handleVerification={handleVerify} />
        )}
        <div className="absolute w-11/12 flex justify-end gap-8 bottom-5">
          <button
            onClick={handleCancel}
            className="h-10 w-auto px-5 transition duration-200 ease-in-out bg-slate-300 hover:bg-red-500 hover:text-white rounded-lg"
          >
            Cancel
          </button>
          {!otpVerification && (
            <Button onClick={() => setOtpVerification(true)}>
              Verify with OTP
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackDrop;
