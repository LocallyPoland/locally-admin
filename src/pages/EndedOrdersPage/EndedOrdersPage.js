import React, {useEffect} from "react";
import s from "./EndedOrdersPage.module.css";
import OrderFilter from "../../misc/OrderFilter/OrderFilter";
import ActiveOrders from "../../misc/ActiveOrders/ActiveOrders";
import {connect} from "react-redux";
import {getOrdersAction} from "../../store/actions/orderActions";

const EndedOrdersPage = ({getOrders, order: {orders: {ordersHistory}}}) => {
    useEffect(() => {
        (async () => {
            await getOrders();
        })();
    }, []);
    return (
        <div className={s.main__container}>
            <header className={s.header}>
                <div className={s.header__inner}>
                    <div className={s.header__title}>Historia zamówień</div>
                </div>
            </header>
            <div className={s.filter}>
                <OrderFilter/>
            </div>
            <div className={s.container}>
                <div className={s.ended__orders__title}>
                    Zamówienia od <span className={s.title__date}>21.08.20</span>
                </div>
                {ordersHistory && ordersHistory.map(history =>
                    <ActiveOrders
                        key={history._id}
                        orderNumber={history._id.length || "11"}
                        orderType={history.parcel || "Paczka"}
                        orderWeight={history.weight || "21"}
                        orderTime={history.deliveryTime || "14:88"}
                        orderStartPlace={history.pickup || "ul. Rynek 3"}
                        orderFinishPlace={`${history.deliveryStreet}, ${history.deliveryHouse}` || "ul. Lewakowskiego 12/55"}
                        orderPrice={history.sum || "28"}
                    />)}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {order: state.order};
};
const mapDispatchToProps = (dispatch) => {
    return {
        getOrders: () => dispatch(getOrdersAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndedOrdersPage);
