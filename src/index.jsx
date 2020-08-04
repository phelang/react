import React from 'react';
import { render } from 'react-dom';
import createReactClass from 'create-react-class';

const App = createReactClass({
    render: function () {
        const helloReact = "Hello React!";

        return (
            <div>
                {helloReact}
            </div>
        );
    }
});

render(
    <App />,
    document.querySelector("#container")
);