# mouseTooltip

mouseTooltip is a small directive, that allows a element to follow the mouse depending on its location, relative to its parent.

> Mouse movments have never worked so easy and smooth

### Version
1.0.0

### Dependencies

mouseTooltip depends on these frameworks

* [AngularJS] - HTML enhanced for web apps!
* [jQuery] - since well, its magic.

### Reference directive

```html
<!doctype html>

<html lang="en">
    <head>
      <meta charset="utf-8">
    
      <title>The HTML5 Herald</title>
      <meta name="description" content="The HTML5 Herald">
      <meta name="author" content="SitePoint">
    
      <link rel="stylesheet" href="css/styles.css?v=1.0">
    
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    
    <body>
    </body>

    <!-- jQuery -->
    <script src="node_modules/jquery/dist/jquery.js"></script>
    <!-- angularJs -->
    <script src="node_modules/angular/angular.js"></script>
    <!-- mouseTooltip -->
    <script src="libs/js/mouseTooltip/directive.js">
</html>
```

### Ussage

```html
<div class="parent">
    Mouse move
    <div class="child" mouse-tooltip>
        Follow mouse
    </div>
</div>
```

License
----

MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [jQuery]: <http://jquery.com>
   [AngularJS]: <http://angularjs.org>


