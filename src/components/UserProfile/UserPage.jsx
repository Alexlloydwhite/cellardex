import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserPageHeader from './UserPageHeader';

const UserPage = () => {
  const dispatch = useDispatch();
  // grab user details from store
  const user = useSelector(store => store.user);
  const savedPairing = useSelector(store => store.savedPairing);

  useEffect(() => {
    dispatch({ type: 'GET_SAVED_PAIRING' });
  }, [])

  return (
    <div>
      {/* Page Header */}
      <UserPageHeader user={user} />
      {JSON.stringify(savedPairing)}
    </div>
  );
}

export default UserPage;