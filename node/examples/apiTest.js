/**
 * Module dependencies.
 */

ApiClient = require('../index.js').ApiClient;

var client = new ApiClient({
    'appkey':'32739086',
    'appsecret':'7ec218e53bce67e180f91fc530301919',
    // 'url':'https://gw.api.tbsandbox.com/router/rest'
    'url':'https://eco.taobao.com/router/rest'
});

client.executeWithHeader('alipay.user.trade.search',
    {
        'page_no':1,
        'page_size':100,
        'start_time':'2017-03-21 00:00:00',
        'end_time':'2017-03-23 23:59:59',
        'session':'70000100f25719047abee9303ca8ee5d2e84f19cdd4edfb48d5e917a3e9a4aca99aaf042153472040'
    },
    {},
    function (error,response) {
        if(!error)
            console.log(response);
        else
            console.log(error);
    })
