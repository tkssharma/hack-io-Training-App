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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const FormItem = Form.Item;
const { TextArea } = Input;

const mapStateToProps = (state, ownProps) => {
	return {
	}
}
const mapDispatchToProps = dispatch => ({
	submitTraining: (data) => dispatch(Action.submitTraining(data)),
	submitTrainingModelClose : (data) => dispatch(Action.submitTrainingModelClose())

});

class submitTraining extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			confirmDirty: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.closeModel = this.closeModel.bind(this);

	}
	submitTraining(e) {
		e.preventDefault();
		e.stopPropagation();
		this.props.submitTraining()
	}
	closeModel() {
		this
			.props
			.closeModel()
	}
	handleSubmit(e) {
		e.preventDefault();
		this
			.props
			.form
			.validateFieldsAndScroll((err, values) => {
				if (!err) {
					console.log('Received values of form: ', values);
					this.props.submitTraining(values);
				}
			});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
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
										<div className="modal-title">Provide details about Training</div>
									</div>

									<Form
										name="submitTutorialForm"
										className="form-horizontal"
										onSubmit={this.handleSubmit}>
										<div className="form-group url-form-group">
											<div className="input-with-icon">
												<FormItem {...formItemLayout} label="Video Link" shasFeedback>
													{getFieldDecorator('Link', {
														rules: [
															{
																required: true,
																message: 'Please input your Training learning Link like youtube '
															}
														]
													})(<Input className="form-control url-input js-url-input" />)}
												</FormItem>
											</div>
										</div>
										<div className="form-group">
											<p className="tut-info-title">Tell us more about your Training </p>
										</div>

										<div className="form-group url-form-group">

											<FormItem {...formItemLayout} label="Description" shasFeedback>
												{getFieldDecorator('Description', {
													rules: [
														{
															required: true,
															message: 'Please input your Description about Training!'
														}
													]
												})(<TextArea className="form-control url-input js-url-input" />)}
											</FormItem>
										</div>
										<div className="form-group url-form-group">

											<FormItem {...formItemLayout} label="Short Description" shasFeedback>
												{getFieldDecorator('ShortDescription', {
													rules: [
														{
															required: true,
															message: 'Please enter short description about Training!'
														}
													]
												})(<TextArea className="form-control url-input js-url-input" />)}
											</FormItem>
										</div>
										<div className="form-group url-form-group">

											<FormItem label="Training Title"
												{...formItemLayout}
												shasFeedback>
												{getFieldDecorator('Title', {
													rules: [
														{
															required: true,
															message: 'Please enter Training Title!'
														}
													]
												})(<TextArea className="form-control url-input js-url-input" />)}
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
												})(<Input className="form-control url-input js-url-input" />)}
											</FormItem>

											<FormItem {...formItemLayout} label="Thumbnails">
												{getFieldDecorator('Thumbnails', {
													rules: [
														{
															required: true,
															message: 'Please enter any Title image for course!'
														}
													]
												})(<Input className="form-control url-input js-url-input" />)}
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

submitTraining = Form.create()(submitTraining);
export default connect(mapStateToProps, mapDispatchToProps)(submitTraining);
