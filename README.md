# Overview

This is a test suite using Jasmine (2.1.2) of a RSS feed reader, which grabs the JSON file of several sites and displays the link. The test suite makes sure that the allFeed variable (the collection of all the feeds) is not empty, and makes sure that the menu is hidden before being clicked on. There is a separate test to make sure that there is at least one entry in the feed upon loading and that loading is successful. There is a final test to make sure that the new feed is different than the old one displayed.

Relies on jQuery 2.1.1, handlebars 2.0, and the google js api

19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass.
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.
