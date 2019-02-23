import React from 'react'
import ReactDOM from 'react-dom'
import TrendGraph from './trend_graph.js'
import HorizontalBarGraph from './bar_graph.js'
import TrendChart from './trend_chart.js'

const App = () => (
    <div>
        <nav>
            <a href="/">Index</a>
        </nav>
        <TrendGraph data={window.props}/>
        <TrendChart data={window.props}/>
        <HorizontalBarGraph data={window.props}/>
    </div>
);


ReactDOM.render(
    <App/>,
    window.react_mount
);
