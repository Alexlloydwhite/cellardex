import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserPageHeader from './UserPageHeader';

const UserPage = () => {
  const dispatch = useDispatch();
  // grab user details from store
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'GET_SAVED_PAIRING' });
  })

  return (
    // page header
    <UserPageHeader user={user}/>
  );
}

export default UserPage;