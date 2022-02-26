
import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "../index.css"

// Petstore is a container component. It contains other components that are
// responsible for the presentation and behavior of the application. 

export const SpaceTourism = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)
