import React from 'react';
import {
	Form,
	Input,
	Tooltip,
	Icon,
	Cascader,
	Select,
	Row,
	Col,
	Checkbox,
	Button
} from 'antd';
import * as Action from 'app/redux/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const FormItem = Form.Item;
const { TextArea } = Input;

const mapStateToProps = (state, ownProps) => {
	return {
	}
}
const mapDispatchToProps = dispatch => ({
	submitCourses: (data) => dispatch(Action.submitCourses(data)),

});

class submitCourse extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			confirmDirty: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		this
			.props
			.form
			.validateFieldsAndScroll((err, values) => {
				if (!err) {
					console.log('Received values of form: ', values);
					this.props.submitCourses(values);
				}
			});
	}

	render() {
		const {getFieldDecorator} = this.props.form;
		const divStyle = {
			display: 'block',
			padding: '0px'
		};
		const formItemLayout = {
			labelCol: {
				span: 6
			},
			wrapperCol: {
				span: 14
			}
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 14,
					offset: 0
				},
				sm: {
					span: 14,
					offset: 6
				}
			}
		};
		if (this.props.open) {
			return (
				<div
					id="modalSubmitTutorial"
					role="dialog"
					aria-hidden="false"
					className="modal full-page-modal no-padding in"
					style={divStyle}>
					<button
						type="button"
						onClick={this.props.closeModel}
						className="modal-action-btn action-right close-modal"
						data-dismiss="modal">
						<i className="ion-android-close"></i>
					</button>
					<div className="modal-container">
						<div className="modal-dialog" role="document">
							<div className="modal-content text-center">
								<div className="modal-body submit-tutorial-modal">
									<div className="modal-header">
										<div className="modal-title">Submit Course/Tutorial</div>
										<div className="modal-subtitle">
											Paste the course/tutorial link below:
										</div>
									</div>

									<Form
										name="submitTutorialForm"
										method="post"
										action="https://hackr.io/tutorials/new"
										id="submit-tutorial"
										className="form-horizontal"
										onSubmit={this.handleSubmit}>
										<div className="form-group url-form-group">
											<div className="input-with-icon">
												<FormItem {...formItemLayout}  label="Video Link" shasFeedback>
													{getFieldDecorator('Link', {
														rules: [
														 {
																required: true,
																message: 'Please input your course learning Link like youtube '
															}
														]
													})(<Input className="form-control url-input js-url-input"/>)}
												</FormItem>
											</div>
										</div>
										<div className="form-group">
											<p className="tut-info-title">Tell us more about this course/tutorial (optional)*</p>
										</div>

										<div className="form-group url-form-group">

											<FormItem {...formItemLayout} label="Description"  shasFeedback>
												{getFieldDecorator('Description', {
													rules: [
														{
															required: true,
															message: 'Please input your Description about Course!'
														}
													]
												})(<TextArea className="form-control url-input js-url-input"/>)}
											</FormItem>
										</div>
										<div className="form-group url-form-group">

											<FormItem {...formItemLayout} label="Short Description" shasFeedback>
												{getFieldDecorator('ShortDescription', {
													rules: [
														{
															required: true,
															message: 'Please enter short description about video course!'
														}
													]
												})(<TextArea className="form-control url-input js-url-input" />)}
											</FormItem>
										</div>
										<div className="form-group url-form-group">

											<FormItem label="Course Title"
												{...formItemLayout}
												shasFeedback>
												{getFieldDecorator('Title', {
													rules: [
														{
															required: true,
															message: 'Please enter course Title!'
														}
													]
												})(<TextArea className="form-control url-input js-url-input"/>)}
											</FormItem>
										</div>
										<div className="form-group url-form-group">

											<FormItem {...formItemLayout} label="Youtube playlist Id">
												{getFieldDecorator('WelcomeVideoId', {
													rules: [
														{
															required: true,
															message: 'Please input your playlist ID on youtube!'
														}
													]
												})(<Input className="form-control url-input js-url-input"  />)}
											</FormItem>

											<FormItem {...formItemLayout} label="Thumbnails">
												{getFieldDecorator('Thumbnails', {
													rules: [
														{
															required: true,
															message: 'Please enter any Thumbnails image for course!'
														}
													]
												})(<Input className="form-control url-input js-url-input"  />)}
											</FormItem>
										</div>
										<FormItem {...tailFormItemLayout}>
											<Button type="primary" className="btn btn-primary full_width" htmlType="submit" size="large">Register</Button>
										</FormItem>
									</Form>

								</div>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div></div>
			)
		}
	}
};

submitCourse = Form.create()(submitCourse);
export default connect(mapStateToProps, mapDispatchToProps)(submitCourse);
