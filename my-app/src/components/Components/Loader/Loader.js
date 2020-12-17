import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from '../../utils/styles.module.css';

function LoaderSection() {
  return (
    <div className={s.Loader}>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
}

export default LoaderSection;
