import React, {Component} from 'react';
import faker from 'faker';


class CommentDetail extends Component {
	render(){
		return (
			<div className="comment">
				<a href="/" className="avatar">
					<img alt="avatar" src={this.props.image} />
				</a>
				<div className="content">
					<a href="/" className="author">
						{this.props.author}
					</a>
					<div className="metadata">
						<span className="date">6:00pm</span>
					</div>
					<div className="text">{this.props.content}</div>
				</div>
			</div>
		);
	}
}

export default CommentDetail;