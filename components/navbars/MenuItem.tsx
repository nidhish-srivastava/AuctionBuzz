"use client";

type MenuItemProps = {
  onClick?: () => void;
  label: string;
}

const MenuItem = ({ onClick, label }:MenuItemProps) => {
  return (
    <div
      className="px-4 py-3 hover:bg-neutral-100 font-semibold transition"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;
