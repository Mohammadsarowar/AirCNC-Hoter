export const addBooking = async (bookingData) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
    });
    const result = await response.json();
    return result;
}
//update room status
export const updateStatus = async (id, status) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/status/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
    });
    const result = await response.json();
    return result;
}
// Get all bookings for a user by email
export const getBookings = async email => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/bookings?email=${email}`
    )
    const bookings = await response.json()
    return bookings
  }

  //delete booking by email id 
  export const deleteBooking = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, {
      method: 'DELETE',
    })
    const result = await response.json()
    return result
      

  }