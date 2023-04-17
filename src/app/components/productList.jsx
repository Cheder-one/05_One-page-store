import React, { useState, useEffect } from "react";
import fetchProducts from "../data/products";
import Product from "./product";
import SortSelect from "./sortSelect";
import _ from "lodash";

// Варианты выбора признака сортировки
const sortOptions = [
  {
    value: "priceDesc",
    label: `Цена \u2197`,
    sort: (products) => [...products].sort((a, b) => b.price - a.price)
  },
  {
    value: "priceAsc",
    label: `Цена \u2198`,
    sort: (products) => [...products].sort((a, b) => a.price - b.price)
  },
  {
    value: "rateDesc",
    label: `Рейтинг \u2197`,
    sort: (products) => _.orderBy(products, ["rating.rate"], ["desc"])
  },
  {
    value: "rateAsc",
    label: `Рейтинг \u2198`,
    sort: (products) => _.orderBy(products, ["rating.rate"], ["asc"])
  },

  {
    value: "nameAsc",
    label: "По имени (A-Z)",
    sort: (products) => _.orderBy(products, ["title"], ["asc"])
  },
  {
    value: "nameDesc",
    label: "По имени (Z-A)",
    sort: (products) => _.orderBy(products, ["title"], ["desc"])
  }
];

const ProductList = () => {
  // Список всех товаров
  const [products, setProducts] = useState([]);
  // Отсортированный список
  const [sortProducts, setSortProducts] = useState([]);
  // Текущий выбранный признак сортировки
  const [sortSign, setSortSign] = useState("price");

  // Получение данных о товарах
  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const handleSortChange = (e) => {
    setSortSign(e.target.value);
  };

  useEffect(() => {
    const findOption = sortOptions.find((item) => item.value === sortSign);

    // Если выбран признак сортировки
    if (findOption) {
      // Передаем отсортированный с помощью sort список
      setSortProducts(findOption.sort(products));
    } else {
      // Если ничего не сортируем, то передаем все товары
      setSortProducts(products);
    }
    // Мониторим выбранный фильтр и загрузку products
  }, [sortSign, products]);

  return (
    <div className="container mt-t">
      <div>
        <SortSelect
          value={sortSign}
          options={sortOptions}
          onSort={handleSortChange}
        />
      </div>
      <div className="row mt-4">
        {sortProducts.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
