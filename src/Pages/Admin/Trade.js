import { useGetTradeList } from "../../Hooks";
import TableBasic from "../../Components/tables/Basic";

const Trade = () => {

    const {data} = useGetTradeList();
    
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

export default Trade;