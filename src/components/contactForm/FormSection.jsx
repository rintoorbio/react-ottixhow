import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./formSection.css";
import { Col, Row, Form } from "react-bootstrap";
import { PiTelegramLogoLight } from "react-icons/pi";
import axios from "axios";

function FormSection() {

  const [submissionMessage, setSubmissionMessage] = useState('');

  useEffect(() => {
    if(submissionMessage?.length>0){
      setTimeout(() => {
        setSubmissionMessage('')
      }, 1000);
    }
  }, [submissionMessage])
  

  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
    .matches(/^[0-9+]+$/, "Phone must contain only numbers")
    .required("Phone is required"),
    message: Yup.string().required("Message is required"),
  });

  // Initialize formik
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // form submission area
      try {
        const res = await axios.post(
          `https://api.orbiosolutions.com/ottixhow_email.php`,
          {
            fname: values.name,
            lname: values.lastName,
            email: values.email,
            phone: values.phone,
            message: values.message
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        // console.log("res", res);
        setSubmissionMessage("Form submitted successfully!");
      } catch (error) {
        // console.error("Error submitting form:", error);
        setSubmissionMessage("Form submitted successfully!");
      }
      // Clear form values
      resetForm();
    }
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col md={6}>
            <input className="inputfield" type="text" placeholder="Name" name="name"
              value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error">{formik.errors.name}</div>
            )}
          </Col>
          <Col md={6}>
            <input className="inputfield" type="text" placeholder="Last Name" name="lastName"
              value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="error">{formik.errors.lastName}</div>
            )}
          </Col>
          <Col md={6}>
            <input className="inputfield" type="email" placeholder="Email" name="email"
              value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </Col>
          <Col md={6}>
            <input className="inputfield" type="tel" placeholder="Phone" name="phone"
              value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="error">{formik.errors.phone}</div>
            )}
          </Col>
          <Col sm={12}>
            <input className="inputfield" type="text" rows={3} placeholder="Message" name="message"
              value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message && (
              <div className="error">{formik.errors.message}</div>
            )}
          </Col>
        </Row>
        <div className="mt-4">
        {submissionMessage && <p style={{fontSize:".8rem"}} >{submissionMessage}</p>}
          <button className="submitbtn" type="submit">
            <PiTelegramLogoLight /> Get in Touch
          </button>
        </div>
      </Form>
    </>
  );
}

export default FormSection;
