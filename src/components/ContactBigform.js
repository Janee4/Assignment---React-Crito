import React, { useState } from 'react'

const ContactBigform = () => {
  
  const [errorName, setErrorName] = useState ('')
  const [errorEmail, setErrorEmail] = useState ('')
  const [errorMessage, setErrorMessage] = useState('')
  
  const validateEmail = (email) => { // Skapar en funktion kallad validateEmail som tar en e-postadress som parameter
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Skapar ett reguljärt uttryck (regex) som definierar ett giltigt e-postadressmönster
  return emailRegex.test(email); // Använder regex-mönstret för att testa om den angivna e-postadressen (som användaren skriver in) matchar mönstret, och returnerar true om det matchar, annars false
  };

  const validateName = (name) => { 
    const nameRegex = /^[A-Za-z\s]+$/; 
    return nameRegex.test(name); 
    };

    const validateMessage = (message) => { //En funktion som heter validateMessage, och den tar en parameter 'message'.
      const messageRegex = /^.{10,}$/; // skapat en variabel "messageRegex" som innehåller information om vilka tecken som är giltiga i meddelandet. 
      return messageRegex.test(message); //Testar om message uppfyller villkoren och då returneras "true" om det är giltigt och false om det inte uppfyller villkoren.
      };


  
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!message) {
      setErrorMessage(
        <p>Please enter a message.</p>
      );
    } else if (!validateMessage(message)) { //om validateMessage inte är true så ska felmeddelande skrivas ut. Observera att validateMessage endast är true om den uppfyller villkoren för messageRegex.
      setErrorMessage(<p>The message must be at least 10 characters long.</p>);
    } else {
      setErrorMessage('');
    }
  
    if (!email) {
      setErrorEmail(<p>Please enter an email.</p>);
    } else if (!validateEmail(email)) {
      setErrorEmail(<p>Please enter a valid email address.</p>);
    } else {
      setErrorEmail('');
    }
  
    if (!name) {
      setErrorName(
        <p>Please enter a name.</p>
      );
    } else if (!validateName(name)) {
      setErrorName( <p>Invalid name. The name can only contain letters and spaces.</p> );
    }
    else {
      setErrorName('');
    }
  
    if (name && email && message && validateEmail(email)) {
      // Alla fälten är ifyllda, så skicka förfrågan
      fetch('https://win23-assignment.azurewebsites.net/api/contactform', { //en funktion som gör att man kan skicka informationen till en URL
        method: 'POST',
        body: JSON.stringify({ name, email, message }), //Här omvandlas vårt javascripts objekt(vår data) till en JSON-sträng 
        headers: {
          'Content-Type': 'application/json', //Hur ska den läsa datan? Här har vi skrivit att den ska läsa informationen som "application/json"
        },
      })
      .then(response => { //Efter att vi skickat iväg formuläret så ska något skickas tillbaka till oss och beroende på vad vi får för svar så kan vi göra olika saker
        if (response.status === 200) { //Här kollar vi om statuskoden är 200 = OK så vill 
          console.log('Your message has been sent!')
          return response.text();
        } else {
          console.error('Request failed ' + response.status);
        }
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Something went wrong!');
        });
    }
  };
  
  // dessa används för att hålla koll på vad användaren skriver in och sedan uppdatera det till det användaren skrivit in. 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')



return (
<section className="big-form">
<div className="container">
  <div className="title">
    <h2>Leave us a message<br/>for any information.</h2>
  </div>
  
  <form id='form' action="#" method="post">
  <div className="form-1" id="name" >
    <input 
    type="text" 
    name="name"
    placeholder="Name*"
    value= {name} //vad användaren skriver in för namn i input fältet
    onChange={ (e) => setName (e.target.value)} //värdet som skrivs in i input fältet sparas inuti setName och skickas till handleSubmit för att valideras
    /> 
  </div>
  <span>{errorName}</span>
  
  <div className="form-2">
    <input className='error' 
    type="email" 
    name="email"
    placeholder="Email*"
    value= {email}
    onChange= { (e) => setEmail(e.target.value)} 
    />
  </div>
  <span>{errorEmail}</span>
  
  <div className="form-3">
    <input 
    type="text"
    name="message" 
    placeholder="Your Message*"
    value= {message} 
    onChange={ (e) => setMessage(e.target.value)} 
    />
  </div>
  <span>{errorMessage}</span>
 

  <div className="btn">
    <a className="btn-send-message" id="login" type='submit' onClick={handleSubmit}>Send Message<i className="fa-regular fa-arrow-up-right"></i></a>
  </div>
  </form>
</div>
</section>
)
}

export default ContactBigform