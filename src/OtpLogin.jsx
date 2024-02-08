import { useRef, useState, useEffect } from "react";

const OtpLogin = ({ submitOtp }) => {
  const [otp, setotp] = useState(new Array(4).fill(""));
  const [success , setsuccess] = useState(false);
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleChange = (e, i) => {
    console.log(i);
    const value = e.target.value;
    if (isNaN(value)) return;

    // only store one value in input field
    const newOtp = [...otp];
    newOtp[i] = value.substring(value.length - 1);
    console.log(newOtp);
    setotp(newOtp);

    //move focus to next input field
    if (i < otp.length && value !== "") {
      inputRef.current[i + 1].focus();
    }
  };

  const handleKey = (e, i) => {
    if (e.key == "Backspace" && i > 0 && inputRef.current[i - 1] && !otp[i]) {
      inputRef.current[i - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = otp.join("");
    if (res.length === 4) {
      submitOtp(res);
      setsuccess(true)
    }
  };
  return (
    <>
      <div className="flex flex-row gap-3 mt-4 p-2">
        { !success ?
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(input) => (inputRef.current[index] = input)}
              value={value}
              type="text"
              className="border-2 w-14 h-14 p-2"
              onChange={(e) => {
                handleChange(e, index);
              }}
              onKeyDown={(e) => {
                handleKey(e, index);
              }}
            ></input>
          ))}
          <button
            type="submit"
            className="bg-red-400 text-white p-2 rounded-lg"
          >
            submit
          </button>
        </form> : <div className="text-2xl text-green-600 font-sans">you login successfully</div>
}
      </div>
    </>
  );
};

export default OtpLogin;
