// import "./App.css";

// import Navbar from "./components/Navbar";
// import UserForm from "./components/UserForm";
// import UserList from "./components/UserList";
// import SkillForm from "./components/SkillForm";
// import ConnectForm from "./components/ConnectForm";
// import Recommendation from "./components/Recommendation";

// function App(){

//     return(

//         <>

//             <Navbar/>

//             <div className="container">

//                 <UserForm/>

//                 <UserList/>

//                 <SkillForm/>

//                 <ConnectForm/>

//                 <Recommendation/>

//             </div>

//         </>

//     );

// }

// export default App;

import "./App.css";

import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import SkillForm from "./components/SkillForm";
import ConnectForm from "./components/ConnectForm";
import Recommendation from "./components/Recommendation";
import UserList from "./components/UserList";

function App() {

    return (

        <div className="app">

            <Navbar />

            <div className="container">

                <div className="grid">

                    <UserForm />

                    <SkillForm />

                    <ConnectForm />

                    <Recommendation />

                </div>

                <UserList />

            </div>

        </div>

    );

}

export default App;