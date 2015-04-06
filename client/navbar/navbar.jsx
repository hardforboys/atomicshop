Navbar = React.createClass({
    render: function() {
        return (
            <header id="mainHeader">
                <div className="max">
                    <logo>
                        <a href="/">
                            <img src="images/default/loading3.gif" />
                        </a>
                    </logo>
                    <nav>
                        <ul>
                            <li>
                                <Link to="Home">Home</Link>
                                <Link to="Shop">Shop</Link>
                            </li>
                        </ul>
                    </nav>
                    <Navbar_Searchbar/>
                </div>
            </header>
        )
    }
});