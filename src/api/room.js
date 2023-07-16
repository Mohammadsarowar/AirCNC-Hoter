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
export const getRoom = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/getRoom/${id}`);
    const result = await response.json();
    return result;

}