import './mailbox.css';

const MailBox = () => {
    return (
        <div className="container-fluid mail-box">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="row">
                        <div className="col12">
                            <p>اخبار جدید ما را در اینباکس خود دریافت کنید</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="col-8"><input type="email" className="input-mail" placeholder="آدرس ایمیل"/></div>
                            <div className="col-4"><button className="btn-mail">عضویت در خبرنامه</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MailBox;