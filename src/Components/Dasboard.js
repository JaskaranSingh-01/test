import React from 'react'
import './Dashboard.css'
import '../index.css'
import useDarkModeToggle from './useDarkModeToggle'
const Dasboard = () => {
    const { darkMode, toggleDarkMode } = useDarkModeToggle();

    return (

        <>
            <div className='container-fluid '>
                <h1 class="text-blk team-head-text">Analytics overview</h1>
                <div class="google-box">
                    <div className='heading'>
                        <h2 >Learn Effectively With Us!!</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aliquid eos tempora fugit optio.
                        </p>
                    </div>

                    <div className='buttons'>
                        <button class="button-89" role="button"> Join a Course!!</button>
                        <button class="button-89" role="button"> Sign Up Now!</button>
                    </div>
                </div>

                <div className='card_c'>
                    <span class="google-box-2 ">
                        <div className='heading-s'>
                            <h2 >My Courses</h2>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aliquid eos tempora fugit optio.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aliquid eos tempora fugit optio.
                            </li><li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aliquid eos tempora fugit optio.
                            </li>
                        </div>
                    </span>
                    <span class="google-box-2">
                        <div className='heading-s'>
                            <h2 >Popular Courses</h2>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aliquid eos tempora fugit optio.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aliquid eos tempora fugit optio.
                            </li><li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aliquid eos tempora fugit optio.
                            </li>
                        </div>
                    </span>

                </div>

            </div>

        </>
    )
}

export default Dasboard