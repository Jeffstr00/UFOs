# UFO Sightings with JavaScript

Webpage: [https://jeffstr00.github.io/UFOs/](https://jeffstr00.github.io/UFOs/)

![full webpage](https://github.com/Jeffstr00/UFOs/blob/main/static/images/page_full.png)

## Overview

Dana is a data journalist who has been interested in UFOs since she was a young child.  When she is given the opportunity to write about her hometown of McMinnville, Oregon, she jumps at the chance.  After all, McMinnville is known for its UFO sightings, which is what kickstarted her interest in the topic in the first place.

To go along with her story, Dana wants to create a webpage to allow people to read up on various UFO sightings.  She is currently equipped with a javascript file containing information on over one hundred different sightings.  While this features a lot of information, it isn't exactly user-friendly.  She wants to display this data on a webpage so that it is not only easy to read, but easy to sort through as well.

![JavaScript data file](https://github.com/Jeffstr00/UFOs/blob/main/static/images/data.png)
![Original Webpage w/ Date Filter](https://github.com/Jeffstr00/UFOs/blob/main/static/images/page1.png)

We initially loaded the data into a table so that it would be easy to read and gave the user the ability to sort via date.  While this was a good start, Dana then asked us to provide even more flexibility by adding the ability to also sort by city, state, country, and shape of the sighted craft.


## Results

### Refactoring the webpage to include multiple filters

While the initial version had an input box and button the user would click when they wanted to filter by date, we updated it to have five filter boxes instead.  Since we no longer have one filter button, we now "listen" to changes in these boxes by using `d3.selectAll("input").on("change", updateFilters);`, which then loads our updateFilters function.  We use D3 to read in what element was changed using `let changedElement = d3.select(this);` and ultimately update our filter variable before calling our filterTable function.  We then take the data from the original tableData and loop through the different filters until we are left with data which fits them all.  To accomplish this, we used the following code: ```
let filteredData = tableData.filter((obj) => {
    for(filterId in filters) {
        if(obj[filterId] !== filters[filterId]) {
            return false;
        }
    }
    return true;
});
```
Once this was finished, we could rebuild our table by once again calling our buildTable function, but this time passing it our new filteredData: `buildTable(filteredData);`.

### Using the webpage

The webpage should be fairly straight-forward and easy to use, either for Dana or even the most inexperienced users.  To sort through the different sightings, simply enter information in the appropriate input box, taking care to ensure that the entered text matches some of the data in the given field.  The user can either press 'enter' to filter the data immediately, or they can move on to another field to filter it further (in which case it will be done automatically).

For instance, if someone wanted to search for UFO sightings in Florida on January 1, 2010, they could...

1) enter 'fl' in the state search box to return all Florida results:
![Florida search](https://github.com/Jeffstr00/UFOs/blob/main/static/images/page2.png)

then
2) enter 1/1/2010 to narrow that down for the given date (note that these could be done in any order):
![Florida 1/1/2010 search](https://github.com/Jeffstr00/UFOs/blob/main/static/images/page3.png)


## Summary/Improvements

While Dana is thrilled with the ability to easily search through the entire list of UFO sightings, the page isn't without its flaws.  Once major downside is the fact that the filters are limited to one option each.  To furher improve the webpage, instead of just being able to search for a single date, it would be preferable to have a start date and an end date (this would be particularly useful if even more data was added to the file instead of just ten days' worth).  If a UFO appears, it's not like it can be seen in just one place, so you might want to be able to include multiple locations.  That way, for instance, you could look for all results in New Jersey, Pennsylvania, or other neighboring states to see if one instance had more than one sighting.  Finally, you'd want to be able to search for multiple shapes at the same time, especially when the responses are open-ended.  After all, what one person classifies as a "circle" might be a "globe" to someone else, or even a "disk" or an "oval".

Another potential fault is the fact that the input boxes are open-ended.  This could cause some data to be missed if the information doesn't exactly match what the user is looking for.  For instance, someone looking for a sighting in London, Ontario, Canada might not be able to find the information they are looking for because they search for "london" while the entry is under "london (canada)".  The text has to match exactly, but you wouldn't know to search for precisely "london (canada)" unless you have already scrolled through the data...which defeats the purpose of the filtering in the first place.  As a result, it might be better to switch the open-ended search boxes over to dropdown boxes which provide all of the available options.  