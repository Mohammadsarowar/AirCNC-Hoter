export const addRoom = async (roomData) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(roomData),
    });
    const result = await response.json();
    return result;
}
//get all data
export const getRooms = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/getRoomsData`);
    const result = await response.json();
    return result;

}
//get filter data
// export const getFilterRooms = async (email) => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/getRoomsData/${email}`, {
     
//     headers: {
   
//       authorization: `Bearer ${localStorage.getItem('access-token')}`,
//     },
//     });
//     const result = await response.json();
//     return result;
// }
//get single data
export const getRoom = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/getRoom/${id}`);
    const result = await response.json();
    return result;
}


 // Delete a room
export const deleteRoom = async id => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/getRoom/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  })
  const result = await response.json()
  return result
}