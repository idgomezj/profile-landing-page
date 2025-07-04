import Main from "./sections/Main";
import Educations from "./sections/education/Educations";
import Research from "./sections/research/Research";
import Experiense from "./sections/experience/Experience";
import Profile from "./sections/profile/Profile";


export default function Home(){
  return (
    <div>
      <Main />
      <div className="h-8 bg-black mb-6" />
      <div id="profile">
        <Profile />
      </div>
      <div className="h-8 bg-black mb-6" />
      <div id="experience">
        <Experiense />
      </div>
      <div id="education">
        <Educations />
      </div>
      <div id="research">
        <Research />
      </div>

      

    </div>
  );
};
