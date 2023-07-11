/**
 * 获取当前日期，年月日，（日是本月的第一天）
 * @returns {number} 时间戳
 * @desc: 在上面的代码中，我修改了函数，
 * 使用Date对象的getFullYear()和getMonth()方法获取当前的年份和月份。
 * 然后，我用年和月的值创建了一个新的Date对象，
 * 并将日期设置为1(每月的第一天)。这将创建一个新的Date对象，
 * 将时间设置为每月第一天的午夜。然后，
 * 我使用getTime()方法获取该日期的时间戳，
 * 并从函数返回它。这将为您提供当前年份和月份的时间戳，但不包含时间。
 * 注意点：这个方法，是返回当前时间的年月，月是当前月的第一天不是最后一天
 */
const getCurDateYearMonthByStart = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    return new Date(year, month - 1).getTime();
}

/**
 * 获取当前日期，年月日，（日是当前月的最后一天）
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
 * 获取当前日期，年月日，（日是本月的第一天）
 * @returns {string} 当前日期字符串格式(2023-06-05)
 * @desc: 在上面的代码中，我修改了函数，
 * 使用Date对象的getFullYear()和getMonth()方法获取当前的年份和月份。
 * 然后，我用年和月的值创建了一个新的Date对象，
 * 并将日期设置为1(每月的第一天)。这将创建一个新的Date对象，
 * 将时间设置为每月第一天的午夜。然后，
 * 我使用getTime()方法获取该日期的时间戳，
 * 并从函数返回它。这将为您提供当前年份和月份的时间戳，但不包含时间。
 * 注意点：这个方法，是返回当前时间的年月，月是当前月的第一天不是最后一天
 */
const getCurDateYearMonthByStartDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const result = new Date(year, month - 1);
    return `${result.getFullYear()}-${(result.getMonth() + 1).toString().padStart(2, "0")}-${result.getDate().toString().padStart(2, "0")}`;
}

/**
 * 获取当前日期，年月日，（日是当前月的最后一天）
 * @returns {string} 当前日期字符串格式(2023-06-30)
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

// =====================================================================

/**
 * 获取指定月份日期，返回年月日，日是每月的1日
 *
 * @param m 减去的月份，例如我要获取上一个月的起始日期就传入1
 * @returns {number} 时间戳
 * @desc: 在上面的代码中，我修改了函数，
 * 使用Date对象的getFullYear()和getMonth()方法获取当前的年份和月份。
 * 然后，我用年和月的值创建了一个新的Date对象，
 * 并将日期设置为1(每月的第一天)。这将创建一个新的Date对象，
 * 将时间设置为每月第一天的午夜。然后，
 * 我使用getTime()方法获取该日期的时间戳，
 * 并从函数返回它。这将为您提供当前年份和月份的时间戳，但不包含时间。
 * 注意点：这个方法，是返回当前时间的年月，月是当前月的第一天不是最后一天
 */
const getCurDateYearMonthStartByMonth = (m) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1) - m;
    return new Date(year, month - 1).getTime();
}

/**
 * 获取指定月份日期，返回年月日，日是当前月的最后一天
 *
 * @param m 减去的月份，例如我要获取上一个月的起始日期就传入1
 * @returns {number} 时间戳
 * @desc: 在上面的代码中，我修改了函数，
 * 使用Date对象的getFullYear()和getMonth()方法获取当前的年份和月份。
 * 然后，我用年和月的值创建了一个新的Date对象，
 * 并将日期设置为1(每月的第一天)。这将创建一个新的Date对象，
 * 将时间设置为每月第一天的午夜。然后，
 * 我使用getTime()方法获取该日期的时间戳，
 * 并从函数返回它。这将为您提供当前年份和月份的时间戳，但不包含时间。
 * 注意点：这个方法，是返回当前时间的年月，月是当前月的最后一天
 */
const getCurDateYearMonthEndByMonth = (m) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1) - m;
    return new Date(year, month, 0).getTime();
};

// =====================================================================

/**
 *
 * get Chinese Date 获取中国日期(农历)
 * 用途用来记录生日使用，如果是生日当天，可以根据该方法获取日期来进行程序上面的提示生日快乐
 *
 * @param time yyyy-mm-dd
 * @returns {{a: string, d: (string|*), g: string, m: string}}
 */
const getChineseDate = (time) => {
    let date = time ? new Date(time) : new Date();
    dateString = date.toLocaleString('zh-CN-u-ca-chinese');
    dateString = dateString.replace(/(\d+)\s*?年/, (x, y) => {
        let result = '';

        // 天干
        result = "甲乙丙丁戊己庚辛壬癸".charAt((y - 4) % 10);

        // 地支
        result += "子丑寅卯辰巳午未申酉戌亥".charAt((y - 4) % 12);
        return result;
    });

    // 取年月日
    dateString = dateString.split(' ')[0];
    let g = dateString.substr(0, 2) + '年';
    let m = dateString.substring(2, dateString.match('月').index) + '月';
    let d = dateString.match(/\d+/)[0];
    d = d < 11 ? '初' + numberToString(d) : numberToString(d);
    let animals = ["猴", "鸡", "狗", "猪", "鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊"];
    let index = date.toLocaleString('zh-CN-u-ca-chinese').substr(0, 4) % 12;
    let a = animals[index];
    return {
        // 干支
        g,
        // 月
        m,
        // 日
        d,
        // 生肖
        a
    };
}
const numberToString = (number) => {
    if (number.match(/\D/) || number.length >= 14) return;

    // 数字对应中文
    let zhArray = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    // 进位填充字符，第一位是 个位，可省略
    let baseArray = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万'];
    // 把数字切割成数组并倒序排列，然后进行遍历转成中文
    let string = String(number).split('').reverse().map((item, index) => {
        // 如果当前位为0，直接输出数字， 否则输出 数字 + 进位填充字符
        item = Number(item) === 0 ? zhArray[Number(item)] : zhArray[Number(item)] + baseArray[index];
        return item;
        // 倒叙回来数组，拼接成字符串
    }).reverse().join('');

    // 如果以 一十 开头，可省略一
    string = string.replace(/^一十/, '十');
    // 如果有多位相邻的零，只写一个即可
    string = string.replace(/零+/, '零');
    let index = -1;
    if (string.length >= 2) {
        index = string.lastIndexOf('零');
    }
    return index === -1 ? string : string.substring(0, index);
}

// =====================================================================

exports.getCurDateYearMonthByStart = getCurDateYearMonthByStart;
exports.getCurDateYearMonthByEnd = getCurDateYearMonthByEnd;
exports.getCurDateYearMonthByStartDate = getCurDateYearMonthByStartDate;
exports.getCurDateYearMonthByEndDate = getCurDateYearMonthByEndDate;

// =====================================================================

exports.getCurDateYearMonthStartByMonth = getCurDateYearMonthStartByMonth;
exports.getCurDateYearMonthEndByMonth = getCurDateYearMonthEndByMonth;

// =====================================================================
exports.getChineseDate = getChineseDate;