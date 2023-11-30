const CronJob = require("cron").CronJob;
const { start } = require("repl");
const config = require("../config/config");
const { emailService, userService } = require("../services");
const { User } = require("../model");

// Send mail
new CronJob(
    "40 7 * * *",
    function () {
        emailService.sendMail(
            "eshikaparmar2001@gmail.com",
            "Blasing message",
            "Good morning ,Have a nice day"
        );
    },
    null,
    false,
    "Asia/Kolkata"
).start();
