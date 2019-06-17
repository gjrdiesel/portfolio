import React from 'react';
import PreviewCard from "../components/PreviewCard";

export default () => <div>
    <section className="jumbotron text-center">
        <div className="container">
            <h1 className="jumbotron-heading">Web Developer/Problem Solver</h1>
            <p className="lead text-muted">I'm a self taught, highly motivated, and continuously learning problem solver for
            over 50+ companies. I've designed, sold, lead, built, and delivered 100+ projects ranging from 3k to 100k, in Laravel, WordPress, and React Native.</p>
            <div>
                <a href="#Projects" className="btn btn-primary my-2 mr-2">View my projects</a>
                <a href="https://drive.google.com/file/d/18phwMmYb8usDzkWEYD0tW59Zz4o90QQx/view?usp=sharing" className="btn btn-secondary my-2">Checkout my resume</a>
            </div>
        </div>
    </section>

    <div className="album py-5 bg-light">
        <div className="container">

            <div className="row">
                <PreviewCard/>
                <PreviewCard/>
                <PreviewCard/>

                <PreviewCard/>
                <PreviewCard/>
                <PreviewCard/>

                <PreviewCard/>
                <PreviewCard/>
                <PreviewCard/>
            </div>
        </div>
    </div>
</div>