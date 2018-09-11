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
         * the rest of this project.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('and URL is defined', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
         })

        /* Test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

          it('and URL is defined', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
         })
    });

    describe('The menu', function() {

        /* Test ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         //expect CSS class menu-hidden to be true
        it('is hidden by default', function(){
            let body = $('body');
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
          // Test ensures the menu changes
          // * visibility when the menu icon is clicked. This test
          // * should have two expectations: does the menu display when
          // * clicked and does it hide when clicked again.

        it('and toggles when clicked', function(){
            let body = $('body');
            let $menu = $('menu-icon-link');
            //click first time
            $menu.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
            //click second time
            $menu.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });



     });

        describe('Initial Entries', function(){
         //
         // Test ensures when the loadFeed
         // * function is called and completes its work, there is at least
         // * a single .entry element within the .feed container.
         // * Remember, loadFeed() is asynchronous so this test will require
         // * the use of Jasmine's beforeEach and asynchronous done() function.


            beforeEach(function(done){
                loadFeed(0, done);
            });

            it('should have at least one entry', function(){
                let entries = $('.feed .entry');
                expect(entries.length).toBeGreaterThan(0);
            });
        });

    describe('New Feed Selection', function(){

        /* Test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        //function derived from https://medium.com/letsboot/testing-javascript-with-jasmine-basics-48efe03cf973
        beforeEach(function(done){
            $('.feed').empty();
            loadFeed(0, function(){
                entriesStart = $('.feed').find(allFeeds.url);

            loadFeed(1, function(){
                entriesEnd = $('.feed').find(allFeeds.url);
                done();
            });
        });
        });

        it('new feed is different than old feed', function(){
            expect(entriesStart === entriesEnd).toBe(false);
        });

    });





}());
