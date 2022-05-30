import React from 'react';
import OrderStatusItem from './OrderStatusItem';
import { Row } from 'antd';
import useSlider from '../../hooks/UseSlider';

const OrderStatusTabs = (props) => {

    const ref = React.useRef(null);

    useSlider(ref);

    return (
        <div className="orderStatusTabs" ref={ref}>
            <Row gutter={[16, 16]}>
                <OrderStatusItem status='all' />
                <OrderStatusItem status='created' />
                <OrderStatusItem status='reportDone' />
                <OrderStatusItem status='inWork' />
                <OrderStatusItem status='review' />
                <OrderStatusItem status='correction' />
                <OrderStatusItem status='done' />
            </Row>
        </div>
    )
}

export default OrderStatusTabs;