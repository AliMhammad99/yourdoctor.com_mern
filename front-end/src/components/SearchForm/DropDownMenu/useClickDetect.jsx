import React, { useRef, useEffect } from "react";

/**
 * Custom hook that alerts clicks outside of the passed ref
 */
function useClickDetect(ref) {
  var clickedOutside = false;
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        clickedOutside = true;
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return clickedOutside;
}
export default useClickDetect;
