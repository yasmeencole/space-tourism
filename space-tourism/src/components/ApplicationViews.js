import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render at http://localhost:8088/ */}
            <Route exact path="/">
                <Home />
            </Route>

        </>
    )
}