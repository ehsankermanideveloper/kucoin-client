import { useDepositList } from "../../Hooks";
import TableBasic from "../../Components/tables/Basic";

const Deposit = () => {

    const { data } = useDepositList();
    
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

export default Deposit;