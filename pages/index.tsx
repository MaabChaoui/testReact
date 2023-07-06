import Head from "next/head";
import Navbar from '@/components/Navbar/Navbar';
import Hero from "@/components/Landing/Hero/Hero";

export default function Home(){
    return (
        <>
          <Navbar />
          <Hero />  
        </>
    )
}