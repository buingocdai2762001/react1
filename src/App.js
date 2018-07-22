import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Search from './components/search/Search';
import TableData from './components/table/TableData';
import AddUser from './components/addUser/AddUser';
import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');
class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      hienthiForm:false,
      dataUser:DataUser,
      searchText:'',
      editUserStatus:false,
      editUserData:''
    }
  }

  
  componentWillMount() {
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        dataUser:temp
      })
    }
  }
  
  setLocalState = () => {
     localStorage.setItem('userData',JSON.stringify(this.state.dataUser))
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus:!this.state.editUserStatus
    })
  }

  getTextFromSearch = (dl)=>{
    this.setState({
      searchText:dl
    })
  }

  editUser = (dl) => {
     this.setState({
       editUserData:dl
     })
     this.setLocalState()
  }

  getUsers = (newUser) => {
    var id = uuidv1();
    var name = newUser[0];
    var tel = newUser[1];
    var permission = newUser[2];
    var item = {};
    item.id = id;
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.dataUser;
    items.push(item);
    // console.log(items)
    this.setState({
      dataUser:items
    })
    this.setLocalState()
  }

  removeUseClick = (idRemoveUser) => {
    var temp = this.state.dataUser;
    temp = temp.filter(item=>item.id !== idRemoveUser)
    this.setState({
      dataUser:temp
    })
    localStorage.setItem('userData',JSON.stringify(temp))
  }

  ChangeStateBtnForm = ()=>{
    this.setState({
      hienthiForm: !this.state.hienthiForm
    })
  }

  getUserAfterEdit = (dl) => {
    this.state.dataUser.forEach((el)=>{
      if(el.id === dl.id){
        el.name = dl.name;
        el.tel = dl.tel;
        el.permission = dl.permission;
      }
    })
    this.setLocalState()
  }

  render() {
    var ketQua = [];
    this.state.dataUser.forEach((el)=>{
      if(el.name.indexOf(this.state.searchText) !== -1){
        ketQua.push(el)
      }
    })
    return (
        <div className="App">
          <Header/>
          {/* <div className="searchForm">         
          </div> */}
          <div className="container">
              <div className="row">
              <div className="col-12">
                <Search 
                getUserAfterEdit = {(dl)=>{this.getUserAfterEdit(dl)}}
                editUserData = {this.state.editUserData}
                changeEditUserStatus = {()=>{this.changeEditUserStatus()}}
                editUserStatus={this.state.editUserStatus} 
                getTextFromSearch={(dl)=>this.getTextFromSearch(dl)} 
                hienthiForm={this.state.hienthiForm} 
                changeStateBtnForm={()=>this.ChangeStateBtnForm()}/>
                </div>
                <TableData 
                removeUseClick ={(idRemoveUser)=>{this.removeUseClick(idRemoveUser)}}
                changeEditUserStatus = {()=>{this.changeEditUserStatus()}}
                editUserStatus={this.state.editUserStatus} 
                editFun={(dl)=>{this.editUser(dl)}}
                dataUserProps={ketQua}/>
                <AddUser sendUser={(dl)=> this.getUsers(dl)} hienthiForm={this.state.hienthiForm}/>
                <br/>
                <br/>
              </div>
            </div>

        </div>
    );
  }
}

export default App;
