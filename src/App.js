import { useEffect, useRef, useState } from "react";
import Input from "./components/Input";
import {AiFillFacebook} from "react-icons/ai";

function App() {
  const ref = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enable = username && password; // username ve password boş değilse enable true olsun (username ve password girilmişse)

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;

    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");
      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center">
      <div className="hidden md:block w-[380.32px] h-[581.15px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src=" https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-[350px] bg-white border px-[40px] pt-10 pb-2">
        <a href="#" className="flex justify-center mb-8">
          <img
            className="h-[51px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt=""
          />
        </a>

        <form className="grid gap-y-1.5">
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} label="Phone number, username or email"/>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password"/>
          <button type="submit" disabled={!enable} // enable değilse disabled olsun 
          className="h-[30px] rounded bg-brand font-semibold text-white text-sm disabled:opacity-50"  >
            {" "}
            Log In
          </button>
          <div className="flex items-center">
            <div className="h-px bg-gray-300 flex-1" />
            <span className="px-4 text-[13px] text-gray-500 font-semibold">
              OR
            </span>
            <div className="h-px bg-gray-300 flex-1" />
          </div>
          <a href="#" className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook">
            <AiFillFacebook size={20} />
            Log in with Facebook
          </a>
        </form>
      </div>
    </div>
  );
}

export default App;
