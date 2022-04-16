import {Col} from 'reactstrap';
import eth from "../../images/svg/eth.svg";
import { Link } from 'react-router-dom';

const StepFour = ({sourceAmount, setSourceAmount, destinationAmount}) => {

    return (
        <Col sm={12} md={6} lg={6} className="p-5">
            <div className="box-exchange">
                <div className="box-exchange-header">
                    <div className="buy"><span>خرید دارایی</span></div>
                    <div className="exchange active"><span>تبادل دارایی</span></div>
                </div>
                <div className="box-exchange-body">
                    <p className="text-center">مشخصات تراکنش</p>
                    
                    <div className="row description-exchange">
                        <div className="col-5">مشخصات سفارش</div>
                        <div className="col-4">زمان انجام</div>
                        <div className="col-3">13 تیر 1400</div>

                        <div className="col-5"></div>
                        <div className="col-4">نرخ تبدیل</div>
                        <div className="col-3">1 trx = 10 btc</div>

                        <div className="col-5"></div>
                        <div className="col-4">شماره تراکنش</div>
                        <div className="col-3">1xrdf3225</div>
                    </div>

                    <div className="row description-exchange mt-3">
                        <div className="col-5">مشخصات تراکنش ورودی</div>
                        <div className="col-4">هش تراکنش</div>
                        <div className="col-3">1xsgdsgds</div>

                        <div className="col-5"></div>
                        <div className="col-4">مقدار</div>
                        <div className="col-3">10 btc</div>

                        <div className="col-5"></div>
                        <div className="col-4">زمان دریافت</div>
                        <div className="col-3">13 تیر 1400</div>
                    </div>
                    <div className="row description-exchange mt-3">
                        <div className="col-5">مشخصات تراکنش خروجی</div>
                        <div className="col-4">هش تراکنش</div>
                        <div className="col-3">1xsgdsgds</div>

                        <div className="col-5"></div>
                        <div className="col-4">آدرس کیف پول</div>
                        <div className="col-3">jhfbsjdfbhsdsd</div>

                        <div className="col-5"></div>
                        <div className="col-4">مقدار</div>
                        <div className="col-3">12</div>
                    </div>
                    <div className="text-center"><Link to="/">شروع تراکنش جدید</Link></div>
                </div>
            </div>
        </Col>
    );
}

export default StepFour;