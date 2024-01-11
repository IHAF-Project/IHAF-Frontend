import React, { useState } from 'react'
import bg from '../../images/volunteer-giving-box-with-donations-another-volunteer 1 (1).jpg'
import { isDisabled } from '@testing-library/user-event/dist/utils';
const Donation = () => {
  const [Amount, setamount] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
 
  const handleButtonClick = (value) => {
    if (value === true) {
      setamount('');
    } else {  
      setamount(value);
    }
  };
    const handleInputChange = (e) => {
      setamount(e.target.value);
    };
    const handleImageChange = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        setSelectedImage(file);
      }
    };
  
  return (
    <div className='bg-black-500 w-screen h-screen flex text-xs items-center justify-center max-sm:overflow-y-auto max-2xl:w-screen'>
        <div className=' w-1/2 h-auto flex flex-col items-center m-7  max-sm:p-0   max-2xl:w-1/2 gap-3'>
          <div className=' flex items-center justify-center flex-col w-10/12 h-auto text-lg my-2  max-sm:p-0 '>
            <h1 className='py-2'>Donation process</h1>
            <p className='text-xs'>Information about donation process The error message you provided is quite generic, and it doesn't point to a specific issue in your CSS code. However, I noticed that there might be an issue with the font-size property in your CSS. Specifically, the value in the </p>
          </div>
            <div className='flex gap-5 max-sm:gap-1 max-sm:py-2 text-base border-2 border-gray-400 my-3'>
              <div className='h-auto w-full text-sm p-2'>
                  <div>Account Name<span  className=' text-blue-500 mx-1'> :<span/>IFAF Account</span>  </div>
                  <div >Account Number:<span className=' text-blue-500 mx-1'> 8678888884545 </span></div>
                  <div>IFSC Code:<span  className=' text-blue-500 mx-1'> IBM05956877668 </span></div>
              </div>
             
            </div>
              <div className=' w-full flex items-center justify-center flex-col'>
                <div className=' h-auto p-4 flex flex-col items-center justify-center gap-3 w-full bg-amber-100 max-sm:px-1'>
                <input className='w-22 text-lg flex text-center justify-center max-sm:w-14 max-sm:p-3 border-2 border-yellow-600 p-3 '
                    type='text'
                    value={Amount}
                    onChange={handleInputChange}
                    inputMode='numeric'
                    pattern='[0-9]*'
                    readOnly={!Amount && Amount !== ''}
                    />
                     <div  className='flex flex-col gap-2 items-center justify-center '>
                      <p className=' text-blue-800 max-sm:w-9/12'>Please upload your payment screenshot for verification *</p>
                      <div className='flex flex-col max-sm:w-4/5 '>
                        {/* <label htmlFor="imageUpload">Choose an image:</label> */}
                        <input
                          type="file"
                          id="imageUpload"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                        </div>

                        {/* Display the selected image (optional) */}
                        {selectedImage && (
                          <div className='w-12 h-auto'>
                            {/* <p>Selected Image:</p> */}
                            <img
                              src={URL.createObjectURL(selectedImage)}
                              alt="Selected"
                              style={{ maxWidth: '100%', maxHeight: '200px' }}
                            />
                          </div>
                        )}
                    </div>

                </div>
                <div className='flex items-center justify-center py-6 w-11/12'>
                  <div className='grid grid-cols-2 w-auto items-center justify-center max-sm:grid-cols-2 max-sm:gap-0 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    <button className='border-2 rounded-lg border-yellow-600 w-full max-sm:w-20 max-sm:p-2 bg-violet-200 p-8 hover:border-yellow-300 hover:bg-green-600 hover:text-white' onClick={() => handleButtonClick('120')}>120</button>
                    <button className='border-2 rounded-lg border-yellow-600 w-full max-sm:w-20 max-sm:p-2 bg-violet-200 p-8 hover:border-yellow-300 hover:bg-green-600 hover:text-white' onClick={() => handleButtonClick('100')}>100</button>
                    <button className='border-2 rounded-lg border-yellow-600 w-full max-sm:w-20 max-sm:p-2 bg-violet-200 p-8 hover:border-yellow-300 hover:bg-green-600 hover:text-white ' onClick={() => handleButtonClick('220')}>220</button>
                    <button className='border-2 rounded-lg border-yellow-600 w-full max-sm:w-20 max-sm:p-2 bg-violet-200 p-8 hover:border-yellow-300 hover:bg-green-600 hover:text-white' onClick={() => handleButtonClick('200')}>200</button>
                    <button className='border-2 rounded-lg border-yellow-600 w-full max-sm:w-20 max-sm:p-2 bg-violet-200 p-8 hover:border-yellow-300 hover:bg-green-600 hover:text-white' onClick={() => handleButtonClick('160')}>160</button>
                    <button className='border-2 rounded-lg border-yellow-600 w-full max-sm:w-20 max-sm:p-2 bg-violet-200 p-8 hover:border-yellow-300 hover:bg-green-600 hover:text-white' onClick={() => handleButtonClick(true)}>Custom</button>

                  </div>
                </div>

            </div>
            <div className='w-full flex items-center justify-center h-auto p-4'>
              <button className='b-5 bg-yellow-400 w-36 p-3 hover:bg-green-400'>Submit</button>
            </div>
        </div>
        {/* Right side */}
        <div className=' bg-blue-200 w-1/2 bg-cover bg-center h-screen items-center flex flex-col gap-6 overflow-y-auto max-2xl:w-1/2'>
            <div className='text-xl p-3'>
              <p>Lorem Ipsum Dolor Sit Amet</p>
            </div>
            <div className='px-6'>
              <p>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.</p>
            </div>
            <ul className='px-3 text-sm'>
              <li>1.<span/>Etiam risus purus, pharetra id imperdiet vel, lobortis vitae sem. Sed nec .</li>
              <li>2.<span/>Etiam risus purus, pharetra id imperdiet vel, lobortis vitae sem. Sed nec .</li>
              <li>3.<span/>Etiam risus purus, pharetra id imperdiet vel, lobortis vitae sem. Sed nec .</li>
            </ul>
            <div className='px-2 text-sm'>
            <p>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.</p>
            </div>
        </div>
       
        <div></div>
    </div>

  )
}

export default Donation