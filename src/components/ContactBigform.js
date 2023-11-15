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
      name: Yup.string() //Värdet för detta fältet måste vara i form av en sträng
        .matches(/^[A-Za-z\s]+$/, 'Invalid name. The name can only contain letters and spaces.') // matchar det användaren skriver in mot regeln som säger att namnet endast måste innehålla stora och små bokstäver samt mellanslag, allt annat än dessa tecken kommer sända ut ett felmeddelande ?
        .required('Please enter your name.'),//Anger att fältet är obligatoriskt, om användaren inte skriver in något så kommer felmedelandet "please enter your name." att skrivas ut.
      email: Yup.string()
        .email('Please enter a valid email address.') //Om användaren skriver in något som inte ser ut som en giltig e-post adress så kommer felmeddelandet 'Please enter a valid email address.' att skrivas ut
        .required('Please enter your email address.'),
      message: Yup.string()
        .min(10, 'The message must be at least 10 characters long.')
        .required('Please enter a message.'),
    }),
    onSubmit: (values) => {
      
      console.log('Form submitted:', values); //Här loggas användarens svar i varje fäl till konsollen, det kan vara användbart för att undersöka vilken form av information som skickas när användaren skickar iväg formuläret. 

      
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
            <input //När användaren skriver in något i fältet så uppdateras "formik.values.name" automatiskt med det användaren skrivit in
              type="text"
              name="name"
              placeholder="Name*"
              value={formik.values.name}
              onChange={formik.handleChange}//Varje gång användaren skriver in något kallas händelsehanteraren "handleChange" som är en funktion från Formik-biblioteket som uppdaterar "formik.values.name" med det aktuella värdet som användaren skrivit in
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



