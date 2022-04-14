import { ReactComponent as LoadingIcon } from "../../assets/logo_icon_only.svg";
import { useRef, useEffect } from "react";
import "./Loading.scss";

//When loading screen is needed use this component
function Loading() {
  //Reference to the #loading section to access it later
  const loadingSection = useRef();
  //Function to call on loading complete
  const loadingComplete = () => {
    //Hide #loading section using a css class
    loadingSection.current.classList.add("loading-completed");
    //Calculate the time of fade out
    var fadeOutTime =
      1000 *
      parseInt(
        getComputedStyle(document.body).getPropertyValue(
          "--loading-fadeout-duration"
        )
      );
    //After fade out is ended, display:none the #loading section
    setTimeout(() => {
      loadingSection.current.style.display = "none";
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }, fadeOutTime);
  };
  useEffect(() => {
    //This useEffect will be called once and on first render only
    window.addEventListener("load", loadingComplete);
  }, []);
  return (
    <section id="loading" ref={loadingSection}>
      <LoadingIcon />
      <h1 id="copyright-sentence">
        Copyright &copy; 2022, All rights reserved.
      </h1>
    </section>
  );
}

export default Loading;
