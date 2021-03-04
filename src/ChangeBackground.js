import React from "react";
import "./ChangeBackground.css";

export default function ChangeBackground(props) {

    if(props.description==="few clouds"  || props.description==="scattered clouds" || props.description==="broken clouds"){
    return(
<video autoPlay loop muted 
     src="/cloudy.mp4" type="video/mp4"/>);
    }

    else if(props.description==="clear sky"){
    return(
    <video autoPlay loop muted 
         src="/clear-day.mp4" type="video/mp4"/>);
        }

    else if(props.description==="rain"){
            return(
        <video autoPlay loop muted 
             src="/Raindrops_Videvo.mp4" type="video/mp4"/>);
            }

    else if(props.description==="thunderstorm"){
                return(
            <video autoPlay loop muted 
                 src="/Lightning.mp4" type="video/mp4"/>);
                }

                else if(props.description==="snow"){
                    return(
                <video autoPlay loop muted 
                     src="/snow-forest-day.mp4" type="video/mp4"/>);
                    }          

        else if(props.description==="mist"){
        return(
            <video autoPlay loop muted 
     src="/misty-mountains.mp4" type="video/mp4"/>);
     }
}