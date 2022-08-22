import { useEffect, useState } from "react";
import { useRef } from "react";
import Input from "components/Input";
import { AiFillFacebook } from "react-icons/ai";
import { Navigate, useLocation, Link } from "react-router-dom";
import { login } from "firebase.js";
import { Formik, Form } from "formik";
import { LoginSchema } from "validation";
import { imageLinks } from "images/imageLinks";
import Button from "components/Button";
import Separator from "components/Separator";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

export default function Login() {
  
  const user = useSelector(state=>state.auth.user)
  const location = useLocation();
  const ref = useRef();

  
  

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      images[(current > 0 ? current : total) - 1].classList.add("opacity-0");
      images[current].classList.remove("opacity-0");
      current = current === total - 1 ? 0 : current + 1;
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  if (user) {
    return <Navigate to={location.state?.return_URL || "/"} replace={true} />
  }


  const handleSubmit = async (values, actions) => {
    await login(values.username, values.password);
  };

  const images = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png",
  ];

  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-2  justify-center">
      
      <Helmet>
        <title>Login 	&#183; Instagram</title>
      </Helmet>
      <div className="hidden md:block w-[450px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left-46px_0]">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[42px]"
          ref={ref}
        >
          {images.map((image, key) => (
            <img
              key={key}
              className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
              src={image}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="w-[350px] grid gap-y-3">
        <div className="bg-white border px-[40px] pt-10 pb-6">
          <div className="flex justify-center mb-8 pointer-events-none ">
            <img className="h-[51px]" src={imageLinks.instagram_logo} />
          </div>
          <Formik
            validationSchema={LoginSchema}
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values, isValid, dirty }) => (
              <Form className="grid gap-y-1.5">
                <Input
                  name="username"
                  label="Phone number, username or email"
                />
                <Input type="password" name="password" label="Password" />

                <Button
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                >
                  Log In
                </Button>

                <Separator />

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
              </Form>
            )}
          </Formik>
        </div>

        <div className="bg-white border p-4 text-sm text-center">
          Don't have a account?{" "}
          <Link to="/auth/register" className="text-brand font-semibold">
            Sign up
          </Link>
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
              src={imageLinks.instagram_apple_logo}
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.instagram.android"
            target="_blank"
          >
            <img
              className="w-[150px] h-[40px] pl-2 "
              src={imageLinks.instagram_playstore_logo}
            />
          </a>
        </div>


      </div>
    </div>
            

  );
}
