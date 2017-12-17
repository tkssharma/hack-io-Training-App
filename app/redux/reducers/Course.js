'use strict';

import {COURSE_LOAD, COURSE_LOAD_SUCCESS, SELECTED_COURSE_TUTS_SUCCESS, SUBMIT_COURSE_SUCCESS,SUBMIT_NEW_TUTS_MODEL_OPEN,SUBMIT_NEW_TUTS_MODEL_CLOSE} from 'app/redux/constants';

import Immutable from 'immutable';

const COURSE_default_data = {
	courseData: [],
	loaded: false,
	tutorialModel: false,
	searchKey : '',
	selectedCourseTutorials : []
}
function loadCourse(course = COURSE_default_data, action) {

	if (action.type === COURSE_LOAD_SUCCESS) {
		// using spread operator
		return {
			...course,
			courseData: action.payload.data,
			loaded: true
		}
		// return Object.assign({},courses,{courseData : action.payload.data})
	} else if (action.type === SUBMIT_NEW_TUTS_MODEL_OPEN) {
		return {
			...course,
			tutorialModel: true
		}

	} else if (action.type === SUBMIT_NEW_TUTS_MODEL_CLOSE) {
		return {
			...course,
			tutorialModel: false
		}

	}
	else if (action.type === SUBMIT_COURSE_SUCCESS) {
		return {
			...course,
			tutorialModel: false
		}
	}
	else if (action.type === SELECTED_COURSE_TUTS_SUCCESS) {
		return {
			...course, selectedCourseTutorials : action.payload.data, searchKey : action.payload.key
		}
	}
	else {
		return course;
	}
}

export default loadCourse;
