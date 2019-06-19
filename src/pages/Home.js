import React from 'react';
import PreviewCard from "../components/PreviewCard";
import Projects from "../data/work"

export default () => <div>
    <section className="jumbotron home text-center">
        <div className="container">
            <h1 className="jumbotron-heading">Web Developer/Problem Solver</h1>
            <p className="lead">I'm a self taught, highly motivated, and continuously learning problem solver for
                over 50+ companies. I've designed, sold, lead, built, and delivered 100+ projects ranging from 3k to
                100k, in Laravel, WordPress, and React Native.</p>
            <div>
                <a href="#projects" className="btn btn-primary my-2 mr-2">View my projects</a>
                <a href="https://drive.google.com/file/d/18phwMmYb8usDzkWEYD0tW59Zz4o90QQx/view?usp=sharing"
                   className="btn btn-secondary my-2">Checkout my resume</a>
            </div>
        </div>
    </section>

    <div className="album py-5 bg-light">
        <div className="container">
            <h2><a name="projects">Recent Projects</a></h2>
            <div className="row">
                {Projects.map((p, id) => <PreviewCard {...{...p, id, key: id}} />)}
            </div>
            <div className="row mt-5">
                <div className="col-md-4 m-auto">
                    <a href="mailto:gjreasoner@gmail.com?subject=Lets+Work+Together"
                       className="btn btn-lg btn-block btn-primary">
                        <div>Start a new project</div>
                        <small>I'm ready to work with you</small>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>