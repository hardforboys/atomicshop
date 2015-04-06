Filter = React.createClass({
    componentDidMount: function() {
        $(this.getDOMNode()).velocity("slideDown", { duration: 200 });
    },
    componentDidUpdate: function() {
        $(this.getDOMNode()).velocity("slideDown", { duration: 200 });
    },
    mixins: [ReactMeteor.Mixin],

    getMeteorState: function() {
        return {
            searchterm: Session.get('search')
        }
    },
    clear: function() {
        setTimeout(function(){
            Session.set('search',null);
        },200);
        $('#filter').velocity("slideUp", { duration: 200 });
    },
    render: function() {
        var term = this.state.searchterm;
        if(term && term.length) {
            return (
                <div id="filter">
                    <p>
                        Filtering by search term:
                        <span className="term">{term}</span>
                    </p>
                    <button onClick={this.clear}>×</button>
                </div>
            )
        } else {
            return (
                false
            )
        }
    }
});