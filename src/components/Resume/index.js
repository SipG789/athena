import React from 'react';



function Resume() {
    return (
        <section className='my-5'>
            <h1 id='resume'>My Resume</h1>
            <div className='my-2'>
                <a href={require('../../assets/resume/Sipriano-Gonzalez.Resume-2022.pdf')} download>
                    <h4>Feel free to download my Resume</h4>
                </a>
            </div>

        </section>

    );
}



export default Resume;