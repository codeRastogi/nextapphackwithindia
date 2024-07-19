"use client"
import { ReactLenis } from "@studio-freight/react-lenis"

function SmoothScroll({ children }) {
    return <ReactLenis lerp={1} smoothWheel={true} root > {children}</ReactLenis >
}

export default SmoothScroll;