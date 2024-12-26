import { createBrowserRouter } from "react-router-dom";
import Shop from "./Shop";
import ProductListPage from "./components/pages/ProductListPage/ProductListPage";
import ShopApplicationWrapper from "./components/pages/ShopApplicationWrapper";
import ProductDetails from "./components/pages/ProductDetailPage/ProductDetails";
import { loadProductBySlug } from "./components/pages/routes/products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopApplicationWrapper />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/women",
        element: <ProductListPage categoryType={"WOMEN"} />,
      },
      {
        path: "/men",
        element: <ProductListPage categoryType={"MEN"} />,
      },
      {
        path: "/product/:productId",
        loader: loadProductBySlug,
        element: <ProductDetails />,
      },
    ],
  },
]);
