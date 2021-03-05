import React from "react";
import "./ChangeBackground.css";

export default function ChangeBackground(props) {
/*
if(props.description==="few clouds"  || props.description==="scattered clouds" || props.description==="broken clouds" ){
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

     //GOOOOOOOD BUT NOW I NEED TO INCLUDE === TO SUNRISE AND SUNSET
     if(props.hour<=props.sunriseHour || props.hour> props.sunsetHour )//NIIIIIIGHT{
    return(
<video autoPlay loop muted 
     src="/cloudy.mp4" type="video/mp4"/>);
    }

    else if(props.hour>props.sunriseHour && props.hour< props.sunsetHour)//DAY{
    return(
    <video autoPlay loop muted 
         src="/clear-day.mp4" type="video/mp4"/>);
        }

        //LATER DIVIDE AS WELL FEW CLOUDS ONE AND SCATTERED AND BROKEN CLOUDS ANOTHER FOR THE DAY.
*/ 

//CLOUDY

if(props.description==="few clouds"  || props.description==="scattered clouds" || props.description==="broken clouds"){
    //DAY
    if(props.hour>props.sunriseHour && props.hour< props.sunsetHour){
    return(
<video autoPlay loop muted 
     src="/cloudy.mp4" type="video/mp4"/>);
    }

    //NIGHT   
    else if(props.hour<props.sunriseHour || props.hour> props.sunsetHour ){
        return(
    <video autoPlay loop muted 
         src="/cloudy-night.mp4" type="video/mp4"/>);
        }

    //SUNRISE
    else if(props.hour === props.sunriseHour){
        return(
    <video autoPlay loop muted 
        src="/sunrise.mp4" type="video/mp4"/>);
        }

    //SUNSET
        else if(props.hour === props.sunsetHour){
            return(
        <video autoPlay loop muted 
            src="/sunset.mp4" type="video/mp4"/>);
            }
    }


//OVERCAST CLOUDS

else if(props.description==="overcast clouds"){
    //DAY
    if(props.hour>props.sunriseHour && props.hour< props.sunsetHour){
    return(
<video autoPlay loop muted 
     src="/overcast-clouds.mp4" type="video/mp4"/>);
    }

    //NIGHT   
    else if(props.hour<props.sunriseHour || props.hour> props.sunsetHour ){
        return(
    <video autoPlay loop muted 
         src="/cloudy-night.mp4" type="video/mp4"/>);
        }

    //SUNRISE
    else if(props.hour === props.sunriseHour){
        return(
    <video autoPlay loop muted 
        src="/sunrise.mp4" type="video/mp4"/>);
        }

    //SUNSET
        else if(props.hour === props.sunsetHour){
            return(
        <video autoPlay loop muted 
            src="/sunset.mp4" type="video/mp4"/>);
            }
    }

//CLEAR SKY
    else if(props.description==="clear sky"){
    //DAY
    if(props.hour>props.sunriseHour && props.hour< props.sunsetHour){  
    return(
    <video autoPlay loop muted 
         src="/clear-day.mp4" type="video/mp4"/>);
    }
    //NIGHT   
    else if(props.hour<props.sunriseHour || props.hour> props.sunsetHour ){
        return(
    <video autoPlay loop muted 
         src="/milkyway-night.mp4" type="video/mp4"/>);
        }

    //SUNRISE
    else if(props.hour === props.sunriseHour){
        return(
    <video autoPlay loop muted 
        src="/sunrise.mp4" type="video/mp4"/>);
        }

    //SUNSET
        else if(props.hour === props.sunsetHour){
            return(
        <video autoPlay loop muted 
            src="/sunset.mp4" type="video/mp4"/>);
            }
        }


//RAIN
    else if(props.description==="rain" || props.description==="moderate rain" || props.description==="light rain"){
    //DAY
    if(props.hour>props.sunriseHour && props.hour< props.sunsetHour){          
            return(
        <video autoPlay loop muted 
             src="/Raindrops_Videvo.mp4" type="video/mp4"/>);
     }
    //NIGHT   
    else if(props.hour<props.sunriseHour || props.hour> props.sunsetHour ){
        return(
    <video autoPlay loop muted 
         src="/rain-night.mp4" type="video/mp4"/>);
        }

    //SUNRISE
    else if(props.hour === props.sunriseHour){
        return(
    <video autoPlay loop muted 
        src="/sunrise.mp4" type="video/mp4"/>);
        }

    //SUNSET
        else if(props.hour === props.sunsetHour){
            return(
        <video autoPlay loop muted 
            src="/sunset.mp4" type="video/mp4"/>);
            }         
            }

//THUNDERSTORM
    else if(props.description==="thunderstorm"){

    //DAY
    if(props.hour>props.sunriseHour && props.hour< props.sunsetHour){      
                return(
            <video autoPlay loop muted 
                 src="/lightning-day.mp4" type="video/mp4"/>);
                }

     //NIGHT   
     else if(props.hour<props.sunriseHour || props.hour> props.sunsetHour ){
        return(
    <video autoPlay loop muted 
         src="/Lightning.mp4" type="video/mp4"/>);
        }

    //SUNRISE
    else if(props.hour === props.sunriseHour){
        return(
    <video autoPlay loop muted 
        src="/sunrise.mp4" type="video/mp4"/>);
        }

    //SUNSET
        else if(props.hour === props.sunsetHour){
            return(
        <video autoPlay loop muted 
            src="/sunset.mp4" type="video/mp4"/>);
            }  

            }
                
 
//SNOW
    else if(props.description==="snow" || props.description==="light snow"){

        if(props.hour>props.sunriseHour && props.hour< props.sunsetHour){   
            return(
        <video autoPlay loop muted 
            src="/snow-forest-day.mp4" type="video/mp4"/>);

        }
        //NIGHT   
        else if(props.hour<props.sunriseHour || props.hour> props.sunsetHour ){
           return(
       <video autoPlay loop muted 
            src="/snow-night.mp4" type="video/mp4"/>);
           }
   
       //SUNRISE
       else if(props.hour === props.sunriseHour){
           return(
       <video autoPlay loop muted 
           src="/sunrise.mp4" type="video/mp4"/>);
           }
   
       //SUNSET
           else if(props.hour === props.sunsetHour){
               return(
           <video autoPlay loop muted 
               src="/sunset.mp4" type="video/mp4"/>);
               }  

                }   
                
//MIST                
    else if(props.description==="mist" || props.description==="fog"){
        if(props.hour>props.sunriseHour && props.hour< props.sunsetHour){   
             return(
        <video autoPlay loop muted 
            src="/misty-mountains.mp4" type="video/mp4"/>);

        }
        //NIGHT   
        else if(props.hour<props.sunriseHour || props.hour> props.sunsetHour ){
           return(
       <video autoPlay loop muted 
            src="/misty-night.mp4" type="video/mp4"/>);
           }      
   
       //SUNRISE
       else if(props.hour === props.sunriseHour){
           return(
       <video autoPlay loop muted 
           src="/sunrise.mp4" type="video/mp4"/>);
           }
   
       //SUNSET
           else if(props.hour === props.sunsetHour){
               return(
           <video autoPlay loop muted 
               src="/sunset.mp4" type="video/mp4"/>);
               }  
     }
   
}