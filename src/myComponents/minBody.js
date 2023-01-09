import React, { useState } from 'react';

export const MinBody = (props) => {
    const [Title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit = (e) => {
        e.preventDefault();
        if(!Title || !desc){
            alert("title description should be filled")
        }

    }
    return (
        <div className="container-fluid">
        
            <form onSubmit={submit} className="card container mt-4 mb-4 bg-secondary">
                <label htmlFor="email">Email address</label>
                <input type="email" value={Title} onChange={(e)=>{setTitle(e.target.value)}}
                    className="form-control" id="email" placeholder="Enter email"/>
            
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}
                    className="form-control" id="desc" placeholder="User ID" />

                <button type="submit" className="btn m-3 btn-primary">Submit</button>
            </form>
     
            {props.t ? <p>I'm absolutly fine</p> : "Not here"}
        </div>
    )
}
