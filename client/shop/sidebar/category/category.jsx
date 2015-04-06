Shop_Sidebar_Category = React.createClass({

    mixins: [ReactMeteor.Mixin],

    getMeteorState: function () {
        if (typeof Subcategories !== 'undefined') {
            var catid = this.props.data._id;
        }

        if (catid) {
            return {
                Subcategories: Subcategories.find({'category': catid}).fetch()
            }
        } else {
            return {
                Subcategories: {}
            }
        }
    },
    render : function() {
        var Subcategories = this.state.Subcategories.map(function (subcategory) {
            return (
                <li key={subcategory._id}>
                    {subcategory.name}
                </li>
            )
        });
        var category = this.props.data;
        return (
            <div className="category">
                <h3>{category.name}</h3>
                <ul>
                    {Subcategories}
                </ul>
            </div>
        )
    }
});