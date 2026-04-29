import { useParams } from "react-router-dom";
import { profiles } from "../data/profiles";

function Home() {
  const { id } = useParams();
  const selectedProfile = profiles.find((profile) => profile.id === Number(id));

  return (
    <>
      <header></header>
      <main>
        <h1>{selectedProfile.name}</h1>
      </main>
      <footer></footer>
    </>
  );
}

export default Home;
