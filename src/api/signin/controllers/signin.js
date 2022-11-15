'use strict';

/**
 * signin controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::signin.signin');
