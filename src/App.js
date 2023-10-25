import './App.css';

function App() {
  const imgURL = '/img/source/symbols/';
  return (
    <h1>
      <ul>
        <li name='id'>ID
          <input type='text' />
          <input type='button' value='CHECK' />
        </li>
        <li name='pw'>PW
          <input type='password' />
        </li>
        <li name='pwCheck'>PW Confirm
          <input type='password' />
          <span name='pwConfirm'>Mismatched!</span>
        </li>
        <li name='nickname'>Nickname
          <input type='text' />
          <input type='button' value='CHECK' />
        </li>
        <li name='team'>Team
          <input type='radio' name='teamchek' value='Tigers' /> <img src={process.env.PUBLIC_URL + imgURL + 'tigers.png'} alt='tigers' />
          <input type='radio' name='teamchek' value='Lions' /> <img src={process.env.PUBLIC_URL + imgURL + 'lions.png'} alt='lions' />
          <input type='radio' name='teamchek' value='Bears' /> <img src={process.env.PUBLIC_URL + imgURL + 'bears.png'} alt='bears' />
          <input type='radio' name='teamchek' value='Landers' /><img src={process.env.PUBLIC_URL + imgURL + 'landers.png'} alt='landers' />
          <input type='radio' name='teamchek' value='Twins' /><img src={process.env.PUBLIC_URL + imgURL + 'twins.png'} alt='twins' />
          <input type='radio' name='teamchek' value='Giants' /><img src={process.env.PUBLIC_URL + imgURL + 'giants.png'} alt='giants' />
          <input type='radio' name='teamchek' value='Eagles' /><img src={process.env.PUBLIC_URL + imgURL + 'eagles.png'} alt='eagles' />
          <input type='radio' name='teamchek' value='Dinos' /><img src={process.env.PUBLIC_URL + imgURL + 'dinos.png'} alt='dinos' />
          <input type='radio' name='teamchek' value='Wiz' /><img src={process.env.PUBLIC_URL + imgURL + 'wiz.png'} alt='wiz' />
          <input type='radio' name='teamchek' value='Heros' /><img src={process.env.PUBLIC_URL + imgURL + 'heros.png'} alt='heros' />
        </li>
        <li name='profile'>profile
          <input type='url' />
          <input type='button' value='attach' />
          <img name='default' src={process.env.PUBLIC_URL + 'img/default.png'} alt='default' />
        </li>
        <input type='submit' value='Submit'/> 
        <input type='button' value='Cancle'/>
      </ul>
    </h1>
  )
}

export default App;
