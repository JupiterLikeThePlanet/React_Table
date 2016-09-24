var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require ('react-router');
var Main = require('Main');
var DataTable = require('DataTable');
var FixedDataTable = require('fixed-data-table');



// Loads foundation
require("style!css!foundation-sites/dist/foundation.min.css")
$(document).foundation();

// Loads CSS
require("style!css!sass!applicationStyles")

//Loads FixedDataTable
require("style!css!fixed-data-table/dist/fixed-data-table.min.css")

ReactDOM.render(


    <Router history={hashHistory}>

        <Route path="/" component={Main}>
            <IndexRoute component={DataTable}/>
        </Route>

    </Router>,
    document.getElementById('app')
);