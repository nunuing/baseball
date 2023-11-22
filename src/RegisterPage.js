import { useState } from 'react';
import './RegisterPage.css';
import TitleBar from './TitleBar';
function RegisterPage() {
  const imgURL = '/img/source/symbols/';

  const [id, setId] = useState("");
  const [idMessage, setIdMessage] = useState("");

  const [pw, setPw] = useState("");
  const [pwMessage, setPwMessage] = useState("");

  const [pwCheck, setPwCheck] = useState("");
  const [pwCheckMessage, setPwCheckMessage] = useState("");

  const [nickname, setNickname] = useState("");
  const [nnMessage, setnnMessage] = useState("");

  const [imageSrc, setimageSrc] = useState(process.env.PUBLIC_URL + 'img/default.png');

  const handleIdInput = e => {
    const currentId = e.target.value;
    setId(currentId);

    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (currentId === "") {
      setIdMessage("");
    }
    else if (!idRegExp.test(currentId)) {
      document.documentElement.style.setProperty('--id-color', '#FF522D');
      setIdMessage("invalid ID!");
    }
    else {
      document.documentElement.style.setProperty('--id-color', '#068FFF');
      setIdMessage("valid ID!");
    }
  };

  const handlePwInput = e => {
    const currentPw = e.target.value;
    setPw(currentPw);

    const pwRegExp = /([0-9]|[a-z]|[A-Z]){4,20}/

    if (currentPw === "") {
      setPwMessage("");
    }
    else if (!pwRegExp.test(currentPw)) {
      document.documentElement.style.setProperty('--pw-color', '#FF522D');
      setPwMessage("invalid PW!");
    }
    else {
      document.documentElement.style.setProperty('--pw-color', '#068FFF');
      setPwMessage("valid PW!");
    }
  };

  const handlePwCheckInput = e => {
    const currentPwCheck = e.target.value;
    setPwCheck(currentPwCheck);

    if (currentPwCheck === "") {
      setPwCheckMessage("");
    }
    else if (pw === currentPwCheck) {
      document.documentElement.style.setProperty('--pwCheck-color', '#068FFF');
      setPwCheckMessage("matched!");
    }
    else {
      document.documentElement.style.setProperty('--pwCheck-color', '#FF522D');
      setPwCheckMessage("mismatched!");
    }
  };

  const handleNicknameinput = e => {
    const currentNickname = e.target.value;
    setNickname(currentNickname);

    const nnRegExp = /([ㄱ-ㅎ가-힣a-zA-Z0-9]){3,15}/
    if (currentNickname === "") {
      setnnMessage("");
    }
    else if (nnRegExp.test(currentNickname)) {
      document.documentElement.style.setProperty('--nn-color', '#068FFF');
      setnnMessage("valid Nickname");
    }
    else {
      document.documentElement.style.setProperty('--nn-color', '#FF522D');
      setnnMessage("invalid Nickname");
    }
  };

  const attachClicked = e => {
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
    <div className='main'>
      <TitleBar state={'join'} ></TitleBar>
      <div className='join_main'>
        <div className='join_ground'>
          <div className='join_background'>
            <div className='join_content'>
              <div className='join_inputs'>
                <label htmlFor='id'>ID </label>
                <input type='text' id='id' name='id' className='input_boxs' value={id} onChange={handleIdInput} />
                <p className='message' id='idMessage'>{idMessage}</p>
              </div>
              <div className='join_inputs'>
                <label name='pw' htmlFor='pw'>PW </label>
                <input type='password' id='pw' className='input_boxs' value={pw} onChange={handlePwInput} />
                <p className='message' id='pwMessage'>{pwMessage}</p>
              </div>
              <div className='join_inputs'>
                <label name='pwCheck' htmlFor='pwCheck'>PW check </label>
                <input type='password' id='pwChek' className='input_boxs' value={pwCheck} onChange={handlePwCheckInput} />
                <p className='message' id='pwCheckMessage' name='pwConfirm'>{pwCheckMessage}</p>
              </div>
              <div className='join_inputs'>
                <label name='nickname' htmlFor='nickname'>Nickname </label>
                <input type='text' value={nickname} className='input_boxs' onChange={handleNicknameinput} />
                <p className='message' id='nnMessage'>{nnMessage}</p>
              </div>
              <div className='join_inputs' id='team_select'>
                <label name='team' htmlFor='team'>Team</label>
                <input type='radio' className='join_radio' name='teamchek' value='Tigers' /> <img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'tigers.png'} alt='tigers' />
                <input type='radio' className='join_radio' name='teamchek' value='Lions' /> <img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'lions.png'} alt='lions' />
                <input type='radio' className='join_radio' name='teamchek' value='Bears' /> <img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'bears.png'} alt='bears' />
                <input type='radio' className='join_radio' name='teamchek' value='Landers' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'landers.png'} alt='landers' />
                <input type='radio' className='join_radio' name='teamchek' value='Twins' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'twins.png'} alt='twins' />
                <br></br>
                <input type='radio' className='join_radio' name='teamchek' value='Giants' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'giants.png'} alt='giants' />
                <input type='radio' className='join_radio' name='teamchek' value='Eagles' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'eagles.png'} alt='eagles' />
                <input type='radio' className='join_radio' name='teamchek' value='Dinos' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'dinos.png'} alt='dinos' />
                <input type='radio' className='join_radio' name='teamchek' value='Wiz' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'wiz.png'} alt='wiz' />
                <input type='radio' className='join_radio' name='teamchek' value='Heros' /><img className='symbols' src={process.env.PUBLIC_URL + imgURL + 'heros.png'} alt='heros' />
              </div>
              <div className='join_inputs' id='profile_input'>
                <label name='profile' htmlFor='profile'>Profile </label>
                <input type='url' className='input_boxs' />
                <input multiple type='file' onChange={attachClicked} />
                <img name='profile' id='profile_img' src={imageSrc} alt='default' />
              </div>
              <div className='join_buttons'>
                <input className='buttons' id='submit_btn' type='submit' value='Submit' />
                <input className='buttons' id='cancle_btn' type='button' value='Cancle' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;
