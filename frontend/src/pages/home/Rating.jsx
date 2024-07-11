const Rating = ({ selectRatingStar, rating }) => {

    return (
        <div className='grid gap-1'>
            <label className='label mx-3'>
                <span className='text-xl label-text'>Rating</span>
            </label>

            <div className="rating rating-lg flex gap-2 mx-3">

                <div>
                    <input
                        type="checkbox"
                        name="rating-8"
                        className={`checkbox rounded-full bg-[#1d232a] w-2 ${rating === '1' ? "selected" : ""}`}

                        checked={rating === '1'}
                        onChange={() => selectRatingStar("1")}
                    />
                </div>

                <div>
                    <input
                        type="checkbox"
                        name="rating-8"
                        className={`checkbox rounded-full w-2 bg-[#1d232a]  ${rating === '2' ? "selected" : ""}`}

                        checked={rating === '2'}
                        onChange={() => selectRatingStar("2")}
                    />
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="rating-8"
                        className={`checkbox rounded-full w-2 bg-[#1d232a]  ${rating === '3' ? "selected" : ""}`}

                        checked={rating === '3'}
                        onChange={() => selectRatingStar("3")}
                    />
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="rating-8"
                        className={`checkbox rounded-full w-2 bg-[#1d232a] ${rating === '4' ? "selected" : ""}`}

                        checked={rating === '4'}
                        onChange={() => selectRatingStar("4")}
                    />
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="rating-8"
                        className={`checkbox rounded-full w-2 bg-[#1d232a] ${rating === '5' ? "selected" : ""}`}

                        checked={rating === '5'}
                        onChange={() => selectRatingStar("5")}
                    />
                </div>
            </div>
        </div>
    )
}

export default Rating