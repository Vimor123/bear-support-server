import './App.css';
import React from "react";
import bearDataJSON from "./assets/bearData.json";

function App() {

    function chooseNewPic() {
        const bearList = bearDataJSON["bears"];
        return bearList[Math.floor(Math.random() * bearList.length)];
    }

    const [bearPic, setBearPic] = React.useState(chooseNewPic);

    function askforNewPic() {
        setBearPic(chooseNewPic);
    }

    return (
        <div className={"content"}>

            <div className={"head-div"}>
                <h1 className={"title"}> Bear Support Den </h1>
                <span> A place where you can look at cute and sexy bears when you're feeling down. </span>
            </div>

            <div className={"middle-container"}>

                <div className={"description-box"}>

                    <p className={"description-paragraph"}>
                        Bears are the most beautiful people on the planet - <br/>
                        masculine, wise and strong  and yet so cute, cuddly and soft. <br/>
                        <br/>
                        There is nothing quite like hugging a cute chubby handsome bear <br/>
                        and giving him a light kiss on the cheek. <br/>
                        <br/>
                        Their magnificent smile with those big cute eyes <br/>
                        and big soft cheeks can instantly melt your heart. <br/>
                    </p>

                    <div className={"long-live-the-bears"}>
                        <span className={"dark-letter"}> ~  &nbsp; </span>
                        <span className={"light-letter"}> L </span>
                        <span className={"dark-letter"}> o </span>
                        <span className={"light-letter"}> n </span>
                        <span className={"dark-letter"}> g  &nbsp; </span>

                        <span className={"light-letter"}> l </span>
                        <span className={"dark-letter"}> i </span>
                        <span className={"light-letter"}> v </span>
                        <span className={"dark-letter"}> e &nbsp; </span>

                        <span className={"light-letter"}> t </span>
                        <span className={"dark-letter"}> h </span>
                        <span className={"light-letter"}> e &nbsp; </span>

                        <span className={"dark-letter"}> b </span>
                        <span className={"light-letter"}> e </span>
                        <span className={"dark-letter"}> a </span>
                        <span className={"light-letter"}> r </span>
                        <span className={"dark-letter"}> s </span>
                        <span className={"light-letter"}> ! &nbsp; </span>
                        <span className={"dark-letter"}> ~ </span>
                    </div>

                    <img className={"bear-flag-image"} src={"bearFlag.png"} alt={"bear flag"}></img>

                    <div className={"long-live-the-bears"}>
                        <span className={"dark-letter"}> ~  &nbsp; </span>
                        <span className={"light-letter"}> L </span>
                        <span className={"dark-letter"}> o </span>
                        <span className={"light-letter"}> n </span>
                        <span className={"dark-letter"}> g  &nbsp; </span>

                        <span className={"light-letter"}> l </span>
                        <span className={"dark-letter"}> i </span>
                        <span className={"light-letter"}> v </span>
                        <span className={"dark-letter"}> e &nbsp; </span>

                        <span className={"light-letter"}> t </span>
                        <span className={"dark-letter"}> h </span>
                        <span className={"light-letter"}> e &nbsp; </span>

                        <span className={"dark-letter"}> b </span>
                        <span className={"light-letter"}> e </span>
                        <span className={"dark-letter"}> a </span>
                        <span className={"light-letter"}> r </span>
                        <span className={"dark-letter"}> s </span>
                        <span className={"light-letter"}> ! &nbsp; </span>
                        <span className={"dark-letter"}> ~ </span>
                    </div>

                    <p className={"description-paragraph"}>
                        Always remember, that special bear is waiting for you! ~~~ <br/>
                        ~~~~~ He's gonna come back one day ~~~~~
                    </p>

                    <div className={"heart-container"}>
                        <img className={"heart-image"} src={"heart.gif"} alt={"heart"}></img>
                        <img className={"heart-image"} src={"heart.gif"} alt={"heart"}></img>
                        <img className={"heart-image"} src={"heart.gif"} alt={"heart"}></img>
                    </div>

                </div>

                <div className={"main-container"}>
                    <div className={"bear-image-container"}>
                        <img className={"bear-image"} src={"/bears/" + bearPic} alt={"sexy"}></img>
                    </div>
                    <div className={"bear-button-container"}>
                        <button className={"bear-button"} onClick={askforNewPic}> Next Bear </button>
                    </div>
                </div>

                <div className={"description-box"}>

                    <p className={"description-paragraph"}>
                        ~ Enjoy your stay at the bear den ~ <br/> <br/>
                        ~ Kiss all the bears ~
                    </p>

                    <div className={"long-live-the-bears"}>
                        <span className={"dark-letter"}> ~  &nbsp; </span>
                        <span className={"light-letter"}> L </span>
                        <span className={"dark-letter"}> o </span>
                        <span className={"light-letter"}> n </span>
                        <span className={"dark-letter"}> g  &nbsp; </span>

                        <span className={"light-letter"}> l </span>
                        <span className={"dark-letter"}> i </span>
                        <span className={"light-letter"}> v </span>
                        <span className={"dark-letter"}> e &nbsp; </span>

                        <span className={"light-letter"}> t </span>
                        <span className={"dark-letter"}> h </span>
                        <span className={"light-letter"}> e &nbsp; </span>

                        <span className={"dark-letter"}> b </span>
                        <span className={"light-letter"}> e </span>
                        <span className={"dark-letter"}> a </span>
                        <span className={"light-letter"}> r </span>
                        <span className={"dark-letter"}> s </span>
                        <span className={"light-letter"}> ! &nbsp; </span>
                        <span className={"dark-letter"}> ~ </span>
                    </div>

                    <img className={"bear-flag-image"} src={"bearFlag.png"} alt={"bear flag"}></img>

                    <div className={"long-live-the-bears"}>
                        <span className={"dark-letter"}> ~  &nbsp; </span>
                        <span className={"light-letter"}> L </span>
                        <span className={"dark-letter"}> o </span>
                        <span className={"light-letter"}> n </span>
                        <span className={"dark-letter"}> g  &nbsp; </span>

                        <span className={"light-letter"}> l </span>
                        <span className={"dark-letter"}> i </span>
                        <span className={"light-letter"}> v </span>
                        <span className={"dark-letter"}> e &nbsp; </span>

                        <span className={"light-letter"}> t </span>
                        <span className={"dark-letter"}> h </span>
                        <span className={"light-letter"}> e &nbsp; </span>

                        <span className={"dark-letter"}> b </span>
                        <span className={"light-letter"}> e </span>
                        <span className={"dark-letter"}> a </span>
                        <span className={"light-letter"}> r </span>
                        <span className={"dark-letter"}> s </span>
                        <span className={"light-letter"}> ! &nbsp; </span>
                        <span className={"dark-letter"}> ~ </span>
                    </div>

                    <img className={"ripple-gif"} src={"ripple.gif"} alt={"love"}></img>

                </div>

            </div>

            <footer className={"footer"}>
                <p> Made with love and passion &lt;3 &lt;3 &lt;3 (and React.js) </p>
            </footer>

        </div>
    );
}

export default App;
