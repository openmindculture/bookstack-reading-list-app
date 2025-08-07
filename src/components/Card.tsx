import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title='', description='' }: CardProps) => {
  return <div className="font-dx-kord text-blue-violet">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>;
}

export default Card;
