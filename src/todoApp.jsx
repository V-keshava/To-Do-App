import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash ,faSquareCheck} from "@fortawesome/free-solid-svg-icons";
import './todoApp.css'


class TodoList extends React.Component{
    constructor(){
        super();
        this.state={
            id:0,
            task:[],
            currentTask:"",
            edidingTaskid:null,
            editingtasktext:""
        }
    }
    submittion=(e)=>{
        e.preventDefault();
       if(this.state.currentTask!==""){
        const newTask={
            id:this.state.task.length+1,
            text:this.state.currentTask,
        };
        this.setState({
            task:[...this.state.task,newTask],
            currentTask:"",
        })
       }
       else{
        alert("Can't add empyt task or null")
       }
    }
    changing=(e)=>{
        this.setState({currentTask:e.target.value})
    }
    resubmittion=(e)=>{
        e.preventDefault();
        const updateTask=this.state.task.map((val)=>{
            if(val.id === this.state.edidingTaskid){
                return {...val, text:this.state.editingtasktext}
            }
            else{
                return val;
            }
        });
        this.setState({
            task:updateTask,
            edidingTaskid:null,
            editingtasktext:""
        })
    }
    editingTask=(e)=>{
        this.setState({editingtasktext:e.target.value});
    }
    edit=(id,text)=>{
        this.setState({
            edidingTaskid:id,
            editingtasktext:text,
        })
    }
    delete=(id)=>{
        const result=this.state.task.filter((val)=>val.id!==id);
        this.setState({task:result})
    }
    render(){
        return(
            <div>
            
           <div id="postmain">
           
             <div id="main">
             <h2 id="heading">ToDo App</h2>
                <form action=""onSubmit={this.submittion} id="form">
                    <input type="text" value={this.state.currentTask} onChange={this.changing} className="input1" />
                    <button className="add">Add Task</button>
                </form>
                <ol id="ordlst">
                    { this.state.task.map((activity)=>(
                        <li key={activity.id} id="lstitm">
                            {this.state.edidingTaskid === activity.id ? (
                                <form action="" onSubmit={this.resubmittion}>
                                    <input type="text" value={this.state.editingtasktext} onChange={this.editingTask} className="input2"/>
                                    <button id="save"><FontAwesomeIcon icon={faSquareCheck} size="2x" /></button>
                                </form>
                            ):(
                                <div id="matter">
                                    
                                    <div id="content">
                                    <p id="activity">{activity.text}</p>
                                    </div>
                                    <div id="buttons">
                                    <button onClick={()=>this.edit(activity.id, activity.text)} id="edit"><FontAwesomeIcon icon={faEdit} size="lg" /></button>
                                    <button onClick={()=>this.delete(activity.id)} id="delete"><FontAwesomeIcon icon={ faTrash} size="lg" /></button>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
           </div>
           </div>
        )
    }

}
export default TodoList;