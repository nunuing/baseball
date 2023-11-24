import TitleBar from './TitleBar';
import './Write.css'
import { useState } from 'react';
import axois from "axios";



function Write() {
    const [imageSrc, setimageSrc] = useState("");
    const [videoFilePath, setVideoPath] = useState("");
    const image_attach_clicked = e => {
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

    const video_attach_clicked = (files) => {
        let formData = new FormData();
        const config = {
            header: { "content-type": "multipart/form-data" },
        };
        formData.append("file", files[0]);

        axois.post("/api/video/uploadfiles", formData, config).then((res) => {
            if (res.data.success) {
                let variable = {
                    filePath : res.data.filePath,
                    fileName : res.data.fileName,
                };
                setVideoPath(res.data.filePath);
            }
        });
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
                                    <input className='image_btns' id='image_input' multiple type='file' onChange={image_attach_clicked} />
                                </div>
                                <div className='image_video'>
                                    <label className='file_label'>video :</label>
                                    <input className='post_file' type='url' />
                                    <label className='attach_btn' for='video_input'>Attach</label>
                                    <input className='image_btns' id='video_input' multiple type='file' onChange={video_attach_clicked} />
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