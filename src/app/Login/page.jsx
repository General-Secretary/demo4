"use client"
import React, { useEffect, useState } from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"
import Link from 'next/link';
import toast from 'react-hot-toast';
import Button from '@mui/material/Button';
import { Vazirmatn } from 'next/font/google';
import { login } from '../../lib/reduxStore/authSlice';
import { stoploading } from '../../lib/reduxStore/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'flowbite-react';
import GuestRoute from "@/components/ReversedProtectedRoute";

const vazir = Vazirmatn({
    subsets: ['arabic'],
    weight: ['400', '700']
});


export default function () {useEffect(()=>{console.log(sessionStorage.getItem("token"));},[])

    const dispatch = useDispatch()
    const [rememberMe, setRememperMe] = useState(false)
    const selector = useSelector((red) => {
        return red.authReducer
    })
    console.log(selector);
    function handelRememberChange() {
        setRememperMe((prev) => !prev)
    }
    async function submitting(val) {
        console.log(val);
        try {
            const data = await dispatch(login(val))
            console.log(data);
            toast.custom((t) => (
                <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full  bg-gray-700  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 shadow-lg rounded-lg border-[#00F560] pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-[#00F560]">
                                    {data?.payload?.data?.message}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-l border-green-500">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ))
            if(rememberMe) {sessionStorage.setItem("token", data.payload.data.token);localStorage.setItem("token", data.payload.data.token)}
            else{sessionStorage.setItem("token", data.payload.data.token);}
            // router.push("/")
        } catch (error) {
            console.log(error)
            dispatch(stoploading())
            toast.custom((t) => (
                <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full  bg-gray-700  bg-clip-padding backdrop-filter  backdrop-blur-md bg-opacity-20 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-red-600">
                                    error in email or password
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-l border-red-500">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ))
        }
    }

    const validation = Yup.object().shape({
        email: Yup.string().required("يجب ادخال البريد الالكتروني").email("ادخل بريد الكتروني صالح"),
        password: Yup.string().required("ادخل كلمه السر")
    })
    const x = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: submitting,
        validationSchema: validation
    })
    function submitdisable() {
        if (Object.keys(x.errors).length > 0 || Object.keys(x.touched).length == 0) {
            return true
        }
        return false
    }

    return (
        <div className={vazir.className}>
            <div className=' overflow-auto mb-32 my-20'>
                <GuestRoute>
                <div className='lg:w-[90%] mx-auto overflow-auto  flex justify-center items-center'>
                    <div className='man-standing-door hidden  md:block w-1/2'>
                        <img src={"/assits/68e7b970d2b4837aee986941847487d9.png"} className='w-full' alt="" />
                    </div>
                    <div className='md:w-1/2 p-7  w-full mt-14 md:mt-8 '>
                        <h2 className='text-end  font-vazir text-white  me-4  font-extrabold text-5xl'>أهلاً بعودتك</h2>
                        <div className='my-6' style={{ direction: 'rtl' }}>
                            <p className=' font-vazir text-[#00F560B0] me-4 font-thin text-xl'>
                                "الأبطال لا يصنعون في الصالات الرياضية، بل يُصنعون من شيء عميق داخلهم؛ رغبة، حلم، ورؤية."
                                <br />
                            </p>
                            <p className='w-full text-end font-vazir text-[#00F560B0] font-thin text-xl'>
                                - محمد علي كلاي.
                            </p>
                        </div>
                        <div className=''>
                        </div>
                        <form onSubmit={x.handleSubmit}>
                            <div className="mb-10 md:mb-20 md:relative">
                                <label htmlFor="default-input" className="block mb-2 me-4 text-sm font-medium text-end font-vazir text-white">البريد الالكتروني</label>
                                <input placeholder=' example@gmail.com' onBlur={x.handleBlur} type="email" value={x.values.email} onChange={x.handleChange} name="email" id="email" className="bg-transparent border  border-green-300  text-lg rounded-full py-5   focus:border-green-500 block w-full p-2.5 placeholder-gray-400 text-white focus:ring-green-500 " />
                                {x.errors.email && x.touched.email && <div className="p-4 mb-4 md:absolute md:b-0 md:w-[80%] mt-5 m-auto text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <span className='font-semibold' style={{ direction: 'rtl' }}> خطأ </span>{x.errors.email}
                                </div>}
                            </div>
                            <div className="mb-10 md:mb-20 md:relative">
                                <label htmlFor="default-input" className="block mb-2 me-4 text-sm font-medium text-end font-vazir text-white">كلمة السر</label>
                                <input placeholder=' *********' type="password" onBlur={x.handleBlur} onChange={x.handleChange} value={x.values.password} name="password" id="password" className="bg-transparent border  border-green-300  text-lg rounded-full py-5   focus:border-green-500 block w-full p-2.5 placeholder-gray-400 text-white focus:ring-green-500 " />
                                {x.errors.password && x.touched.password && <div className="p-4 mb-4 md:absolute md:b-0 md:w-[80%] mt-5 m-auto text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <span className='font-semibold' style={{ direction: 'rtl' }}> خطأ </span>{x.errors.password}
                                </div>}
                            </div>
                            <p className='text-[#64748B] my-7 text-end me-4'>هل <Link className='text-[#00F560]' href={""}>نسيت كلمة المرور</Link> ؟</p>
                            <div className='w-full my-6'><div className='flex flex-row-reverse justify-start  items-center'>
                                <Button color='success' disabled={submitdisable()} type='submit' variant="contained"
                                    sx={{
                                        borderRadius: "50px ",
                                        fontSize: "16px", padding: " 16px 40px", background: "#00F560"
                                    }}
                                ><p className='font-vazir '>تسجيل {selector?.loading && <Spinner color="info" aria-label="Info spinner example" />} </p></Button>
                                <div className="flex flex-row-reverse  items-center ">
                                    <input id="default-checkbox" type="checkbox" checked={rememberMe} onChange={handelRememberChange} className="w-4 h-4 text-blue-600 mx-3  bg-transparent border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-vazir font-thin text-gray-300">تذكرني</label>
                                </div>
                            </div>
                            </div>
                        </form>
                        <div className='border-y my-3  border-y-1 border-y-[#FFFFFF33]'>
                            <Button color='success' fullWidth variant="contained"
                                sx={{
                                    my: "20px",
                                    borderRadius: "50px ",
                                    fontSize: "16px", padding: " 16px 40px", background: "#00043140"
                                }}
                            ><p className='font-vazir'>سجل من خلال جوجل</p></Button>
                            <Button color='success' fullWidth variant="contained"
                                sx={{
                                    mb: "20px",
                                    borderRadius: "50px ",
                                    fontSize: "16px", padding: " 16px 40px", background: "#00043140"
                                }}
                            ><p className='font-vazir'>سجل من خلال لنكد إن</p></Button>
                        </div>
                        <p className='text-[#64748B] text-end me-4'>ليس لديك حساب؟ <Link href={"/SignUpOptions"} className='text-[#00F560]' > أنشيء حساب الآن</Link> </p>
                    </div>
                </div></GuestRoute>
            </div>
        </div>
    )
}
