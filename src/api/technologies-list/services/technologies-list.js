'use strict';

/**
 * technologies-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::technologies-list.technologies-list');
