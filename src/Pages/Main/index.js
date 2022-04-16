import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import Content from "../../Components/Content";
import Profit from "../../Components/Profit";
import MailBox from "../../Components/MailBox";
import Exchange from "../../Components/Exchange";
import RoadMap from "../../Components/RoadMap";

const Main = () => {

    return (
        <>
            <Header />
            <Exchange />
            <Content />
            <Profit />
            <MailBox />
            <RoadMap />
            <Footer />
        </>
    )
}

export default Main;