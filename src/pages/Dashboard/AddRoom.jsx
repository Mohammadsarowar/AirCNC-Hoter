import React from 'react';
import AddRoomForm from '../../components/Form/AddRoomForms';
import { useState } from 'react';
import { imageUpload } from '../../api/ultils';

const AddRoom = () => {
    const [loading,setLoading] = useState(false)
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      })
    const [uploadButtonText , setUploadButtonText] = useState('Upload image')
    //handle from submit 
    const handleSubmit = (event)=>{
       event.preventDefault()
       setLoading(true)
       const location = event.target.location.value
       const title = event.target.title.value
       const from = dates.startDate
       const to = dates.endDate
       const price = event.target.price.value
       const guests = event.target.total_guest.value
       const bedrooms = event.target.bedrooms.value
       const bathrooms = event.target.bathrooms.value
       const description = event.target.description.value
       const category = event.target.category.value
       const image = event.target.image.files[0]
       imageUpload(image)
       .then(Data=>console.log(Data))
       .catch(error=>{
        console.log(err.message);
       setLoading(false)
       })
        
       console.log('hello from');
    }
    const handleImageChange = image => {
        setUploadButtonText(image.name)
      }  
    return (
        <div>
           <AddRoomForm handleSubmit={handleSubmit} loading={loading} handleImageChange={handleImageChange} uploadButtonText={uploadButtonText} />
        </div>
    );
};

export default AddRoom;