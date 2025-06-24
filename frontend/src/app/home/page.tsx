import Main from "./sections/Main";
import Educations from "./sections/Educations";
import Research from "./sections/Reaserch";
import Experiense from "./sections/Experiense";
import Profile from "./sections/profile/Profile";


export default function Home(){
  return (
    <div>
      <Main />
       <div className="h-8 bg-black mb-6" />
      <Profile />
      <div className="h-8 bg-black mt-6" />

      <Educations />
      <Research />
      <Experiense />
    </div>
  );
};
