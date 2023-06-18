import { useContext } from 'react';
import palceHolder from '../../../assets/images/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';

const Avatar = () => {
    const {user} = useContext(AuthContext)

    return <img className=' rounded-full' height='30' width='30' src={user&& user.photoURL ? user.photoURL:palceHolder } alt='profile'></img>
};

export default Avatar;