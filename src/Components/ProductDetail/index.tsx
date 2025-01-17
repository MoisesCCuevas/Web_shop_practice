import "./ProductDetail.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Item } from "@Types/Item";

interface ProductDetailProps {
  productDetail: Item | null;
  onCloseDetail: () => void;
}

const ProductDetail = (props: ProductDetailProps) => {
  const {
    productDetail,
    onCloseDetail
  } = props;

  if (!productDetail) return null;
  return (
    <aside
      className="w-1/3 flex flex-col items-center fixed bg-white shadow-lg h-lvh right-0 z-50 text-zinc-900 open"
    >
      <div className="flex justify-between items-center w-full p-4 select-none">
        <h2 className="font-medium text-xl">Product Detail</h2>
        <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={onCloseDetail} />
      </div>
      <figure className="w-full h-1/2">
        <img
          className="w-full h-full object-cover"
          src={productDetail.images[0]}
          alt={productDetail.title}
        />
      </figure>
      <p className="flex flex-col p-6 gap-2">
        <div className="flex justify-between w-full">
          <span className="font-semibold">${productDetail.price}</span>
          <span className="font-medium">{productDetail.title}</span>
        </div>
        <span className="font-light">{productDetail.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
