import React, { useEffect, useState } from "react";
import Container from "../shared/Containr";
import Card from "./Card";



const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("./Rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        console.log(data);
      });
  }, []);
  return (
    <Container>
      <div
        className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
    {
        rooms.map(room =><Card/>
        )
    }
        
      </div>
    </Container>
  );
};

export default Rooms;
