import React, { useState } from "react";
import "./DropDownSignUpForm.css";

type SignUpProps = {
  onSubmit: (FormData: {
    name: string;
    emailOrNumber: string;
    birthdate: string;
    password: string;
    confirmPassword: string;
    gender: string;
  }) => void;
  onClose: () => void;
};

const DropDownSignUpForm: React.FC<SignUpProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    emailOrNumber: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <div className="dropdown">
      <button className="close-button" type="button" onClick={onClose}>
        Close
      </button>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h3 style={{ fontSize: 30, lineHeight: 3 }} className="">
          Create Your Account
        </h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="emailOrNumber"
          placeholder="Email or Number"
          value={formData.emailOrNumber}
          onChange={handleChange}
          required
        />
        <div className="gender-selection">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              required
            />
            Female
          </label>
        </div>

        <input
          type="date"
          name="birthdate"
          placeholder="Birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DropDownSignUpForm;
