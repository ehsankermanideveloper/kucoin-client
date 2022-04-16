import {Col} from 'reactstrap';
import eth from "../../images/svg/eth.svg";
import copy from "../../images/copy.png";
import { Link } from 'react-router-dom';
import {copyToClipboard} from "../../utils/copyToClipboard";

const StepTwo = ({
        sourceCurrency,
        destinationCurrency,
        sourceAmount,
        destinationAmount,
        destinationNetwork,
        sourceNetwork,
        handleAddTrade,
        walletAddress,
        depositAddress,
        sourceLogo,
        destinationLogo
    }) => {

    return (
        <Col sm={12} md={6} lg={6} className="p-5">
            <div className="box-exchange">
                <div className="box-exchange-header">
                    <div className="buy"><span>خرید دارایی</span></div>
                    <div className="exchange active"><span>تبادل دارایی</span></div>
                </div>
                <div className="box-exchange-body">
                    <p className="text-center">لطفا تراکنش را تایید کنید</p>
                    <div className="row">
                        <div className="col-5">
                            <div className="peyment-box">
                                <div className="d-flex flex-column justify-content-evenly align-items-center">
                                    <span>{sourceAmount}</span>
                                    <div className="d-flex align-items-center justify-content-evenly w-100">
                                        <span>{sourceCurrency}</span>
                                        <span><img src={sourceLogo} className="logo-currency"/></span>
                                    </div>
                                </div>
                                <p className="text-center mt-3 mb-0">شما می پردازید</p>
                            </div>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-5">
                            <div className="received-box">
                                <div className="d-flex flex-column justify-content-evenly align-items-center">
                                    <span>{destinationAmount !== '' ? destinationAmount.priceWithWithdrawFee : ""}</span>
                                    <div className="d-flex align-items-center justify-content-evenly w-100">
                                        <span>{destinationCurrency}</span>
                                        <span><img src={destinationLogo} className="logo-currency"/></span>
                                    </div>
                                </div>
                                <p className="text-center mt-3 mb-0">دریافت میکنید</p>
                            </div>
                        </div>

                        <div className="col-12 d-flex justify-content-center mt-4">
                            <p><span>{sourceAmount} {sourceCurrency}</span> = <span>{destinationAmount !== '' ? destinationAmount.priceWithWithdrawFee : ""} {destinationCurrency}</span></p>
                        </div>

                        <div className="col-12 d-flex justify-content-between">
                            <p className="p-0">آدرس کیف پول مقصد</p>
                            <p className="d-flex align-items-center p-0"><img src={copy} className="copy-icon" onClick={() => copyToClipboard(depositAddress ? depositAddress[0]?.address : "")}/>
                                {
                                    walletAddress ? walletAddress : ""
                                }
                            </p>
                        </div>
                        {
                            depositAddress && depositAddress[0]?.memo !== '' && <div className="col-12 d-flex justify-content-between">
                            <p className="p-0">تگ / ممو</p>
                            <p className="d-flex align-items-center p-0"><img src={copy} className="copy-icon" onClick={() => copyToClipboard(depositAddress ? depositAddress[0]?.memo : "")}/>
                                {
                                    walletAddress ? walletAddress : ""
                                }
                            </p>
                        </div>
                        }

                        <div className="col-12">
                            <input type="checkbox"/>قوانین و مقررات استفاده از سرویس ثُ اکس و حریم خصوصی را با دقت خوانده ام و از خطرات و ریسک های احتمالی آگاهی دارم.
                        </div>
                    </div>
                    <div className="col-12 d-flex">
                        <div className="w-100"><button className="button-primary" onClick={handleAddTrade}>تایید</button></div>
                        <div className="me-3 w-100"><button className="button-primary-outline"><Link to="/">بازگشت</Link></button></div>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default StepTwo;