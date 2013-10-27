steroids.view.navigationBar.show("Supply Source");

var rightButton = new steroids.buttons.NavigationBarButton();

rightButton.title = "Right"
rightButton.onTap = function() { alert("Right button tapped"); }

steroids.view.navigationBar.setButtons({
  right: [rightButton]
}, {
  onSuccess: function() {
    alert("Buttons set!");
  },
  onFailure: function() {
    alert("Failed to set buttons.");
  }
});