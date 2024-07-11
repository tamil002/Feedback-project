import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext()

    const signup = async ({ name, email, phone, password, confirmPassword }) => {
        const success = handleInputErrors({ name, email, phone, password, confirmPassword })
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, password, confirmPassword })
            })

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("reg-user", JSON.stringify(data))
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    };

    return { loading, signup }
}

export default useSignUp

function handleInputErrors({ name, email, phone, password, confirmPassword }) {
    if (!name || !email || !phone || !password || !confirmPassword) {
        toast.error("Please fill in all feilds!")
        return false
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match!")
        return false
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters!")
        return (false)
    }

    return true
}