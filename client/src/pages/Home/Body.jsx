import "./home.scss";
import React from 'react';


const Body = () => {

    return (
        <section className={"main-feature-container"}>
            <div className={"main-feature-details share"}>
                <h2>Create and share protocols</h2>
                <p>Facilitate teaching with our versatile method development template and pick components to highlight precision. Choose who can run your protocol and share methods with colleagues. Update protocols while preserving versions for reproducibility.</p>
                <img />
            </div>
            <div className={"main-feature-details run-explore"}>
                 <div className={"run-explore-details"}>
                    <h2>Run and document experiments</h2>
                    <p>Ensure safety and run protocols step-by-step. Make notes and add attachments to document your experiment. With a clear track record, you can trace findings, correct mistakes, and support your claims. Share your results for school evaluation or export for easy data manipulation.</p>
                </div>
                <div>
                    <img />
                </div>
            </div>
            <div className={"main-feature-details monitor-progress"}>
                <div className={"monitor-progress-details"}>
                    <h2>Monitor student progress</h2>
                    <p>Keeping track of student learning is essential for quality education. As effective educators, you can assess student performance data during an experiment. Make adjustments to protocols, confirm knowledge, and focus teaching in specific areas.</p>
                </div>
                <div>
                    <img />
                </div>
            </div>
            <div className={"main-feature-details social-responsibility"}>
                <div className={"social-responsibility-details"}>
                    <h2>Make Space for Science </h2>
                    <p>We help fill the gap between a technology-intensive world and its future citizens.</p>
                </div>
                <div className={"sr-info"}>
                    <img />
                    <div className={"sr-info-details"}>
                        <h3>We support early Science education</h3>
                        <p>With the growing relevance of STEM skills in the labour market, many high school graduates remain unqualified for these post-secondary programs. Protospace is committed to provide resources for early Science education, preparing the youth with skills and experiences for diverse career paths and success in a society of accelerating technology. We donate to help schools in kindergarten to Grade 12 provide quality laboratories and tools to students. </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Body;