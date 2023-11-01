import { useState } from 'react';
import './RegisterPage.css';
function RegisterPage() {
  const imgURL = '/img/source/symbols/';

  const [id, setId] = useState("");
  const [idMessage, setIdMessge] = useState("");
  const [validId, setvalidId] = useState(false);

  const [pw, setPw] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [validPw, setValidPw] = useState(false);

  const [pwCheck, setPwCheck] = useState("");
  const [pwCheckMessage, setPwCheckMessage] = useState("");
  const [validPwCheck, setValidPwCheck] = useState(false);

  const [nickname, setNickname] = useState("");
  const [nnMessage, setnnMessage] = useState("");
  const [validnn, setvalidnn] = useState(false);

  const [imageSrc, setimageSrc] = useState(process.env.PUBLIC_URL + 'img/default.png');

  const handleIdInput = e => {
    const currentId = e.target.value;
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
  };

  const handlePwInput = e => {
    const currentPw = e.target.value;
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
  };

  const handlePwCheckInput = e => {
    const currentPwCheck = e.target.value;
    setPwCheck(currentPwCheck);

    if (pw === currentPwCheck) {
      setPwCheckMessage("matched!");
      setValidPwCheck(true);
    }
    else {
      setPwCheckMessage("mismatched!");
      setValidPwCheck(false);
    }
  };

  const handleNicknameinput = e => {
    const currentNickname = e.target.value;
    setNickname(currentNickname);

    const nnRegExp = /([ㄱ-ㅎ가-힣a-zA-Z0-9]){3,15}/
    if (nnRegExp.test(currentNickname)) {
      setnnMessage("valid Nickname");
      setvalidnn(true);
    }
    else {
      setnnMessage("invalid Nickname");
      setvalidnn(false);
    }
  };

  const attackClicked = e => {
    const file = e.target.files[0];
    console.log(file);

    const correctForm = /(.*?)\.(jpg|jpeg|gif|bmp|png)$/;
    if (file.size > 3 * 1024 * 1024) {
      alert("image file is too big!");
      return;
    }
    else if (!correctForm.test(file.name)) {
      alert("incorrect image file! Plz try again");
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setimageSrc(reader.result || null);
        resolve();
      };
    })
  };

  return (
    <p className='content'>
      <div className='inputs'>
        <label htmlFor='id'>ID </label>
        <input type='text' id='id' name='id' className='input_boxs' value={id} onChange={handleIdInput} />
        <p className='message'>{idMessage}</p>
      </div>
      <div className='inputs'>
        <label name='pw' htmlFor='pw'>PW </label>
        <input type='password' id='pw' className='input_boxs' value={pw} onChange={handlePwInput} />
        <p className='message'>{pwMessage}</p>
      </div>
      <div className='inputs'>
        <label name='pwCheck' htmlFor='pwCheck'>PW check </label>
        <input type='password' id='pwChek' className='input_boxs' value={pwCheck} onChange={handlePwCheckInput} />
        <p name='pwConfirm'>{pwCheckMessage}</p>
      </div>
      <div className='inputs'>
        <label name='nickname' htmlFor='nickname'>Nickname </label>
        <input type='text' value={nickname} className='input_boxs' onChange={handleNicknameinput} />
        <p>{nnMessage}</p>
      </div>
      <div className='inputs' id='team_select'>
        <label name='team' htmlFor='team'>Team </label>
        <input type='radio' name='teamchek' value='Tigers' /> <img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'tigers.png'} alt='tigers' />
        <input type='radio' name='teamchek' value='Lions' /> <img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'lions.png'} alt='lions' />
        <input type='radio' name='teamchek' value='Bears' /> <img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'bears.png'} alt='bears' />
        <input type='radio' name='teamchek' value='Landers' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'landers.png'} alt='landers' />
        <input type='radio' name='teamchek' value='Twins' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'twins.png'} alt='twins' />
        <br />
        <input type='radio' name='teamchek' value='Giants' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'giants.png'} alt='giants' />
        <input type='radio' name='teamchek' value='Eagles' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'eagles.png'} alt='eagles' />
        <input type='radio' name='teamchek' value='Dinos' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'dinos.png'} alt='dinos' />
        <input type='radio' name='teamchek' value='Wiz' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'wiz.png'} alt='wiz' />
        <input type='radio' name='teamchek' value='Heros' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'heros.png'} alt='heros' />
      </div>
      <div className='inputs' id='profile_input'>
        <label name='profile' htmlFor='profile'>Profile </label>
        <input type='url' className='input_boxs' />
        <input multiple type='file' onChange={attackClicked} />
        <img name='profile' id='profile_img' src={imageSrc} alt='default' />
      </div>
      <div className='inputs'>
        <input type='submit' value='Submit' />
        <input type='button' value='Cancle' />
      </div>
    </p>
  )
}

export default RegisterPage;
