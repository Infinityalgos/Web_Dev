
function ShowSearchBar() {
    /* A FUNCTION TO TOGGLE HIDE/VIEW THE SEARCH BAR. */
    // PERFORM SEARCH THEN:
    let ScSize = window.matchMedia("(max-width: 1030px)")
    if (ScSize.matches) {
        var SearchBar = document.getElementById("SearchBar");


        if (SearchBar.style.display === "none") {
            SearchBar.style.display = "block";
        }
        else {
            SearchBar.style.display = "none";
        }
    }
    else {
        SearchBar.style.display = "block";

    }
}
