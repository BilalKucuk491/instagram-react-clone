import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Input from "components/Input";
import { AiFillFacebook } from "react-icons/ai";
function App() {
  const ref = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enabled = username && password;
  console.log(enabled);
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
        current++;
      }
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-2  justify-center">
      <div className="hidden md:block w-[450px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left-46px_0]">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[42px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
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
      <div className="w-[350px] grid gap-y-3">
        <div className="bg-white border px-[40px] pt-10 pb-6">
          <a href="#" className="flex justify-center mb-8 ">
            <img
              className="h-[51px]"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            />
          </a>

          <form className="grid gap-y-1.5">
            <Input
              type="text"
              label="Phone number, username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              disabled={!enabled}
              className="h-[30px] mt-1 rounded bg-brand text-white text-sm font-medium disabled:opacity-50"
            >
              Log In
            </button>
            <div className="flex items-center my-2.5 mb-3.5">
              <div className="h-px bg-gray-300 flex-1" />
              <span className="px-4 text-[13px] font-semibold text-gray-500">
                OR
              </span>
              <div className="h-px bg-gray-300 flex-1" />
            </div>
            <a
              href="#"
              className="flex mb-2.5 justify-center items-center gap-x-2 text-sm font-semibold text-facebook"
            >
              <AiFillFacebook size={20} />
              Log in with Facebook
            </a>
            <a
              href="#"
              className="text-xs flex items-center justify-center text-link"
            >
              Forgot password
            </a>
          </form>
        </div>

        <div className="bg-white border p-4 text-sm text-center">
          Don't have a account?{" "}
          <a href="#" className="text-brand font-semibold">
            Sign up
          </a>
        </div>
        <div></div>
        <div className="p-4 text-sm text-center">
          <p>Get the app.</p>
        </div>
        <div className="flex justify-center">
          <a
            href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
            target="_blank"
          >
            <img
              className="w-[150px] h-[40px] pl-2"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.instagram.android"
            target="_blank"
          >
            <img
              className="w-[150px] h-[40px] pl-2 "
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
