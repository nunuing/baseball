import { Link } from 'react-router-dom';
import TitleBar from './TitleBar';
import './Write.css'

function Write() {
    return (
        <div className='main'>
            <TitleBar state={'board'} ></TitleBar>
            <div className='write_main'>
                <div className='write_ground'>
                    <div className='write_buttons'>
                        <button className='write_btns'>Confirm</button>
                        <button className='write_btns' >Cancle</button>
                    </div>
                    <div className='write_background'>
                        <div className='write_content'>
                            <div className='board_wrtie_title'>
                                Write Post
                            </div>
                            <div className='write_inputs'>
                                <div >
                                    <label className='title_input' id='write_title_label'>title :</label><input className='title_input' id='post_title' type='text'></input>
                                    <textarea id='post_content'></textarea>
                                </div>
                                <div className='image_video'>
                                    <label className='file_label'>image : </label>
                                    <input className='post_file' type='url' />
                                    <label className='attach_btn'>Attach</label>
                                    <input className='image_btns' type='file' />
                                </div>
                                <div className='image_video'>
                                    <label className='file_label'>video :</label>
                                    <input className='post_file' type='url' />
                                    <label className='attach_btn'>Attach</label>
                                    <input className='image_btns' type='file' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Write;