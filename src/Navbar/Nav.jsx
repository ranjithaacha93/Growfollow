//Nav.jsx
import './Nav.css'

//Images
import Logo from '../assets/Images/logo.png'

//Icons
import { FiUser } from "react-icons/fi"
import { IoMenu, IoCloseSharp } from "react-icons/io5"

export default function Nav({ show, setshow }) {
    return (
        <>
            <div className="nav">
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='atag'>
                    <a href="#"> Sign in </a>
                    <a href="#"> Blog </a>
                    <a href="#"> How it Works </a>
                    <a href="#"> Oru Story </a>
                </div>
                <div>
                    <button>
                        <span><FiUser /></span> Register
                    </button>
                </div>
                <div>
                    <span className='menu' onClick={() => setshow(true)}>
                        <IoMenu />
                    </span>
                </div>

                {show && (
                    <div className="sidnav">
                        <div>
                            <span onClick={() => setshow(false)}> <IoCloseSharp/> </span>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
