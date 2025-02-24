'use strict';

/**
 * publication-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::publication-list.publication-list');
