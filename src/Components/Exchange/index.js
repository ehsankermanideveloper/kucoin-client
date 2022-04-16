import {Container, Row, Col} from 'reactstrap';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import StepOne from './StepOne';
import './exchange.css';
import {useEffect, useState} from "react";
import {useEstimate, useCurrencies, useCurrency, useAddTrade, useFetchDepositAddress, useTrade} from "../../Hooks";
import StepFour from './StepFour';
import StepThree from './StepThree';
import StepTwo from './StepTwo';
import eth from "../../images/svg/eth.svg";
import btc from "../../images/BTC.png";

let step = 1;
const Exchange = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [sourceCurrency, setSourceCurrency] = useState("btc");
    const [destinationCurrency, setDestinationCurrency] = useState("eth");
    const [sourceNetwork, setSourceNetwork] = useState("btc");
    const [destinationNetwork, setDestinationNetwork] = useState("trc20");
    const [sourceLogo, setSourceLogo] = useState(btc);
    const [destinationLogo, setDestinationLogo] = useState(eth);
    const [sourceAmount, setSourceAmount] = useState(1);
    const [destinationAmount, setDestinationAmount] = useState("");
    const [tradeId, setTradeId] = useState(null);
    const [hashTransaction, setHashTransaction] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const {mutateAsync : currency} = useCurrency();
    const {mutateAsync : estimate} = useEstimate();
    const {mutateAsync : addTrade} = useAddTrade();
    const {mutateAsync : trade} = useTrade();
    const {data : currencies} = useCurrencies();
    const {data : allDepositAddress} = useFetchDepositAddress(sourceCurrency);

    const depositAddress = allDepositAddress?.filter(item => {
        if(item.chain === sourceNetwork.toUpperCase()) {
            return (item)
        }
    });
    
    const setWallet = value => {
        setWalletAddress(value)
    }

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                step = 1;
                break;
            case '/step-two':
                step = 2;
                break;
            case '/step-three':
                step = 3;
                break;
            case '/step-four':
                step = 4;
                break;
            default:
                step = 1;
                break;
        }
        console.log(step)
    }, [location])

    useEffect(() => {
        const first = currencies?.find(item => item.currency === "BTC");
        const second = currencies?.find(item => item.currency === "ETH");
        setSourceCurrency(first?.name);
        setDestinationCurrency(second?.name);
        setSourceLogo(first?.logo);
        setDestinationLogo(second?.logo)
    },[currencies])
    useEffect(async () => {

        const values = {
            sourceCurrency,
            destinationCurrency,
            destinationNetwork,
            sourceAmount
        }
        if(parseFloat(sourceAmount) > 0) {
            const data = await estimate(values)
            setDestinationAmount(data);
        } else {
            setDestinationAmount("");
        }
    }, [sourceAmount, sourceCurrency, sourceNetwork, destinationCurrency, destinationNetwork]);

    const handleAddTrade = async () => {
        const formValues = {
            from : sourceCurrency,
            to : destinationCurrency,
            fromNetwork: sourceNetwork,
            toNetwork: destinationNetwork,
            estimate: JSON.stringify(destinationAmount),
            withdrawAddress : walletAddress,
            depositAddress: depositAddress ? depositAddress[0]?.address : ""
        }
        const data = await addTrade(formValues);
        setTradeId(data._id);
        console.log(data)
        if(data) navigate('/step-three')
    }

    const handleCheckTrade = async () => {
        const params = {
            tradeId,
            destinationCurrency,
            hashTransaction,
            amount : destinationAmount.priceWithWithdrawFee
        }
        const data = await trade(params);
        console.log(data);

    }

    return (
        <section id="Exchange">
            <Container fluid className="h-100" style={{minHeight: "calc(100vh - 82px)"}}>
                <Row className="h-100"  style={{minHeight: "calc(100vh - 82px)"}}>
                    <Col sm={12} md={6} lg={6} className="d-md-block d-sm-none d-none">
                        <div className="row h-100">
                            <div className="col-12">
                                <h2>انواع دارایی رمزنگاری شده را به راحتی بخرید.</h2>
                            </div>
                            <div className={`row-step ${step === 1 ? "row-step-active" : ""}`}>
                                <div className="col-step"><span className={`step-number ${step === 1 ? "step-active" : "step-passed"}`}>1</span></div>
                                <div>انتخاب مشخصات تبادل</div>
                            </div>
                            <div className={`row-step ${step === 2 ? "row-step-active" : ""}`}>
                                <div className="col-step"><span className={`step-number ${step > 2 ? "step-passed" : step === 2 ? "step-active" : ""}`}>2</span></div>
                                <div>
                                    <h3>تایید تراکنش</h3>
                                    <p>لطفا مشخصات تراکنش و آدرس کیف پول خود را چک کنید و ضمن مطالعه دقیق قوانین و مقررات تراکنش را تایید کنید.</p>
                                </div>
                            </div>
                            <div className={`row-step ${step === 3 ? "row-step-active" : ""}`}>
                                <div className="col-step"><span className={`step-number ${step > 3 ? "step-passed" : step === 3 ? "step-active" : ""}`}>3</span></div>
                                <div>
                                    <h3>ارسال دارایی</h3>
                                    <p>لطفا دارایی که قصد تبدیل آن را دارید ارسال کنید و شناسه تراکنش را ثبت نمایید.</p>
                                </div>
                            </div>
                            <div className={`row-step ${step === 4 ? "row-step-active" : ""}`}>
                                <div className="col-step"><span className={`step-number ${step > 4 ? "step-passed" : step === 4 ? "step-active" : ""}`}>4</span></div>
                                <div>
                                    <h3>مشخصات تراکنش ارسالی</h3>
                                    <p>دارایی شما پس از تایید دریافت بلافاصله تبدیل شده و برای شما به آدرس کیف پولتان ارسال می گردد. شما میتوانید مشخصات تراکنش را برای پیگیری ذخیره نمایید.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                        <>
                            <Routes> 
                                <Route
                                    path="/"
                                    element={<StepOne
                                                sourceCurrency={sourceCurrency}
                                                setSourceCurrency={setSourceCurrency}
                                                sourceNetwork={sourceNetwork}
                                                destinationNetwork={destinationNetwork}
                                                setSourceNetwork={setSourceNetwork}
                                                setDestinationNetwork={setDestinationNetwork}
                                                destinationCurrency={destinationCurrency}
                                                setDestinationCurrency={setDestinationCurrency}
                                                sourceAmount={sourceAmount}
                                                setSourceAmount={setSourceAmount}
                                                destinationAmount={destinationAmount}
                                                setDestinationAmount={setDestinationAmount}
                                                setWallet={setWallet}
                                                walletAddress={walletAddress}
                                                sourceLogo={sourceLogo}
                                                destinationLogo={destinationLogo}
                                                setSourceLogo={setSourceLogo}
                                                setDestinationLogo={setDestinationLogo}
                                            />
                                    }
                                />
                                <Route
                                    path="/step-two"
                                    element={<StepTwo
                                                sourceCurrency={sourceCurrency}
                                                destinationCurrency={destinationCurrency}
                                                sourceNetwork={sourceNetwork}
                                                destinationNetwork={destinationNetwork}
                                                sourceAmount={sourceAmount}
                                                destinationAmount={destinationAmount}
                                                handleAddTrade={handleAddTrade}
                                                walletAddress={walletAddress}
                                                depositAddress={depositAddress}
                                                sourceLogo={sourceLogo}
                                                destinationLogo={destinationLogo}
                                            />
                                    }
                                />
                                <Route
                                    path="/step-three"
                                    element={<StepThree
                                                sourceAmount={sourceAmount}
                                                sourceCurrency={sourceCurrency}
                                                depositAddress={depositAddress}
                                                hashTransaction={hashTransaction}
                                                setHashTransaction={setHashTransaction}
                                                handleCheckTrade={handleCheckTrade}
                                            />
                                    }
                                />
                                <Route
                                    path="/step-four"
                                    element={<StepFour
                                                sourceAmount={sourceAmount}
                                                setSourceAmount={setSourceAmount}
                                                destinationAmount={destinationAmount}
                                                setDestinationAmount={setDestinationAmount}
                                            />
                                    }
                                />
                            </Routes>
                        </>
                </Row>
            </Container>
        </section>
    )
}

export default Exchange;