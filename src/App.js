
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import './App.css';
import Register from './Containers/Register/Register';
import Login from './Containers/Login/Login';
import Home from './Containers/Home/Home';
import NavigationBar from "./Components/Navbar";



class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavigationBar />
          {/* Other components here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/profileloans" element={<ProfileLoans />} /> */}
            {/* <Route path="/profileloans/details" element={<LoanDetails />} /> */}
            {/* <Route
            path="/movies"
            element={<Content title={"Movies"} type={"movies"} />}
          />
          <Route
            path="/series"
            element={<Content title={"Series"} type={"series"} />}
          />
          <Route path="/content/:contentId" element={<ContentDetails />} />

          <Route path="*" element={<Home />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;






// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         {/* <Navbar /> */}



//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           {/* <Route path="/profileloans" element={<ProfileLoans />} /> */}
//           {/* <Route path="/profileloans/details" element={<LoanDetails />} /> */}
//           {/* <Route
//             path="/movies"
//             element={<Content title={"Movies"} type={"movies"} />}
//           />
//           <Route
//             path="/series"
//             element={<Content title={"Series"} type={"series"} />}
//           />
//           <Route path="/content/:contentId" element={<ContentDetails />} />

//           <Route path="*" element={<Home />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
