import React from 'react';
import { Select } from 'antd';
import { ReactComponent as SelectArrow } from '../../icons/SelectArrow.svg';



const { Option } = Select;

const SortOrderCount = (props) => {

    let {ordersNum} = props; 

    ordersNum = ordersNum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");

    return (   
        <div className="sortOrderCount">
            <div className="sortOrderCount__left">
                <p className="sortOrderCount__left__text">Сортировать:</p>
                <Select
                placeholder="Select a person"
                defaultValue="byDate"
                bordered={false}
                suffixIcon={<SelectArrow />}
                 >
                    <Option value="byDate">По дате создания</Option>
                    <Option value="byDate2">По дате создания2</Option>
                    <Option value="byDate3">По дате создания3</Option>
                 </Select>
            </div>

            <div className="sortOrderCount__right">
                <p className="sortOrderCount__right__ordersNum">{ordersNum} заявок</p>
            </div>
        </div>
    )

}

export default SortOrderCount;