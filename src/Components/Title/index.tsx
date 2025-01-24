import { ChevronLeftIcon } from "@heroicons/react/24/outline";

interface TitleProps {
  title: string;
  onBackOrders?: () => void;
}

const Title = (props: TitleProps) => {
  const { title, onBackOrders } = props;
  return (
    <div className="relative flex justify-center w-1/3 items-center my-6 select-none">
      {onBackOrders && (
        <ChevronLeftIcon className=" absolute left-0 h-6 w-6 cursor-pointer" onClick={onBackOrders}/>
      )}
      <h1 className="text-lg first-letter:capitalize">{title}</h1>
    </div>
  );
}

export default Title;
