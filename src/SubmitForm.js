import React from 'react';
// import ReactDom from 'react-dom';


const SubmitForm = () => {
    function handleSubmit(event) {
        event.preventDefault();
        alert("You are Submited!");
    }

    
    return (
        <form style={{textAlign: "center"}} onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SubmitForm;
