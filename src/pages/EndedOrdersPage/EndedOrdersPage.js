import React, { useEffect, useState } from "react";
import s from "./EndedOrdersPage.module.css";
import OrderFilter from "../../misc/OrderFilter/OrderFilter";
import ActiveOrders from "../../misc/ActiveOrders/ActiveOrders";
import { connect } from "react-redux";
import {
  filterOrdersAction,
  getOrdersAction,
  setSearchValueAction,
} from "../../store/actions/orderActions";
import Select from "../../misc/Select/Select";

const EndedOrdersPage = ({
  getOrders,
  order: {
    orders: { ordersHistory },
  },
  filterOrders,
  searchValue,
  searchOrdersByValue,
  foundOrders,
  setSearchValue,
}) => {
  const onSortTypeChange = (value) => {
    setSortType(value);
  };
  const sortOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [sortType, setSortType] = useState(sortOptions[0]);
  const onSearchInputChange = ({ target }) => setSearchValue(target.value);
  const statusOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  useEffect(() => {
    if (searchValue.trim().length >= 3) {
      searchOrdersByValue(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    filterOrders(sortType.value, searchValue);
  }, [sortType]);

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
        {/* <OrderFilter /> */}
        <div className={s.filter__container}>
          <div className={s.filter__item}>
            <div className={s.filter__sort__title}>Sortowaine:</div>
            <Select
              options={sortOptions}
              onSelect={onSortTypeChange}
              value={sortType.label}
            />
          </div>
          <div className={s.filter__item}>
            <div className={s.filter__sort__title}>Status:</div>
            <Select options={statusOptions} />
          </div>
          <div className={s.filter__row}>
            <div className={s.filter__sort__title}>Dokładna data:</div>
            <div className={s.filter__sort__title}>od</div>
            <input type="date" />
            <div className={s.filter__sort__title}>do</div>
            <input type="date" />
          </div>
        </div>
      </div>
      <div className={s.search__container}>
        <div className={s.filter__sort__title}>
          Szukaj:
          <input onChange={onSearchInputChange} />
        </div>
        {/* <button className={s.search__btn}> search</button> */}
      </div>
      <div className={s.container}>
        <div className={s.ended__orders__title}>
          Zamówienia od <span className={s.title__date}>21.08.20</span>
        </div>
        {ordersHistory &&
          ordersHistory.map((history) => (
            <ActiveOrders
              key={history._id}
              orderNumber={history._id.length || "11"}
              orderType={history.parcel || "Paczka"}
              orderWeight={history.weight || "21"}
              orderTime={history.deliveryTime || "14:88"}
              orderStartPlace={history.pickup || "ul. Rynek 3"}
              orderFinishPlace={
                `${history.deliveryStreet}, ${history.deliveryHouse}` ||
                "ul. Lewakowskiego 12/55"
              }
              orderPrice={history.sum || "28"}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    order: state.order,
    filterOrders: state.order.filtered,
    searchValue: state.order.searchValue,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: (searchValue) => dispatch(getOrdersAction(searchValue)),
    filterOrders: (sortType, searchValue) =>
      dispatch(filterOrdersAction(sortType, searchValue)),
    searchOrdersByValue: (value) => dispatch(filterOrdersAction(null, value)),
    setSearchValue: (value) => dispatch(setSearchValueAction(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndedOrdersPage);
