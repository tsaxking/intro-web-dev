# HTML Basics

HTML (Hypertext Markup Language) is the standard markup language used for creating web pages. It consists of a series of elements or tags that define the structure and content of a webpage. 

## HTML Document Structure

HTML documents have the following basic structure. You can get this by typing '!' and hitting the enter key in vsc. 

~~~
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
<!-- Content goes here -->
</body>
</html>

<!DOCTYPE html>: This declaration is placed at the beginning of an HTML document and specifies that the document is an HTML5 document.
<html>: The root element of an HTML document. It contains all other elements.
<head>: This element contains meta-information about the HTML document, such as the title and links to stylesheets or scripts.
<title>: This element sets the title of the webpage, which appears in the browser's title bar or tab.
<body>: This element contains the visible content of the webpage.
~~~

## HTML Elements
HTML elements are defined using tags. Tags almost always have <opening-tags> and </closing-tags>. Here are some commonly used one

~~~
<h1>, <h2>, <h3>, ... <h6>: Headings of different levels (from 1 to 6).
<p>: Paragraph of text.
<a href="URL">Link Text</a>: Creates a hyperlink (either to a website or other elements on the webpage)
<img src="image.jpg" alt="Image Description">: Displays an image.
<ul>: Unordered list.
<ol>: Ordered list.
<li>: List item.
<div>: Container that allows grouping of elements
<span>: Inline container for text or other elements.
<table>, <tr>, <th>, <td>: Creates a table with rows and cells.
~~~

## HTML Attributes
HTML elements can have attributes that provide additional information about the element. Attributes are specified within the opening tag. Here are some commonly used attributes:

id: Specifies a unique identifier for an element.
class: Specifies one or more classes for an element.
src: Specifies the source URL for an image or media element.
href: Specifies the URL destination for a hyperlink.
style: Specifies inline CSS styles for an element.
alt: Specifies alternative text for an image.