import React from 'react';

interface Props {
    onClick: () => void;
}

const CountButton: React.FC<Props> = ({ onClick }) => {
    return (
        <div className="items-centered">
            <button className="mx-auto md:p-3 rounded bg-cyan-500  border-1 border-black" onClick={onClick}>Click me</button>
        </div>
    );
};

export default CountButton;
