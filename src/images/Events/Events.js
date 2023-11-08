


import React, { useState } from 'react';
import "./Events.css"
import SideBar from '../Sidebar/SideBar';

function Meeting() {




  const [memberOpen,setMemberOpen] =useState(0)

  const handleClick = (index) =>{
    setMemberOpen(index)
  }


    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [selectedOption, setSelectedOption] = useState('option1'); // Initial value for the dropdown
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onloadend = () => {
          setSelectedFile(file);
          setPreviewUrl(reader.result);
        };
  
        reader.readAsDataURL(file);
      }
    };
  
    const handleUpload = () => {
      // Implement your upload logic here
      console.log('File uploaded:', selectedFile);
      console.log('Selected option:', selectedOption);
    };
  
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };

  return (
    <div className='main-container-App'>
         <SideBar/>
    <div className='Meeting-container'>
       

        <div className='Meeting-con-M'>
        <div className= {`${memberOpen === 0 ? 'meeting-events' : 'meeting-eve'}`} onClick={()=>handleClick(0)}>
          <p >Events</p>
           </div>
        <div className={`${memberOpen === 1 ? 'meeting-events' : 'meeting-eve'}`} onClick={()=>handleClick(1)}>
          <p  className=''>Zoom Meeting</p>
          </div>
        </div>
        
        {memberOpen === 1 &&
          <div className='Meeting-con-main'>
       
            <div className='zoom-meeting-cont'>
              <div className='zoom-meet-code'>
              Meeting ID
              <input type='text' className='input-meet-id'></input>
              </div>
           
            </div>
          </div>
}
    
{memberOpen === 0 &&
           <div className='events-main'>
            <div className='events-tables'> 
          
            <div className='tables-1'>
              <div className='file-upload'>
      <div>
     
        <input type='file' id='fileInput' onChange={handleFileChange} />
      </div>
      {selectedFile && (
        <div className='image-pre'>
          <img src={previewUrl} alt='Preview' style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
      )}
      </div>
      <div>

      
        <select id='dropdown' value={selectedOption} onChange={handleOptionChange}>
        <option >File Type</option>
          <option value='Image'>Image</option>
          <option value='Video'>Video</option>
      
        </select>
      </div>
   
    </div>
           
             <div className='tables-1'> 
    <div className='heading'>Event1</div>
    <input type='file'></input>
             </div>
             <div className='tables-1'> 
    
             </div>
             <div className='tables-1'> 
    
             </div>
            </div>
           </div>
}
<button onClick={handleUpload}>Upload</button>
    </div>
    </div>
  )
}


export default Meeting;





