# What is a DOM?

DOM stands for Document Object Model (not a programming language!) and it is an application programming interface. It is a crucial concept in web development as it provides a structured representation of an HTML document, it is supported by **all** modern browsers.

Furthermore DOM bridges the gap by enabling JavaScript to interact with and manipulate the content, structure, and styling of the document directly.

**Try out the dom.html example in 6.1.1!**

## DOM is like a tree

Similar to a tree, DOM has a hierarchical structure where elements are organized in a parent-child relationship. 

Each element in DOM is represented as a node. Nodes can have parent, child, and sibling nodes.

1.  **Parent-Child Relationship**
    ```html
    <div id="parent">
        // This is the parent node
        <div id="child">
        // This is the child node
        </div>
    </div>
    ```

2.  **Sibling Relationship**
    ```html
    <div id="parent">
        // This is the parent node
        <div id="child1">
        // This is the child node and I have a sibling
        </div>
        <div id="child2">
        // I am that sibling :)
        </div>
    </div>
    ```

Web developing languages can be viewed as the gardener who can interact with the DOM to manipulate elements, attributes, and styles dynamically. (in real time)

### Curious to see what is considered an element/object? Head over to Is It an Object.html in lesson 6.1.2 to see!