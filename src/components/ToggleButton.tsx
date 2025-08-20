import React from 'react';

interface CustomButtonProps {
  children?: React.ReactNode;
  className?: string;
  initialSelected?: boolean;
  onChange?: (
    event: React.MouseEvent<HTMLButtonElement>,
    isSelected: boolean,
  ) => void;
  forTargetId?: string;
}

const ToggleButton: React.FC<CustomButtonProps> = ({
  children,
  className,
  initialSelected = false,
  onChange,
  forTargetId,
}) => {
  const [selected, setSelected] = React.useState(initialSelected);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newSelected = !selected;
    setSelected(newSelected);
    console.log('event:click', event);
  };

  return (
    <button
      type="button"
      className={className ?? 'className'}
      data-selected={selected}
      data-for-target-id={forTargetId}
      onClick={handleClick}
      {...(onChange !== undefined && { 'data-has-change-handler': true })}
    >
      <svg
        className={`hover:fill-pink-500 hover:text-pink-500 h-6 w-6 text-yellow-300 ${selected ? 'fill-yellow-300' : 'fill-none'}`}
      >
        <use href="#symbol-favorite" />
      </svg>
      {children}
    </button>
  );
};

export default ToggleButton;
