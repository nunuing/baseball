import { useState } from 'react';
import './RegisterPage.css';
function IdForm() {
  const [id, setId] = useState("");
  const [idMessage, setIdMessge] = useState("");
  const [validId, setvalidId] = useState(false);

  return (
    <div>
      <label htmlFor='id'>ID </label>
      <input type='text' id='id' name='id' value={id} onChange={event => {
        const currentId = event.target.value;
        setId(currentId);

        const idRegExp = /^[a-zA-z0-9]{4,12}$/;

        if (!idRegExp.test(currentId)) {
          setIdMessge("invalid ID!");
          setvalidId(false);
        }
        else {
          setIdMessge("valid ID!");
          setvalidId(true);
        }
      }} />
      <p className='message'>{idMessage}</p>
    </div>
  );
}

function PwForm() {
  const [pw, setPw] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [validPw, setValidPw] = useState(false);
  
  return (
    <div>
      <label name='pw' htmlFor='pw'>PW </label>
      <input type='password' id='pw' value={pw} onChange={event => {
        const currentPw = event.target.value;
        setPw(currentPw);

        const pwRegExp = /([0-9]|[a-z]|[A-Z]){4,20}/
        if (!pwRegExp.test(currentPw)) {
          setPwMessage("invalid PW!");
          setValidPw(false);
        }
        else {
          setPwMessage("valid PW!");
          setValidPw(true);
        }
      }} />
      <p className='message'>{pwMessage}</p>
    </div>
  );
}
function RegisterPage() {
  const imgURL = '/img/source/symbols/';

  return (
    <h1>

      <IdForm></IdForm>
      <PwForm></PwForm>
      <div>
        <label name='pwCheck' htmlFor='pwCheck'>PW check </label>
        <input type='password' />
        <span name='pwConfirm'>Mismatched!</span>
      </div>
      <div>
        <label name='nickname' htmlFor='nickname'>Nickname </label>
        <input type='text' />
        <input type='button' value='CHECK' />
      </div>
      <div>
        <label name='team' htmlFor='team'>Team </label>
        <input type='radio' name='teamchek' value='Tigers' /> <img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'tigers.png'} alt='tigers' />
        <input type='radio' name='teamchek' value='Lions' /> <img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'lions.png'} alt='lions' />
        <input type='radio' name='teamchek' value='Bears' /> <img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'bears.png'} alt='bears' />
        <input type='radio' name='teamchek' value='Landers' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'landers.png'} alt='landers' />
        <input type='radio' name='teamchek' value='Twins' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'twins.png'} alt='twins' />
        <input type='radio' name='teamchek' value='Giants' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'giants.png'} alt='giants' />
        <input type='radio' name='teamchek' value='Eagles' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'eagles.png'} alt='eagles' />
        <input type='radio' name='teamchek' value='Dinos' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'dinos.png'} alt='dinos' />
        <input type='radio' name='teamchek' value='Wiz' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'wiz.png'} alt='wiz' />
        <input type='radio' name='teamchek' value='Heros' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'heros.png'} alt='heros' />
      </div>
      <div>
        <label name='profile' htmlFor='profile'>Profile </label>
        <input type='url' />
        <input type='button' value='attach' />
        <img name='default' src={process.env.PUBLIC_URL + 'img/default.png'} alt='default' />
      </div>

      <div>
        <input type='submit' value='Submit' />
        <input type='button' value='Cancle' />
      </div>
    </h1>
  )
}

export default RegisterPage;
