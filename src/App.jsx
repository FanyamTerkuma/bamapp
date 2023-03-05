import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import { AddLoan, AddRepayment, AddSavings, AddUser, Home, Loan, Login, Register, Repayment, Savings, Summary } from './pages';
import Users from './pages/users/Users';

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/loans" element={<Loan />} />
                    <Route path="/addloan" element={<AddLoan />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/repayments" element={<Repayment />} />
                    <Route path="/addrepayment" element={<AddRepayment />} />
                    <Route path="/savings" element={<Savings />} />
                    <Route path="/addsavings" element={<AddSavings />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/adduser" element={<AddUser />} />
                    <Route path="/summary" element={<Summary />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
