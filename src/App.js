import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const Layout = props => <div>
    <Header/>
    <main role="main">
        {props.children}
    </main>
    <Footer/>
</div>;

function App() {
    return <Layout>
        <Home/>
    </Layout>;
}

export default App;