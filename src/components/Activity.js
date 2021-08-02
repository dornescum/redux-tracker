import {useDispatch} from "react-redux";
// fol dispatch ca sa ii dau un type si payload
const Activity =(props)=>{
    const dispatch = useDispatch();
    const deleteActivity =()=>{
        dispatch({
            type: "DELETE_ACTIVITY",
            payload:{
                id: props.id
             }
        })
    }
    return <div>
        <p>Activity : {props.name} </p>
        <p>Duration : {props.duration} </p>
        <button onClick={deleteActivity}>Delete</button>
    </div>
}
export default Activity;
