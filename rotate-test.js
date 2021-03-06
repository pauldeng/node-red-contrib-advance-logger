var winston = require('winston');
require('winston-daily-rotate-file');

var logger = new winston.createLogger({
    exitOnError: false,
    level: 'info',
    transports: [
        new (winston.transports.Console)({
            colorize: true,
            prettyPrint : true 
        }),
        new (winston.transports.DailyRotateFile)({
          filename: './test/%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          prepend: true,
          level: 'info'
        })
    ]
});

winston.exceptions.handle(new winston.transports.File({ filename: 'exceptions.log' }));

setInterval(function () {
    logger.log('info', 'Hello distributed log files!');
}, 10000);





