import React from "react"
import "./leaf.css";

const Leaf = () => (
    <div style={{
        maxWidth: '500px',
        maxHeight: '500px'
    }}>
        <svg width="250" height="250" 
            viewBox="0 0 1138 724" 
            // preserveAspectRatio="xMidYMid meet"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{
                display: 'inline-block',
                position: 'absolute',
                top: 0,
                left: 0
            }}>
            <path d="M555 723C519.016 528.049 589.176 422.231 935 242M933 243C631.759 421.095 503.639 522.512 577 715M555 720L578 714M565 579C776.932 640.138 902.221 538.113 1135 160M1136.5 161C633.698 225.655 492.089 307.818 518 545.5M519.5 544C306.351 492.844 224.475 423.773 140 234.5C102.026 127.346 74.1408 74.2942 2.5 3M4 3C308.139 80.5133 515.639 108.699 560 293.5M259.5 201C308.686 283.179 341.493 325.947 441.5 376M441.5 375.5C346.771 309.466 310.931 271.364 269.5 202C247.296 156.292 233.797 134.48 203 120M261 203.5C250.65 179.736 246.315 168.577 240.5 151.5" stroke="black" stroke-width="5"/>
        </svg>
    </div>
)
export default Leaf;