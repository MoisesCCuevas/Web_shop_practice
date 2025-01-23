import SideMenu from "../SideMenu";
import useAppContext from "@Hooks/useAppContext";

const ProductDetail = () => {
  const { productDetail, onCloseDetail } : any = useAppContext();

  if (!productDetail) return null;
  return (
    <SideMenu
      title="Product Detail"
      onClose={onCloseDetail}
    >
      <figure className="w-full h-1/2">
        <img
          className="w-full h-full object-cover"
          src={productDetail.images[0]}
          alt={productDetail.title}
        />
      </figure>
      <div className="flex flex-col p-6 gap-2 w-full">
        <p className="flex justify-between w-full">
          <span className="font-semibold">${productDetail.price}</span>
          <span className="font-medium">{productDetail.title}</span>
        </p>
        <span className="font-light">{productDetail.description}</span>
      </div>
    </SideMenu>
  );
};

export default ProductDetail;
