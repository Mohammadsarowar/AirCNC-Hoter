import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { useForm, Controller } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
const EditUserModel = ({isOpen,closeModal}) => {
    const { control, handleSubmit, formState, reset } = useForm();
  const { isSubmitting } = formState;
   
  const onSubmit = (data) => {
    // Handle the form submission, update the user's data, etc.
    console.log(data);
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
              defaultValue="John Doe"
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">Email</h3>
            <Controller
              name="email"
              control={control}
              defaultValue="john@example.com"
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
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