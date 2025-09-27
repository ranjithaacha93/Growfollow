import './fotter.css'

///image
import fotterlogo from '../../assets/Images/logo.png'

///icon
import { LuMessageCircle } from "react-icons/lu";
import { IoIosCall } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";
import { LiaTagsSolid } from "react-icons/lia";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineStream } from "react-icons/md";
import { FaCaretRight } from "react-icons/fa";

export default function fotter(){
    return(
        <>
            <div className="fotter">
                <div className='fotter-box'>
                    <div className='fotter-one'>
                    <img src={fotterlogo} alt="" />
                    <p> <span>Company </span>: GROWFOLLOWS LTD </p>
                    <p> <span>Company Registraion Number </span> : 16165439 </p>
                    <p> <span> Address </span> : Unit 4, Storm 12 Plaza Shopping Centre, 54 St Mary’s Rd, Southampton, United Kingdom, SO14 0BH </p><br />
                    <a> <span><LuMessageCircle/></span> support@growfollows.com </a><br /><br />
                    <a> <span><IoIosCall/></span> +44 7380 800689 </a>
                </div>
                <div className="Quick-Link">
                    <button> Quick Link </button>
                    <p> <span> <MdOutlineHome/> </span> Home </p>
                    <p> <span> <MdMiscellaneousServices/> </span> Service </p>
                    <p> <span> <TbLogin2/> </span> Blog </p>
                    <p> <span> <LiaTagsSolid/> </span> API </p>
                    <p> <span> <IoMdTrendingUp/> </span> Trems </p>
                    <p> <span> <MdOutlineStream/> </span> Faqs </p>
                </div>
                <div className="Quick-Link">
                    <button> Service </button>
                    <p> Facebook SMM Panel </p>
                    <p> Instagram SMM Panel </p>
                    <p> Twitter(x) SMM Panel </p>
                    <p> Youtube SMM Panel </p>
                    <p> Spotify SMM Panel </p>
                    <p> Tiktok SMM Panel </p>
                </div>
                <div className="Quick-Linke">
                    <button> Our Service Area </button>
                    <p> <span> <FaCaretRight/> </span> smm panel in Vietnam </p>
                    <p> <span> <FaCaretRight/> </span> smm panel in Uk </p>
                    <p> <span> <FaCaretRight/> </span> smm panel in Thailand </p>
                    <p> <span> <FaCaretRight/> </span> smm panel in Pakistan </p>
                    <p> <span> <FaCaretRight/> </span> smm panel in Nigeria </p>
                    <p> <span> <FaCaretRight/> </span> smm panel in Indonesia  </p>
                    <p> <span> <FaCaretRight/> </span> smm panel in India  </p>
                    <p> <span> <FaCaretRight/> </span> smm panel in Egupt  </p>
                    <p> <span> <FaCaretRight/> </span> smm panel in Brazail  </p>
                </div>
                </div>
            </div>
        </>
    )
}