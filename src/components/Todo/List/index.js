import React, { useState, useEffect } from 'react';
import './style.css'; // CSS dosyanızı import edin

function List() {
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState({ name: "", isCompleted: false });

    // Eventi güncelleme ve ekleme işlevi
    const saveEvent = () => {
        setEvents([...events, event]);
        setEvent({ name: "", isCompleted: false }); // Formu temizleme
    };

    // Input değişikliklerini event nesnesine yansıtma
    const onChangeInput = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
    };

    // Checkbox değişikliklerini işleyen fonksiyon
    const handleCheckboxChange = (index) => {
        const updatedEvents = events.map((e, i) =>
            i === index ? { ...e, isCompleted: !e.isCompleted } : e
        );
        setEvents(updatedEvents);
    };

    const setAllCompleted = () => {
        const updatedEvents = events.map((e, i) => 
            ({...e, isCompleted : true})
        );

        setEvents(updatedEvents);
    };

    // events güncellenince loglama
    useEffect(() => {
        console.log(events);
    }, [events]);

    return (
        <div className="container-css">
            <div className="form-container">
                <input
                    type='text'
                    name='name'
                    value={event.name}
                    onChange={onChangeInput}
                    placeholder="Event name"
                    className="input-field"
                />

                <div className='row'>
                    <div className='col-md-3'>
                        <p onClick={setAllCompleted} style={{fontSize : '25px', cursor : 'pointer'}}>v</p>
                    </div>
                    <div className='col-md-9'>
                        <button onClick={saveEvent} className="save-button">Add Event</button>
                    </div>
                </div>

                <div className="events-list">
                    <ul>
                        {events.map((e, index) => (
                            <li key={index} className={`event-item ${e.isCompleted ? 'completed' : 'not-completed'}`}>
                                <input
                                    type="checkbox"
                                    checked={e.isCompleted}
                                    onChange={() => handleCheckboxChange(index)}
                                    className="checkbox"
                                />
                                <span className="event-text">{e.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default List;





// import React, { useState, useEffect } from 'react';

// function List() {
//     const listStyle = {
//         height: '150px',
//         backgroundColor: 'red',
//     };

//     const [events, setEvents] = useState([]);
//     const [person, setPerson] = useState({ username: "", password: "" });

//     const onChangeInput = (e) => {
//         setPerson({ ...person, [e.target.name]: e.target.value });
//     };

//     const onSubmit = (e) => {
//         e.preventDefault();

//         setEvents([...events, person]);

//         // Temizleme
//         setPerson({ username: "", password: "" });
//     };

//     // events güncellenince loglama
//     useEffect(() => {
//         console.log(events);
//     }, [events]);

//     return (
//         <div>
//             <div style={listStyle}>
//                 <form onSubmit={onSubmit}>
//                     <div>
//                         <label>Username : </label>
//                         <input
//                             name='username'
//                             type='text'
//                             value={person.username}
//                             onChange={onChangeInput}
//                         />
//                     </div>
//                     <div>
//                         <label>Password : </label>
//                         <input
//                             name='password'
//                             type='password'
//                             value={person.password}
//                             onChange={onChangeInput}
//                         />
//                     </div>

//                     <button type='submit'>Gönder</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default List;
