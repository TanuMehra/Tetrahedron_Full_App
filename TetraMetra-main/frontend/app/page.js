"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import axios from 'axios'

import Layout from "@/components/layout/Layout"
import Banner from "@/components/home/Banner"
import Services from "@/components/home/Services"
import About from "@/components/home/About"
import Business from "@/components/home/Business"
import Awards from "@/components/home/Awards"
import Testimonial from "@/components/home/Testimonial"
import ContactForm from "@/components/ContactForm"

export default function Home() {
    if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true') {
    return (
      <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f8d7da' }}>
        <h1 style={{ color: '#721c24',fontSize:"100px" } }>Site is under maintenance</h1>
        <p style={{fontSize:"100px"}}>Please check back later!</p>
      </div>
    );
  }
    const [showForm, setShowForm] = useState(false)
    const pathname = usePathname()
    const [modal, setModal] = useState({ open: false, message: '', success: false });

    useEffect(() => {
        const checkFormVisibility = () => {
            const lastClosed = localStorage.getItem("leadFormClosed")
            if (!lastClosed || Date.now() - Number(lastClosed) > 120000) {
                setShowForm(true)
            } else {
                setShowForm(false)
            }
        }

        checkFormVisibility()
        const interval = setInterval(checkFormVisibility, 10000)

        return () => clearInterval(interval)
    }, [pathname])

    const handleCloseForm = () => {
        setShowForm(false)
        localStorage.setItem("leadFormClosed", Date.now().toString())
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        console.log('Sending form data:', formData);
        try {
            const res = await axios.post('/api/contact', formData);
            if (res.status === 200) {
                setModal({ open: true, message: 'Form submitted successfully!', success: true });
                handleCloseForm();
            } else {
                setModal({ open: true, message: 'Failed to submit form.', success: false });
            }
        } catch (err) {
            setModal({ open: true, message: 'Failed to submit form.', success: false });
        }
        setTimeout(() => setModal({ ...modal, open: false }), 3000);
    };

    return (
        <Layout>
            <div style={{ zoom: '80%' }}>
                <Banner />
                <About />
                <Business />
                <Services />
                <Awards />
                <Testimonial />
            </div>

            {showForm && (
                <div style={{
                    position: "fixed",
                    top: 0, left: 0, width: "100%", height: "100%",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    display: "flex", justifyContent: "center", alignItems: "center",
                    zIndex: 9999
                }}>
                    <div style={{
                        background: "linear-gradient(135deg, #ffffff, #f5f5f5)",
                        padding: "30px",
                        borderRadius: "16px",
                        width: "90%",
                        maxWidth: "450px",
                        maxHeight: "90vh",
                        overflowY: "auto",
                        position: "relative",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }} className="hide-scroll">
                        <div onClick={handleCloseForm} style={{
                            position: "absolute",
                            top: "12px",
                            right: "16px",
                            cursor: "pointer",
                            fontSize: "22px",
                            fontWeight: "bold",
                            color: "#555"
                        }}>✖</div>

                        

                        <ContactForm />
                    </div>
                </div>
            )}

            {modal.open && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99999 }} onClick={() => setModal({ ...modal, open: false })}>
                    <div style={{ background: '#fff', padding: '32px 48px', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', textAlign: 'center', minWidth: '300px', fontSize: '18px', color: modal.success ? 'green' : 'red', fontWeight: 'bold', position: 'relative' }}>
                        <span style={{ position: 'absolute', top: 8, right: 16, cursor: 'pointer', fontSize: 24, color: '#888' }} onClick={() => setModal({ ...modal, open: false })}>×</span>
                        {modal.message}
                    </div>
                </div>
            )}

            <style jsx>{`
                .hide-scroll::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </Layout>
    )
}

const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f0f0f0",
    fontSize: "14px",
    outline: "none"
}

const submitButtonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "var(--elitecons-base)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
    transition: "background 0.3s ease"
}
