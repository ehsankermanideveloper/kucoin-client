import './roadmap.css'
import shape1 from "../../images/shape1.png";
import shape2 from "../../images/shape2.png";
import shape3 from "../../images/shape3.png";
import shape4 from "../../images/shape4.png";
import shape5 from "../../images/shape5.png";

const RoadMap = () => {
    return (
        <>
            <div className="container-fluid" id="road-map">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h2 className="text-center">نقشه راه</h2>
                        <p>در زیر ترسیمی از دید ما برای ادامه مسیر، اهداف و برنامه ها می باشد.</p>
                        <p>همواره برای ادامه مسیر نیازمند حمایت و همراهی شما عزیزان هستیم.</p>
                    </div>
                </div>
                <div className="grid-row-5">
                    <div className="grid-item">
                        <span className="road-map-step">01</span>
                        <div className="road-map-plate">
                            <img src={shape1}/>
                        </div>
                        <span className="road-map-year">Q1 2022</span>
                        <div className="road-map-text">
                            <p className="road-map-description">راه اندازی وبسایت و</p>
                            <p className="road-map-description"> شبکه های اجتماعی</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <span className="road-map-step">02</span>
                        <div className="road-map-plate"><img src={shape2}/></div>
                        <span className="road-map-year">Q1 2022</span>
                        <div className="road-map-text">
                            <p className="road-map-description">تکمیل پلن های کسب</p>
                            <p className="road-map-description">درآمد برای همراهان</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <span className="road-map-step">03</span>
                        <div className="road-map-plate"><img src={shape3}/></div>
                        <span className="road-map-year">Q1 2022</span>
                        <div className="road-map-text">
                            <p className="road-map-description">راه اندازی سرویس</p>
                            <p className="road-map-description">درگاه پرداخت کریپتو</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <span className="road-map-step">04</span>
                        <div className="road-map-plate"><img src={shape4}/></div>
                        <span className="road-map-year">Q1 2022</span>
                        <div className="road-map-text">
                            <p className="road-map-description">راه اندازی سرویس</p>
                            <p className="road-map-description">VPN برای کاربران</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <span className="road-map-step">05</span>
                        <div className="road-map-plate"><img src={shape5}/></div>
                        <span className="road-map-year">Q1 2022</span>
                        <div className="road-map-text">
                            <p className="road-map-description">ساخت اعتماد و ارتباط</p>
                            <p className="road-map-description">دو طرفه با کاربرات عزیز</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoadMap;