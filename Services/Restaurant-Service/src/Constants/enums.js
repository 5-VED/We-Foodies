const enums = {
  complexity: ['A', 'B', 'C', 'D'],

  platform: {
    WEB: 'Web',
    IOS: 'Ios',
    ANDROID: 'ANDROID',
  },

  HTTP_CODES: {
    BAD_REQUEST: 400,
    DUPLICATE_VALUE: 409,
    FORBIDDEN: 403,
    INTERNAL_SERVER_ERROR: 500,
    METHOD_NOT_ALLOWED: 405,
    MOVED_PERMANENTLY: 301,
    NO_CONTENT_FOUND: 204,
    NOT_ACCEPTABLE: 406,
    NOT_FOUND: 404,
    OK: 200,
    PERMANENT_REDIRECT: 308,
    UNAUTHORIZED: 401,
    UPGRADE_REQUIRED: 426,
    VALIDATION_ERROR: 422,
    TOO_MANY_REQUESTS: 429,
  },

  FOOD_TYPE: {
    VEG: 'VEG',
    NON_VEG: 'NON_VEG',
    JAIN: 'JAIN',
    BOTH: 'BOTH',
  },

  RMQ_ROUTING_KEYS: {
    USER_SERVICE: 'User-Key',
    ADMIN_SERVICE: 'Admin-Key',
    EVENT_SERVICE: 'Event-Key',
  },

  RMQ_QUEUS: {
    MESSAGE_QUEUE: 'Message-Queue',
  },

  MAXATTACHMENTS: 100,
};

module.exports = enums;
