Shop = React.createClass({
    render: function() {
        return (
            <section id="shop">
                <Shop_Sidebar/>
                <div id="shopMain">
                    <h1>Shop</h1>
                    <Filter/>
                    <Shop_Productlist/>
                </div>
            </section>
        )
    }
});