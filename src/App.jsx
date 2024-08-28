import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './Components/TaskInput.jsx';
import TaskList from './Components/TaskList.jsx';
import './css/styles.css';
import Sidebar from './Components/Sidebar.jsx';
import { IoCaretDownOutline } from "react-icons/io5";
import Navbar from './Components/Navbar.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />

      <div className=' main-home'>
        <div className=' left-side'><Sidebar /></div>
        <div className='container'>
          <div className="main-content">
            <header className="main-header">
              <h1>To Do </h1>
              <span><IoCaretDownOutline /></span>
            </header>
            <TaskInput />
            <TaskList />
          </div>

        </div>
      </div>
    </Provider>
  );
};

export default App;