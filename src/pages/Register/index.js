import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/useStore";
import "./index.css";

const Register = () => {
  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [checked, setChecked] = useState(false);

  const validateForm = () => {
    const tempErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!formData.name.trim()) {
      tempErrors.name = "Field is required";
    }

    if (!formData.username.trim()) {
      tempErrors.username = "Field is required";
    }

    if (!emailPattern.test(formData.email)) {
      tempErrors.email = "Field is required";
    }

    if (!phonePattern.test(formData.mobile)) {
      tempErrors.mobile = "Field is required";
    }

    if (!checked) {
      tempErrors.checkbox = "Check this box if you want to proceed";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // const handleFormSubmission = (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     setUser(formData);
  //     navigate("/categories");
  //   }
  // };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      setUser(formData);
      navigate("/categories");
    }
  };

  return (
    <div className="register-container">

      {/* Left Section */}

      <div className="left-section">
        <div className="overlay">
          <h1>
            Discover new things on
            <br />
            Superapp
          </h1>
        </div>
      </div>

      {/* Right Section */}

      <div className="right-section">

        <h1 className="logo">Super app</h1>
        <p className="subtitle">Create your new account</p>

        <form onSubmit={handleFormSubmission}>

          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="text"
            placeholder="UserName"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          {errors.username && <p className="error">{errors.username}</p>}

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="text"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}

          <div className="checkbox">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span>
              Share my registration data with Superapp
            </span>
          </div>

          <p className="error">
            {errors.checkbox || ""}
          </p>

          <div className="button-container">
            <button type="submit" >
              SIGN UP
            </button>
          </div>

          <p className="terms">
            By clicking on Sign up, you agree to Superapp
            <span> Terms and Conditions of Use</span>
          </p>

          <p className="privacy">
            To learn more about how Superapp collects, uses, shares and protects your personal
            data please head Superapp <span>Privacy Policy</span>
          </p>

        </form>

      </div>
    </div>
  );
};

export default Register;

