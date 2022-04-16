import {Col} from 'reactstrap';
import Select from "../Select";
import eth from "../../images/svg/eth.svg";
import qr from "../../images/QR.svg";
import {useState} from "react";
import {useCurrencies} from "../../Hooks";
import { Link } from 'react-router-dom';
import {QrReader} from 'react-qr-reader';
import close from "../../images/close.png";

const StepOne = ({
    sourceAmount,
    setSourceAmount,
    destinationAmount,
    sourceCurrency,
    setSourceCurrency,
    destinationCurrency,
    setDestinationCurrency,
    sourceNetwork,
    destinationNetwork,
    setSourceNetwork,
    setDestinationNetwork,
    setWallet,
    walletAddress,
    sourceLogo,
    destinationLogo,
    setSourceLogo,
    setDestinationLogo
}) => {

    const [showModalQr, setShowModalQr] = useState(false);

    const handleScanAddress = data => {
        if (data) {
            setWallet(data);
            setShowModalQr(false);
        }
    }
    const handleErrorAddress = err => {
        console.error(err)
    }
    

    const {data : currencies} = useCurrencies();


    return (
        <>
            <Col sm={12} md={6} lg={6} className="p-5">
                <div className="box-exchange">
                    <div className="box-exchange-header">
                        <div className="buy"><span>خرید دارایی</span></div>
                        <div className="exchange active"><span>تبادل دارایی</span></div>
                    </div>
                    <div className="box-exchange-body">
                        <p>انتخاب دارایی های مورد نظر</p>
                        <div className="exchange-body-input">
                            <div className="exchange-body-input-amount">
                                <input
                                    type="number"
                                    className="input-amount"
                                    value={sourceAmount}
                                    onChange={e => setSourceAmount(e.target.value)}
                                />
                                <label>میپردازید</label>
                            </div>
                            <div>
                                <Select label={sourceCurrency} setLogo={setSourceLogo} setCurrency={setSourceCurrency} setNetwork={setSourceNetwork} currencies={currencies} network={sourceNetwork} logo={sourceLogo}/>
                            </div>
                        </div>
                        <div className="exchange-body-input">
                            <div className="exchange-body-input-amount">
                                <input
                                    type="number"
                                    className="input-amount"
                                    value={destinationAmount !== '' ? destinationAmount.priceWithWithdrawFee : ""}
                                    readOnly={true}
                                />
                                <label>دریافت میکنید</label>
                            </div>
                            <div>
                                <Select label={destinationCurrency} setLogo={setDestinationLogo} setCurrency={setDestinationCurrency} setNetwork={setDestinationNetwork} currencies={currencies} network={destinationNetwork} logo={destinationLogo}/>
                            </div>
                        </div>
                        <div className="wallet-address">
                            <input
                                type="text"
                                placeholder="آدرس کیف پول مقصد"
                                aria-autocomplete={"none"}
                                spellCheck={false}
                                value={walletAddress}
                                onChange={e => setWallet(e.target.value)}
                            />
                            <img src={qr} className="qr-code" onClick={() => setShowModalQr(true)}/>
                        </div>
                        <div className=""><button className="button-primary"><Link to="/step-two">تایید</Link></button></div>
                    </div>
                </div>
            </Col>
            <div className={`${showModalQr ? 'modal-qr active' : 'modal-qr'}`}>
                <div className="modal-body">
                    <div className="modal-header"><img src={close} onClick={() => setShowModalQr(false)}/></div>
                    <div className="modal-content">
                        {
                            showModalQr ? <QrReader
                            scanDelay={3000}
                            onResult={(result, error) => {
                              if (!!result) {
                                setWallet(result?.text);
                                setShowModalQr(false)
                              }
                    
                              if (!!error) {
                                console.info(error);
                              }
                            }}
                            style={{ width: '300%' }}
                          /> : null
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default StepOne;