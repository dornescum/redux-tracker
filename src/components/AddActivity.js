import {useState} from "react";
import {useDispatch} from "react-redux";

const AddActivity = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        duration: ""
    });
    const handleChange = (e) => {
        // nu am avut nevoie
        // e.persist();
        setData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
    console.log(data)
    const addActivity = () => {
        dispatch({
            // este obligatoriu sa fie numit type
            type: "CREATE_ACTIVITY",
            payload: {
                name: data.name,
                duration: data.duration
            }
        })
    }
    return <div>
        <div>
            <p>Activity:</p>
            <input type="text" name={"name"} placeholder={"Activity name ..."} onChange={(e) => handleChange(e)}/>
        </div>
        <div>
            <p>Duration:</p>
            <input type="text" name={"duration"} placeholder={"Activity name ..."} onChange={(e) => handleChange(e)}/>
        </div>
        <button onClick={addActivity}>Add activity</button>
    </div>
}
export default AddActivity;
