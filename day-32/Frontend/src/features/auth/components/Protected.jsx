import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'

const Protected = ({ children }) => {
    const user = useSelector(state => state.auth.user)
    const lodding = useSelector(state => state.auth.lodding)


    if (lodding) {
        return <h1>Lodding..</h1>

    }

    if (!user) {
        return <Navigate to={"/login"} replace />
    }

    return children



}

export default Protected
