import resume from '../../resume/resume.doc';

const Resume = () => {
    return (
        <section className="section resume-section">
            <div className="section-center">
                <div className="resume-center">
                    <h2 className="section-title">Resume</h2>
                    <div className="underline"></div>
                    <div className="resume-container">
                        <h4 className="download-resume"><a href={resume} rel="noreferrer" download="resume">Download <span>resume</span></a></h4>

                        <div className="front-end-container">
                            <h3 className="section-title"><span>Front</span>-end</h3>
                            <ul className="front-end-skills">
                                <li>HTML 5</li>
                                <li>CSS 3</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Sass</li>
                                <li>Git</li>
                                <li>Responsive Design</li>
                                <li>Web APIs</li>
                            </ul>
                        </div>
                        <div className="back-end-container">
                            <h3 className="section-title"><span>Back</span>-end</h3>
                            <ul className="back-end-skills">
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>SQL</li>
                                <li>Object Relational Mapping (ORM)</li>
                                <li>Model-View-Controller (MVC)</li>
                                <li>NoSQL</li>
                                <li>Progressive Web Application (PWA)</li>
                                <li>EJS and Handlebars templates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume

