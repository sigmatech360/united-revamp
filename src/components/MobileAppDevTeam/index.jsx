import React from 'react'
import Flutter from "../../assets/images/services/mobileappdev/Flutter.webp";
import reactnative from "../../assets/images/services/mobileappdev/reactnative.webp";
import ionic from "../../assets/images/services/mobileappdev/ionic.webp";
import swift from "../../assets/images/services/mobileappdev/swift.webp";
import xamarin from "../../assets/images/services/mobileappdev/xamarin.webp";
import kotlin from "../../assets/images/services/mobileappdev/kotlin.webp";
import visualstudio from "../../assets/images/services/mobileappdev/visualstudio.webp";
import androidstudio from "../../assets/images/services/mobileappdev/androidstudio.webp";
import phonegap from "../../assets/images/services/mobileappdev/phonegap.webp";
import ios from "../../assets/images/services/mobileappdev/ios.webp";
import firebase from "../../assets/images/services/mobileappdev/firebase.webp";
import cordova from "../../assets/images/services/mobileappdev/cordova.webp";


const MobileAppDevTeam = () => {
  return (
    <section className='mobileappdev-team-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="mobileappdev-team-head">
                        <h2 className='mainhead'>One Team, Countless Solutions. <span>Build an App with United Web Developers</span></h2>
                        <p>Every mobile application is built through smart work and strategy; we utillize the best tools and tactics to create a brilliant app that connects easily. </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2 col-md-4">
                    <div className="language-box">
                        <img src={Flutter} alt="image" />
                        <p>Flutter</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="language-box">
                        <img src={reactnative} alt="image" />
                        <p>React Native</p>
                    </div>
                </div> 
                <div className="col-lg-2 col-md-4">
                    <div className="language-box">
                        <img src={ionic} alt="image" />
                        <p>Ionic</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="language-box">
                        <img src={swift} alt="image" />
                        <p>Swift</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="language-box">
                        <img src={cordova} alt="image" />
                        <p>Cordova</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="language-box">
                        <img src={xamarin} alt="image" />
                        <p>Xamarin</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="language-box">
                        <img src={kotlin} alt="image" />
                        <p>Kotlin</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="language-box">
                        <img src={visualstudio} alt="image" />
                        <p>Visual Studio</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="language-box">
                        <img src={androidstudio} alt="image" />
                        <p>Android Studio</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="language-box">
                        <img src={firebase} alt="image" />
                        <p>Firebase</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="language-box">
                        <img src={phonegap} alt="image" />
                        <p>Phone Gap</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="language-box">
                        <img src={ios} alt="image" />
                        <p>iOS</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MobileAppDevTeam