import './socialmedia.css'
import React from "react";

///images
import register from '../../assets/Images/register-right-img.webp'
import icons from '../../assets/Images/icons.webp'
import rate from '../../assets/Images/success-rate-img.webp'
import payme from '../../assets/Images/statistics-payment-img.webp'

///icons
import { BsStars, BsYoutube } from "react-icons/bs";

///map
const stats = [
    { id: 1, value: "948671", label: "Orders Completed" },
    { id: 2, value: "$0.001 \n per 1K", label: "Price Starting From" },
    { id: 3, value: "3577", label: "Services Available" }
];

export default function socialmedia() {
    return (
        <>
            <div className="social-media">
                <div className='socialmedia-overall'>
                    <div className="dark">
                        <div className="socialmedia-left">
                            <div>
                                <h1> Register today with Growfollows </h1>
                                <p> Want to take charge of your online growth? Then, join Growfollows <br />
                                    to get the best cheap SMM panel and watch your brand soar. It’s <br />
                                    time to sign in now! </p>
                                <button> Sign in <span>  </span> </button>
                            </div>
                        </div>
                        <div className="socialmedia-right">
                            <div>
                                <img src={register} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="services">
                            <span> <BsStars /> </span>
                            <h2> Best Services on your budget </h2>
                        </div>
                        <h1> Cheap SMM Panel for all your needs </h1>
                        <p> No matter what platform you select, you can always have the best services on your budget. You can easily access
                            the Paytm SMM | Mpesa | MTN panel that is relatively cheaper than other competitors. </p>
                    </div>
                    <div className="boxs">
                        <div className="box-left">
                            <img src={icons} alt="" />
                            <h1> Statistics Of Growfollows </h1>
                            <p> Growfollows has clients from all over the world! We’re also proud to have over 50 million active users and more than 5,000 active services. And, people stick with us as we offer top-quality plans at the lowest prices. Plus, our team works non-stop to make sure you get outcomes that last long. </p>
                            <span></span>
                        </div>
                        <div className="box-right">
                            <img src={rate} alt="" />
                            <h2> Success Rate </h2>
                            <p> Satisfying Customer </p>
                            <span></span>
                        </div>
                    </div>
                    <div className="boxs-to">
                        <div className="boxs-left">
                            <img src={payme} alt="" />
                            <div>
                                <h2> Multiple Payment Method </h2>
                            </div>
                            <span></span>
                        </div>
                        <div className="boxs-right">
                            <div className="boxs-in">
                                {stats.map((item) => (
                                    <div className="txt" key={item.id}>
                                        <div>
                                            <h4>
                                                {item.value.split("\n").map((line, index) => (
                                                    <React.Fragment key={index}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                ))}
                                            </h4>
                                        </div>
                                        <a>{item.label}</a>
                                    </div>
                                ))}
                                <span></span>
                            </div>
                            <h2> Statistics </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}