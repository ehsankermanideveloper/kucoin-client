import persons from '../../person.json';
import './table.css'

const TableBasic = () => {


    return (
        <div className="table-box table-basic">
            <div className="table-header">
                <div>
                    <input type="text" className="table-header-search" placeholder="جستجو..."/>
                </div>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>نام</th>
                        <th>موقعیت</th>
                        <th>شرکت</th>
                        <th>سن</th>
                        <th>تاریخ ایجاد</th>
                        <th>حقوق</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                {
                    persons?.persons?.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.position}</td>
                                <td>{item.office}</td>
                                <td>{item.age}</td>
                                <td>{item.startDate}</td>
                                <td>{item.salary}</td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                         className="feather feather-x-circle table-cancel">
                                        <circle cx="12" cy="12" r="10"/>
                                        <line x1="15" y1="9" x2="9" y2="15"/>
                                        <line x1="9" y1="9" x2="15" y2="15"/>
                                    </svg>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
                <tfoot>
                    <tr>
                        <th>نام</th>
                        <th>موقعیت</th>
                        <th>شرکت</th>
                        <th>سن</th>
                        <th>تاریخ ایجاد</th>
                        <th>حقوق</th>
                        <th/>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default TableBasic;