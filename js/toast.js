function Toast(options) {
  let _this = this;
  let defaultOptions = {
    title: "title",
    content: "message",
    variant: "success",
    position: "top-right",
    rootElement: ".container",
    autoHideDuration: 10000,
    closeOnClick: true,
  };
  options = { ...defaultOptions, ...options };
  const images = {
    success: "check.svg",
    danger: "error.svg",
    info: "info.svg",
    warning: "warning.svg",
  };

  const addToastOnClick = (type) => {
    const select = document.querySelector(".position-select");
    const value = select.options[select.selectedIndex].value;
    _this.showToast(value, type);
  };

  _this.prepareControls = function () {
    _this.createContainers();
    _this.showBtns();
    _this.showSelector();
  };

  _this.showBtns = function () {
    const toastButtons = createElm("div");
    toastButtons.addClass("toast-buttons");

    const successBtn = createBtn("success", "Success");
    const dangerBtn = createBtn("danger", "Danger");
    const infoBtn = createBtn("info", "Info");
    const warningBtn = createBtn("warning", "Warning");

    toastButtons.appendChild(successBtn);
    toastButtons.appendChild(dangerBtn);
    toastButtons.appendChild(infoBtn);
    toastButtons.appendChild(warningBtn);

    appendChild(".controlPanel", toastButtons);

    successBtn.addEventListener("click", () => addToastOnClick("success"));
    dangerBtn.addEventListener("click", () => addToastOnClick("danger"));
    infoBtn.addEventListener("click", () => addToastOnClick("info"));
    warningBtn.addEventListener("click", () => addToastOnClick("warning"));
  };

  _this.showSelector = function () {
    const selector = createElm("div");
    selector.addClass("select");
    const select = createElm("select");
    select.addClass("position-select");

    const defOption = createOpt("Select Position");
    const topRightOption = createOpt("Top Right", "top-right");
    const topLeftOption = createOpt("Top Left", "top-left");
    const bottomLeftOption = createOpt("Bottom Left", "bottom-left");
    const bottomRightOption = createOpt("Bottom Right", "bottom-right");

    select.appendChild(defOption);
    select.appendChild(topRightOption);
    select.appendChild(topLeftOption);
    select.appendChild(bottomLeftOption);
    select.appendChild(bottomRightOption);

    selector.appendChild(select);

    appendChild(".controlPanel", selector);
  };

  _this.createContainers = function () {
    const controlPanel = createElm("div");
    controlPanel.addClass("controlPanel");

    const topRightCont = createCont("top-right");
    const bottomRightCont = createCont("bottom-right");
    const topLeftCont = createCont("top-left");
    const bottomLefttCont = createCont("bottom-left");

    appendChild(options.rootElement, controlPanel);
    appendChild(options.rootElement, topRightCont);
    appendChild(options.rootElement, bottomRightCont);
    appendChild(options.rootElement, topLeftCont);
    appendChild(options.rootElement, bottomLefttCont);
  };

  _this.showToast = function (
    position = options.position,
    variant = options.variant
  ) {
    const notificationToast = createElm("div");
    notificationToast.addClass("notification toast " + variant);

    deleteToast(notificationToast, options.autoHideDuration);
    const notificationImage = createElm("div");
    notificationImage.addClass("notification-image");
    const toastImage = document.createElement("img");
    toastImage.src = "assets/" + images[variant];

    const notTitleMessage = createElm("div");
    notTitleMessage.addClass("notification-message-title");
    const notificationTitle = createElm("p");
    notificationTitle.addClass("notification-title");
    notificationTitle.textContent = options.title;
    const notificationMessage = createElm("p");
    notificationMessage.textContent = options.content;
    notificationMessage.addClass("notification-message");

    const closeBtn = createElm("button");
    closeBtn.innerHTML = "X";
    closeBtn.addEventListener("click", function () {
      if (options.closeOnClick) notificationToast.style.display = "none";
    });

    notTitleMessage.appendChild(notificationTitle);
    notTitleMessage.appendChild(notificationMessage);

    notificationImage.appendChild(toastImage);

    notificationToast.appendChild(notificationImage);
    notificationToast.appendChild(notTitleMessage);
    notificationToast.appendChild(closeBtn);

    appendChild(".notification-container." + position, notificationToast);
  };
  _this.prepareControls();
}

// Functions //

Object.prototype.addClass = function (className) {
  this.setAttribute("class", className);
};

const createElm = (tag) => document.createElement(tag);

const createBtn = (className, content) => {
  const btn = createElm("button");
  btn.addClass(className);
  btn.innerHTML = content;
  return btn;
};

const createOpt = (content, value = "bottom-right") => {
  const option = createElm("option");
  option.innerHTML = content;
  option.value = value;
  return option;
};

const createCont = (posClass) => {
  const notificationContainer = createElm("div");
  notificationContainer.addClass("notification-container " + posClass);
  return notificationContainer;
};

const deleteToast = (element, time) => {
  setTimeout(() => (element.style.display = "none"), time);
};

const appendChild = (root, child) =>
  document.querySelector(root).appendChild(child);
