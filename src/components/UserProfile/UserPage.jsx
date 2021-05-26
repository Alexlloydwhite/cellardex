import { useSelector } from "react-redux";
import UserPageHeader from './UserPageHeader';

const UserPage = () => {
  // grab user details from store
  const user = useSelector(store => store.user);

  return (
    // page header
    <UserPageHeader user={user}/>
  );
}

export default UserPage;