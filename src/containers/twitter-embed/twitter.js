import React, {Suspense, useContext} from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const renderLoader = () => <Loading />;
const cantDisplayError =
  "<div className='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

function timeOut() {
  setTimeout(function () {
    if (!document.getElementById("twitter").innerHTML.includes("iframe")) {
      document.getElementById("twitter").innerHTML = cantDisplayError;
    }
  }, 10000);
}
var widthScreen = window.screen.width;

