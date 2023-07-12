import React, { useState } from 'react';
import './styles/categorybutton.css';
import scan from '../../images/scan.png';
import Select from 'react-select';

const options = [
    {value: "1-1", label: "1학년 1학기"},
    {value: "1-2", label: "1학년 2학기"},
    {value: "2-1", label: "2학년 1학기"},
    {value: "2-2", label: "2학년 2학기"},
    {value: "3-1", label: "3학년 1학기"},
    {value: "3-2", label: "3학년 2학기"},
]

const CategoryButton = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className='categorybutton'>
            <div className="selectBox">
                <Select
                    options={options}
                    defaultValue={options[0]}
                    isSearchable={false}
                    styles={{option: (provided, state) => ({...provided, backgroundColor: '#E1E9FF', color: state.isSelected ? '#1751EC' : 'gray'})}} />
            </div>
            <img src={scan} className='scanImage' />
        </div>
        
    );
};

export default CategoryButton;