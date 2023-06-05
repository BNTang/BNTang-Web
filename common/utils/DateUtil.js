/**
 * 获取当前日期，年月
 * @returns {number} 时间戳
 * @desc: 在上面的代码中，我修改了函数，
 * 使用Date对象的getFullYear()和getMonth()方法获取当前的年份和月份。
 * 然后，我用年和月的值创建了一个新的Date对象，
 * 并将日期设置为1(每月的第一天)。这将创建一个新的Date对象，
 * 将时间设置为每月第一天的午夜。然后，
 * 我使用getTime()方法获取该日期的时间戳，
 * 并从函数返回它。这将为您提供当前年份和月份的时间戳，但不包含时间。
 * 注意点：这个方法，是返回当前时间的年月，月是当前月的第一天不是最后一天
 * yyyy-MM-dd
 */
const getCurDateYearMonthByStart = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    return new Date(year, month - 1).getTime();
}

/**
 * 获取当前日期，年月
 * @returns {number} 时间戳
 * @desc: 在上面的代码中，我修改了函数，
 * 使用Date对象的getFullYear()和getMonth()方法获取当前的年份和月份。
 * 然后，我用年和月的值创建了一个新的Date对象，
 * 并将日期设置为1(每月的第一天)。这将创建一个新的Date对象，
 * 将时间设置为每月第一天的午夜。然后，
 * 我使用getTime()方法获取该日期的时间戳，
 * 并从函数返回它。这将为您提供当前年份和月份的时间戳，但不包含时间。
 * 注意点：这个方法，是返回当前时间的年月，月是当前月的最后一天
 * dd
 */
const getCurDateYearMonthByEnd = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    return new Date(year, month, 0).getTime();
};

/**
 * 获取当前日期，年月
 * @returns {string} 时间戳
 * @desc: 在上面的代码中，我修改了函数，
 * 使用Date对象的getFullYear()和getMonth()方法获取当前的年份和月份。
 * 然后，我用年和月的值创建了一个新的Date对象，
 * 并将日期设置为1(每月的第一天)。这将创建一个新的Date对象，
 * 将时间设置为每月第一天的午夜。然后，
 * 我使用getTime()方法获取该日期的时间戳，
 * 并从函数返回它。这将为您提供当前年份和月份的时间戳，但不包含时间。
 * 注意点：这个方法，是返回当前时间的年月，月是当前月的第一天不是最后一天
 * yyyy-MM-dd
 */
const getCurDateYearMonthByStartDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const result = new Date(year, month - 1);
    return `${result.getFullYear()}-${(result.getMonth() + 1).toString().padStart(2, "0")}-${result.getDate().toString().padStart(2, "0")}`;
}

/**
 * 获取当前日期，年月
 * @returns {number} 时间戳
 * @desc: 在上面的代码中，我修改了函数，
 * 使用Date对象的getFullYear()和getMonth()方法获取当前的年份和月份。
 * 然后，我用年和月的值创建了一个新的Date对象，
 * 并将日期设置为1(每月的第一天)。这将创建一个新的Date对象，
 * 将时间设置为每月第一天的午夜。然后，
 * 我使用getTime()方法获取该日期的时间戳，
 * 并从函数返回它。这将为您提供当前年份和月份的时间戳，但不包含时间。
 * 注意点：这个方法，是返回当前时间的年月，月是当前月的最后一天
 * dd
 */
const getCurDateYearMonthByEndDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    return new Date(year, month, 0).getDate();
};

exports.getCurDateYearMonthByStart = getCurDateYearMonthByStart;
exports.getCurDateYearMonthByEnd = getCurDateYearMonthByEnd;
exports.getCurDateYearMonthByStartDate = getCurDateYearMonthByStartDate;
exports.getCurDateYearMonthByEndDate = getCurDateYearMonthByEndDate;
