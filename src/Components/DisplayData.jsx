import React, { useContext } from 'react'
import { AppContext } from './AuthContext'

const DisplayData = () => {
    // 
    const { formList, clicked, setClicked, setShow } = useContext(AppContext)

    const goBackToHome = () => {
        setShow(null)
        setClicked(false)
    }

    console.log(formList[0].firstName)
    return (
        <div className='flex flex-col gap-5 justify-center items-center h-[50vh] w-[70vw] mx-auto'>
            <p className='text-center font-bold text-[35px]'>Your Full information is here</p>
            {
                formList.map((el) => (
                    <div>
                        <div>
                            <p className='font-semibold text-[20px]'>Hii, As per your information your full name is
                                <span className='underline text-green-700'> Mr {el.fullName}</span> , you study in
                                <span className='underline text-green-700'> {el.collegeName} </span> and
                                your full address is <span className='underline text-green-700'> {el.fullAddress}</span> </p>
                        </div>
                    </div>
                ))
            }

            <button className='h-[50px] w-[100px] bg-red-700 text-white rounded-lg font-bold flex justify-center 
                                items-center' onClick={goBackToHome}>Go back</button>
        </div>
    )
}

export default DisplayData