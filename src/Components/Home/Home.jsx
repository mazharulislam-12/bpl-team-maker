import React, { useEffect, useState } from 'react';
import './Home.css'
import Card from '../Card/Card';

const Home = () => {

    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors] =useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllActors(data))
    },[]);

    const handleSelectActor = (actor) =>{
        setSelectedActors([...selectedActors, actor]);
    }

    console.log(selectedActors);

    
    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">
                {
                    allActors.map(actor => (
                        <div key={actor.id} className="card">
                        <img className='photo' src= {actor.image} alt="" />
                        <h2> {actor.name} </h2>
                        <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, minima.</small></p>
                        <div className="info">
                            <p>Salary : {actor.salary} $ </p>
                            <p> {actor.role} </p>
                        </div>
                        <button onClick={() => handleSelectActor(actor)} className='card-btn'>Select</button>
                    </div>
                    ))
                }
                </div>
                <div className="cart">
                    <Card></Card>
                </div>
            </div>
            
        </div>
    );
};

export default Home;