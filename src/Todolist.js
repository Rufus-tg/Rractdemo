import React,{Component,Fragment} from "react";
import Todoitems from "./Todoitem";
class Todolist extends Component{
  constructor(props){
    super(props);
    this.handleInputChang=this.handleInputChang.bind(this)//简写方法调用
    this.handclickup=this.handclickup.bind(this)
    this.state={
      inputValue:'',
      list:['lean React','lean Component']
    }
  }
  handleInputChang(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  handleKeyUp(e){
    if(e.keyCode === 13){
      const list =[...this.state.list,this.state.inputValue];
      this.setState({
        list:list,
        inputValue:''
      })
    }
  }
  handclickup(index){
console.log(index)
const list =[...this.state.list];
list.splice(index,1)
this.setState({
  list:list
})
  }
  getlistitems(){
    return this.state.list.map((value,index)=>{
      // return <li key={index} onClick={this.handclickup.bind(this,index)}>{value}</li>
      return <Todoitems value={value} key={index} deleteFunction={this.handclickup}></Todoitems>
    })
  }
  render(){
  return (
  <Fragment>
    <label htmlFor="myinput">请输入内容：</label>
    <input 
    value={this.state.inputValue}
    onChange={this.handleInputChang}
    onKeyUp={this.handleKeyUp.bind(this)}
     />
    <ul>
      {this.getlistitems()}
    </ul>
  </Fragment>
  );
}
}
export default Todolist;
