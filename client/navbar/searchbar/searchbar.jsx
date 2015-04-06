Navbar_Searchbar = React.createClass({
    submit: function(e){
        var input = $(e.target).find('input');
        var val = input.val();
        Session.set('search',val);
        input.val('');
        e.stopPropagation();
        e.preventDefault();
    },
    getInitialState: function() {
        return {value: ''};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function () {
        var value = this.state.value;
        return (
            <div id="searchbar">
                <form onSubmit={this.submit}>
                    <input type="text" placeholder="search" value={value} onChange={this.handleChange} />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
});