import clsx from 'clsx';
import s from './index.module.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<IProps> = props => (
  <section className={clsx(s.root, props.className)}>{props.children}</section>
);
