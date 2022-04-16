import { useGetCommission } from "../../Hooks";
import TableBasic from "../../Components/tables/Basic";
const Commission = () => {

    const {data} = useGetCommission();
    
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

export default Commission;