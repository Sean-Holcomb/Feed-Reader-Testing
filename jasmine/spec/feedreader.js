/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        var len = allFeeds.length;
        it('url is defined', function() {

            for (var i = 0; i < len; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name is defined', function() {
            for (var i = 0; i < len; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* Test suite to check that the menu functions properly */
    describe('The menu', function() {
        /* A test that ensures the menu element is
         * hidden by default.
         */
        it('is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
        it('toggles', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Test suite to check if loadFeed function works properly */
    describe('Initial Entries', function() {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        //check that there is an entry object in the feed.
        it('loadFeed complete', function() {
            expect($('.feed').find('.entry')[0]).toBeDefined();
        });
    });

    /* Test suite to check if loadFeed has loaded new items"*/
    describe('New Feed Selection', function() {
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        //run load feed for the first feed and save the titles of that feed
        //then load the second feed
        var feedContent;
        var feed = $('.feed');
        beforeEach(function(done) {
            loadFeed(0, function () {
                feedContent = feed.find('h2').text();
                feed.empty();
                loadFeed(1, done);
            });
        });
        //check that the second feeds titles are not the same.
        it('is different', function() {
            expect(feedContent).not.toBe(feed.find('h2').text());
        });
    });

    describe('my test', function() {

        it('does my test', function() {

        });
    });
}());
