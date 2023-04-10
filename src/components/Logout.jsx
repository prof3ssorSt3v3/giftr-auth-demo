import { useNavigate } from 'react-router-dom';

export function Logout() {
  const navigate = useNavigate();

  function doLogout() {
    //TODO: nuke the token from context and sessionStorage
    //navigate to the login route
    navigate('/');
  }

  return (
    <p>
      <button onClick={doLogout}>Logout</button>
    </p>
  );
}
