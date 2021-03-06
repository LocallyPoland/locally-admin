import React, { useEffect, useState } from "react";
import s from "./EndedOrdersPage.module.css";
import ActiveOrders from "../../misc/ActiveOrders/ActiveOrders";
import { connect } from "react-redux";
import {
  filterOrdersAction,
  getOrdersAction,
} from "../../store/actions/orderActions";
import Select from "../../misc/Select/Select";
import ModalWindow from "../../misc/ModalWindow/ModalWindow";

const EndedOrdersPage = ({
  getOrders,
  order: {
    orders: { ordersHistory },
  },
  filteredOrders,
  filterOrders,
}) => {
  console.log('orders history', ordersHistory);
  const sortOptions = [
    { value: "up", label: "Od najstarszych" },
    { value: "down", label: "Od najnowszych" },
  ];
  const statusOptions = [
    { value: "done", label: "Wykonane" },
    { value: "cancelled", label: "Skasowane" },
    { value: "all", label: "Wszystkie" },
  ];

  const [dataForFilter, setDataForFilter] = useState({sort: "up"});

  useEffect(() => {
    (async () => {
      await getOrders();
      console.log('fetching');
    })();
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);
  const [orderId, setOrderId] = useState();

  const showModal = (id) => {
    document.body.style.overflow = "hidden";
    setModalVisible(true);
    setOrderId(id);
  };
  return (
    <div className={s.main__container}>
      <header className={s.header}>
        <div className={s.header__inner}>
          <div className={s.header__title}>Historia zamówień</div>
        </div>
      </header>
      <ModalWindow
        isVisible={isModalVisible}
        id={orderId}
        setVisibility={setModalVisible}
      />
      <div className={s.filter}>
        {/* <OrderFilter /> */}
        <div className={s.filter__container}>
          <div className={s.filter__item}>
            <div className={s.filter__sort__title}>Sortowaine:</div>
            <Select
              options={sortOptions}
              onSelect={(e) =>
                setDataForFilter({ ...dataForFilter, sort: e.value })
              }
              value={
                dataForFilter.sort === "up"
                  ? sortOptions[0].label
                  : sortOptions[1].label
              }
            />
          </div>
          <div className={s.filter__item}>
            <div className={s.filter__sort__title}>Status:</div>
            <Select
              options={statusOptions}
              onSelect={(e) =>
                setDataForFilter({ ...dataForFilter, status: e.value })
              }
              value={
                // eslint-disable-next-line no-nested-ternary
                dataForFilter.status === "done"
                  ? statusOptions[0].label :
                  dataForFilter.status === "cancelled" 
                  ? statusOptions[1].label : statusOptions[2].label
              }
            />
          </div>
          <div className={s.filter__row}>
            <div className={s.filter__sort__title}>Dokładna data:</div>
            <div className={s.filter__sort__title}>od</div>
            <input
              type="date"
              onChange={({ target }) =>
                setDataForFilter({ ...dataForFilter, from: target.value })
              }
            />
            <div className={s.filter__sort__title}>do</div>
            <input
              type="date"
              onChange={({ target }) =>
                setDataForFilter({ ...dataForFilter, to: target.value })
              }
            />
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          className={s.search__btn}
          onClick={async () => {
            await filterOrders(dataForFilter);
          }}
        >
          Filtr
        </button>
      </div>
      <div className={s.search__container}>
        <div className={s.filter__sort__title}>
          Szukaj:
          <input
            onChange={({ target }) =>
              setDataForFilter({ ...dataForFilter, search: target.value })
            }
          />
          <button
            className={s.search__btn}
            onClick={async () => {
              await filterOrders(dataForFilter);
            }}
          >
            Szukaj
          </button>
        </div>
      </div>
        {!filteredOrders.length ? (
          <h2 className={s.title__date}>Wszystkie zamówienia </h2>
        ) : (
          <h2 className={s.title__date}>Przefiltrowane zamówienia </h2>
        )}
      <div className={s.container}>
        <div className={s.container}>
          {!filteredOrders.length
            ? ordersHistory &&
              ordersHistory.map((history) => {
                return (
                  <div
                    key={history._id}
                    onClick={() => showModal(history._id)}
                    className={s.active__orders__item}
                  >
                    <ActiveOrders
                      key={history._id}
                      numOfOrder={history.numOfOrder}
                      orderType={history.parcel}
                      orderWeight={history.weight}
                      orderStatus={history.status}
                      orderTime={history.deliveryTime}
                      orderStartPlace={history.pickUp}
                      orderFinishPlace={history.deliveryAddress}
                      orderPrice={history.sum}
                      createdAt={history.createdAt}
                    />
                  </div>
                );
              })
            : filteredOrders.length &&
              filteredOrders.map((filtered) => {
                return (
                  <div
                    key={filtered._id}
                    onClick={() => showModal(filtered._id)}
                    className={s.active__orders__item}
                  >
                    <ActiveOrders
                      key={filtered._id}
                      orderNumber={filtered._id.length}
                      orderType={filtered.parcel}
                      orderWeight={filtered.weight}
                      orderStatus={filtered.status}
                      orderTime={filtered.deliveryTime}
                      orderStartPlace={filtered.pickUp}
                      orderFinishPlace={filtered.deliveryAddress}
                      orderPrice={filtered.sum}
                      createdAt={filtered.createdAt}
                    />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    order: state.order,
    filteredOrders: state.order.filtered,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: (searchValue) => dispatch(getOrdersAction(searchValue)),
    filterOrders: (data) => dispatch(filterOrdersAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndedOrdersPage);
