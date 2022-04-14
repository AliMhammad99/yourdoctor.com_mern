import { ReactComponent as LoadingIcon } from "../../assets/logo_icon_only.svg";
import { useRef,useEffect } from "react";
import "./Loading.scss";
const loadingComplete=()=>{
  loadingSection.current.classList.add("loading-completed")
}
function Loading() {
  const loadingSection = useRef();
  useEffect(() => {
    //Runs only on the first render
    //1.get Loading section
    //2.On Document load => 1. add loading-completed class 2.fadeout 3.body overflow to auto
    // console.log(loadingSection.current);
    window.addEventListener('load', loadingComplete);
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
