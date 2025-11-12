import React, { useState } from 'react'

function Star({ hoveredStars, handleClick, index, onMouseEnter, onMouseLeave, selectedStars }) {
    return (
        <div
            onClick={() => handleClick(index)}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave()}
        >
            {(index <= selectedStars || index <= hoveredStars) ?(
                <img className="w-10 h-10" src="https://www.svgrepo.com/show/452106/star.svg" alt="" />
            ) :(
                <img className="w-10 h-10 " src="https://www.svgrepo.com/show/230093/star.svg" alt="star" />
            ) }

        </div>
    )
}

function StarRating({ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0)
    const [hoveredStars, setHoveredStars] = useState(0)

    function handleClick(index) {
        setSelectedStars(index)
    }

    function onMouseLeave() {
        // clear hover highlight when leaving a star
        setHoveredStars(0)
    }

    function onMouseEnter(index) {
        setHoveredStars(index)
    }

    return (
        <div className="flex">
            { [...Array(totalStars).fill(0)].map((val, i) => (
                <Star
                    key={i}
                    index={i + 1}
                    selectedStars={selectedStars}
                    hoveredStars={hoveredStars}
                    handleClick={handleClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                />
            )) }
        </div>
    )
}

export default StarRating