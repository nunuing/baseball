import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <h1>
      <ul>
        <li name='id'>ID
          <input type='text' />
          <input type='button' value='CHECK' />
        </li>
        <li name='pw'>PW
          <input type='text' />
        </li>
        <li name='pwCheck'>PW Confirm
          <input type='text' />
          <span name='pwConfirm'>Mismatched!</span>
        </li>
        <li name='nickname'>Nickname
          <input type='text' />
          <input type='button' value='CHECK' />
        </li>
        <li name='team'>Team
          <input type='radio' name='teamchek' value='Tigers' />
          <input type='radio' name='teamchek' value='Lions'/>
          <input type='radio' name='teamchek' value='Bears'/>
          <input type='radio' name='teamchek' value='Landers'/>
          <input type='radio' name='teamchek' value='Twins'/>
          <input type='radio' name='teamchek' value='Giants'/>
          <input type='radio' name='teamchek' value='Eagles'/>
          <input type='radio' name='teamchek' value='Dinos'/>
          <input type='radio' name='teamchek' value='Wiz'/>
          <input type='radio' name='teamchek' value='Heros'/>
        </li>
      </ul>
    </h1>
  )
}

export default App;
