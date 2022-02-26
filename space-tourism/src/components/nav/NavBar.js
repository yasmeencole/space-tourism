import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components';


export const NavBar = () => {
    return (
        <NavStyles className="navbar uppercase text-white letter-spacing-2">
            <div className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </div>
            <div className="navbar__item">
                <Link className="navbar__link" to="/destination">Destination</Link>
            </div>
            <div className="navbar__item">
                <Link className="navbar__link" to="/crew">Crew</Link>
            </div>
            <div className="navbar__item">
                <Link className="navbar__link" to="/technology">Technology</Link>
            </div>
        </NavStyles>
    )
}

const NavStyles = styled.div `
    display: flex;
    padding: 5px;
    gap: 5rem;
    backdrop-filter: blur(81.5485px);
`

// const LinkStyles = styled.Link `
//     display: flex;
//     padding: 5px;
//     gap: 5rem;
// `