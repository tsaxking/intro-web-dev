# Introduction to Bootstrap

Bootstrap is a popular open-source framework that simplifies web development, and it's awesome. It provides a collection of pre-designed CSS styles, JavaScript components, and responsive layouts, allowing developers to create modern and visually appealing websites quickly.

## Getting Started

Paste the following line within the `<head>` section of your HTML file:

   ```html
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
   ```

Now add this line to the bottom of the `<body>` section of your HTML file

   ```html
   <script src="path/to/bootstrap.min.js"></script>
   ```

## Bootstrap Layout

Bootstrap provides a powerful grid system for creating responsive layouts. The grid system is based on a 12-column layout, which lets you create flexible and responsive designs.

### Container

To create a container for your layout, use the `.container` class. It provides a fixed-width container that centers your content.

```html
<div class="container">
  <!-- Your content goes here -->
</div>
```

For a full-width container that spans the entire width of the viewport, use the `.container-fluid` class instead.

```html
<div class="container-fluid">
  <!-- Your content goes here -->
</div>
```
### Rows and Columns

Within a container, you can create rows and divide them into columns. Rows are created using the `.row` class, and columns are defined using the `.col-*` classes.

```html
<div class="container">
  <div class="row">
    <div class="col-6">
      <!-- Column 1 -->
    </div>
    <div class="col-6">
      <!-- Column 2 -->
    </div>
  </div>
</div>
```

In the example above, we have created a row with two equal-width columns. The `.col-6` class specifies that each column should take up 6 columns out of the 12 available.

You can adjust the column width by changing the number after `col-`. For example, `.col-4` would create a column that occupies 4 columns, and `.col-8` would create a column that occupies 8 columns.

### Offset and Ordering

Bootstrap also provides classes for offsetting columns and controlling their ordering.

To offset a column, use the `.offset-*` classes. For example, `.offset-3` would offset a column by 3 columns.

```html
<div class="container">
  <div class="row">
    <div class="col-6 offset-3">
      <!-- Centered column -->
    </div>
  </div>
</div>
```

To change the order of columns, use the `.order-*` classes. For example, `.order-2` would move a column to the second position.

```html
<div class="container">
  <div class="row">
    <div class="col-4 order-2">
      <!-- Second column -->
    </div>
    <div class="col-4 order-1">
      <!-- First column -->
    </div>
    <div class="col-4">
      <!-- Third column -->
    </div>
  </div>
</div>
```

### Breakpoints

Bootstrap offers responsive breakpoints that allow you to define different layouts for different screen sizes. The available breakpoints are:

- Extra small (xs): Up to 576px
- Small (sm): 576px and up
- Medium (md): 768px and up
- Large (lg): 992px and up
- Extra large (xl): 1200px and up

You can use the responsive classes in conjunction with the column classes to create different layouts for different screen sizes.
