import React, { useState } from 'react';
import useSlider from '../../hooks/UseSlider';


const ServiceTypeTab = (props) => {

    const ref = React.useRef(null);
    useSlider(ref);

    const {content} = props;
    const [activeTab, setActiveTab] = useState(0);

    return(
        <ul className="serviceType" ref={ref}>
            {
                content.map((item, i) => {
                    return <li onClick={() => setActiveTab(i)} className={`serviceType__item ${i === activeTab && `active`}`}>{item}</li>
                })
            }
        </ul>
    )
}

export default ServiceTypeTab;