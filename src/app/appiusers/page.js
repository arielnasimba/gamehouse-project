// "use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchApiUsers } from "../../redux/slices/testApiSlice";
 async function Page() {
    // const dispatch =  useDispatch();
    // const lib = useSelector(state => state.DB.database);
    // console.log(lib);
    // let tab = products
    const el = fetchApiUsers ;
    console.log(el);
    return(
        <div className="
        ">

           
           <h1>user list from api</h1>
            <button  type="button" className="btn w-[5rem] h-[4rem] bg-slate-500" >Load users</button>

            { el.length > 0 ?
            
                ( <p>teste reusui
                </p> )
            
            : "failed"
            }
        </div>
    )
}

export default Page;