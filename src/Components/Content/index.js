import {Container, Row, Col} from 'reactstrap';
import ContentItem from './ContentItem';
import './Content.css';

import honest from '../../images/con4.png';
import clock from '../../images/con2.png';
import security from '../../images/con3.png';
import exchange from '../../images/con1.png';

const Content = () => { 

    const items = [
        {
            id: 1,
            title :"ساده",
            text : "استفاده از سرویس آیچنج بسیار ساده بوده و به سادگی \nو بدون داشتن دانش و تجربه قبلی میتوانید دارایی های\n مورد نظر خود را بخرید، بفروشید و به یکدیگر تنبدیل کنید.",
            image : exchange
        },
        {
            id: 2,
            title :"سریع",
            text : "ما تمامی تراکنش ها را در سریع ترین زمان ممکن انجام و برای\n شما ارسال میکنیم تا اطمینان حاصل کنیم که بهترین تجربه را\n با سرویس ما تجربه میکنید.",
            image : clock
        },
        {
            id: 3,
            title :"امن",
            text : "امنیت شما بالاترین اولویت ماست. ما دارایی شما را نزد خود\n نگهداری نمیکنیم و بلافاصله بعد از انجام تراکنش دارایی شما\n را به کیف پولتان واریز مینماییم.",
            image : security
        },
        {   
            id: 4,
            title : "منصفانه",
            text: "دیگر نیاز نیست به دنبال بهترین نرخ برای نبدیل بگردید.\n ما تمام بازار ها را بررسی میکنیم تا بتوانیم بهترین نرخ را\n برای کاربران فراهم کنیم.",
            image : honest
        }
    ]

    return (
        <section className="content">
            <Container>
                <Row>
                    <Col>
                        <h3 className="content-title bold-fa">چرا باید ثُ اکس را انتخاب کنیم؟</h3>
                    </Col>
                </Row>
                <Row className="main-content">
                    {
                        items.map(item => {
                            return <ContentItem
                                key={item.id}
                                title={item.title}
                                text={item.text}
                                image={item.image}/>}

                        )
                    }
                </Row>
            </Container>
        </section>
    );

}

export default Content;