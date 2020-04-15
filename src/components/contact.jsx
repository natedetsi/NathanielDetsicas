import React, {useState} from "react";
import Form from ".././components/form";



function Contact(props) {
  //contact me title change on form submit
  const [contact, setContact] = useState({
    title: 'Get In Touch',
    sub: 'Fill in the below form',
    text: 'I aim to reply within 48 hours'});
    //change the contact me title text on form submit for 10seconds then change back
function open(){
props.onClicked();
setContact({title: 'Thank you! ', sub: "", text:"Your information has been submitted"})
setTimeout(function changeBack(){
  setContact(  {title: 'Get In Touch',
    sub: 'Fill in the below form',
    text: 'I aim to reply within 48 hours'})
}, 10000)
}
  return (
    <div className="bottom-container">

      <div className="contact-me">
        <h2>{contact.title}</h2>
        <h3>{contact.sub}</h3>
        <p>{contact.text}</p>

        <button className="btn-contact" href="in" onClick={props.onClicked}>
          CONTACT ME
        </button>
      </div>

      <Form style={props.style} onClicked={open}/>
    </div>
  );
}

export default Contact;
