import React, { Fragment, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { useForm, Controller } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import { saveUser } from '../../api/auth';
import toast from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const EditUserModel = ({isOpen, closeModal, getData}) => {
    const { control, handleSubmit, formState, reset, register } = useForm();
  const { isSubmitting } = formState;
  const{
    loading,
    setLoading,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from?.pathName || "/";
  const onSubmit = (data) => {
    // Handle the form submission, update the user's data, etc.
    console.log(data);
    const fromData = new FormData();
    fromData.append("image", data?.image);
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGDB_API}`;
      fetch(url, {
        method: "POST",
        body: fromData,
      })
        .then((res) => res.json())
        .then((img) => {
        //   const imgUrl = img.data.display_url;
          console.log(img);
                // .then(() => {
                toast.success('Signup successful')
                  saveUser(data)
                console.log(data);
                  navigate(fromLocation, { replace: true });
                })
                .catch((err) => {
                  console.log(err.message);
                  toast.error(err.message);
                  setLoading(false);
                });
  
           
          
     
      
  };

 

  
    return (
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>
  
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full lg:w-1/2 font-mono transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='flex justify-between text-3xl font-medium leading-6 text-gray-900 '
                  >
                    Edit Profile
                    <AiFillCloseCircle onClick={()=>closeModal()} className='w-8 h-8'/>
                  </Dialog.Title>
                  <div className="">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">Full Name</h3>
            <Controller
              name="fullName"
              control={control}
              defaultValue={getData?.name}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
          </div>
          <div className="mt-6">
            <label htmlFor="image" className="block mb-2 text-sm">
              Select Image:
            </label>
            <Controller
              name="image"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="file"
                  id="image"
                  accept="image/*"
                  className="border border-gray-300 rounded w-full p-2"
                />
              )}
            />
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">Gender</h3>
            <select {...register("gender")} className='border border-gray-300 rounded w-full p-2'>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
            </div>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">Phone</h3>
            <Controller
              name="phone"
              control={control}
              defaultValue="(123) 456-7890"
              render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">Bio</h3>
            <Controller
              name="bio"
              control={control}
              defaultValue="A software engineer with a passion for coding."
              render={({ field }) => (
                <textarea
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">About Me</h3>
            <Controller
              name="aboutMe"
              control={control}
              defaultValue="I love creating web applications and learning new technologies."
              render={({ field }) => (
                <textarea
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <Controller
              name="contactInfo"
              control={control}
              defaultValue="123 Main Street, City, Country"
              render={({ field }) => (
                <textarea
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">Social Media Links</h3>
            <Controller
              name="socialMedia"
              control={control}
              defaultValue="https://twitter.com/johndoe\nhttps://linkedin.com/in/johndoe"
              render={({ field }) => (
                <textarea
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">Hobbies</h3>
            <Controller
              name="hobbies"
              control={control}
              defaultValue="Coding, hiking, reading"
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
          </div>
          <div className="mt-3 text-right">
            {isSubmitting ? (
              <button
                className="px-4 py-2 bg-blue-300 text-white rounded-md"
                disabled
              >
                Saving...
              </button>
            ) : (
              <>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md mr-4 hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {reset(), closeModal()}}
                  className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
};

export default EditUserModel;