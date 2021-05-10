import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const [person, setPerson] = useState({ name: "", email: "", message: "" });
    const [people, setPeople] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const changeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
        if (name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (e.target.value.length === 0) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

    }


    const submitHandler = e => {
        e.preventDefault();
        const { name, email, message } = person;
        if (!errorMessage && name && email && message) {
            const newPerson = { ...person };
            setPeople([...people, newPerson]);
            setPerson({ name: "", email: "", message: "" });
            console.log('from', person);
        }
    }
    return (
        <section className="section section-bg">
            <div className="section-center">
                <form className="form" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label><br />
                        <input type="text" id="name" name="name" value={person.name} onChange={changeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" id="email" name="email" value={person.email} onChange={changeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">message</label><br />
                        <textarea name="message" value={person.message} onChange={changeHandler}></textarea>
                    </div>
                    {errorMessage && (<div className="form-group">
                        <p className="text-error">{errorMessage}</p>
                    </div>)}

                    <button type="submit" className="submit-btn">Submit</button>
                </form>

            </div>
        </section>
    )
}

export default Contact
