"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import { Search } from "lucide-react";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect,useState } from "react";


export default function Home() {

  // doctors is used in main page because of everywhre this required i'm loading only once
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    getDoctorList();
  }, []);

  const getDoctorList = () => {
    GlobalApi.getDoctorList().then(res => {
      setDoctorList(res.data.data);
      console.log(res.data.data);
    }).catch(err => {
      console.log(err);
    });
    console.log("getDoctorList");
  }

  return (
    <><div>
        {/* hero section */}
        <Hero />
        <CategorySearch />
        <DoctorList doctorList={doctorList} />
      </div></>
  );
}
