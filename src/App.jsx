import { useState } from "react";
import OtpLogin from "./OtpLogin";

function App() {
  const [number, setnumber] = useState("");
  const [isOtp, setisOtp] = useState(false);
 

  const handelSubmit = (e) => {
    e.preventDefault();

    const regex = /[^0-9]/g;
    if (regex.test(number)) {
      alert("Invalid number");
      return;
    }
    if(number.length === 10){
    setisOtp(true);
    }else{
      alert("please provide phone number")
    }
  };

  const handleNumber = (e) => {
    setnumber(e.target.value);
  };

  const submitOtp = (otp) => {
    console.log(otp)
  }
  return (
    <>
      {!isOtp ? (
        <div className="flex flex-col justify-center items-center mt-4 mb-2">
          <div className="text-2xl text-bold">
            enter your register mobile number
          </div>
          <form
            onSubmit={(e) => {
              handelSubmit(e , number);
            }}
            className="mt-4 flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="enter your number"
              value={number}
              minLength={10}
              maxLength={10}
              className="border-2 p-2 text-black"
              onChange={(e) => {
                handleNumber(e);
              }}
            ></input>
            <button type="submit" className="bg-blue-400 text-black  p-4 rounded-lg">submit</button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-4 mb-2">
          <p className="text-2xl text-bold">Enter your OTP</p>
          <OtpLogin submitOtp = {submitOtp}/>
        </div>
      )}
    </>
  );
}

export default App;
