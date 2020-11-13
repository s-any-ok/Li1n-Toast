# Li1n-Toast

### Preview:

![Screenshot 1](https://user-images.githubusercontent.com/54908213/99125005-eac1d780-260b-11eb-9172-a211a36c0b2a.jpg)

### Description:
It is a simple framework-agnostic JavaScript plugin used for displaying customizable, toast-like, non-blocking, crossfading notification popups with different types on on the different positions of screen.

### How to use it:
Import the main JavaScript file ‘toast.js’ into the html document.

```html
<script src="js/toast.js"></script>
```
Create a basic toast message and specify title, content, variant, position, a container element to be placed in, close timeout, enable close on click.
```js
let toast = new Toast({
        title: "Hi, from Toast",
        content: "Good job",
        variant: "danger",
        position: "bottom-right",
        rootElement: ".container",
        autoHideDuration: 3000,
        closeOnClick: true,
      });
```
Show the toast message. In this example, the toast message will auto dismiss after 3 seconds.
```js
toast.showToast();
```
The default CSS for the toast message.
- https://github.com/s-any-ok/Li1n-Toast/blob/master/css/main.css
- https://github.com/s-any-ok/Li1n-Toast/blob/master/css/toast.css

### Demo
🔗 https://s-any-ok.github.io/Li1n-Toast/index.html
