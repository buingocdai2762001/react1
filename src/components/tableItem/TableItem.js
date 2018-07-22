import React, { Component } from 'react';

class TableItem extends Component {
    convertDieuHanh = (heSo) => {
        switch (heSo) {
            case 1:
                return "Admin"
            case 2:
                return "Mod"
            case 3:
                return "Normal"
        
            default:
            return ""
        }
    }
    editClick  = () => {
        this.props.editFunCli(this.props.dl);
        this.props.changeEditUserStatus();
    }
    removeUseClick = () =>{
        this.props.removeUseClick(this.props.dl.id)
    }
    render() {
        return (
            <tr>
            <td >{this.props.stt + 1}</td>
            <td>{this.props.dl.name}</td>
            <td>{this.props.dl.tel}</td>
            <td>{this.convertDieuHanh(this.props.dl.permission)}</td>
            <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua" onClick={()=>this.editClick()}>
                        <i className="fa fa-edit"> Sửa</i>
                    </div>
                    <div className="btn btn-danger xoa">
                        <i className="fa fa-remove" onClick={()=>this.removeUseClick()}> Xóa</i>
                    </div>
                </div>
            </td>
        </tr>
        );
    }
}

export default TableItem;