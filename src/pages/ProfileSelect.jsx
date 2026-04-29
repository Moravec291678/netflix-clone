import "../styles/ProfileSelect.css";
import { profiles } from "../data/profiles";
import { Link } from "react-router-dom";
function ProfileSelect() {
  return (
    <main className="main-profiles">
      <h1 className="title-profiles">Kdo se právě dívá?</h1>
      <div className="profile-cards">
        {profiles.map((profile) => {
          return (
            <Link
              className="profile-card"
              key={profile.id}
              to={`home/${profile.id}`}
            >
              <img
                className="profile-img"
                src={profile.avatar}
                alt={profile.name}
              />
              <p className="profile-name">{profile.name}</p>
            </Link>
          );
        })}
      </div>
      <button className="btn-edit">Spravovat profily</button>
    </main>
  );
}
export default ProfileSelect;
