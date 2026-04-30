import { useParams } from "react-router-dom";
import { profiles } from "../data/profiles";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  const { id } = useParams();
  const selectedProfile = profiles.find((profile) => String(profile.id) === id);

  if (!selectedProfile) {
    return (
      <>
        <p>Profil nenalezen</p>
        <Link to="/">Zpatky na profily</Link>
      </>
    );
  }

  return (
    <>
      <Navbar selectedProfile={selectedProfile} />
      <main>
        <h1>{selectedProfile.name}</h1>
      </main>
      <footer></footer>
    </>
  );
}

export default Home;
