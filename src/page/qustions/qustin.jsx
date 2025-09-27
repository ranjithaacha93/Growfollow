import './qustin.css'

///icon
import { CgEricsson } from "react-icons/cg";
import { DiAppstore } from "react-icons/di";
import { DiHtml53dEffects } from "react-icons/di";

///image
import stil from '../../assets/Images/still-review-img.webp'
import stilimg from '../../assets/Images/still-img.webp'

///map
const data = [
    {
        icon: <CgEricsson />,
        title: "Fast online growth",
        desc: "growth Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab fugit commodi corporis. Voluptate fugit vel laboriosam est, provident eveniet perspiciatis voluptatibus culpa dolor maxime repellendus, hic minima quis accusantium."
    },
    {
        icon: <DiAppstore />,
        title: "Save Valuable Time",
        desc: "growth Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab fugit commodi corporis. Voluptate fugit vel laboriosam est, provident eveniet perspiciatis voluptatibus culpa dolor maxime repellendus, hic minima quis accusantium."
    },
    {
        icon: <DiHtml53dEffects />,
        title: "Increase online presence",
        desc: "growth Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab fugit commodi corporis. Voluptate fugit vel laboriosam est, provident eveniet perspiciatis voluptatibus culpa dolor maxime repellendus, hic minima quis accusantium."
    }
];

export default function qustion() {
    return (
        <>
            <div className="qustion">
                <div className="qustion-top">
                    <h1> Advantages of Using Our <br /> SMM Panel Services </h1>
                    <p> Our SMM service provider comes with vast benefits that you don’t want to miss out on for your businesses. </p>
                </div>
                <div className="qustion-flexbox">
                    {data.map((item, index) => (
                        <div className="moving-box" key={index}>
                            <span>{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="grow-box">
                    <div className="grow-box-left">
                        <h3> Still, Need Any Help Contact With Growfollows </h3>
                        <p> Don’t let confusion slow you down and get our support for the best SMM panel. Now, be sure to reach us at Growfollows and get the help you need. It’s fast and hassle-free! </p>
                        <div>
                            <button> Get Started </button>
                            <img src={stil} alt="" />
                        </div>
                    </div>
                    <div className="grow-box-right">
                        <img src={stilimg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}