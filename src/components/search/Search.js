import React, { Component } from 'react';
import EditUser from '../editUser/EditUser';

class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            text:''
        }
    }

    getText = (event) => {   
       this.setState({
           text: event.target.value
       })
    }


    hienThiBtn = () => {
        if (this.props.hienthiForm === false) {
            return (<div className="btn btn-outline-info btn-block " onClick={()=>this.props.changeStateBtnForm()}  >Thêm mới user</div>)
        } else {
            return (<div className="btn btn-outline-secondary btn-block " onClick={()=>this.props.changeStateBtnForm()}  >Đóng lại</div>)
        }
    }


    hienThiEditForm=()=>{
        if (this.props.editUserStatus === true) {
            return <EditUser getUserAfterEdit={(dl)=>this.props.getUserAfterEdit(dl)} editUserData={this.props.editUserData} changeEditUserStatus={()=>this.props.changeEditUserStatus()}/>
        } else {
            return <div></div>
        }
    }

    render() {
        return (
            <div>
                <div className="col-12">
                    {this.hienThiEditForm()}
                    <form className="form">
                        <div className="row">
                            <div className="form-group">
                                <div className="btn-group">
                                    <input type="text" className="form-control" onChange={(event)=>this.getText(event)} placeholder="Nhập tên" aria-describedby="helpId" style={{width: 500}} />
                                    <div className="btn btn-info" onClick={()=>this.props.getTextFromSearch(this.state.text)}>Tìm</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <div className="btn-group1">
                                    {this.hienThiBtn()}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-12">
                    <hr />
                </div>
            </div>
        );
    }
}

export default Search;