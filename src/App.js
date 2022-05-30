import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';

import ServiceType from './components/tabs/ServiceTypeTab';
import SearchInput from './components/inputs/SearchInput';
import OrderStatusTabs from './components/tabs/OrderStatusTabs';
import SortOrderCount from './components/listHeaders/SortOrderCount';
import MyOrderCard from './components/cards/MyOrderCard';


const serviceTypeTabArr = ["Аренда", "Ипотека", "Покупка", "Продажа", "Сдача"];

function App() {


  return (
    <div className="App">

      <div className="container">

        <ServiceType content={serviceTypeTabArr} />
        <br />
        <SearchInput title={'Адрес объекта, ID заявки'} />
        <br />
        <OrderStatusTabs />
        <br />
        <SortOrderCount ordersNum={36668} />
        <br />
        <MyOrderCard title={'г. Ростов-на-Дону, р-н Советский, ул. Качинцев, 79В'}
                     status='created'
                     options={{paid:null, ID: 492932320, created: '24.12.2022', edited: '24.12.2022'}}
                     messages={{hasNew:true, num: 3}}
        />
        
      </div>
    </div>
  );
}

export default App;
