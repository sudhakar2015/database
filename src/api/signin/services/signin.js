'use strict';

/**
 * signin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::signin.signin');
