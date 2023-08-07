/*
Called when the item has been created, or when creation failed due to an error.
We'll just log success/failure here.
*/
function onCreated() {
    if (browser.runtime.lastError) {
        console.debug(`Error: ${browser.runtime.lastError}`);
    } else {
        console.debug("Item created successfully");
    }
    console.clear();
}

/*
Called when there was an error.
We'll just log the error here.
*/
function onError(error) {
    console.debug(`Error: ${error}`);
}

function getCanonicalUrl() {
    var canonical = "";
    alert('taco hell');
    if (window.location.href.indexOf("lessonID") > -1) {
        var links = document.getElementsByTagName("link");
        alert('all good');
        for (var i = 0; i < links.length; i++) {
            if (links[i].getAttribute("rel") === "canonical") {
                canonical = links[i].getAttribute("href")
            }
        }
        alert(canonical);
    }
    return canonical;
}
document.addEventListener('DOMContentLoaded', function () {

    window.open(getCanonicalUrl());
    alert('done getting')
}, false);
