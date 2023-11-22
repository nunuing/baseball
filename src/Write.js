import { Link } from 'react-router-dom';
import TitleBar from './TitleBar';
import './Write.css'
import { useState } from 'react';


  function Write() {
    const [imageSrc, setimageSrc] = useState();
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
                                    <label className='attach_btn' for='image_input'>Attach</label>
                                    <input className='image_btns' id='image_input' multiple type='file' />
                                </div>
                                <div className='image_video'>
                                    <label className='file_label'>video :</label>
                                    <input className='post_file' type='url' />
                                    <label className='attach_btn' for='video_input'>Attach</label>
                                    <input className='image_btns' id='video_input' multiple type='file'  onChange={attackClicked} />
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