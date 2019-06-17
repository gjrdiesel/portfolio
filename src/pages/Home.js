import React from 'react';
import PreviewCard from "../components/PreviewCard";

const projects = [
    {
        name: "Pricefixer",
        href: "https://pricefixer.com",
        description: "WordPress and Laravel Project, this project involved picking up and finishing an entire site redesign. But not only that, we had to to come in and find finish an undelivered quote tool that lets customers self select the perfect AC system for their house."
    },
    {
        name: "Athletic Junction Events",
        href: "https://athleticjunctionevents.com",
        description: "This was an entire event ticketing system and app I solely built using Laravel and React Native. I went on to create another branch of this project named Events Smarter for the same customer so he could target two different markets. So this ended up being 2 websites each with 1 app for iOS and 1 app for Android that I put in the app store thanks to React Native."
    },
    {
        name: "Law Credit",
        href: "https://lawcredit.legal",
        description: "Local sarasota company that connects people looking for legal help financing with a number of different lending companies. You can go to lawcredit.legal, apply, and within a few seconds have multiple offers from multiple lenders."
    },
    {
        name: "Fanoptic",
        href: "https://fanoptic.com",
        description: "NFL Agent Jesse Foreman dreamed of a web app that would enable all sports fans together, chat, talk smack, jeer/cheer each other over every imaginable sport. This site pulls in RSS feeds from hundreds and hundreds of sports websites to supply automatic posts that users can share to boast to their friends with. Jesse has a ton of great ideas for this site, so keep your eye on it!"
    },
    {
        name: "Stark Premium",
        href: "https://starkpremium.com",
        description: "Stark came to me with already armed with a strong API and a inventory system they were very happy with. They weren't happy with the marketing websites they had to go with however. They wanted a portfolio piece they could show to customers or acquire new customers with and they wanted it to automatically update with their current inventory system. I had our designer come up with a eCommerce theme with them in mind from their existing marketing materials and then I built them a WordPress website with WooCommerce and I custom built them an plugin to consume and sync their existing API."
    },
    {
        name: "Dream Sporting Trips",
        href: "https://dreamsportingtrips.com",
        description: "I came on board as employee #1 at DST, a outdoor adventure start up with a focus on connecting customers with guides. I recruited and hired the first 3 other developers, 2 designers, and marketers. I built a number of systems including but limited to the primary guide directory on dreamsportingtrips.com"
    },
    {
        name: "7 Lazy P",
        href: "https://sevenlazyp.com",
        description: "Another custom built wordpress theme, this one tripling their website traffic."
    },
    {
        name: "Brew Life Video Promo",
        href: "https://vimeo.com/user18582443",
        embed: `<iframe src="https://player.vimeo.com/video/300482827" width="600px" style="width:100%" height="200px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
        description: "I filmed via Drone and DSLR the event and then edited together this promo piece so it could be used to promote an upcoming event for short/quick facebook ad. Click view site to see all my videos on Vimeo."
    },
    {
        name: "White's Diesel",
        href: "https://whitesdieselperformance.com",
        description: "Migrated the entire site from OpenCart to WooCommerce, while leaving the site online and ensuring existing orders could function. At the same time I re-organized, redesigned, and launched the new site with an SEO focus, which resulted in sessions per month going from ~600 to ~3000 and 3x the conversion rate."
    },
].map(p => {
    p.img = `/work/${p.name}.jpg`;
    return p;
});

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
                {projects.map((p, id) => <PreviewCard {...p} id={id}/>)}
            </div>
            <div className="row mt-5">
                <div className="col-4 m-auto">
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