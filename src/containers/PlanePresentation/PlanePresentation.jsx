import React from "react";
import {useAppContext} from "../../utils/hooks/useAppContext";

const PlanePresentation = () => {
    const { historySection, setHistorySection, setAppMode} = useAppContext();

    return(
        <>
            <h1 className="pageTitle yatra-one-regular">Salmson 2</h1>
            <div className="menu">
                <div className="menuItem" onClick={() => setAppMode('menu')}>{`<- Back`}</div>
                <div className="menuItem" onClick={() => setHistorySection('overview')}>Overview</div>
                <div className="menuItem" onClick={() => setHistorySection('fuselage')}>Fuselage</div>
            </div>
            {
                historySection === 'overview' && <div className="modelOverview model model-right-bottom">
                    <h4 className="yatra-one-regular">Salmson 2</h4>
                    <img src="/assets/plane-1.png" alt="plane" />
                    <div>
                        The Salmson 2 A.2, (often shortened to Salmson 2) was a French biplane reconnaissance aircraft developed and produced by Salmson to a 1916 requirement. Along with the Breguet 14, it was the main reconnaissance aircraft of the French army in 1918 and was also used by American Expeditionary Force aviation units. At the end of the First World War, one-third of French reconnaissance aircraft were Salmson 2s.
                    </div>
                </div>
            }
            {
                historySection === 'fuselage' && <div className="modelOverview model model-right-top">
                    <h4 className="yatra-one-regular">Characteristics</h4>
                    <img src="/assets/plane-schema.png" alt="schema" />
                    <div>
                        <h5 className="modelSubTitle">General characteristics</h5>
                        <ul>
                           <li> <b> Crew</b>: 2</li>
                            <li><b>  Length</b>: 8.5 m (27 ft 11 in)</li>
                            <li> <b> Wingspan</b>: 11.75 m (38 ft 7 in)</li>
                            <li> <b> Height</b>: 2.9 m (9 ft 6 in)</li>
                            <li> <b> Wing area</b>: 37.27 m2 (401.2 sq ft)</li>
                            <li> <b> Empty weight</b>: 780 kg (1,720 lb)</li>
                            <li> <b> Gross weight</b>: 1,290 kg (2,844 lb)</li>
                            <li><b> Powerplant</b>: 1 × Salmson 9Za 9-cylinder water-cooled radial piston engine, 172 kW (231 hp)</li>
                            <li> <b> Propellers</b>: 2-bladed fixed-pitch propeller</li>
                        </ul>
                        <h5 className="modelSubTitle">Performance</h5>
                        <ul>
                            <li><b>Maximum speed</b>: 188 km/h (117 mph, 102 kn) at sea level</li>
                            <li><b>Range</b>: 500 km (310 mi, 270 nmi)</li>
                            <li><b>Service ceiling</b>: 6,250 m (20,510 ft)</li>
                            <li><b>Time to altitude</b>: 2,000 m (6,562 ft) in 7 minutes 13 seconds[3]</li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

export default PlanePresentation;