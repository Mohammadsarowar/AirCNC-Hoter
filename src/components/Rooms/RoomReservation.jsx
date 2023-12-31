import React, { useContext, useState } from "react";
import { formatDistance } from 'date-fns'
import { DateRange } from 'react-date-range'
import Calender from "./Calender";
import Button from "../Button/Button";
import { AuthContext } from "../../providers/AuthProvider";
import BookingModal from "../Modal/BookingModal";
import { addBooking, updateStatus } from "../../api/booking";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RoomReservation = ({roomData}) => {
  const navigate = useNavigate()
    const {user, role} = useContext(AuthContext)
    const [dates, setDates] = useState({
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    })
    console.log(dates);
   // Price Calculation
   const totalPrice =
   parseFloat(
     formatDistance(new Date( dates?.startDate), new Date(dates.endDate)).split(
       ' '
     )[0]
   ) * roomData.price;
   console.log(totalPrice);
const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
});  // Price Calculation

    const [isOpen, setIsOpen] = useState(false)
      const closeModal = () => {
    setIsOpen(false)
  }
    const [bookingInfo, setBookingInfo] = useState({
        guest:{name:user?.name,email:user?.email,image:user?.photoURL},
        host:roomData?.host.email,
        location:roomData?.location,
        price:totalPrice || roomData?.price ,
        to:value.endDate,
        from:value.startDate,
        title:roomData?.title,
        roomId:roomData?._id,
        Image:roomData?.image

    })
   
      const handleSelect = ranges => {
    setValue({...ranges.selection})
    setDates(ranges.selection)
    console.log(ranges.selection);

  }
  
  
  // const modelHandel = () => {
  //   addBooking(bookingInfo)
  //     .then(data => {
  //       console.log(data)

  //       updateStatus(roomData?._id, true)

  //         .then(data => {
  //           console.log(data)
  //           toast.success('Booking Successful!')
  //           navigate('/dashboard/my-bookings')
  //           closeModal()
  //         })
  //         .catch(err => console.log(err))
  //     })
  //     .catch(err => console.log(err))
  // }
  return (
    <div className=" bg-white rounded-lg border-[1px] border-neutral-200 overflow-hidden ">
      <div className="flex flex-col gap-1 p-4">
        <div className="text-2xl font-semibold">
          $ {roomData?.price}
          <p className="font-light text-neutral-600">Night</p>
        </div>

        <hr />
        <div className="flex justify-center"></div>
        <Calender handelSelect={handleSelect} value={value}/>
        <hr />
        <div>
          <Button onClick={()=>setIsOpen(true)} disabled={roomData?.host?.email === user?.email ||roomData?.booked} label="Reserve"></Button>
        </div>
        <hr />
        <div className="p-4 text-lg flex flex-row items-center justify-between font-semibold">
          <div>Total</div>
          <div>$ {totalPrice||roomData?.price} </div>
        </div>
      </div>
   <BookingModal bookingInfo={bookingInfo}
    // modalHandler={modelHandel} 
   isOpen={isOpen}
        closeModal={closeModal} />
    </div>
  );
};

export default RoomReservation;
