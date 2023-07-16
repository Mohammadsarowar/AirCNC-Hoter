import React, { useContext, useState } from "react";
import { formatDistance } from 'date-fns'
import Calender from "./Calender";
import Button from "../Button/Button";
import { AuthContext } from "../../providers/AuthProvider";
import BookingModal from "../Modal/BookingModal";

const RoomReservation = ({roomData}) => {
    const {user, role} = useContext(AuthContext)
    const totalPrice =parseFloat( formatDistance(new Date(roomData?.to),
     new Date(roomData?.from)).split(' ')[0]) * roomData?.price;
const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
});
    const [isOpen, setIsOpen] = useState(false)
    const [booking, setBooking] = useState({
        guest:{name:user?.displayName,email:user?.email,image:user?.photoURL},
        host:roomData.host.email,
        location:roomData.location,
        price:totalPrice,
        to:value.endDate,
        from:value.startDate,
    })
    console.log(booking);
  return (
    <div className=" bg-white rounded-lg border-[1px] border-neutral-200 overflow-hidden ">
      <div className="flex flex-col gap-1 p-4">
        <div className="text-2xl font-semibold">
          $ {roomData?.price}
          <p className="font-light text-neutral-600">Night</p>
        </div>

        <hr />
        <div className="flex justify-center"></div>
        <Calender />
        <hr />
        <div>
          <Button disabled={roomData?.host?.email === user?.email} label="Reserve"></Button>
        </div>
        <hr />
        <div className="p-4 text-lg flex flex-row items-center justify-between font-semibold">
          <div>Total</div>
          <div>$ {totalPrice}</div>
        </div>
      </div>
   
    </div>
  );
};

export default RoomReservation;
