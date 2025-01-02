import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const { user, setShowLogin } = useContext(AppContext)

    const navigate = useNavigate()

    const onClickHandler = () => {
        if (user) {
            navigate('/result')
        } else {
            setShowLogin(true)
        }
    }

    return (
        <div
            className='flex flex-col justify-center items-center text-center my-20'>
            <div className='text-stone-500 inline-flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
                <p>Best text to image generator</p>
                <img src={assets.star_icon} alt="" />
            </div>

            <h1 className='text-center mx-auto mt-10 text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px]'>
                Turn text to <span className='text-blue-600'>image</span>, in seconds.
            </h1>

            <p className='text-center max-w-xl mx-auto mt-5'>
             Bring your creative ideas to life with AI. Simply describe your vision, and watch stunning visual art appear in moments!
            </p>

            <button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
            onClick={onClickHandler}>
            Generate Images <img className='h-6' src={assets.star_group} alt="" />
            </button>

        </div>
    )
}

export default Header
