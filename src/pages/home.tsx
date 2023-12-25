// pages/protected.js
import { useAuth } from "../tools/auth"; // Adjust the path to your auth.js file

const Home = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    // Render loading indicator or other content while authentication is being checked
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // If not authenticated, the user will be redirected to the home page
    return null; // or loading indicator, login form, etc.
  }
  return (
    <div>
      <h1>Protected Page</h1>
      {/* Your protected content here */}
    </div>
  );
};

export default Home;
