var React = require('react');
var DataTable = require('DataTable');


var Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    <h1>Main Rendered</h1>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;