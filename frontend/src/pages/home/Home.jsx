import React, { useState } from 'react'
import useSignout from '../../hooks/useSignout'
import Rating from './Rating';
import useFeedback from '../../hooks/useFeedback';

const Home = () => {
    const { loading, signout } = useSignout();

    const { feedback } = useFeedback()

    const [feedbackInput, setFeedbackInput] = useState({
        rating: "",
        comments: ""
    })
    const ratingBox = (rating) => {
        setFeedbackInput({ ...feedbackInput, rating })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await feedback(feedbackInput)

        window.location.reload()


    }


    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto font-serif'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg
            bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-slate-400'>
                    Welcome
                </h1>

                <form onSubmit={handleSubmit} className='grid gap-2'>

                    <Rating selectRatingStar={ratingBox} rating={feedbackInput.rating} />

                    <div className='grid gap-1'>
                        <label className='label mx-3'>
                            <span className='text-xl label-text'>Comments</span>
                        </label>
                        <div className='text-center'>
                            <input
                                className="textarea textarea-bordered w-80 mx-3"
                                placeholder="Write Your Comments"
                                value={feedbackInput.comments}
                                onChange={(e) => setFeedbackInput({ ...feedbackInput, comments: e.target.value })}

                            />
                        </div>
                    </div>
                    <div className='flex gap-2 mx-3'>

                        <div>
                            {!loading ? (
                                <button className='btn w-32 text-xl btn-sm mt-2 ' onClick={signout}>
                                    Sign Out
                                </button>
                            ) : (
                                <span className='loading loading-spinner'></span>
                            )}

                        </div>

                        <button className='btn w-32 text-xl btn-sm mt-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home