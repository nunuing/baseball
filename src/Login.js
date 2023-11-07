import './Login.css'
import TitleBar from './TitleBar';

function Login() {
    return (
        <div className='main'>
            <TitleBar state={'login'}></TitleBar>
            <div className='main_content'>
                <div className='empty_ground'>
                    <div className='login_background'>
                        <div className='login_content'>
                            <div className='login_inputs'>
                                <label htmlFor='ID'>ID</label><input type='text' className='login_info'></input>
                            </div>
                            <div className='login_inputs'>
                                <label htmlFor='PW'>PW</label><input type='password' className='login_info'></input>
                            </div>
                            <div className='login_buttons'>
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

export default Login;