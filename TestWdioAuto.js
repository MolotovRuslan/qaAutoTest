const assert = require('assert');

describe('Test 1 fixer', () => {
    // Test of Title
    it.skip('Title for GradesFixer', () => {
        browser.url('https://gradesfixer.com/');
        const title = browser.getTitle();
        assert.strictEqual(title, '≡ Free Essay Samples for College Students. Research Papers for Download GradesFixer');
        browser.url('https://api.telegram.org/bot1674082355:AAFFQLqkwjbBvdmkFTL09RqqVvO_ga0duoo/sendMessage?chat_id=218858759&text=Test "Title-GradesFixer": 1 from 10, Passed');
    });
    // Test of Canonical
    it.skip('Canonical for GradesFixer', () => {
        browser.url('https://gradesfixer.com/');
        const canonical = browser.$("link[rel='canonical']").getAttribute('href');
        assert.strictEqual(canonical, 'https://gradesfixer.com/');
        browser.url('https://api.telegram.org/bot1674082355:AAFFQLqkwjbBvdmkFTL09RqqVvO_ga0duoo/sendMessage?chat_id=218858759&text=Test "Canonical-GradesFixer": 2 from 10, Passed');
    });
    // Test of Description
    it.skip('Description for GradesFixer', () => {
        browser.url('https://gradesfixer.com/');
        const canonical = browser.$("meta[name='description']").getAttribute('content');
        assert(canonical.length === 182); // или canonical.length > 1
        browser.url('https://api.telegram.org/bot1674082355:AAFFQLqkwjbBvdmkFTL09RqqVvO_ga0duoo/sendMessage?chat_id=218858759&text=Test "Description-GradesFixer": 3 from 10, Passed');
    });
    // Test for amount of DIVs
    it.skip('Div-s for GradesFixer', () => {
        browser.url('https://gradesfixer.com/');
        const TagNameDivs = browser.$$('.top-info, .popular-categories-wrapper');
        assert(TagNameDivs.length === 2 );
        browser.url('https://api.telegram.org/bot1674082355:AAFFQLqkwjbBvdmkFTL09RqqVvO_ga0duoo/sendMessage?chat_id=218858759&text=Test "Div-s-GradesFixer": 4 from 10, Passed');
    });
    // Test for amount of DIV
    it.skip('Div for GradesFixer', () => {
        browser.url('https://gradesfixer.com/');
        const TagNameDiv = browser.$(".writers-slider-wrapper h2").getText();
        assert.strictEqual(TagNameDiv, "Our Top-Rated Writers");
        browser.url('https://api.telegram.org/bot1674082355:AAFFQLqkwjbBvdmkFTL09RqqVvO_ga0duoo/sendMessage?chat_id=218858759&text=Test "Div-GradesFixer": 5 from 10, Passed');
    });

    // TEST https://writingbros.com/

    // Test for Search
    it.skip('Test for search', function () {
        browser.url("https://writingbros.com/");
        expect(browser).toHaveTitle("Essay Samples Database for University Students");
    });
    // Test for Search part 2
    it.skip('Test for search PR2 ', function () {
        const searchInput = browser.$("#s");
        const searchButton = browser.$(".search_homepage");

        searchInput.addValue('war');
        browser.pause(2000);
        searchButton.click();
        browser.pause(2000);

        const pageOfSearch = browser.$(".search-title-word");
        expect(pageOfSearch).toHaveText('war');
    });
    // Test for Writing bros "Order banner"
    it.skip('Order banner', function () {
        browser.url("https://writingbros.com/");
        const orderBannerfooter = browser.$(".header_login");
        orderBannerfooter.click();
        browser.pause(2000);
       expect(browser).toHaveUrl('https://my.writingbros.com/order?login-first=1&utm_medium=s&utm_source=writingbros.com&utm_content=login_first&utm_campaign=hire_writer_headerr');
    });
    // Test for amount of Canonicals (or elements)"
    it.skip('amounts of divs', function () {
        browser.url("https://writingbros.com/");
        const amountOfElemnts = browser.$$('.container_wrapper');
        console.log(amountOfElemnts.length);
        assert(amountOfElemnts.length === 5);
    });

    // Test pop up"
    it('Test Pop up', function () {
        browser.url("https://writingbros.com/");
        let move = browser.$(".main-hero-wrap").moveTo( 10, 10);
        console.log(move);
        browser.pause(10000);
    });

    // Test Page Speed for mobile and PC"
    it.skip('Page speed', function () {
        browser.url("https://developers.google.com/speed/pagespeed/insights/?hl=ru");
        const pageSpeedInput = browser.$(".label-input-label");
        const pageSpeedButton = browser.$(".jfk-button");

        pageSpeedInput.addValue('https://gradesfixer.com/');
        pageSpeedButton.click();
        browser.pause(30000);
        const mobMainScore = browser.$(".lh-gauge__percentage").getText();
        const fcp = browser.$(".metric-wrapper:nth-child(1) .metric-value").getText();
        const lcp = browser.$(".metric-wrapper:nth-child(2) .metric-value").getText();
        const fid = browser.$(".metric-wrapper:nth-child(3) .metric-value").getText();
        const cls = browser.$(".metric-wrapper:nth-child(4) .metric-value").getText();
        const speedResult = ( "gradesfixer.com \n" + "Main Score Mobile " + "[" + mobMainScore + "] \n" + "(FCP ) "  + "[" + fcp + "] \n" + lcp + "\n" + fid + "\n" + cls);
        console.log(speedResult);
        // tBot starts here
        const TelegramBot = require('node-telegram-bot-api');
        const token = '1674082355:AAGxad-ZYovLh2spM27SWcga_tYQ-FfkQwY';
        const bot = new TelegramBot(token, {
            polling: true
        });
        const chat_id = 218858759;
        bot.sendMessage(chat_id, speedResult);



    });
    // Test Page Speed for mobile and PC" V2
    it.skip('Page speed', function () {
        browser.url("https://developers.google.com/speed/pagespeed/insights/?hl=ru");
        const pageSpeedInput = browser.$(".label-input-label");
        const pageSpeedButton = browser.$(".jfk-button");

        pageSpeedInput.addValue('https://gradesfixer.com/');
        pageSpeedButton.click();
        browser.pause(30000);
        let saveScreen = browser.saveScreenshot("C:\\Users\\Ruslan\\Desktop\\111\\test.png");
        //const imgPath = "C:\\Users\\Ruslan\\Desktop\\111\\test.png";
        // tBot starts here
        const TelegramBot = require('node-telegram-bot-api');
        const token = '1674082355:AAGxad-ZYovLh2spM27SWcga_tYQ-FfkQwY';
        const fs = require('fs');
        const bot = new TelegramBot(token, {
            polling: true
        });
        const chat_id = 218858759;
        const imgPath = 'C:\\Users\\Ruslan\\Desktop\\111\\test.png';
        bot.sendPhoto (chat_id, fs.readFileSync(imgPath));




    });


});
// Start command -->> npx wdio wdio.conf.js

//https://api.telegram.org/bot1674082355:AAFFQLqkwjbBvdmkFTL09RqqVvO_ga0duoo/getUpdates
//https://api.telegram.org/bot1674082355:AAFFQLqkwjbBvdmkFTL09RqqVvO_ga0duoo/sendMessage?chat_id=218858759&text=test