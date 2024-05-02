import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ReszieComp = ({componentId}) => {
    const [Text,setText] = useState('');
    const [dataExists, setDataExists] = useState(false);

    const fetchData = async () =>
    {
           try{const response = await axios.get(`https://text-editor-backend.onrender.com/v1/adds?componentId=${componentId}`)
           const data =  response.data;
           if(data.length>0)
           {
            setText(data[0].text);
            setDataExists(true)
           }
           else
           {
            setDataExists(false)
           }
        }
        catch(err)
        {
            console.log('error is fetching data',err)
        }
    };

    useEffect(()=>
    {
      fetchData();
    },[])

    const handleAddButton  = async () =>
    {
        try {
           await axios.post('https://text-editor-backend.onrender.com/v1/add',
           {
            componentId : componentId,
            content : Text
           });
           setDataExists(true);
        } catch (error) {
            console.log('this is the error',error)
        }
    }

    const handleupdateButton = async () =>
    {
        try {

           await axios.post('https://text-editor-backend.onrender.com/v1/update',
           {
            componentId : componentId,
            content : Text
           });
            
        } catch (error) {
            console.log("there is some error",error)
        }
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }
  return (
    <>
    <div style={{display:'flex', flexDirection:'column'}}>
    <div style={{display:'flex', marginLeft:'20px'}}>
    <button style={{marginRight:'2px'}} onClick={handleAddButton}>Add</button>
    <button onClick={handleupdateButton}disabled={!dataExists}>Update</button>
    </div>
    <textarea value={Text} onChange={handleChange} style={{Height:'200px' , Width :'400px', margin : '20px', minHeight:'100px' ,minWidth:'200px'}}>
    Add text here............
    </textarea>
    </div>
    </>
  )
}

export default ReszieComp