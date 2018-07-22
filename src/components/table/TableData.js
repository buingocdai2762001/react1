import React, { Component } from 'react';
import TableItem from '../tableItem/TableItem';

class TableData extends Component {

    render() {
        // console.log(this.props.dataUserProps)
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện Thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            this.props.dataUserProps.map((value,key)=>{
                                return  <TableItem removeUseClick={(idRemoveUser)=>this.props.removeUseClick(idRemoveUser)} changeEditUserStatus={()=>{this.props.changeEditUserStatus()}} editFunCli={(dl)=>{this.props.editFun(dl)}} key={key} stt={key} dl={value} />
                            })
                        }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;