import './second.css'

///Images
import ceo from '../../assets/Images/ceo-pic.webp';
import name from '../../assets/Images/ceo-name.webp';
import background from '../../assets/Images/whychoose-lines.webp'

export default function Second(){
    return(
        <>
            <div className="about">
                <span> Best SMM Panel </span>
                <h2> Welcome to Growfollows </h2>
                <p> We get it that the SMM panel world can be tough. Plus, you’ve probably run into shady panels, issues with orders, and slow support. Yes, all
                    of this wastes your time and money to do SMM panel tasks. </p>
                <p> As experienced users of the best SMM panel ourselves, we know exactly how frustrating that can be. But hey, don’t worry partner! </p>
                <p> We might not be the biggest SMM panel out there. However, Growfollows have grown fast over the last few years. </p>
                <p> nd, the reason for that? Well, we work to put our client’s needs first and always focus on giving solid yet reliable plans. In other words, you
                    get the best SMM panel services. </p>
                <p> So, if you’re still unsure, no problem! We also offer a free sign-up for new customers to try out our services with no risk. Just reach out to our
                    live support team and ask for your queries to know everything. </p>
                <div className="ceo-box">
                    <div>
                        <img src={ceo} alt="" />
                    </div>
                    <div>
                        <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
                            <img src={name} alt="" />
                            <h5> Growfollows CEO </h5>
                        </div>
                        <h4> Ihsan Mahbub </h4>
                    </div>
                </div>
                <div className="growfollow-box">
                    <div>
                        <h2> Why Choose <br /> Growfollows for Social <br /> Media Growth </h2>
                    </div>
                    <div>
                        <p> Selecting us will help to grow your social media business with our best SMM panel that shows great results: </p>
                    </div>
                </div>
                <div className='background-1'>
                    <img src={background} alt="" />
                </div>
                <div className='background-2'>
                    <img src={background} alt="" />
                </div>
                <div className="flash">
                    <span></span>
                    <span></span>
                </div>
                <div className="choose-flex">
                    <div className='choose-one'>
                        <h3> 01 </h3>
                        <h1> quality service <br /> Guarantee </h1>
                        <p> We focus on giving high-quality services with the cheapest SMM panel that works. And, you get guaranteed results using our outline. </p>
                    </div>
                    <div className="choose-tow">
                        <h3> 02 </h3>
                        <h1> 100% Organic SMM Services </h1>
                        <p> Growfollows helps you get real followers and engagement with no fake accounts or bots. This also helps you get organic reach that’s safe and natural for social media growth. </p><br /><br /><br />
                        <a> Lets Get Started  </a>
                    </div>
                    <div className="choose-three">
                        <h3> 03 </h3>
                        <h1> Easy-to-Use Dashboard </h1>
                        <p> You get a simple and fast-to-get-along dashboard with our best SMM panel. And, it’s easy to manage all the aspects even if you are a first-timer. </p>
                    </div>
                </div>
            </div>
        </>
    )
}