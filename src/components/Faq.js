import React from 'react';

const Faq = () => {
    return (
        <div className='ms-5 me-2 mt-5'>
            <h4>Frequently Asked Questions:</h4>
            <hr />
            <div className='mt-3'>
                <h5>What is SkillX?</h5>
                <p>SkillX is popular learning/ teaching platform trusted by millions.</p>
            </div>
            <div className='mt-3'>
                <h5>For whom SkillX is for?</h5>
                <p>SkillX is for anyone looking to learn/ teach professional skills.</p>
            </div>
            <div className='mt-3'>
                <h5>How expensive is SkillX?</h5>
                <p>Though SkillX prices are very reasonalble, Prices may vary from course to course.</p>
            </div>
            <div className='mt-3'>
                <h5>How can I teach on SkillX?</h5>
                <p>You may have to participite in a few tests first, in order to prove your expertise before teaching.</p>
            </div>
        </div>
    );
};

export default Faq;