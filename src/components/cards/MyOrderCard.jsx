import React from 'react';
import { ReactComponent as Ruble } from '../../icons/Ruble.svg';
import { ReactComponent as Chat } from '../../icons/Chat.svg';
import stutuses from '../../statuses.json';
import { Row, Col } from 'antd';


const MyOrderCard = (props) => {

    const { title, status, options, messages } = props;

    const statusInfo = stutuses.find(item => {
        return item.name === status;
    });

    const { color, text } = statusInfo;

    return (
        <div className="myOrderCard">
            <div className="myOrderCard__status">
                <span style={{ color: color, borderColor: color }} className="myOrderCard__status__status">{text}</span>

                {!options.paid &&
                    <span className="myOrderCard__status__notPaid">
                        <Ruble />
                        <span>Не оплачено!</span>
                    </span>
                }

            </div>

            <h5 className="myOrderCard__title">{title}</h5>

            <div className="myOrderCard__footer">
                <Row justify={'space-between'}>
                    <Col className='myOrderCard__footer__options__wrapper' xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 18 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                        <Row className='myOrderCard__footer__options'>
                            <Col className='myOrderCard__footer__option' xl={{ span: 6 }} lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                                <p className="myOrderCard__footer__option__property">Оплачено:</p>
                                <p className="myOrderCard__footer__option__value">{options.paid || 'нет оплаты' }</p>
                            </Col>
                            <Col className='myOrderCard__footer__option' xl={{ span: 6 }} lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                                <p className="myOrderCard__footer__option__property">ID заявки:</p>
                                <p className="myOrderCard__footer__option__value">{options.ID}</p>
                            </Col>
                            <Col className='myOrderCard__footer__option' xl={{ span: 6 }} lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                                <p className="myOrderCard__footer__option__property">Создана:</p>
                                <p className="myOrderCard__footer__option__value">{options.created}</p>
                            </Col>
                            <Col className='myOrderCard__footer__option' xl={{ span: 6 }} lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                                <p className="myOrderCard__footer__option__property">Изменение:</p>
                                <p className="myOrderCard__footer__option__value">{options.edited}</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col className='myOrderCard__footer__chatAndMore' xl={{ span: 6 }} lg={{ span: 6 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                        <span className={`myOrderCard__footer__chatAndMore__chat ${messages.hasNew && 'active'}`}>
                            <Chat className="myOrderCard__footer__chatAndMore__chat__icon" />
                            <p className="myOrderCard__footer__chatAndMore__chat__text">{messages.num}</p>
                        </span>

                        <span className="myOrderCard__footer__chatAndMore__more">Подробнее</span>
                    </Col>
                </Row>
            </div>

        </div >
    )

}

export default MyOrderCard;