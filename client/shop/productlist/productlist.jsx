Shop_Productlist = React.createClass({

    mixins: [ReactMeteor.Mixin],

    getMeteorState: function() {
        var Searchterm = Session.get('search');
        if (Searchterm) {
            return {
                Productlist: Products.find({
                    $or: [{
                        mfr: {
                            $regex: Searchterm
                        }
                    },{
                        name: {
                            $regex: Searchterm
                        }
                    },{
                        search: {
                            $regex: Searchterm
                        }
                    }]

                }).fetch()
            }
        } else {
            return {
                Productlist: Products.find().fetch()
            }
        }
    },

    render: function() {
        var Productlist = this.state.Productlist.map(function (product) {
            //var thing = Object.keys(product);
            return (
                <Shop_Productlist_Product key={product._id} data={product}/>
            );
        });
        return (
            <div id="productlist">
                {Productlist}
            </div>
        );

    }
});