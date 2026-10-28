import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export default function Container({ children, className = '', style, id }: ContainerProps) {
  return (
    <div id={id} className={`${styles.container} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}

