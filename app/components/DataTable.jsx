var React = require('react');
var FixedDataTable = require('fixed-data-table');
var adObject = require('adObject');
const {Table, Column, Cell} = FixedDataTable;

const adMetrics = {
    "column_names": [
        "impressions",
        "reach",
        "frequency",
        "cpm",
        "spend",
        "ctr",
        "cost_per_inline_link_click",
        "actions:goal",
        "actions:link_click",
        "cost_per_action_type:cost_per_goal",
        "actions:offsite_conversion"
    ],
    "rows": [
        {
            "remote_id": "456",
            "impressions": "123",
            "reach": 123,
            "frequency": 1.0413449389302,
            "cpm": 12.30131445905,
            "spend": 182.49,
            "ctr": 0.87630603303,
            "cost_per_inline_link_click": 3.0415,
            "actions:goal": 3,
            "actions:link_click": 60,
            "cost_per_action_type:cost_per_goal": 60.83,
            "actions:offsite_conversion": 456
        },
        {
            "remote_id": "123",
            "impressions": "123",
            "reach": 123,
            "frequency": 1.0413449389302,
            "cpm": 12.30131445905,
            "spend": 182.49,
            "ctr": 0.87630603303,
            "cost_per_inline_link_click": 3.0415,
            "actions:goal": 3,
            "actions:link_click": 60,
            "cost_per_action_type:cost_per_goal": 60.83,
            "actions:offsite_conversion": 123
        },
        {
            "remote_id": "789",
            "impressions": "123",
            "reach": 123,
            "frequency": 1.0413449389302,
            "cpm": 12.30131445905,
            "spend": 182.49,
            "ctr": 0.87630603303,
            "cost_per_inline_link_click": 3.0415,
            "actions:goal": 3,
            "actions:link_click": 60,
            "cost_per_action_type:cost_per_goal": 60.83,
            "actions:offsite_conversion": 789
        },
        {
            "remote_id": "901",
            "impressions": "123",
            "reach": 123,
            "frequency": 1.0413449389302,
            "cpm": 12.30131445905,
            "spend": 182.49,
            "ctr": 0.87630603303,
            "cost_per_inline_link_click": 3.0415,
            "actions:goal": 3,
            "actions:link_click": 60,
            "cost_per_action_type:cost_per_goal": 60.83,
            "actions:offsite_conversion": 901
        }
    ]

}

class DataTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            myTableData: [
                {name: 'Rylan'},
                {name: 'Amelia'},
                {name: 'Estevan'},
                {name: 'Florence'},
                {name: 'Tressa'},
            ],
        };
    }

    // getColNames(adData){
    //     console.log(adData)
    //     var names = []
    //     for (var i = 0 ; i < adData.ads.length ; i++) {
    //         names.push(adData.ads[i].name)
    //     };
    //     console.log("get colNames: " + names)
    //     return names
    // }


    getRowData:

    render() {
        // console.log(adObjectData);
        var that = this;
        // var colName = this.getColNames(adObjectData)
        var rowName = adObject.getColNames()
        console.log('colName: ' + colName)


        return (
            <div>

                <Table
                    rowsCount={this.state.myTableData.length}
                    rowHeight={50}
                    headerHeight={50}
                    width={700}
                    height={500}>
                    <Column
                        header={<Cell>AC NAME</Cell>}
                        cell={props => (
                            colName.map(function(name, i) {
                                console.log(name, i)
                                return (
                                    <Cell {...props}>
                                        {name}
                                    </Cell>
                                )
                            })
                        )}
                        width={200}
                    />
                    <Column
                        header={<Cell>{adMetrics.column_names}</Cell>}
                        cell={props => (
                            colName.map(function(name, i) {
                                console.log(name, i)
                                return (
                                    <Cell {...props}>
                                        {name}
                                    </Cell>
                                )
                            })
                        )}
                        width={200}
                    />
                </Table>
            </div>
        );
    }
}

module.exports = DataTable;
