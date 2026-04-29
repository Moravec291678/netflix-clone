import { useParams } from "react-router-dom";
import { profiles } from "../data/profiles";
import Navbar from "../components/Navbar";

function Home() {
  const { id } = useParams();
  const selectedProfile = profiles.find((profile) => profile.id === Number(id));

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
