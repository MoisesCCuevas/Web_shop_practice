import { XMarkIcon } from "@heroicons/react/24/outline";

interface SideMenuProps {
  title?: string;
  onClose: () => void;
  children?: React.ReactNode;
}

const SideMenu = (props: SideMenuProps) => {
  const {
    title,
    onClose,
    children
  } = props;

  return (
    <aside
      className="w-1/3 flex flex-col items-center fixed bg-white shadow-lg right-0 z-50 text-zinc-900 top-0 mt-16 select-none open"
    >
      <div className="flex justify-between items-center w-full p-4 select-none">
        <h2 className="font-medium text-xl">{title}</h2>
        <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={onClose} />
      </div>
      {children}
    </aside>
  );
};

export default SideMenu;
