import './content.css'
import { FaSquareYoutube } from "react-icons/fa6";

///icon
import { BsStars, BsYoutube } from "react-icons/bs";

///image
import img from '../../assets/Images/steps-img.webp'
import facebook from '../../assets/Images/tab-fb.webp'

///icon
import { FaFacebook, FaTwitter, FaTelegramPlane, FaYoutube, FaTiktok, FaSpotify } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export default function content() {

    const steps = [
        {
            id: 1,
            className: "smal-one",
            number: "01",
            title: "Sign Up for Free",
            desc: "Make a free account in minutes to log in. And, it just needs quick access to our cheap SMM panel services."
        },
        {
            id: 2,
            className: "smal-two",
            number: "02",
            title: "Discover Our Services",
            desc: "Find the affordable SMM panel from the list. Then, you can pick one service that matches your goals."
        },
        {
            id: 3,
            className: "smal-three",
            number: "03",
            title: "Add Funds Easily",
            desc: "Securely insert details and funds into your account using safe payment options."
        },
        {
            id: 4,
            className: "smal-four",
            number: "04",
            title: "Place Orders & Relax",
            desc: "Once you select your service, you need to place an order and track it in real time."
        }
    ];

    const socials = [
        { id: 1, name: "Facebook", icon: <FaFacebook />},
        { id: 2, name: "Instagram", icon: <FiInstagram />},
        { id: 3, name: "Twitter / X", icon: <FaTwitter />},
        { id: 4, name: "Telegram", icon: <FaTelegramPlane />},
        { id: 5, name: "Youtube", icon: <FaYoutube />},
        { id: 6, name: "Tiktok", icon: <FaTiktok />},
        { id: 7, name: "Spotify", icon: <FaSpotify />},
    ];

    return (
        <>
            <div className="rise">
                <div className="rise-left">
                    <span className='rise-span'>
                        <span> <BsStars /> </span>
                        <h3> Our Work Process </h3>
                    </span>
                    <h1> Four Steps to Rise on Social Media with Growfollows </h1>
                    <button> Register </button>
                </div>
                <div className="rise-right">
                    {steps.map((step) => (
                        <div className={step.className} key={step.id}>
                            <h3>{step.number}</h3>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="smm">
                <div className="content">
                    <h1> Our Affordable SMM Panel Services </h1>
                    <p> As the best SMM service provider, we offer some of the cheapest solutions to help you and your businesses grow online. </p>
                </div>
                <div className="icon-hover">
                    {socials.map((social) => (
                        <a href={social.link} key={social.id}>
                            <span>{social.icon}</span>
                            {social.name}
                        </a>
                    ))}
                </div>
                <div className="facebook-box">
                    <div className="facebook-left">
                        <h1> Facebook SMM Panel </h1>
                        <p> To grow your Telegram channel or group, we provide the best SMM services for
                            that. It also helps you get more subscribers, reach, and impressions on your posts. </p>
                        <button> Explore more </button>
                    </div>
                    <div className="facebook-right">
                        <img src={facebook} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}