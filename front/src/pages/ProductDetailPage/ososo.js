// import React, { useEffect, useMemo, useState } from "react";
// import { Link, useLoaderData } from "react-router-dom";
// import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
// import content from "../../data/content.json";
// import Rating from "../../Rating/Rating";
// import SizeFilter from "../../Filters/SizeFilter";
// import ProductColors from "./ProductColors";

// const categories = content?.categories;

// const ProductDetails = () => {
//   const { product } = useLoaderData();
//   const [image, setImage] = useState(
//     product?.images[0]?.startsWith("http")
//       ? product?.images[0]
//       : product?.thumbnail
//   );

//   const [breadCrumbLinks, setBreadCrumbLink] = useState([]);

//   const productCategory = useMemo(() => {
//     return categories?.find((category) => category?.id === product?.categoryId);
//   }, [product, categories]);

//   useEffect(() => {
//     setImage(product?.thumbnail);
//     setBreadCrumbLink([]);
//     const arrayLinks = [
//       { title: "Shop", path: "/" },
//       {
//         title: productCategory?.name,
//         path: productCategory?.name,
//       },
//     ];
//     const productType = productCategory?.categoryTypes?.find(
//       (item) => item?.id === product?.categoryTypeId
//     );

//     if (productType) {
//       arrayLinks?.push({
//         title: productType?.name,
//         path: productType?.name,
//       });
//     }
//     setBreadCrumbLink(arrayLinks);
//   }, [productCategory, product]);

//   return (
//     <div className="flex flex-col md:flex-row px-10">
//       <div className="w-[100%] lg:w-[50%] md:w-[40%]">
//         <div className="flex flex-col md:flex-row">
//           <div className="w-[100%] md:w-[20%] justify-center h-[40px] md:h-[420px]">
//             <div className="flex flex-col justify-center h-full">
//               {product?.images?.map((item, index) => (
//                 <button className="rounded-lg w-fit p-2 mb-2">
//                   <img
//                     src={item}
//                     className="h-[48] w-[48] bg-cover bg-center p-2"
//                     alt={"sample-" + index}
//                   />
//                 </button>
//               ))}
//             </div>
//             {/* Stack images */}
//           </div>

//           <div className="w-[80%] ">
//             <img
//               src={image}
//               className="h-full w-full max-h-[520px]
//          border rounded-lg cursor-pointer object-cover"
//               alt={product?.name}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="w-[60%] px-10">
//         {/* Product Description */}
//         <Breadcrumb links={breadCrumbLinks} />
//         <p className="text-3xl pt-4">{product?.name}</p>
//         <Rating rating={product?.rating} />
//         {/* Price Tag */}
//         <p className="text-xl bold py-2">${product?.price}</p>
//         <div className="flex flex-col py-2">
//           <div className="flex gap-2">
//             <p className="text-sm bold">Select Size</p>
//             <Link
//               className="text-sm text-gray-500 hover:text-gray-900"
//               to={"https://en.wikipedia.org/wiki/Clothing_sizes"}
//               target="_blank"
//             >
//               {"Size Guide ->"}
//             </Link>
//           </div>
//         </div>
//         <div className="mt-2">
//           <SizeFilter />
//         </div>
//         <div>
//           <p className="text-lg bold">Colors Available</p>
//           <ProductColors />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
