import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ReCAPTCHA from "react-google-recaptcha";

const Signup = (props) => {
  const siteKey = '6LfmXSQqAAAAAIBP80qZsnL1fwmP75g9UzCkdbk7';
  const secretKey = '6LfmXSQqAAAAABZafeD_gNShpqhjrL6UKJtCmR5S';
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const captchaRef = useRef();

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({ criteriaMode: "all" });

  // const [credentials, setCredentials] = useState({
  //   name: "",
  //   username: "",
  //   email: "",
  //   password: "",
  //   cpassword: "",
  // });

  let navigate = useNavigate();
  const cPassword = watch("password");

  const onSubmit = async (data) => {
    // const { name, username, email, password, cpassword } = credentials;
    const { name, username, email, password, cpassword } = data;

    captchaRef.current.reset();

    // e.preventDefault();
    const response = await fetch("https://inotebookreactapp-ffzg.onrender.com/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        email,
        password,
        cpassword,
        recaptchaValue,
        secretKey,
      }),
    });
    const json = await response.json();
    console.log(json);
    console.log(data);

    if (json.success) {
      // save auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("User signed up & logged in successfully", "success");
    } else {
      props.showAlert(json.error, "danger");
    }
  };

  // const onChange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });
  // };

  const changeCaptcha = (val) => {
    setRecaptchaValue(val);
  };

  return (
    <div className="container mb-3">
      <div className="my-3">
        <h2>Create an account to make your notes!</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            {...register("name", {
              required: "Name is required.",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "This input is character only.",
              },
            })}
            aria-invalid={errors.name ? "true" : "false"}
            className="form-control"
            placeholder="Enter your full name"
            // onChange={onChange}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p
                      key={type}
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginBottom: "0px",
                      }}
                    >
                      {message}
                    </p>
                  ))
                : null;
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username <span style={{ color: "red" }}>*</span>
          </label>
          <input
            {...register("username", {
              required: "Username is required.",
              pattern: {
                value: /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/,
                message:
                  "Username must be 3-16 characters, starting with a letter, and can contain letters, numbers, and underscores.",
              },
            })}
            aria-invalid={errors.username ? "true" : "false"}
            className="form-control"
            placeholder="Enter your user name"
            // onChange={onChange}
          />
          <ErrorMessage
            errors={errors}
            name="username"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p
                      key={type}
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginBottom: "0px",
                      }}
                    >
                      {message}
                    </p>
                  ))
                : null;
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email id <span style={{ color: "red" }}>*</span>
          </label>
          <input
            {...register("email", {
              required: "This input is required.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address.",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            className="form-control"
            placeholder="Enter your email id"
            // onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p
                      key={type}
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginBottom: "0px",
                      }}
                    >
                      {message}
                    </p>
                  ))
                : null;
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password <span style={{ color: "red" }}>*</span>
          </label>
          <input
            {...register("password", {
              required: "Password is required.",
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/,
                message:
                  "Password must contain 1 uppercase letter, 1 lowercase letter, 1 special character, 1 number, and be 7 characters long.",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            type="password"
            className="form-control"
            placeholder="Enter your password"
            // onChange={onChange}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p
                      key={type}
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginBottom: "0px",
                      }}
                    >
                      {message}
                    </p>
                  ))
                : null;
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password <span style={{ color: "red" }}>*</span>
          </label>
          <input
            {...register("cpassword", {
              required: "Please confirm your password.",
              validate: (value) =>
                value === cPassword || "Passwords do not match.",
            })}
            type="password"
            className="form-control"
            placeholder="Enter your confirm password"
            // onChange={onChange}
          />
          <ErrorMessage
            errors={errors}
            name="cpassword"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p
                      key={type}
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginBottom: "0px",
                      }}
                    >
                      {message}
                    </p>
                  ))
                : null;
            }}
          />
        </div>
        <div className="mb-3">
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={changeCaptcha}
            ref={captchaRef}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
