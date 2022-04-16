import {useState} from 'react';
import {Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import qr from "../../images/QR.svg";
import QrCode from 'react-qr-code';
import close from "../../images/close.png";

const StepThree = ({sourceAmount, sourceCurrency, depositAddress, setHashTransaction, hashTransaction, handleCheckTrade}) => {

    const [showQrCode, setShowQrCode] = useState(false)

    return (
        <>
            <Col sm={12} md={6} lg={6} className="p-5">
                <div className="box-exchange">
                    <div className="box-exchange-header">
                        <div className="buy"><span>خرید دارایی</span></div>
                        <div className="exchange active"><span>تبادل دارایی</span></div>
                    </div>
                    <div className="box-exchange-body row flex-column align-items-center">
                        <p className="text-center">ارسال دارایی</p>
                        <div className="col-12 text-center">
                            <p>{sourceAmount} {sourceCurrency.toUpperCase()} به کیف پول</p>
                        </div>

                        <div className="col-12 text-center">
                            <p>
                                {
                                    depositAddress ? depositAddress[0]?.address : ""
                                }
                            </p>
                        </div>
                        <div className="col-5">
                            <button className="w-100 d-flex justify-content-around" onClick={() => setShowQrCode(true)}><span>نمایش کد QR</span><img src={qr} className="show-qr-btn"/></button>
                        </div>

                        <div className="col-12 wallet-address">
                            <input
                                value={hashTransaction}
                                onChange={e => setHashTransaction(e.target.value)}
                                type="text"
                                placeholder="شناسه / آیدی / هش تراکنش را وارد نمایید"
                                aria-autocomplete={"none"}
                            />
                        </div>

                        <div className="col-12"><button className="button-primary" onClick={handleCheckTrade}>ثبت</button></div>

                        <div className="col-6 d-flex justify-content-between">
                            <span className="loader"/>
                            <p>در انتظار دریافت</p>
                        </div>
                    </div>
                </div>
            </Col>
            <div className={`${showQrCode ? 'modal-qr active' : 'modal-qr'}`}>
                <div className="modal-body">
                    <div className="modal-header"><img src={close} onClick={() => setShowQrCode(false)}/></div>
                    <div className="modal-content">
                        {
                            depositAddress ? <QrCode value={ depositAddress ? depositAddress[0]?.address : ""}/> : null
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default StepThree;