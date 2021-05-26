import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserPageHeader from './UserPageHeader';

const UserPage = () => {
  const dispatch = useDispatch();
  // grab user details from store
  const user = useSelector(store => store.user);
  // grab list of saved pairings from the store
  const savedPairing = useSelector(store => store.savedPairing);

  useEffect(() => {
    dispatch({ type: 'GET_SAVED_PAIRING' });
  }, [savedPairing])

  return (
    <div>
      {/* Page Header */}
      <UserPageHeader user={user} savedPairing={savedPairing} />
    </div>
  );
}

export default UserPage;