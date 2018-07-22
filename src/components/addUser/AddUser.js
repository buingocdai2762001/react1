import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props){
        super(props);
        this.state={
            id:"",
            name:"",
            tel:"",
            permission:""
        }
    }

    // changeStateBtnForm = () => {
    //     this.setState({
    //         trangThaiBtnForm : ! this.state.trangThaiBtnForm
    //     })
    // }

    // changeBtnToForm = () => {
    //     if (this.state.trangThaiBtnForm === true) {
    //         return(
    //             <div className="btn btn-outline-info btn-block mb-3" onClick={this.changeStateBtnForm}>Thêm mới user</div>
    //         )
    //     } else {
    //         return(
    //                 <div className="btn btn-outline-secondary btn-block mb-3" onClick={this.changeStateBtnForm}>Đóng lại</div> 
    //         )
    //     }
    // }
    // hienThiForm = ()=>{
    //     if (this.state.trangThaiBtnForm === true) {
    //         return(
    //             <div></div>
    //         )
    //     } else {
    //         return(
    //             <div className="card border-primary mb-3">
    //                 <div className="card-header">Thêm mới</div>
    //                 <div className="card-body text-primary">
    //                     <div className="form-group">
    //                         <label>Tên User</label>
    //                         <input type="text" className="form-control" placeholder="Tên User" />
    //                     </div>
    //                     <div className="form-group">
    //                         <label>Điện Thoại</label>
    //                         <input type="text" className="form-control" placeholder="Điện Thoại" />
    //                     </div>
    //                     <br />
    //                     <div className="form-group">
    //                         <select className="custom-select" required>
    //                             <option value>Chọn Quyền mặc định</option>
    //                             <option value={1}>Admin</option>
    //                             <option value={2}>Modrator</option>
    //                             <option value={3}>Normal</option>
    //                         </select>
    //                     </div>
    //                     <div className="form-group">
    //                         <div className="btn btn-info btn-block text-center"  onClick={this.changeStateBtnForm}>
    //                             Thêm mới
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     }
    // }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]:value
        })
    
    }
    
    submitForm = () => {
        if (this.state.name === "") {
            alert('Thieu ten')
        } else {
            this.props.sendUser([this.state.name, this.state.tel, parseInt(this.state.permission, 20)])
            this.setState({
                id: "",
                name: "",
                tel: "",
                permission: ""
            })
        }
        
    }

    HienthiForm = () => {
        if (this.props.hienthiForm === true) {
            return(
                <div className="col-12">
                    <form >
                    <div className="card border-primary mb-3">
                        <div className="card-header">Thêm mới</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <label>Tên User</label>
                                <input type="text" name="name" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                                <label>Điện Thoại</label>
                                <input type="text" name="tel" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Điện Thoại" />
                            </div>
                            <br />
                            <div className="form-group">
                                <select className="custom-select" name="permission" onChange={(event)=>this.isChange(event)} required>
                                    <option value>Chọn Quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-info btn-block text-center" onClick={()=>this.submitForm()} value="Thêm mới"/>                                      
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            )
        } else {
            return(
                <div></div>
            )
        }
    }
    render() {
       

        return (
            <div>
                {/* {this.changeBtnToForm()} */}
                {/* {this.hienThiForm()} */}
                {this.HienthiForm()}
            </div>
        );
    }
}

export default AddUser;

