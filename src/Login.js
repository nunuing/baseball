import './Login.css'
import TitleBar from './TitleBar';

function Login() {
    return (
        <div>
            <TitleBar state={'login'}></TitleBar>
            <div className='main_content'>
                <div className='empty_ground'>
                    <div className='content_background'>
                        <div className='content'>
                            <label htmlFor='ID'>ID</label>
                            <label htmlFor='PW'>PW</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;