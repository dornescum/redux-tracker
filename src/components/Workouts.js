import Activity from "./Activity";
import {useSelector} from "react-redux";
import {useState} from "react";
import AddActivity from "./AddActivity";


const Workouts =()=>{
    const allActivities = useSelector((state)=> state.activities);
    const [add, setAdd]=useState(false);

    return <div>
        <h2>My workouts</h2>
        <button onClick={()=>setAdd(!add)}>Add Activity</button>
        {add && <AddActivity />}
        {allActivities.map((activity)=>{
            console.log(activity)
            return  <Activity key={activity.id} name={activity.name} duration={activity.duration}
            id={activity.id}
            />
        })}

    </div>
}
export default Workouts;
