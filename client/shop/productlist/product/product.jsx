Shop_Productlist_Product = React.createClass({
    componentDidMount: function() {
        $(this.getDOMNode()).velocity("fadeIn", { duration: 500 });
    },
    componentWillUnmount: function() {
        $(this.getDOMNode()).velocity("fadeOut", { duration: 200 });
    },
    render: function() {
        var product = this.props.data;
        return (
            <div className="product" id={product._id}>
                <img src={product.img}/>
                <p>
                    {product.name}
                    <br/>
                    Price: ${product.price}
                </p>
            </div>
        )
    }
});