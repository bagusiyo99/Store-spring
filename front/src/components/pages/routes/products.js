// import content from "../../../data/content.json";
import store from "../../../store/store";
import { setLoading } from "../../../store/features/common";
import { getProductBySlug } from "../../../api/fetchProducts";

export const loadProductBySlug = async ({ params }) => {
  try {
    store.dispatch(setLoading(true));
    const product = await getProductBySlug(params?.slug);
    store.dispatch(setLoading(false));
    return { product };
  } catch (err) {}
};
