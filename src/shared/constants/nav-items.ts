import { ROUTER_BOOK } from './router-book';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const NAV_ITEMS = [
  {
    title: 'Home',
    link: ROUTER_BOOK.index,
    icon: null,
  },
  {
    title: '',
    link: ROUTER_BOOK.favorite,
    icon: FavoriteBorderOutlinedIcon,
  },
];
