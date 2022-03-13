import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const Store = () => useContext(UserContext);

export default Store;
