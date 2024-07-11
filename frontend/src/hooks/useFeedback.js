import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useFeedback = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext()

    const feedback = async ({ rating, comments }) => {
        const success = handleInputErrors({ rating, comments })
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/feedbacks/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ rating, comments })
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

    return { loading, feedback }
}

export default useFeedback

function handleInputErrors({ rating, comments }) {
    if (!rating || !comments) {
        toast.error("Please fill the feilds!")
        return false
    }
    return true
}