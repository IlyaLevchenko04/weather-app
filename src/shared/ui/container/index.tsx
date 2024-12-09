import clsx from 'clsx';
import s from './index.module.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<IProps> = ({ children, className }) => (
  <div className={clsx(s.root, className)}>{children}</div>
);
