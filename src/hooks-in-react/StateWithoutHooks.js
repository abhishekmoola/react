import { employeeData } from "./EmployeeData.js";

function StateWithoutHooks(){
    
//debugger;
let index = 0;

console.log("Before updating the value " + index);
function handlerToClick(){
    //debugger;
    index = index + 1;
    console.log("after updating the value " + index);
    //debugger;
}
let data = employeeData[index];
//debugger;

return(
<>
<h1> Without Hooks </h1>
<h1>Before State without Hooks + {index}</h1>
<button onClick = {handlerToClick}>Next</button>
<h2>
    <ul>
        <li> NAME : {data.name}</li>
        <li>AGE : {data.age}</li>
        <li> ROLE : {data.role}</li>
    </ul>
</h2>
{/* <h1>After updating the value   + {index}</h1> */}
</>

);
}

export default StateWithoutHooks;