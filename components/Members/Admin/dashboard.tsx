import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCalendar, faUsers, faVolumeOff, faMessage, faListCheck } from "@fortawesome/free-solid-svg-icons";
import SideNav from "../sidenav";
import styles from "../styles";
import { db } from '../../../firebase';
import { collection, query, getCountFromServer } from "firebase/firestore";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../../../context/authContext";
import ToastMessage from "../toastMessage";

const Dashboard = () => {
    const { user } = useAuth()
    // console.log(user)
    const [message, setMessage] = useState("")
    const [state, setState] = useState({
        registered: 0,
        users: 0,
        events: 0,
        tasks: 0
    })

    const registeredCollection = collection(db, "registrations")
    const usersCollection = collection(db, "users")
    const eventsCollection = collection(db, "events")
    const tasksCollection = collection(db, "tasks")
    useEffect(() => {
        // Perform localStorage action
        const item = localStorage.getItem('message')
        setMessage(item || "")
        if (item) {
            setTimeout(() => {
                setMessage("")
                localStorage.removeItem("message")
            }, 2000)
        }

        getCountFromServer(query(registeredCollection)).then((res) => setState((prevstate) => { 
            return { ...prevstate, registered: res.data().count }
        }))
        getCountFromServer(query(usersCollection)).then((res) => setState((prevstate) => {
            return { ...prevstate, users: res.data().count }
        }))
        getCountFromServer(query(eventsCollection)).then((res) => setState((prevstate) => {
            return { ...prevstate, events: res.data().count }
        }))
        getCountFromServer(query(tasksCollection)).then((res) => setState((prevstate) => {
            return { ...prevstate, tasks: res.data().count }
        }))
      }, [])


    const date = new Date()
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    let suffix = "TH"
    if (date.getDate() % 10 == 1) suffix = "ST"
    else if (date.getDate() % 10 == 2) suffix = "ND"

    const messages: string[] = []

    return (
        <ProtectedRoute>
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <div className="col-span-9 px-12 flex flex-col overflow-y-scroll">
                    <ToastMessage message={message} setMessage={setMessage} />
            
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Admin Panel</h1>
                    <div className="grid grid-cols-9 grid-rows-10 gap-8 my-8 flex-1">
                        <div className="col-span-3 row-span-4 bg-white rounded-xl py-4 px-16">
                            <h5 className="text-xl text-right font-bold" style={styles.textPrimary}>{suffix}</h5>
                            <h1 className="text-7xl text-center font-extrabold" style={styles.textPrimary}>{date.getDate()}</h1>
                            <h3 className="text-3xl text-center mt-4 font-bold" style={styles.textNormal}>{months[date.getMonth()]}</h3>
                        </div>
                        <Link href="/admin/registrations">
                            <div className="col-span-3 row-span-4 bg-white rounded-xl py-4 border-transparent border-2 hover:border-blue-400">
                                <h1 className="text-7xl text-center font-extrabold" style={{color: "#0C72B0"}}>{state.registered}</h1>
                                <div className="text-center mt-4">
                                    <FontAwesomeIcon icon={faCheck} size="2x" style={styles.textSecondary} />
                                </div>
                                <h3 className="text-2xl text-center font-bold mt-2" style={styles.textSecondary}>Registered</h3>
                            </div>
                        </Link>
                        <Link href="/admin/users">
                            <div className="col-span-3 row-span-4 bg-white rounded-xl py-4 border-transparent border-2 hover:border-blue-400">
                                <h1 className="text-7xl text-center font-extrabold" style={styles.textPrimary}>{state.users}</h1>
                                <div className="text-center mt-4">
                                    <FontAwesomeIcon icon={faUsers} size="2x" style={styles.textSecondary} />
                                </div>
                                <h5 className="text-2xl text-center font-bold mt-2" style={styles.textSecondary}>Users</h5>
                            </div>
                        </Link>
                        <div className="col-span-3 row-span-6 bg-white rounded-xl py-4 px-4">
                            <h1 className="text-3xl text-center font-bold" style={styles.textPrimary}>Notifications</h1>
                            <div className="mt-4 px-2 overflow-auto" style={{height: 220}}>
                                {
                                    messages.map((m, id) => (
                                        <p key={id} className="text-sm py-2">{m}</p>
                                    ))
                                }
                            </div>
                        </div>
            
                        <Link href="/admin/events">
                            <div className="col-span-3 row-span-4 bg-white rounded-xl py-4 border-transparent border-2 hover:border-blue-400">
                                <h1 className="text-7xl text-center font-extrabold" style={styles.textPrimary}>{state.events}</h1>
                                <div className="text-center mt-4">
                                    <FontAwesomeIcon icon={faCalendar} size="2x" style={styles.textSecondary} />
                                </div>
                                <h5 className="text-2xl text-center font-bold mt-2" style={styles.textSecondary}>Events</h5>
                            </div>
                        </Link>
                        <Link href="/admin/tasks">
                            <div className="col-span-3 row-span-4 bg-white rounded-xl py-4 border-transparent border-2 hover:border-blue-400">
                                <h1 className="text-7xl text-center font-extrabold" style={styles.textPrimary}>{state.tasks}</h1>
                                <div className="text-center mt-4">
                                    <FontAwesomeIcon icon={faListCheck} size="2x" style={styles.textSecondary} />
                                </div>
                                <h5 className="text-2xl text-center font-bold mt-2" style={styles.textSecondary}>Tasks</h5>
                            </div>
                        </Link>
                        <div className="col-span-4 row-span-2 bg-white rounded-xl py-2 border-transparent border-2 hover:border-blue-400">
                            <div className="text-center mt-2">
                                <FontAwesomeIcon icon={faVolumeOff} size="2x" style={styles.textSecondary} />
                            </div>
                            <h5 className="text-2xl text-center font-bold mt-2" style={styles.textSecondary}>Announcements</h5>
                        </div>
                        <div className="col-span-2 row-span-2 bg-white rounded-xl py-2 border-transparent border-2 hover:border-blue-400">
                            <div className="text-center mt-2">
                                <FontAwesomeIcon icon={faMessage} size="2x" style={styles.textSecondary} />
                            </div>
                            <h5 className="text-2xl text-center font-bold mt-2" style={styles.textSecondary}>Chats</h5>
                        </div>
                    </div>
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
      )
}

export default Dashboard;