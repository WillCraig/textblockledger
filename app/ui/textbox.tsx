import React from 'react';

interface Props {
    txt: string;
    handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<Props> = ({ txt, handleTextChange }) => {
    return (
        <div>
            <textarea
                className='centered'
                id="text"
                name="text"
                value={txt}
                onChange={handleTextChange}
                rows={10}
                cols={25}
                placeholder="Enter text here"
              ></textarea>
        </div>
    );
};

export default TextArea;
