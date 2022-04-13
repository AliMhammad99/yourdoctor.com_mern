import { ReactComponent as LoadingIcon } from "../../assets/loading_icon.svg";
import "./Loading.scss";
function Loading() {
  return (
    <section id="loading">
      <LoadingIcon />
      <h1 id="copyright-sentence">
        Copyright &copy; 2022, All rights reserved.
      </h1>
    </section>
  );
}

export default Loading;