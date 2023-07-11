# Getting Elements

There are many ways to get elements from a web page, aka an HTML document.

For the following we will give an example, explain what it does, and let you test it out on your own as well as showing ways you can manipulate it personally.

1. getElementById()

    Allows you to retrieve an element using its unique ID attribute

    It returns a single element with the matching ID

    Head over to 6.2.1 - getElementById to try it out! Pay attention to the comments to find ways to change the code yourself.

1. getElementsByClassName()

    Returns a collection of elements based on their class name and returns a live HTMLCollection


    An HTMLCollection is a collection of DOM elements that is dynamically updated to reflect changes

    Head over to 6.2.2 getElementsByClassName to see an example! Don't forget to pay attention to the comments!

1.  getElementsByTagName()

    Retrieves a collection of elements based on their tag name and returns it in a live HTMLCollection

    Head over to 6.2.3 getElementsByTagName to see an example!

1. getElementsByName()

    Feeling some déjà vu? It retrieves a collection of elements based on their name attribute and returns a live NodeList

    Head over to 6.2.4 getElementsByName to see an example!

1. querySelector()

    Uses the CSS selector syntax to return the first matching element within the document

    Go to 6.2.5 querySelector.html to check out an example! Pay attention to the comments!

1. querySelectorAll()

    Similar to the querySelector method, however, instead of returning a single element it returns a NodeList containing all of the elements that match the selector

    Go to 6.2.6 querySelectorAll.html to check out an example pay attention to the comments!

## The Family Reunion

The next method is to use parent, sibling and child nodes. Remeber what we said in 6.1? These are extremely useful when needing to do things such as changing the colors of all the elements under a parent element.

Here are the main 3 "family" methods of getting elements:

1. parentNode access the parent of an element (myElement)

    Example: var myParentElement = myElement.parentNode


1. childNode access **all** the child of an element (myElement) 

    *(note an element can only have 1 parent but can have multiple children)*

    Example: var myChildrenElement = myElement.children

1. Sibling Nodes are those with the **same** parent. There are two calls you can do.

    Example 1: var myNextSiblingElement = myElement.nextSibling;

    Example 2: var myPreviousSiblingElement = myElement.previousSibling;

Head over to 6.2.7 famliy.html to try all of these out!