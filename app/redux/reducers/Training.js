'use strict';

import { TRAINING_LOAD, TRAINING_LOAD_SUCCESS, 
         SELECTED_TRAINING_SUCCESS, SUBMIT_TRAINING_SUCCESS,
         SUBMIT_NEW_TRAINING_MODEL_OPEN,SUBMIT_NEW_TRAINING_MODEL_CLOSE
       } from 'app/redux/constants';

import Immutable from 'immutable';

const TRAINING_default_data = {
	trainingData: [],
	loaded: false,
	trainingModel: false,
	selectedTraining: []
}
function loadTraining(training = TRAINING_default_data, action) {

	if (action.type === TRAINING_LOAD_SUCCESS) {
		// using spread operator
		return {
			...training,
			trainingData: action.payload.data,
			loaded: true
		}
		// return Object.assign({},trainings,{trainingData : action.payload.data})
	} else if (action.type === SUBMIT_NEW_TRAINING_MODEL_OPEN) {
		return {
			...training,
			trainingModel: true
		}

	} else if (action.type === SUBMIT_NEW_TRAINING_MODEL_CLOSE) {
		return {
			...training,
			trainingModel: false
		}

	}
	else if (action.type === SUBMIT_TRAINING_SUCCESS) {
		return {
			...training,
			trainingModel: false
		}
	}
	else {
		return training;
	}
}

export default loadTraining;
