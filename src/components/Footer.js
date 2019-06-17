import React from 'react';
export default () => <footer className="text-muted">
    <div className="container">
        <p className="float-right">
            <a href="#">Back to top</a>
            <br/>
            <a href="https://github.com/gjrdiesel/portfolio">Fork this on Github</a>
        </p>
        <p>Justin Reasoner &copy; {(new Date).getFullYear()}</p>
        <p>Want to get in touch? <a href="/contact">Visit the contact me page</a> or <a
            href="mailto:gjreasoner@gmail.com?subject=Hey+Justin!">send me an email</a> and just say hey.</p>
    </div>
</footer>