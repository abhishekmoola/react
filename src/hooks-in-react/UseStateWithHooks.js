import {useState} from 'react';
import { employeeData } from './EmployeeData';
import Hooks from './Hooks.css'

function UseStateWithHooks(){
    
const [index, setIndex] = useState(0);
    // debugger;
    console.log("Before updating the value " + index);
    function handlerToClick(){
        // debugger;
        setIndex(index +1);
        console.log("after updating the value " + index);
        
    }
    //debugger;
    let data = employeeData[index];
    return(
    <>
     <h1> <span>useState</span>  </h1>
     
    {/* <h1>Before State without Hooks + {index}</h1> */}
    <button onClick = {handlerToClick}>Next</button>
    {/* <h1>After updating the value   + {index}</h1> */}
    <div>
       
         
   
            <table className='employeeData'>
                <thead className='theader'>
                    <tr>
                        <th> NAME </th>
                        <th>AGE</th>
                        <th>ROLE</th>
                    </tr>
                </thead>
                <tbody className='tBody'>
                   { data && data.length< index()
                     (
<tr>
                     <td>{data.name}</td>
                     <td>{data.age}</td>
                     <td>{data.role}</td>
                 </tr>

                     )
                   }
                </tbody>
            </table>
    
        
       

    </div>
    </>
    
    );
    }
    
    export default UseStateWithHooks;