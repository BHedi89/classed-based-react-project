import {Component} from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false }
    }

    // can't added to functional components
    // when a child component throw an error
    componentDidCatch(error) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>
        }
        return this.props.children;
    }


    
}

export default ErrorBoundary;