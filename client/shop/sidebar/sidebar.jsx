Shop_Sidebar = React.createClass({

    mixins: [ReactMeteor.Mixin],

    getMeteorState: function () {
        if (typeof Categories !== 'undefined') {
            var cats = true;
        }
        if (cats) {
            return {
                Categories: Categories.find().fetch()
            }
        } else {
            return {
                Categories: {}
            }
        }
    },
    render: function() {
        var visible = null;

        if(this.state.Categories.length) {
            visible = true;
        }

        if (visible) {
            var Categories = this.state.Categories.map(function (category) {
                return (
                    <Shop_Sidebar_Category key={category._id} data={category}/>
                );
            });
            return (
                <div id="shopSidebar">
                    <h1>ATOMIC</h1>
                    {Categories}
                </div>
            )
        } else {
            return (
                false
            )
        }

    }
});