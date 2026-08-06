import "./App.css";

import Navbar from "./components/navbar";
import UserForm from "./components/userForm";
import SkillForm from "./components/skillForm";
import ConnectForm from "./components/connectForm";
import Recommendation from "./components/recommendation";
import UserList from "./components/userList";
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