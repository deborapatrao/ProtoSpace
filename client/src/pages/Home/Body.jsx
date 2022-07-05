import "./home.scss";
import React from 'react';
import shareImg from './share-protocols.png'
import shareIcon from './share-icon.png'
import runImg from './run-image.png'
import runIcon from './run-icon.png'
import monitorImg from './monitor-image.png'
import monitorIcon from './monitor-icon.png'
import supportImg from './support-image.png'


const Body = () => {

    return (
        <section className={"main-feature-container"}>
            <div className={"main-feature-details share"}>
                <img src={shareImg} alt={"share your protocols"} className={"main-feature-image"}/>
                <div className="main-feature-content">
                    <img src={shareIcon} alt={"share protocols"} className={"main-feature-icon"}/>
                    <h2>Create and share protocols</h2>
                    <p>Facilitate teaching with our versatile method development template and pick components to highlight precision. Choose who can run your protocol and share methods with colleagues. Update protocols while preserving versions for reproducibility.</p>
                </div>
            </div>
            <div className={"main-feature-details run-explore"}>
                 <div className={"run-explore-details"}>
                 <img src={runImg} alt={"run your protocols"} className={"main-feature-image"}/>
                    <div className="main-feature-content">
                        <img src={runIcon} alt={"run your protocols"} className={"main-feature-icon"}/>
                        <h2>Run and document experiments</h2>
                        <p>Ensure safety and run protocols step-by-step. Make notes and add attachments to document your experiment. With a clear track record, you can trace findings, correct mistakes, and support your claims. Share your results for school evaluation or export for easy data manipulation.</p>
                    </div>
                </div>
                
            </div>
            <div className={"main-feature-details monitor-progress"}>
                <div className={"monitor-progress-details"}>
                <img src={monitorImg} alt={"monitor student progress"} className={"main-feature-image"}/>
                    <div className="main-feature-content">
                        <img src={monitorIcon} alt={"monitor student progress"} className={"main-feature-icon"}/>
                        <h2>Monitor student progress</h2>
                        <p>Keeping track of student learning is essential for quality education. As effective educators, you can assess student performance data during an experiment. Make adjustments to protocols, confirm knowledge, and focus teaching in specific areas.</p>
                    </div>
                </div>
            </div>

            <div className={"main-feature-details support"}>
                <div className={"support-details"}>
                <img src={supportImg} alt={"support early science education"} className={"main-feature-image"}/>
                    <div className="main-feature-content">
                        <h2>Make space and support early science education</h2>
                        <p>With the growing relevance of STEM skills in the labour market, many high school graduates remain unqualified for these post-secondary programs. Protospace is committed to provide resources for early Science education, preparing the youth with skills and experiences for diverse career paths and success in a society of accelerating technology. We donate to help schools in kindergarten to Grade 12 provide quality laboratories and tools to students.</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Body;