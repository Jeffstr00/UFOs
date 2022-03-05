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
While the initial version had an input box and button the user would click when they wanted to filter by date, we updated it to have five filter boxes instead.  Since we no longer have one filter button, we now "listen" to changes in these boxes by using `d3.selectAll("input").on("change", updateFilters);`, which then loads our updateFilters function.  We use D3 to read in what element was changed using `let changedElement = d3.select(this);` and ultimately update our filter variable before calling our filterTable function.  We then take the data from the original tableData and loop through the different filters until we are left with data which fits them all.  To accomplish this, we used the following code: ```    let filteredData = tableData.filter((obj) => {
      for(filterId in filters) {
        if(obj[filterId] !== filters[filterId]) {
          return false;
        }
      }
      return true;
    });```
Once this was finished, we could rebuild our table by once again calling our buildTable function, but this time passing it our new filteredData: `buildTable(filteredData);`.

The webpage should be fairly straight-forward and easy to use, either for Dana or even the most inexperienced users.  To sort through the different sightings, simply enter information in the appropriate input box, taking care to ensure that the entered text matches some of the data in the given field.  The user can either press 'enter' to filter the data immediately, or they can move on to another field to filter it further (in which case it will be done automatically).

For instance, if someone wanted to search for UFO sightings in Florida on January 1, 2010, they could...

1) enter 'fl' in the state search box to return all Florida results:
![Florida search](https://github.com/Jeffstr00/UFOs/blob/main/static/images/page2.png)

then
2) enter 1/1/2010 to narrow that down for the given date (note that these could be done in any order):
![Florida 1/1/2010 search](https://github.com/Jeffstr00/UFOs/blob/main/static/images/page3.png)


## Summary
In a summary statement, describe one drawback of this new design and two recommendations for further development.