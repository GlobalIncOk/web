import { People, UsTitle } from '../../components';
import '../../styles/Us.sass';

const Us = () => {
  return (
    <div className='us-container'>
      <UsTitle />
      <People />
    </div>
  );
};

export default Us;
