import { Button, Form, FormLabel } from "react-bootstrap";
import Input from "../../components/input";
import { useForm } from "react-hook-form";
import { signInFormValidation } from "../../utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { routes } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import styles from "./index.module.css";

const LoginView = () => {
  const router = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(signInFormValidation),
  });

  const onSubmit = (data) => {
    console.log(data);

    // In prod here will be a call to the backend for login
    localStorage.setItem("token", data?.email);
    router(routes.home);
  };

  return (
    <>
      <Link to={routes.home} className="d-block w-100 text-center mb-5">
        <img className={styles.logo} src={Logo} alt="logo" />
      </Link>
      <h2 className="text-center mb-5">Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Enter your email"
          name="email"
          title="Email"
          register={register}
          error={errors?.email ? errors?.email?.message : ""}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          name="password"
          title="Password"
          register={register}
          error={errors?.password ? errors?.password?.message : ""}
        />
        <Button className="w-100 mt-4" variant="light" type="submit">
          Submit
        </Button>
        <FormLabel className="mt-3">
          Dont have an account?{" "}
          <Link className="font-bold" to={routes.signup}>
            Signup
          </Link>
        </FormLabel>
      </Form>
    </>
  );
};

export default LoginView;
