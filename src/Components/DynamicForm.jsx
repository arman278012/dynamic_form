import React, { useContext, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { AppContext } from './AuthContext'
import toast from 'react-hot-toast'

const DynamicForm = () => {


    const { setClicked, formList, setFormList, show, initial, setShow } = useContext(AppContext)
    const [number, setNumber] = useState(2)

    // const [formData, setFormData] = useState()


    const handleAddForm = () => {
        // console.log("Form will be added in this function...")
        // initial.id = number
        // setNumber((prev)=>(prev+1))
        setFormList([...formList, initial]);
    }

    const handleRemoveForm = (index) => {
        // e.preventDefault()
        // console.log(index)
        // // console.log("Form will be removed by this function...")
        const list = [...formList];
        list.splice(index, 1)
        // console.log(list)
        // 
        // const data=formList.filter((el,idx)=>{
        //    return idx!=index+1
        // })
        // console.log(data)
        setFormList(list)
        console.log(list)
        console.log(index)
        // console.log(formList)
    }

    const handleSubmit = () => {
        // console.log("Submitting function will be working here...")
        const data = formList.filter((el) => {
            if (el.ffullName == "" || el.collegeName == "" || el.fullAddress == "") {
                return el
            }
        })

        // alert("please fill your full name!")
        console.log(data)
        if (data.length > 0) {
            data.forEach((el) => {
                if (el.fullName == "") {
                    return (
                        toast.error("please fill your full name!")
                    )
                } else if (el.collegeName == "") {
                    return toast.error("Please fill your college Name!!")
                } else if (el.fullAddress == "") {
                    return toast.error("please fill full address!!")
                }
            })
        }
        else {
            setShow(formList)
            setClicked(true)
        }
    }

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...formList]
        list[index][name] = value;
        // list["id"] = index + 1;
        console.log(list)
        setFormList(list)
    }


    return (
        <>
            <div className='flex flex-col justify-center items-center mt-10'>
                <h1 className='text-[40px] font-bold text-black'>Register here for the Tournament</h1>
                {!show ?
                    <div>

                        {formList.map((form, index) => (
                            <div key={index}>
                                {formList.length !== 1 &&
                                    <div className='bg-red-700 w-[50px] h-[50px] relative rounded-full ml-auto
                                    right-[20px] top-[110px]'>
                                        <AiFillDelete
                                            className='absolute top-[15px] left-[15px] h-[20px] w-[20px] text-white'
                                            onClick={(e) => handleRemoveForm(index, e)}
                                        />
                                    </div>
                                }
                                <div className='flex flex-col justify-center items-center shadow-2xl gap-5 w-[70vw] border-[1px] mt-10
                                 border-gray-400 p-5'>
                                    <div className=''>
                                        <p className='text-xl text-black mb-3 font-semibold'>Full name:</p>
                                        <input
                                            type="text"
                                            placeholder='Full name here'
                                            className='p-4 w-[600px] h-[40px] rounded-lg border-2 bg-transparent border-gray-400'
                                            name='fullName'
                                            // value={form.fullName}
                                            onChange={(e) => handleChange(index, e)}
                                        />
                                    </div>

                                    <div>
                                        <p className='text-xl text-black mb-3'>collegeName:</p>
                                        <input type="text"
                                            className='p-4 w-[600px] h-[40px] rounded-lg border-2 bg-transparent border-gray-400'
                                            placeholder='College name here'
                                            name='collegeName'
                                            // value={form.lastName}
                                            onChange={(e) => handleChange(index, e)}
                                        />
                                    </div>

                                    <div>
                                        <p className='text-xl text-black mb-3'>Full Address:</p>
                                        <input type="text"
                                            className='p-4 w-[600px] h-[40px] rounded-lg border-2 bg-transparent border-gray-400'
                                            placeholder='Full name here'
                                            name='fullAddress'
                                            // value={form.fullAddress}
                                            onChange={(e) => handleChange(index, e)}
                                        />
                                    </div>
                                    <div className='h-[1px] w-[800px] bg-gray-400 mb-5'></div>
                                </div>
                            </div>
                        ))}

                        <div className='w-[70vw] flex justify-center items-center gap-10 mt-5 mb-10 '>
                            <button
                                className='h-[50px] w-[100px] bg-green-700 text-white rounded-lg font-bold flex justify-center absolute
                                items-center top-5 right-[200px]'
                                onClick={handleAddForm}>Add more</button>
                            <button
                                className='h-[50px] w-[100px] bg-red-700 text-white rounded-lg font-bold flex justify-center 
                                items-center' onClick={handleSubmit}>Submit</button>
                        </div>
                    </div> :
                    <div></div>
                }
            </div>
        </>
    )
}

export default DynamicForm