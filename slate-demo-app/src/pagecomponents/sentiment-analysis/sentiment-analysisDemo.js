import React, { Component } from 'react';

class ShortcutSidebarView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSource: {}
		};
		
	}
	async componentDidMount() {
		try {
			const response = await fetch('https://jc753cwotb.execute-api.eu-west-1.amazonaws.com/dev/sentiment?text=' + this.props.text);
			let responseJson = await response.json();
			this.setState(
				{
					isLoading: false,
					dataSource: responseJson
				},
				function() {}
			);
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		let { dataSource } = this.state;
		if (this.state.isLoading) {
			return <div>Loading...</div>;
		} else {
			return (
				<div>
          <p>{dataSource.sentiment}</p>
          <p>{dataSource.text}</p>
				</div>
			);
		}
	}
}
export default ShortcutSidebarView;