/*
TODO: 
add distinguishing color to menu
GIVE A ONCE OVER!!!!!
*/
import React, { Fragment } from "react";
import ReactAudioPlayer from 'react-audio-player';
import StudioPic from "../assets/images/studio_pic.jpg";
import Button from "../components/Button";
import MediaCard from "../components/Media";
import SectionPic from "../assets/images/section_image.jpg";
import Rap from "../assets/images/rap-guy.jpg";
import Cam from "../assets/images/cam-guy.jpg";
import Drum from "../assets/images/drum-guy.jpg";
import Services from "../components/Services";
import Contact from "../components/Contact";
import AboutCard from "../components/AboutUsInfoCard";
import Media from "react-media";
import ArtistPortrait from "../components/ArtistPortait";
import NarsiePic from '../assets/images/narsiepic.jpeg';
import Shadow from '../assets/images/shadow.jpg';
import Tape from '../assets/images/tape.jpg';
import GuitarGuy from '../assets/images/guitar-guy.jpg';


const Home = props => {
  return (
    <Fragment
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Media queries={{
        small: "(max-width: 599px)"
      }}>
        {matches => matches.small ? ( <div style={styles.smallHeaderPic}>
        <Button title={"Book Now"}/>
      </div>) :( <div style={styles.headerPic}>
        <Button title={"Book Now"}/>
      </div>)}

      </Media>
    
     
      <div 
        style={{
          backgroundColor: "#f0f0f0",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23cee8e8' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23d4d4d4'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: "20"
        }}
        id="services"
      >
        <Services  />
      </div>
    
      <h1 id="discog" style={{
        position: 'relative',
      top:'5rem', color:'#cfcfcf'}}>Previous Work</h1>
      <div style={{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'center',
        backgroundColor: '#191919',
        paddingTop:'4rem'
      }}>
     
 
        <ArtistPortrait
        portraitImage = {NarsiePic}
        />
           <ArtistPortrait
        portraitImage = {Tape}
        />
           <ArtistPortrait
        portraitImage = {GuitarGuy}
        />
           <ArtistPortrait
        portraitImage = {Shadow}
        />
        
      </div>
      <div id="about"
        style={{
          width: "100vw",
          height: "auto",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        <AboutCard image={StudioPic} />
        <AboutCard image={Rap} />
        <AboutCard image={Cam} />
        <AboutCard image={Drum} />
      </div>
      <Contact id="contact" />
    </Fragment>
  );
};

const styles = {
  smallHeaderPic: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${StudioPic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "scroll",
    position: "relative"
  },

  headerPic: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${StudioPic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative"
  },

  prevDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    backgroundImage: `url(${SectionPic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundBlendMode: "multiply",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.855)",
    padding: "4rem 0rem",
    cursor: "pointer"
  }
};

export default Home;