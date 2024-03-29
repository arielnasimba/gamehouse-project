import Link from "next/link";
import { useState } from "react"
import { useDispatch } from "react-redux"

export default function AddUsers() {
    const [name, setName] = useState("")
    const dispatch =  useDispatch();
    const userDispatch=()=>{
        dispatch(addUser(name))
    }
  return (
    <div className="add-user">
        <h3>Add Users</h3>
        <input type="text"
        className="add-user-input"
        onChange={(e) => setName(e.target.value)}
        placeholder="add new user"
        />
        <button onClick={userDispatch}
            className="add-user-btn"
        >ADD user</button>
        <Link href={`/`}> Remove user</Link>
        <Link href={`/`}> Go to todo page</Link>
        <Link href={`/`}> go to apu user list page  </Link>
    </div>
  )
}
