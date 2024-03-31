import React from 'react'

  const ServerComponent = async () =>{

    const res = await fetch("https://www.freetogame.com/api/games");
    const data = await res.json();
  return (
    <div className='w-[50rem] h-[40rem] bg-violet-400'>

        <h1>Server component</h1>

        { data.length > 0 ? 

      (      data.map((el) => {

                return(

                    <div className="">

                        <h2> totle component product</h2>   
                    </div>
                )
            }))
            : 

            "hello"
        } 
    </div>
  )
}

export default ServerComponent;