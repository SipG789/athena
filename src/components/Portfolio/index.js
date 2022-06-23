import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/portfolio/balance.jpg";


function Portfolio(props) {
    const currentCategory = {
        name: "portfolio",
        description: 
            "List of projects I have worked on throughout my course",
    };

    return (
        <section>
            <h1> {capitalizeFirstLetter(currentCategory.name)} </h1>
            <p> {currentCategory.name} </p>
            <div className='flex-row'>
                <img
                    src={photo}
                    alt="Budget Tracker"
                    className='img-thumbnail mx-1'
                />
            </div>
        </section>
    );
}


export default Portfolio;