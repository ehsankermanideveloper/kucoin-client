import './select.css'
import {useState, useRef, useEffect} from "react";
import chevron from "../../images/svg/chevron-bottom.svg";
import { useCurrency } from '../../Hooks';

const Select = ({logo, label, network, currencies, setCurrency, setNetwork, setLogo}) =>  {

    const [show, setShow] = useState(false);
    const [chains, setChains] = useState([]);

    const selectRef = useRef(null);

    const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setShow(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const {mutateAsync} = useCurrency();

    const getNetworks = async (id) => {
        setCurrency(id);
        const data = await mutateAsync(id);
        setChains(data);
    }

    return (
        <div className="select" ref={selectRef} >
            <div className="label" onClick={() => setShow(prevState => !prevState)}>
                <img src={chevron} className="chevron"/>
                <div className="currency-label">
                    <span>{label}</span>
                    <span>{network}</span>
                </div>
                <img src={logo} className="logo-currency"/>
            </div>
            <div className={`list-currency flex-column ${show ? "d-flex" : "d-none"}`}>
                <p>انتخاب دارایی مورد نظر برای ارسال</p>
                <input type="text" className="search-currency" placeholder="دارایی مورد نظر را جستجو کنید"/>
                <ul>
                    {
                        currencies?.map((currency,index) => {
                            return (
                                <>
                                    <li key={index}>
                                        <div onClick={() => {
                                            getNetworks(currency.name)
                                            setLogo(currency.logo)
                                            }}>
                                            <span>{currency.fullName}</span>
                                            <span>{currency.currency}</span>
                                            <img src={currency.logo ? currency.logo : null} alt="logo" className="logo-currency"/>
                                        </div>
                                        {
                                        chains && chains.name === currency.name && (<div className="row row-reverse flex-wrap chain-box w-100 justify-content-end">
                                            {
                                                chains?.chains?.map((chain, index) => {
                                                    return (
                                                    <>
                                                        <div className="col-3 d-flex align-items-center justify-content-end">
                                                        <span key={index} className="ms-2">{chain.chainName}</span>
                                                        <input type="radio" name="network" value={chain.chainName} onChange={e => setNetwork(e.target.value)}/>
                                                        </div>
                                                    </>
                                                    )
                                                })
                                            }
                                </div>)
                                    }
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Select;