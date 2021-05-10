
const Portfolio = (props) => {
    return (
        <section className="section portfolio-section">
            <div className="section-center">
                <div className="portfolio-center">
                    <h2 className="section-title">Portfolios</h2>
                    <div className="underline"></div>
                    <div className="project-container">
                        {/* single project */}
                        {props.projects.map(({ title, description, links }, i) => (
                            <article className="card" key={title}>
                                <div className="card-img">
                                    <img src={require(`../../images/projects/${i}.jpg`).default} alt={title} />
                                </div>

                                <div className="card-contents">
                                    <div className="card-info">
                                        <h3 className="card-title">{title}</h3>
                                        <p className="card-description">{description}</p>
                                    </div>
                                    <hr />
                                    <div className="card-links">
                                        <a href={links.github} target="_blank" rel="noreferrer" className="card-link">gitHub</a>
                                        <a href={links.website_url} target="_blank" rel="noreferrer" className="card-link">website</a>

                                    </div>
                                </div>
                            </article>
                        ))}

                        {/* end of single project */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Portfolio
