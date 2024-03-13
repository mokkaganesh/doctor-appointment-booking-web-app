import axios from 'axios';
import { usePathname } from 'next/navigation';
const { headers } = require("next/headers");




const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api',
    // baseURL:'https://doctor-appointment-admin-strapi-uyle.onrender.com/api',
    headers:{
        Authorization:`Bearer ${API_KEY}`,
        // 'Content-Type':'application/json'
    }

});


const getCategory=()=>axiosClient.get('categories?populate=*');
const getDoctorList=()=>axiosClient.get('doctors?populate=*');
const getDoctorByCategory = (category) => axiosClient.get(`/doctors?filter[categories][Name][$in]=${category}&populate=*`);
const getDoctorById=(id)=>axiosClient.get(`doctors/${id}?populate=*`);

const bookAppointment=(data)=>axiosClient.post('appointments',data);
const sendEmail=(data)=>axios.post('/api/sendEmail',data);

const getUserBookingList=(email)=>axiosClient.get(`appointments?[filters][Email][$eq]=${email}&populate=[doctor][populate][image][populate][0]=url&populate=*`);
const deleteBooking=(id)=>axiosClient.delete(`appointments/${id}`);

export default {getCategory,
    getDoctorList,
    getDoctorByCategory,
    getDoctorById,
    bookAppointment,
    sendEmail,
    getUserBookingList,
    deleteBooking
};