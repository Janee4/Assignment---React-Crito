import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactBigform = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({ //Gör att man kan koppla på i useFormik delen en validationSchema på hur vi vill att valideringen ska fungera och hanteras (våra felmeddelanden som ska skrivas ut)
      name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Invalid name. The name can only contain letters and spaces.')
        .required('Please enter your name.'),
      email: Yup.string()
        .email('Please enter a valid email address.')
        .required('Please enter your email address.'),
      message: Yup.string()
        .min(10, 'The message must be at least 10 characters long.')
        .required('Please enter a message.'),
    }),
    onSubmit: (values) => {
      
      console.log('Form submitted:', values);

      
      fetch('https://win23-assignment.azurewebsites.net/api/contactform', {//en funktion som gör att man kan skicka informationen till en URL
        method: 'POST',//Vilken metod som ska användas (metoden på formuläret spelar ingen roll, det är denna som styr !) 
        body: JSON.stringify(values),//Här omvandlas vårt javascripts objekt(vår data) till en JSON-sträng 
        headers: {
          'Content-Type': 'application/json',//Talar om för motparten hur den ska tolka informationen som skickas till den ? Här har vi skrivit att den ska läsa informationen som "application/json"
        },
      })
        .then(response => {//Efter att vi skickat iväg formuläret så ska något skickas tillbaka till oss och beroende på vad vi får för svar så kan vi göra olika saker
          if (response.status === 200) {//Här kollar vi om statuskoden är 200 = OK så vill vi att det ska stå "Your message has been sent!" i konsollen
            console.log('Your message has been sent!');
            return response.text();
          } else {
            console.error('Request failed ' + response.status);
          }
        })
        .then(data => {//Här vill vi göra ännu fler grejer med informationen vi får tex: 
          console.log(data);//Vi vill console.log vår data 
        })
        .catch(error => {
          console.error('Something went wrong!');
        });
    },
  });

  return (
    <section className="big-form">
      <div className="container">
        <div className="title">
          <h2>Leave us a message<br />for any information</h2>
        </div>

        <form id='form' onSubmit={formik.handleSubmit}>
          <div className="form-1" id="name">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <span>{formik.touched.name && formik.errors.name}</span>

          <div className="form-2">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <span>{formik.touched.email && formik.errors.email}</span>

          <div className="form-3">
            <input
              type="text"
              name="message"
              placeholder="Your message*"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <span>{formik.touched.message && formik.errors.message}</span>

          <div className="btn">
            <button className="btn-send-message" id="login" type="submit">Send message<i className="fa-regular fa-arrow-up-right"></i></button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactBigform;



