import { useGetOrderList } from "../../Hooks";
import TableBasic from "../../Components/tables/Basic";

const Order = () => {

    const {data} = useGetOrderList();
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <TableBasic/>
                </div>
            </div>
        </div>
    )
}

export default Order;