import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Validation Schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  birthDate: Yup.date().required('Birth date is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  country: Yup.string().required('Country is required'),
  stateProvince: Yup.string(),
  city: Yup.string(),
});

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      birthDate: '',
      email: '',
      gender: '',
      country: '',
      stateProvince: '',
      city: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // Inline CSS styles
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '300px', // Adjust the width as necessary
    margin: '0 auto',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const buttonStyle = {
    padding: '10px',
    marginTop: '20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#0000ff', // Use the color you prefer for the button
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <form onSubmit={formik.handleSubmit} style={formStyle}>
      {/* Username field */}
      <label htmlFor="username" style={labelStyle}>Username*</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
        style={inputStyle}
      />

      {/* Password field */}
      <label htmlFor="password" style={labelStyle}>Password*</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        style={inputStyle}
      />

      {/* Confirm Password field */}
      <label htmlFor="confirmPassword" style={labelStyle}>Confirm Password*</label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        style={inputStyle}
      />

      {/* Birth Date field */}
      <label htmlFor="birthDate" style={labelStyle}>Birth Date*</label>
      <input
        id="birthDate"
        name="birthDate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.birthDate}
        style={inputStyle}
      />

      {/* Email field */}
      <label htmlFor="email" style={labelStyle}>Email*</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        style={inputStyle}
      />

      {/* Gender field */}
      <label htmlFor="gender" style={labelStyle}>Gender*</label>
      <select
        id="gender"
        name="gender"
        onChange={formik.handleChange}
        value={formik.values.gender}
        style={inputStyle}
      >
        <option value="">Select your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      {/* Country field */}
      <label htmlFor="country" style={labelStyle}>Country*</label>
      <input
        id="country"
        name="country"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.country}
        style={inputStyle}
      />

      {/* State/Province field */}
      <label htmlFor="stateProvince" style={labelStyle}>State/Province</label>
      <input
        id="stateProvince"
        name="stateProvince"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.stateProvince}
        style={inputStyle}
      />

      {/* City field */}
      <label htmlFor="city" style={labelStyle}>City</label>
      <input
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.city}
        style={inputStyle}
      />

      {/* Sign Up button */}
      <button type="submit" style={buttonStyle}>Sign Up</button>
    </form>
  );
};

export default MyForm;
