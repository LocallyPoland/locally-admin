import React, { useEffect } from "react";
import s from "./ActiveOrdersPage.module.css";
import ActiveOrders from "../../misc/ActiveOrders/ActiveOrders";
import { connect } from "react-redux";
import { getOrdersAction } from "../../store/actions/orderActions";

const ActiveOrdersPage = ({
    getOrders,
    order: {
        orders: { activeOrders },
    },
}) => {
    useEffect(() => {
        (async () => {
            await getOrders();
        })();
    }, []);
    return (
        <div className={s.main__container}>
            <header className={s.header}>
                <div className={s.header__inner}>
                    <div className={s.header__title}>Aktywne zamówienia</div>
                </div>
            </header>
            <div className={s.container}>
                {activeOrders &&
                    activeOrders.map((active) => {
                        return (
                            <div
                                key={active._id}
                                className={s.active__orders__item}
                            >
                                <ActiveOrders
                                    orderNumber={active._id.length}
                                    orderType={active.parcel || "Paczka"}
                                    orderWeight={active.weight || "5"}
                                    orderTime={active.deliveryTime || "12.20"}
                                    orderStartPlace={
                                        active.pickUp ||
                                        `${active.deliveryStreet}, ${active.deliveryHouse}`
                                    }
                                    orderFinishPlace={`${active.deliveryStreet}, ${active.deliveryHouse}`}
                                    orderPrice={active.sum}
                                    orderStatus={active.status}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return { order: state.order };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getOrders: () => dispatch(getOrdersAction()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrdersPage);
