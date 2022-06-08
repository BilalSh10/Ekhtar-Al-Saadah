import React from 'react';
import { useEffect, useState } from 'react';
import { BiArrowToTop } from "react-icons/bi";

function BackToTopButton() {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
            })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div> {backToTopButton && (
        <button style={{
            position: "fixed",
            display: "flex",
            bottom: "70px",
            right: "75px",
            height: "45px",
            width: "45px",
            fontSize: "45px",
            justifyContent: "center",
            borderRadius: "50%",
            alignItems: "center",
            zIndex: "1",
        }}
        onClick={scrollUp}
        ><BiArrowToTop /></button>
    )} </div>
  )
}

export default BackToTopButton;