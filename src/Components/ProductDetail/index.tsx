import "./ProductDetail.css";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ProductDetailProps {
  productDetail: any;
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
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon className="h-6 w-6" onClick={onCloseDetail} />
      </div>
    </aside>
  );
};

export default ProductDetail;
