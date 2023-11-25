import React from 'react'
import './Revenue.css'

const Revenue = () => {
    return (
        <>
            <div className='container-top'>
                <span className>
                    <span className='google-box-3'>
                        <i class='bx bx-chevron-left'></i>
                    </span>
                    <span class="heading_1">Notifications</span>
                </span>
                <span className='box-1'>
                    <span>
                        <span className='google-box-3'>
                        <i class='bx bx-phone-call'></i>
                        </span>
                        <span class="heading_1">Call Teacher</span>
                    </span><span>
                        <span className='google-box-3'>
                            <i class='bx bx-support'></i>
                        </span>
                        <span class="heading_1">Support</span>
                    </span>
                </span>
            </div>

            <div className='container-row'>
                <span>
                    <span >
                        <i class='bx bx-chevron-left'></i>
                    </span>
                    <span >Notifications</span>
                </span>
                <span className='active'>
                    <span>
                        <i class='bx bx-chevron-left'></i>
                    </span>
                    <span>Notifications</span>
                </span>
                <span>
                    <span>
                        <i class='bx bx-chevron-left'></i>
                    </span>
                    <span >Notifications</span>
                </span><span>
                    <span>
                        <i class='bx bx-chevron-left'></i>
                    </span>
                    <span >Notifications</span>
                </span>
                <span>
                    <span>
                        <i class='bx bx-chevron-left'></i>
                    </span>
                    <span >Notifications</span>
                </span>
            </div>

            <span className='rev-body'>
                <span className='left'>
                    <div class="image-container">
                        <img src="https://buffer.com/library/content/images/2023/10/free-images.jpg" alt="Your Image" />
                        <p class="image-name">Bhavesh</p>
                    </div>
                    <div class="image-container">
                        <img src="https://buffer.com/library/content/images/2023/10/free-images.jpg" alt="Your Image" />
                        <p class="image-name">Chakshu</p>
                    </div>
                    <div className='icons'>
                        <span className='google-box-icon'>
                            <i class='bx bx-camera icon' ></i>
                        </span>
                        <span className='google-box-icon'>
                            <i class='bx bx-microphone icon' ></i>
                        </span>
                        <span className='google-box-icon'>
                            <i class='bx bx-share icon' ></i>
                        </span>
                        <span className='google-box-icon'>
                            <i class='bx bx-chat icon' ></i>
                        </span>
                        <span className='google-box-icon'>
                            <i class='bx bx-log-out icon' ></i>
                        </span>
                    </div>

                </span>
                <span className='right'>
                    <iframe width="600px" height="500"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                    </iframe>
                </span>



            </span>



        </>
    )
}

export default Revenue