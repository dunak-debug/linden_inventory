import React from "react";

interface WeightBarProps {
    percentage: number;
}

const WeightBar: React.FC<WeightBarProps> = (props) => {
    return (
        <div style={{backgroundColor: '#e0e0de', width: '100%', height: '1vh'}}>
            <div style={{backgroundColor: 'red', width: `${props.percentage}%`, height: '100%'}}></div>
        </div>
    );
};
export default WeightBar;
