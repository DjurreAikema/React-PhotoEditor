import React from 'react'
import './Slider.css'

export default function Slider({min, max, value, handleChange}) {
    return (
        <div className="slider">
            <input 
                type="range" 
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}
