'use strict';

/**
 * presentation-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::presentation-service.presentation-service');
