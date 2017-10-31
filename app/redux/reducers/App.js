'use strict';

import {
    APP_CONFIG_TOGGLE_ASIDE,
} from 'app/redux/constants';

import Immutable from 'immutable';

const application_default_data = Immutable.Map({
    config: Immutable.Map({
        name: 'Next io',
    }),

});

function app(app = application_default_data, action) {

    switch (action.type) {
    case APP_CONFIG_TOGGLE_ASIDE:
        return app;
    default:
        return app;
    }
}
export default app;