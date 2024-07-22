

 function Nav()
{

    return(
        <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/count">Count</Link>
                    </li>
                    <li>
                        <Link to="/GeneralInformation">general</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/count" element={<Count/>} />
                <Route path="/GeneralInformation" element={<GeneralInformation />} />
            </Routes>
        </div>
    </Router>
    )
}


export default Nav