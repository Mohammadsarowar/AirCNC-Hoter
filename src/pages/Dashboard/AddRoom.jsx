import React, { useContext } from 'react';
import AddRoomForm from '../../components/Form/AddRoomForms';
import { useState } from 'react';
import { imageUpload } from '../../api/ultils';
import { AuthContext } from '../../providers/AuthProvider';
import { addRoom } from '../../api/room';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddRoom = () => {
  const {user} = useContext(AuthContext)
   const navigate = useNavigate()
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
       setUploadButtonText('Uploading.....')
       imageUpload(image)
       .then(data=>{
        const roomData = {
          image: data.data.display_url,
          location,
          title,
          host:{
            name:user?.displayName,
            image:user?.photoURL,
            email:user?.email
          },
          from,
          to,
          price,
          guests,
          bedrooms,
          bathrooms,
          description,
          category,
        }
        addRoom(roomData)
        .then(data=>{
          setUploadButtonText('Uploaded')
          setLoading(false)
          toast.success('Room Added!')
          navigate('/dashboard/my-listings')

        })
        .catch(err=>{
          console.log(err.message)
        })
    
      
        setLoading(false)
       })
       .catch(err=>{
        console.log(err.message);
       setLoading(false)
       })
        
       console.log('hello from');
    }
    const handleImageChange = image => {
        setUploadButtonText(image.name)
      }  
      const handleDateChange = (ranges) => {
        console.log(ranges.selection);
        setDates(ranges.selection)
      }
    return (
        <div>
           <AddRoomForm
            handleSubmit={handleSubmit}
           dates={dates}
            loading={loading}
            handleDateChange={handleDateChange}
            handleImageChange={handleImageChange} 
            uploadButtonText={uploadButtonText} />
        </div>
    );
};

export default AddRoom;