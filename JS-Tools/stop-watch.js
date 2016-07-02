//Author:Brent Kuzmanich
//Comment: Self executing class represents a stopwatch that will time in milliseconds
var stopWatch = (function sw() {
    //private vars
    var startTime, endTime, millisInSec = 1000, secsInMin = 60, minsInHour = 60,

    //private methods
    countDigits = function(num){
        return num.toString().length;
    },
    start = function () {
        startTime = new Date().getTime();
    },
    stop = function () {
        endTime = new Date().getTime();
    },
    getMilliseconds = function () {
        if (endTime)
            return (endTime - startTime) + 'ms';
        else
            return undefined;
    },
    getElapsed = function () {
        if (endTime) {
            var totalMillis, remain = 0, hrs = 00, mins = 00, secs = 00, millis = 00, temp, parts;

            /*prod/test*/
            totalMillis = endTime - startTime;
            //totalMillis = 562989;

            //hours
            if (totalMillis >= 3600000) {
                temp = totalMillis / (millisInSec * secsInMin * minsInHour);
                parts = temp.toString().split(".");
                hrs = Number(parts[0]);
                remain = Number(('.' + parts[1]));
            }
            //mins
            if (totalMillis >= 60000) {
                if (remain > 0) {
                    temp = remain * minsInHour;
                    parts = temp.toString().split(".");
                } else {
                    temp = totalMillis / ( millisInSec * secsInMin );
                    parts = temp.toString().split(".");                                      
                }
                mins = Number(parts[0]);
                remain = Number(('.' + parts[1]));
            }
            //seconds
            if (totalMillis >= 1000) {
                if (remain > 0) {
                    temp = remain * secsInMin;
                    parts = temp.toString().split(".");
                    
                } else {
                    temp = totalMillis / millisInSec;
                    parts = temp.toString().split(".");                        
                }
                secs = Number(parts[0]);
                remain = Number(('.' + parts[1]));
            }
            //millis
            if (totalMillis >= 0) {
                if (remain > 0) {
                    millis = Math.round(remain * millisInSec);
                } else {                    
                    millis = totalMillis;
                }

            }

            //remain = remain % ;
            //secs = Math
            var hStr, mStr, sStr, milStr;
            hStr = countDigits(hrs) == 1 ? ('0' + hrs.toString()) : hrs.toString();
            mStr = countDigits(mins) == 1 ? ('0' + mins.toString()) : mins.toString();
            sStr = countDigits(secs) == 1 ? ('0' + secs.toString()) : secs.toString();
            milStr = (millis == 0 ? '00' : millis.toString());

            return hStr + ':' + mStr + ':' + sStr + ':' + milStr;

        } else
            return undefined;

    },
    reset = function () {
        startTime = undefined;
        endTime = undefined;
    };

    //public
    return {
        start: start,
        stop: stop,
        elapsed: getElapsed,
        milliseconds: getMilliseconds,
        reset: reset
    };
})();