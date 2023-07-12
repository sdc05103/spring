import React from 'react';
import './styles/modifybar.css'

const ModifyBar = ({ onAddClass }) => {
    return (
        <div className='modifybar'>
            <div className='colorBLUE addClass' onClick={onAddClass}>더 입력하기</div>
            <div className='colorGRAY'>초기화</div>
            <div></div>
            <div className='colorBLUE goright'>저장하기</div>
        </div>
    );
};

export default ModifyBar;