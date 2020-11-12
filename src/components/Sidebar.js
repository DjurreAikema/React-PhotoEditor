import React from 'react';
import './Sidebar.css';
import Sidebaroption from './SidebarOption';

function Sidebar({options, onSelectedOptionIndexChange, selectedOptionIndex}) {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Options</h2>
                </div>
            </div>
            {options.map((option, index) => {
                return (
                    <Sidebaroption 
                        key={index} 
                        Title={option.name}
                        Active={index === selectedOptionIndex}
                        HandleClick={() => onSelectedOptionIndexChange(index)}
                    />
                )
            })}
        </div>
    )
}

export default Sidebar
