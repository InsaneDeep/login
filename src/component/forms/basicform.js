import React, { useState } from 'react'

const BasicForm = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");


    const [allEntry, setAllEntry] = useState([])

    const submitForm = (e) => {
        e.preventDefault();

        

        
        const newEntry = {userId, password};

        // id : new Date().getTime().toString(),
        
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);
        console.log(newEntry);
        
        setUserId("");
        setPassword("");

        
        

    }

  return (
    <>
        <form action='' onSubmit={submitForm}>
            <div className='a'>

            <div className='b'>
                <label htmlFor="userId">User  Id</label><br/>
                <input type="text" name="userId" id="userId"  autoComplete='off'
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder='Enter Your Id Here' required/><br/><br/>
            </div>
            <div className='b'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Enter Your Password Here'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/><br/>

            </div>
            
            <button type="submit">Log in</button>
            
            </div>
        </form>
        {/* <div>
            {
                allEntry.map( (curElem) => {
                    const {id,email,password} = curElem

                    return (
                        <div  key={id} >
                            <p>Email:- {email}</p> 
                            <p>Pwd:- {password}</p>
                            
                        </div>
                        
                    )

                })
            }
        </div> */}
    </>
  )
}

export default BasicForm