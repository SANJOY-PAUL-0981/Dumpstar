document.getElementById('dumpButton').addEventListener('click', function() {
    var inputField = document.getElementById('inputField');
    var toast = document.getElementById('toast');
    if (inputField.value.trim() === "") {
        toast.textContent = "No thoughts are dumped";
    } else {
        toast.textContent = "Your thoughts are dumped Successfully!";
    }
    toast.className = "toast show";
    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 3000); // The toast will disappear after 3 seconds
})