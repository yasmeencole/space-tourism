import React from "react"
import "../index.css"
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const Home = () => (
    <>
        <HomeStyles>
            <div className="home-style">
                {/* <h2>Space Explorers</h2> */}
                <div className="ff-sans-cond text-light">So you want to want to travel to</div>
                <div className="fs-700 ff-serif uppercase">Space</div>
                <div className="ff-sans-normal text-light">Let’s face it, if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</div>
            </div>
        </HomeStyles>
        <LargeButtonStyles className="flex">
            <button className="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</button>
        </LargeButtonStyles>
    </>
)

const HomeStyles = styled.div `
    padding: 5px;
    margin: 2px;
`

const LargeButtonStyles = styled.div `
    margin-top: 5em;
`