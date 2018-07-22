import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props){
        super(props);
        this.state={
            id:this.props.editUserData.id,
            name:this.props.editUserData.name,
            tel:this.props.editUserData.tel,
            permission:this.props.editUserData.permission
        }
    }

    isChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    isSubmit = () => {
        this.props.changeEditUserStatus();
        this.props.getUserAfterEdit(
            {
                id: this.state.id,
                name: this.state.name,
                tel: this.state.tel,
                permission: this.state.permission

            }
        );
    }

    render() {
       return (
            <div className="row">
                <form className="col-12">
                    <div className="card border-success mb-3">
                        <div className="card-header">SỬA USER</div>
                        <div className="card-body text-success">
                            <div className="form-group">
                                <label>Tên User</label>
                                <input onChange={(event)=>{this.isChange(event)}} type="text" name="name" defaultValue={this.props.editUserData.name} className="form-control" placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                                <label>Điện Thoại</label>
                                <input onChange={(event)=>{this.isChange(event)}} type="text" name="tel" defaultValue={this.props.editUserData.tel} className="form-control" placeholder="Điện Thoại" />
                            </div>
                            <br />
                            <div className="form-group">
                                <select onChange={(event)=>{this.isChange(event)}} className="custom-select" name="permission" defaultValue={this.props.editUserData.permission} required>
                                    <option value>Chọn Quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" onClick={()=>this.isSubmit()} className="btn btn-success btn-block text-center" value="Lưu lại"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;