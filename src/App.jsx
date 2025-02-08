import React, { useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage } from './utils/LocalStorage';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data || null);
    }
  }, []);

  const handleLogin = (email, password) => {
    const { employees } = getLocalStorage(); 
    
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      setLoggedInUserData(null);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else {
      const employee = employees.find((e) => e.email === email && e.password === password);
      
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert('Invalid Credentials');
      }
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;