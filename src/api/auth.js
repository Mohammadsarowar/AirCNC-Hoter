

export const saveUser = (user) => {
    const currentUser = {
      name:user?.displayName,
      email:user?.email,
      Image:user?.photoURL,
      contactInfo:user?.contactInfo
    }
     console.log(user);
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
 // became a host
 export const becomeHost = email => {
  
  const currentUser = {
    role: 'host',
  }
 return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  })
    .then(res => res.json())
}
// get role 
export const getRole = async email => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/user/${email}`)
  const data = await response.json();
  return data?.role;
}