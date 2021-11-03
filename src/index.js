import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail
				author={faker.name.findName()}
				image={faker.image.avatar()}
				content={faker.lorem.sentences()}
			/>
			<CommentDetail
				author={faker.name.findName()}
				image={faker.image.avatar()}
				content={faker.lorem.sentences()}
			/>
			<CommentDetail
				author={faker.name.findName()}
				image={faker.image.avatar()}
				content={faker.lorem.sentences()}
			/>
		</div>
	);
}

ReactDOM.render(<App/>, document.querySelector('#root'))