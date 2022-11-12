import { store } from 'app/store';
import { fetchUserTexts } from 'features/texts/slice/texts-thunks';
import { user } from 'utils/constans';

if (user) {
  store.dispatch(fetchUserTexts(+user.id));
}
