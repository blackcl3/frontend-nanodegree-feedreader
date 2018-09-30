# Overview

This is a test suite using Jasmine (2.1.2) of a RSS feed reader, which grabs the JSON file of several sites and displays the link.

# Installation

$ git clone https://github.com/blackcl3/frontend-nanodegree-feedreader
$ run index.html file


# Using Feedreader

You can update the feeds that you would like to run within the app.js file in the allFeeds variable.

# Test Suite

The test suite makes sure that the allFeed variable (the collection of all the feeds) is not empty, and makes sure that the menu is hidden before being clicked on. There is a separate test to make sure that there is at least one entry in the feed upon loading and that loading is successful. There is a final test to make sure that the new feed is different than the old one displayed.

# Dependencies

Relies on jQuery 2.1.1, handlebars 2.0, and the google js api

