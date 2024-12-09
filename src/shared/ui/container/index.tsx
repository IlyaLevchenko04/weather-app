import s from './index.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const Container: React.FC<IProps> = ({ children }) => (
  <div className={s.root}>{children}</div>
);
