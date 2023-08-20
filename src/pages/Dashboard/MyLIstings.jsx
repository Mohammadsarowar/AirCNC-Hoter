import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";

import { useEffect } from "react";
import RoomDataRow from "./RoomDataRow";
import EmptyState from "../../components/shared/EmptyState";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "react-query";

const MyListings = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  //
  // const [room, setRoom] = useState([])
  // const fetchRoom = async () => {
  //   axiosSecure
  //   .get(`/getRoomsData/${user?.email}`)
  //     .then(data => {
  //         setRoom(data.data)
  //     })
  // }
  // useEffect(() => {
  //    fetchRoom()
  // },[user])
  // console.log(room);

  const { data: room = [], refetch } = useQuery({
    queryKey: ["room", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/getRoomsData/${user?.email}`);
      console.log("res from axios", res.data);
      return res.data;
    },
  });

  return (
    <>
      {room && Array.isArray(room) && room.length > 0 ? (
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        From
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        To
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Delete
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {room.map((room) => (
                      <RoomDataRow
                        refetch={refetch}
                        key={room._id}
                        room={room}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyState
          message="You didn't have any Rooms yet"
          address={"/dashboard/add-room"}
          label={"Add Rooms"}
        />
      )}
    </>
  );
};

export default MyListings;
