import React from 'react';
import { Tag } from 'antd';

import stutuses from '../../statuses.json';

const StatusCircle = (props) => {
    return (
        <div className="statusCircle" style={{background: props.color}}></div>
    )
}

const OrderStatusItem = (props) => {

    const {status} = props; 

    const statusInfo = stutuses.find(item => {
        return item.name === status;
    });

    const {name, color, text} = statusInfo;

    return (   
        (name !== 'all') ?
            <Tag icon={<StatusCircle color={color} />}>{text}</Tag>:
            <Tag className='all'>Все</Tag>
        )

}

export default OrderStatusItem;