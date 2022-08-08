import React,{Component} from "react";
class Todoitem extends Component{
    constructor(props){
        super(props);
        this.handitemclickup=  this.handitemclickup.bind(this);
    }
    handitemclickup(){
        const {deleteFunction,index}=this.props;
        deleteFunction(index)
    //    this.props.deleteFunction(this.props.index)
    }
    render(){
        const {value}=this.props;
        return <li onClick={this.handitemclickup}>{value}</li>

    }
}
export default Todoitem;