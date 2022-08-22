import Input from "components/Input";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { register } from "firebase.js";
import { Formik, Form } from "formik";
import { imageLinks } from "images/imageLinks";
import Button from "components/Button";
import Separator from "components/Separator";
import { RegisterSchema } from "validation";
import { Helmet } from "react-helmet";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values, actions) => {
    const response = await register(values);
    console.log(values);
    if (response) {
      navigate(location.state?.return_URL || "/", {
        replace: true,
      });
    }
  };

  return (
    <div className="w-[350px] grid gap-y-3 mt-8 mb-8">

      <Helmet>
        <title>Register &#183; Instagram </title>
      </Helmet>
      <div className="bg-white border px-[40px] pt-10 pb-6">
        <a href="#" className="flex justify-center mb-4">
          <img className="h-[51px]" src={imageLinks.instagram_logo} />
        </a>

        <p className="text-[17px] font-semibold text-[#8e8e8e] text-center mb-6">
          Sign up to see photos and videos from your friends.
        </p>

        <Button>
          <AiFillFacebook size={20} />
          Log in with Facebook
        </Button>
        <Separator />
        <Formik
          validationSchema={RegisterSchema}
          initialValues={{
            email: "",
            full_name: "",
            username: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, isValid, dirty }) => (
            <Form className="grid gap-y-1.5">
              <Input name="email" label="Mobile Number or Email" />
              <Input name="full_name" label="Full Name" />
              <Input name="username" label="Username" />
              <Input type="password" name="password" label="Password" />

              <p className="text-xs text-center py-2 text-[#8e8e8e]">
              People who use our service may have uploaded your contact information to Instagram. <a href="#" className="font-semibold">Learn More</a>
              <br /><br />
              By signing up, you agree to our <a href="#" className="font-semibold">Terms , Privacy Policy and Cookies Policy .</a>
              </p>
              <Button
                type="submit"
                disabled={!isValid || !dirty || isSubmitting}
              >
                 Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="bg-white border p-4 text-sm text-center">
        Have an account?{" "}
        <Link to="/auth/login" className="text-brand font-semibold">
          Log in
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
  );
}
