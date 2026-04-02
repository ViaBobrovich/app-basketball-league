export function renderCourt() {
    const court = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    court.setAttribute("viewBox", "0 0 15.6 15.35");

    court.innerHTML = ` 
            <g
                fill="none"
                stroke="white"
                stroke-width="0.1"
                id="court__marking"
               
            >
                <path
                    d="M 0.2 0.2 l 15.24 0 l 0 14.325 l -15.24 0 l 0 -14.325 m 0.91 0 l 0 4.27 a 7.24 7.24, 0, 0, 0, 13.42 0 l 0 -4.27 m -4.27 0 l 0 5.79 l -0.61 0 m -3.66 0 l -0.61 0 l 0 -5.79  "
                />
                <path
                    stroke-dasharray="0.44"
                    d=" M 0.2 0.2 m 5.18 0 m 0 5.79 m 0.61 0 a 1.83 1.83, 0, 0, 1, 3.66 0  "
                />
                <path
                    d=" M 0.2 8.735 m 5.18 0 m 0 5.79 m 0.61 0 a 1.83 1.83, 0, 0, 1, 3.66 0  "
                />
                <path
                    d=" M 0.2 0.2 m 10.06 5.79 m -0.61 0 a 1.83 1.83, 0, 0, 1, -3.66 0  "
                />
            </g>
            <g  fill="none" stroke-width="0.1" opacity="0.7"  id="court__rim">

                <path
                    stroke="black"
                    d="M 0.2 0.2 m 6.705 1.22 l 1.83 0 m -0.915 0 l 0 0.1515 a 0.2285 0.2285, 0,0,0 0 0.457 a 0.2285 0.2285, 0,0,0 0 -0.457 "
                />
                <circle cx="7.82" cy="1.80" r="0.2285" stroke="#FF4500" />
            </g>
   `;

    return court;
}

export function renderCourtSegments() {
    const courtSegments = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g",
    );

    courtSegments.innerHTML = `

                <path
                    id="0-A"
                    class="court-segment"
                    d="M 5.38 0.2 L 5.38 2.77 L 7.82 1.8 L 7.82 0.2 z "
                />
                <path
                    id="0-B"
                    class="court-segment"
                    d="M 3.245 0.2 L 3.245 3.60 L 5.38 2.77 L 5.38 0.2 z "
                />
                <path
                    id="0-C"
                    class="court-segment"
                    d="M 1.11 0.2 L 1.11 4.47 L 3.245 3.60 L 3.245 0.2 z"
                />
                <path
                    id="0-D"
                    class="court-segment"
                    d="M 0.2 0.2 L 0.2 4.83 L 1.11 4.47 L 1.11 0.2 z "
                />
                <path
                    id="45-A"
                    class="court-segment"
                    d="M 5.38 2.77 L 5.38 5.99  L 7.82 1.8  z "
                />

                <path
                    id="45-B"
                    class="court-segment"
                    d="M  3.245 3.6 A 3 4, 0, 0, 0, 4.79 7 L 5.38 5.99 L 5.38 2.77 z "
                />
                <path
                    id="45-C"
                    class="court-segment"
                    d="M 1.11 4.47 A 8 8.8, 0, 0, 0,  4.13 8.05 L 4.79 7 A 3 4, 0, 0 , 1, 3.245 3.6 z "
                />
                <path
                    id="45-D"
                    class="court-segment"
                    d="M 0.2 4.83 A 8 8, 0, 0, 0, 3.72 8.86 L 4.13 8.05 A 8 8.8, 0, 0, 1, 1.11 4.47 z "
                />

                <path
                    id="45-E"
                    class="court-segment"
                    stroke-linejoin="round"
                    d="M 0.2 4.83 L 0.2 14.525 L 3.72 8.85 A 8 8, 0, 0, 1, 0.2 4.83 "
                />

                <path
                    id="90-A"
                    class="court-segment"
                    d="M 5.38 5.99 L 7.82 1.80 L 10.26 5.99 z "
                />
                <path
                    id="90-B"
                    class="court-segment"
                    d="M 4.79 7 L 5.38 5.99 L  10.26 5.99 L 10.85 7  A 6 6, 0, 0, 1, 4.79 7 "
                />
                <path
                    id="90-C"
                    class="court-segment"
                    d="M 4.13 8.05 L 4.79 7  A 6 6, 0, 0, 0, 10.85 7 L 11.47 8.05 A 8 8.8, 0, 0, 1, 4.13 8.05 "
                />

                <path
                    id="90-D"
                    class="court-segment"
                    d="M 3.72 8.85 L 4.13 8.05 A 8 8.8, 0, 0, 0,  11.47 8.05 L 11.92 8.85 A 8 8, 0, 0, 1, 3.72 8.85 "
                />
                <path
                    id="90-E"
                    class="court-segment"
                    stroke-linejoin="round"
                    d="M 0.2 14.525 L 3.72 8.85 A 8 8, 0, 0, 0, 11.92 8.85 L 15.44 14.525 z "
                />
                <path
                    id="135-A"
                    class="court-segment"
                    stroke-linejoin="round"
                    d="M 7.82 1.80 L 10.26 5.99 L 10.26 2.77  z "
                />

                <path
                    id="135-B"
                    class="court-segment"
                    d="M 10.26 2.77 L 10.26 5.99 L 10.85 7 A 3 4, 0, 0, 0, 12.325 3.6 z "
                />

                <path
                    id="135-C"
                    class="court-segment"
                    d="M 10.85 7 L 11.47 8.05 A 8 8.8, 0, 0, 0, 14.53 4.47 L  12.325 3.6  A 3 4, 0, 0, 1, 10.85 7  "
                />
                <path
                    id="135-D"
                    class="court-segment"
                    d="M 11.47 8.05 L 11.92 8.85 A 8 8, 0, 0, 0, 15.44 4.83 L 14.53 4.47 A 8 8.8, 0, 0, 1, 11.47 8.05 "
                />
                <path
                    id="135-E"
                    class="court-segment"
                    stroke-linejoin="round"
                    d="M 11.92 8.85 L 15.44 14.525 L 15.44 4.83 A 8 8, 0, 0, 1, 11.92 8.85 "
                />

                <path
                    id="180-A"
                    class="court-segment"
                    d="M 7.82 0.2 L 7.82 1.80 L 10.26 2.77 L 10.26 0.2 z "
                />

                <path
                    id="180-B"
                    class="court-segment"
                    d="M 10.26 0.2 L 10.26 2.77 L 12.325 3.6 L 12.325 0.2 z "
                />

                <path
                    id="180-C"
                    class="court-segment"
                    d="M 12.325 0.2 L 12.325 3.6 L 14.53 4.47 L 14.53 0.2 z "
                />

                <path
                    id="180-D"
                    class="court-segment"
                    d="M 14.53 0.2 L 14.53 4.47 L 15.44 4.83 L 15.44 0.2 z"
                />

    `;

    courtSegments.setAttribute("id", "court__segments");

    courtSegments.setAttribute("fill", "rgba(150,150,150, 0.5");
    courtSegments.setAttribute("stroke-width", "0.15px");
    courtSegments.setAttribute("stroke", "rgb(140,200,200)");

    return courtSegments;
}
