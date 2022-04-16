import './profit.css';
import person from "../../images/person1.png";

const Profit = () => {
    return (
        <div className="container-fluid profit">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center">در سود ما سهیم باشید و کسب درآمد کنید.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <p>
                    با معرفی ما به دوستانتان و دعوت آنها با
لینک اختصاصی خود، برای همیشه تا 40%
از کارمزد معاملاتشان از طرف آیچنج به شما 
تعلق می‌گیرد.
                    </p>
                    <p>
                    با استفاده از API های ثُ اکس وبسایت شخصی
خود را بسازید و به عنوان شریک تجاری همراه
ما کسب در آمد کنید.
                    </p>
                    <button>بیشتر بدانید</button>
                </div>
                <div className="col-7">
                    <img src={person} className="w-100"/>
                </div>
            </div>
        </div>

    )
}

export default Profit;