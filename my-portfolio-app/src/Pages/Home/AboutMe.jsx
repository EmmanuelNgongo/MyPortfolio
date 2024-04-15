export default function AboutMe() {
    return(
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/about-me.png" alt="About Me " />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title"> About </p>
                    <h1 className="skills--section--heading"> About Me </h1>
                    <p className="hero--section--description"> With a foundation in Computer Science and a year's experience in data capturing, I'm currently enhancing my capabilities through an IBM Data Engineer certification. This journey is deepening my expertise in data architecture, ETL processes, and cloud technologies. Having worked with Python, SQL, and real-time data streams, I'm adept at ensuring data integrity and supporting analytical processes. Eager to apply my evolving skill set, I aim to contribute to the development and maintenance of scalable data systems, leveraging my education and hands-on experience to drive data-driven decision-making in a dynamic environment. </p>
                    {/* <p className="hero--section--description"> about me description bla bla bla lorem ipsum dolor sit amet consectetur </p> */}
                </div>
            </div>
        </section>
    );
}