import React, { useState } from 'react'
import "./Main.css";
import Slider from './Slider.js'

function Main({options, onOptionsChange, selectedOptionIndex}) {
    const selectedOption = options[selectedOptionIndex]

    function handleSliderChange({ target }) {
        onOptionsChange(prevOptions => {
            return prevOptions.map((option, index) => {
            if (index !== selectedOptionIndex) return option
            return {...option, value: target.value}
            })
        })
    }

    function getImageStyle() {
        const filters = options.map(option => {
            return `${option.property}(${option.value}${option.unit})`
        })

        return { filter: filters.join(' ')}
    }


    return (
        <div className="main">
            <div className="main__body" style={getImageStyle()}></div>
            <div className="main__footer">
                <Slider 
                    min={selectedOption.range.min}
                    max={selectedOption.range.max}
                    value={selectedOption.value}
                    handleChange={handleSliderChange}
                />
            </div>
        </div>
    )
}

export default Main
 