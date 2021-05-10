import profilePic from '../../images/profile-pic.jpg';
const About = () => {
    return (
        <section className="section about-section">
            <div className="section-center">
                <div className="about-center">
                    <div className="about-content">
                        <h2 className="section-title">Get a closer look at who I am<span className="accent">.</span></h2>
                        <p className="about-text">Hello, my name is Ebenezer Kankam. I am a 25yrs old college graduate with a bachelor's in business administration from Middle Tennessee State University. During my years in college, I noticed I was drawn to my programming classes more than any other classes.</p>
                        <p className="about-text">I loved learning about all the technologies such as C#, python, SQL, and HTML & CSS. However, I was unsure about what to do with them. Until I discovered web development. Since learning web development I have been able to incorporate what I learned in college with Vanderbilt Coding Bootcamp to design and build some amazing and interesting applications.</p>
                        <p className="about-text">I love learning and working with new technologies. My latest technology obsession is with react.js. I can not get enough of it. My love and curiosity for coding grow more and more each day. </p>
                        <p className="about-text">A little background about where I am from. I was born and raised in Ghana, West Africa. My family and I moved to America when I was 11yrs old. I lived in Philadelphia for 10yrs before relocating to Nashville Tennessee. My hobbies include playing basketball, soccer, working out, and watching Netflix.</p>
                        <p className="about-text"> Notice how I didn't include coding? Because coding is not a hobby, it's LIFE!</p>
                    </div>
                    <div className="about-img-container">
                        <img src={profilePic} alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
