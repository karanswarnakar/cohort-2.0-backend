import { Navigate } from 'react-router'
import { useSelector } from 'react-redux';
import { useChat } from '../hooks/useChat';
import { useEffect } from 'react';

const Dashboard = () => {
    const chat = useChat()
    useEffect(() => {
        chat.initializeSocketConnection()
    }, [])

    return (

        <div>
            <h1>Dashbord</h1>
        </div>
    )
}

export default Dashboard
