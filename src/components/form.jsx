import React, {useState} from "react";
import { useSpring, animated as a } from "react-spring";
import axios from 'axios';

function Form(props) {

  const [toggle, setToggle] = useState(true);
  const [textError, setTextError] = useState(true);
  const [errorState, setErrorState] = useState("")


  //state of form inputs
  const [mail, setMail] = useState({
    email: "",
    company: "",
    message: ""
  });
//handles the form input changes
  function handleChange(event){
    const {name, value} = event.target;

      setMail(prevMail => {
        return {
          ...prevMail,
          [name]: value
        };
      });
}

const highLightInputEmail = useSpring({border:toggle ? '1px solid #5f5f5f' : '2px  solid rgba(255,51,51,0.9)'});
 const highLightTextArea = useSpring({border: textError ? '1px solid #5f5f5f' : '2px  solid rgba(255,51,51,0.9)'});

//sends form to backend route if email is filled out
function sendForm(e){
  e.preventDefault();
  if (mail.email.indexOf('@' && ('.')) > -1 && mail.message.length > 40){
    // axios.post('http://localhost:5000/send', {mail});
    window.location.href ="mailto:nathaniel.detsicas@outlook.com" + `?subject=${mail.company}` + `&body=${mail.message}`;
    setMail({  email: "",
      company: "",
      message: ""})
      props.onClicked();
      setErrorState("");
  } else if (mail.message.length < 40) {
    setErrorState("Message Must be atleast 40 charaters")
    if (mail.email.indexOf('@' && ('.')) === -1){
      setToggle(false);
      setTextError(false);
      setErrorState("Email must contain @ and ." + " " + "Message Must be atleast 40 charaters")
    }
} else {
  setToggle(false);
  setErrorState("Email must contain @ and .");
}
}


  return (

    <a.div className="form"  style={props.style}>
      <form className="contact-me-form">
        <a.h6 className="error">{errorState}</a.h6>
        <a.input style={highLightInputEmail} name="email" className="email" type="email" placeholder="Email" onChange={handleChange} onClick={handleChange} value={mail.email} required/>
        <input name="company"className="company-name" type="text" placeholder="Company Name" onChange={handleChange} value={mail.company} required />
        <a.textarea
        style={highLightTextArea}
        name="message"
          className="msg"
          name="message"
          cols="3"
          rows="10"
          placeholder="Type your message..."
          required
          onChange={handleChange}
          value={mail.message}
        />
        <input className="sub-btn" type="submit" onClick={sendForm}/>
      </form>
    </a.div>
  );
}

export default Form;
