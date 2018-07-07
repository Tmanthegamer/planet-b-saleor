// CONSTANTS
const CONTAINER_SELECTOR = '.grid.grid-tabs';
const UL_TABS_SELECTOR = CONTAINER_SELECTOR +' > ul.tabs';
const CONTENT_SELECTOR = '.content';
const LI_TAB_SELECTOR = 'li.tab';
const CLASS_TAB_ACTIVE = 'tab-active';
const TAB_CONTENT_SELECTOR = '.tab-content';

const TAB_PROPERTY = 'tab';

/**
 * Change the current tab content to the new selected one
 * @param  {jQuery element} the parent ul list
 * @param  {jQuery element} the currently selected li
 */
const changeTabContent = function(tabContents, currentTab) {
    let tabValue = currentTab.data(TAB_PROPERTY);

    // Iterate through the tab contents and activate the desired one
    tabContents.children(TAB_CONTENT_SELECTOR).each(function() {
        let child = $(this);
        if(child.data(TAB_PROPERTY) !== tabValue) {
            child.removeClass(CLASS_TAB_ACTIVE);
        }
        else {
            child.addClass(CLASS_TAB_ACTIVE);
        }
    });
}

/**
 * Change the currently active tab to the one that was selected
 * @param  {jQuery element} the parent ul list
 * @param  {jQuery element} the currently selected li
 * @param  {string} child selector
 */
const changeActiveTab = function(list, currentTab, childSelector) {
    let tabValue = currentTab.data(TAB_PROPERTY);
    // Iterate through the children and make our desired one active
    list.children(childSelector).each(function(){
        let child = $(this);
        if(child.data(TAB_PROPERTY) !== tabValue) {
            child.removeClass(CLASS_TAB_ACTIVE);
        }
        else {
            child.addClass(CLASS_TAB_ACTIVE);
        }
    });
};

export default $(document).ready((e) => {
    $(document).ready((e) => {

        /**
         * When an item is clicked, change the currently active
         * to the tab we've clicked
         */
        $(LI_TAB_SELECTOR).click(function(event) {
            let currentTab = $(this);
            let list = currentTab.closest(UL_TABS_SELECTOR);
            let contents = currentTab.closest(CONTAINER_SELECTOR).find(CONTENT_SELECTOR);

            changeActiveTab(list, currentTab, LI_TAB_SELECTOR);
            changeTabContent(contents, currentTab);
        });
    });
});