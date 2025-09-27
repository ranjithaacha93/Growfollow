import './Home.css'

/// Images
import topOne from '../../assets/Images/top-sec-img.webp'
import { FaCircleUser } from "react-icons/fa6";

/// Icons
import { FaInstagram, FaFacebook, FaLinkedinIn, FaSpotify, FaTiktok, FaTwitter } from "react-icons/fa";
import { RiYoutubeFill } from "react-icons/ri";
import { BsStars, BsYoutube } from "react-icons/bs";
import { TbLockPassword } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { FaSignInAlt } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { SiAudiomack, SiX } from "react-icons/si";

const socialLinks = [
    { icon: <FiInstagram />, name: "Instagram" },
    { icon: <FaFacebook />, name: "Facebook" },
    { icon: <BsYoutube />, name: "Youtube" },
    { icon: <FaSpotify />, name: "Spotify" },
    { icon: <FaTelegramPlane />, name: "Telegram" },
    { icon: <FaTiktok />, name: "Tiktok" },
    { icon: <SiX />, name: "X (Twitter)" },
    { icon: <SiAudiomack />, name: "Audiomack" },
];

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="dork">
                    <div className='home-icon-div'>
                        <span> <FaInstagram /> </span>
                        <span> <RiYoutubeFill /> </span>
                        <span> <FaLinkedinIn /> </span>
                    </div>

                    <div className='home-contend-div'>
                        <div className="grow">
                            <span> <BsStars /> </span>
                            <p> Growfollows - #1 </p>
                        </div>
                        <h1> Cheap <br /> <span>SMM Panel</span> </h1>
                        <p> Feel like you need to grow your social media online? Then, meet Growfollows which is a trusted and cheap SMM Panel with 5 years of success. We also boosted growth in followers, likes, and views effectively. Start your journey with our SMM panel! </p>
                        <p> ✅ 5 years on the market and <span>9313353 orders </span> processed successfully until now. </p>

                        <div className='input-div'>
                            <div>
                                <span> <FaCircleUser /> </span>
                                <input type="text" placeholder='Username' />
                            </div>
                            <div>
                                <span> <TbLockPassword /> </span>
                                <input type="password" placeholder='Password' />
                            </div>
                        </div>

                        <div className='contend'>
                            <div>
                                <input type="checkbox" />
                                <p> Remember me </p>
                            </div>
                            <p> Forgot password? </p>
                        </div>

                        <div className="sign-with-google">
                            <div>
                                <button> Sign in <span> <FaSignInAlt /> </span> </button>
                                <p> Do not have an account? <span style={{ color: "#7D19AF" }}>Sign up</span> </p>
                            </div>
                            <button> Login With <span> <FcGoogle /> </span> </button>
                        </div>
                    </div>

                    <div className='home-img-div'>
                        <img src={topOne} alt="" />
                    </div>
                </div>

                <div className="icon-div">
                    {socialLinks.map((item, index) => (
                        <div key={index}>
                            <span>{item.icon}</span>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
