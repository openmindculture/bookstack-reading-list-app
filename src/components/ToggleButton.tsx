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
        width='1431'
        height='1691'
        fill=''
        viewBox='0 0 1431 1691'
        stroke='currentColor'
        strokeWidth='2'
      >
        <path
          d="M115.5 1688.9 c-15.9 -2.2 -35.9 -9.1 -50.8 -17.6 -33.8 -19.2 -57 -53.5 -61.6 -90.8 -0.8 -6.5 -1.1 -212.1 -1.1 -735.5 0 -791.7 -0.4 -735.1 5.6 -754 13.7 -43.7 51.5 -76.5 99.9 -86.6 8.8 -1.9 24.7 -1.9 608.5 -1.9 576 0 599.8 0.1 608 1.8 19 4.1 41.5 14 55.5 24.5 27.8 20.7 46 52 49.5 85.2 1.4 13.6 1.4 1450.6 -0.1 1463.8 -2.8 26.4 -13.8 50.2 -32.2 69.8 -4.9 5.2 -12.4 12 -16.6 15.2 -14.4 10.8 -35.8 20.3 -53.8 23.8 -13.2 2.6 -39.6 2.4 -53 -0.5 -20 -4.2 -35.3 -10.9 -51.6 -22.5 -6.2 -4.4 -81.1 -75.8 -256.7 -244.7 -136.4 -131.1 -248.4 -238.5 -248.8 -238.7 -0.5 -0.1 -110.8 105.6 -245.2 234.9 -134.5 129.3 -247.9 238 -252 241.5 -18.1 15.8 -38.9 26 -62.5 30.9 -9.7 2 -31.5 2.7 -41 1.4z m266 -384.9 c295.4 -283.5 333.7 -320.1 334.7 -319.8 1.1 0.4 57.6 54.5 325.7 311.8 134.4 129 244.8 234.6 245.2 234.8 0.5 0.2 0.9 -306.3 0.9 -693.2 l0 -693.6 -572 0 -572 0 0 693.6 c0 655.9 0.1 693.6 1.7 692.3 1 -0.8 107.1 -102.4 235.8 -225.9z" />
      </svg>
      {children}
    </button>
  );
};

export default ToggleButton;
