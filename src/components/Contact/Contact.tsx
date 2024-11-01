import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import telegram from '../../assets/telegram.svg'
// import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:ahmedsahidsa786@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:ahmedsahidsa786@gmail.com">ahmedsahidsa786@gmail.com</a>
        </div>
        <div>
        <a href="https://t.me/CodeSahid"><img src={telegram} alt="Phone No" /></a>
          <a href="https://t.me/CodeSahid">SAHID AHMED</a>
        </div>  
      </div>
      {/* <Form></Form> */}
    </Container>
  )
}