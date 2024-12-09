import s from './index.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const Section: React.FC<IProps> = props => (
  <section className={s.root}>{props.children}</section>
);
