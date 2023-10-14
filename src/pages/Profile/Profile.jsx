import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/Hi";
import { CgMail } from "react-icons/Cg";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FaRegAddressCard, FaEdit } from "react-icons/fa";
import EditUserModel from "../../components/Modal/EditUserModel";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import { useGetPostsQuery } from "../../redux/features/api/baseApi";



const Profile = () => {
    const {user} = useContext(AuthContext)
  let [isOpen, setIsOpen] = useState(false);
 const {data,isLoading,isError} = useGetPostsQuery()
  console.log(data);
  if(isLoading){
    return <p>Loading...</p>
  }
  if(!isLoading && isError){
    return <p>xxxxxxx...</p>
  }
  // Make a request for a user with a given ID
  const [userData, setData] = useState([]);
 console.log(userData);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/user/${user?.email}`) // Replace with the correct API endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching userData:', error);
      });
  }, []);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="hero min-h-screen rounded-lg">
      <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1 ">
        <div className="mx-auto items-center w-full mr-5">
          <div className=" text-slate-50 bg-blue-950 rounded-md  font-mono min-h-screen p-8">
            <div className="flex justify-between m-5">
              <Link to="/" className="btn btn-ghost normal-case text-xl">
                User Profile
              </Link>

              <button onClick={openModal} className="btn ">
                <FaEdit className="w-6 h-6" />
              </button>
            </div>
            <div className="w-full mx-auto ">
              <div className="text-center">
                <img
                  src={userData?.Image}
                  alt="User Avatar"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold">{userData?.name}</h2>
                <p className="text-gray-600">Web Developer</p>
              </div>
              <div className="mt-6 border-4 border-indigo-500/7 rounded-full p-5 flex gap-3 items-center">
                <HiOutlineUserCircle className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Full Name: </h3>
                <p className="bg-base-200 font-serif">John Doe</p>
              </div>
              <div className="mt-6 border-4 border-indigo-500/7 rounded-full p-5 flex gap-3 items-center">
                <CgMail className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Email: </h3>
                <p className="0 font-serif">{userData?.email}</p>
              </div>
              <div className="mt-6 border-4 border-indigo-500/7 rounded-full p-5 flex gap-3 items-center">
                <BsTelephoneOutbound className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Phone: </h3>
                <p className=" font-serif">(123) 456-7890</p>
              </div>
              <div className="mt-6 border-4 border-indigo-500/7 rounded-full p-5 flex gap-3 items-center">
                <FaRegAddressCard className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Address: </h3>
                <p className=" font-serif text-slate-50">
                  123 Main Street, City, Country
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="m-5 mx-auto items-center ml-5 w-full">
          <ul className="menu menu-vertical lg:menu-horizontal font-mono mr-5 shadow-xl p-5 border-red-500 border-4 rounded-full border-indigo-500/75 bg-base-200 flex mx-auto item-center justify-around rounded-box">
            <li>
              <a>Item 1</a>
            </li>
            <div className="divider divider-horizontal text-red-500 bg-red-600">
              |
            </div>
            <li>
              <a>Item 2</a>
            </li>
            <div className="divider divider-horizontal text-red-500 bg-red-600">
              |
            </div>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
          <div className=" m-5">
            <h3 className="text-xl font-semibold font-mono">About Me</h3>
            <p className="text-gray-700 font-serif">
              I'm a passionate web developer with expertise in front-end and
              back-end technologies. I love coding and building awesome web
              applications.
            </p>
          </div>
          <div className="m-6">
            <h3 className="text-xl font-semibold font-mono">
              Contact Information
            </h3>
            <ul className="text-gray-700 font-serif">
              <li>Email: john@example.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
          <div className="m-6">
            <h3 className="text-xl font-semibold">Bio</h3>
            <p className="text-gray-700">
              I'm a web developer with a passion for creating amazing web
              experiences. I enjoy learning new technologies and building
              innovative projects.
            </p>
          </div>
          <div className="m-6">
            <h3 className="text-xl font-semibold">Hobbies</h3>
            <p className="text-gray-700">
              In my free time, I love hiking, reading, and playing the guitar.
              I'm also a coffee enthusiast and enjoy exploring new coffee shops.
            </p>
          </div>
          {/* Additional Information Fields */}
          <div className="m-6">
            <h3 className="text-xl font-semibold font-mono">Social Media</h3>
            <ul className="text-gray-700 font-serif">
              <li>
                <a
                  href="https://github.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <EditUserModel
        getData={userData} 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Profile;
