$(document).ready(function(){
    renderReact();
});

App = React.createClass({
    render: function() {
        return (
            <div id="app">
                <Navbar/>
                <section className="view">
                    <RouteHandler/>
                </section>
            </div>
        )
    }
});

var DefaultRoute = Router.DefaultRoute;
Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute name="Home" handler={Home}/>
        <Route name="Shop" path="shop" handler={Shop}/>
    </Route>
);

function renderReact() {
    Router.run(routes, Router.HistoryLocation, function (Handler) {
        React.render(<Handler/>, document.body);
    });
}