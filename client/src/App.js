import './App.css';
import Header from './Header';
import Post from './Post';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
          <main>
            <Header />
            <Post />
            <Post />
            <Post />
          </main>
        }>
        </Route>
        <Route path={'/login'} element={
          <main>
            <Header />
            <div> Login Page </div>
          </main>
        } />
         <Route path={'/register'} element={
          <main>
            <Header />
            <div>Register Page</div>
          </main>
        } />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
