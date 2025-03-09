function showEditBox() {
    document.querySelector('.sh-second-account-right-items').style.display = 'none';
    document.querySelector('.sh-wishlist-details').style.display = 'none';
    document.querySelector('.sh-ordered-details').style.display = 'none';
    document.querySelector('.sh-reviewed-details').style.display = 'none';
    document.querySelector('.sh-order-account-right-items-two').style.display = 'none';
    document.querySelector('.sh-second-account-right-items-two').style.display = 'block';
}

function saveDetails() {
    document.querySelector('.sh-second-account-right-items-two').style.display = 'none';
    document.querySelector('.sh-order-account-right-items-two').style.display = 'none';
    document.querySelector('.sh-ordered-details').style.display = 'none';
    document.querySelector('.sh-wishlist-details').style.display = 'none';
    document.querySelector('.sh-reviewed-details').style.display = 'none';
    document.querySelector('.sh-second-account-right-items').style.display = 'block';
}

function showSignup() {
    document.querySelector('.sh-order-account-right-items-two').style.display = 'none';
    document.querySelector('.sh-account').style.display = 'none';
    document.querySelector('.sh-My-order-account-right-items-two').style.display = 'none';
    document.querySelector('.sh-order-sub-items').style.display = 'none';
    document.querySelector('.sh-reviewed-details').style.display = 'none';
    document.querySelector('.sh-wishlist-details').style.display = 'none';
    document.querySelector('.sh-second-account-right-items').style.display = 'none'
    document.querySelector('.sh-second-account-right-items-two').style.display = 'none'
    document.querySelector('.sh-menu-item').style.display = 'none'
    document.querySelector('.sh-sing-up-section').style.display = 'block';
}

function hideSignup() {
    document.querySelector('.sh-sing-up-section').style.display = 'none';
    document.querySelector('.sh-second-account-right-items').style.display = 'block'
    document.querySelector('.sh-menu-item').style.display = 'block'
    document.querySelector('.sh-account-second-section').style.display = 'flex';
    document.querySelector('.sh-account').style.display = 'flex';
}

function showLoginPage() {
    document.querySelector('.sh-account-second-section').style.display = 'none';
    document.querySelector('.sh-account').style.display = 'none';
    document.querySelector('.sh-sing-up-section').style.display = 'none';
    document.querySelector('.sh-sing-up-log-section').style.display = 'block';
}

function showsigUpPage() {
    document.querySelector('.sh-account-second-section').style.display = 'none';
    document.querySelector('.sh-account').style.display = 'none';
    document.querySelector('.sh-sing-up-section').style.display = 'block';
    document.querySelector('.sh-sing-up-log-section').style.display = 'none';
}

function hidelogin() {
    document.querySelector('.sh-account-second-section').style.display = 'flex';
    document.querySelector('.sh-account').style.display = 'flex';
    document.querySelector('.sh-second-account-right-items').style.display = 'block'
    document.querySelector('.sh-menu-item').style.display = 'block'
    document.querySelector('.sh-sing-up-section').style.display = 'none';
    document.querySelector('.sh-sing-up-log-section').style.display = 'none';
}

function showOtp() {
    document.querySelector('.sh-account').style.display = 'none';
    document.querySelector('.sh-account-second-section').style.display = 'none';
    document.querySelector('.sh-sing-up-section').style.display = 'none';
    document.querySelector('.sh-sing-up-log-section').style.display = 'none';
    document.querySelector('.sh-otp-section').style.display = 'block';
}

function hideotp() {
    document.querySelector('.sh-account').style.display = 'flex';
    document.querySelector('.sh-account-second-section').style.display = 'flex';
    document.querySelector('.sh-second-account-right-items').style.display = 'block'
    document.querySelector('.sh-menu-item').style.display = 'block'
    document.querySelector('.sh-sing-up-section').style.display = 'none';
    document.querySelector('.sh-sing-up-log-section').style.display = 'none';
    document.querySelector('.sh-otp-section').style.display = 'none';
}
/* ==== ORDER MENU ITEMS ==== */
function showOrderMenu() {
    document.querySelector('.sh-order-account-right-items-two').style.display = 'block';
    document.querySelector('.sh-second-account-right-items').style.display = 'none';
    document.querySelector('.sh-second-account-right-items').style.display = 'none';
    document.querySelector('.sh-second-account-right-items-two').style.display = 'none';
}

function showDitalsOrderedProducts() {
    document.querySelector('.sh-ordered-details').style.display = 'block';
    document.querySelector('.sh-order-sub-items').style.display = 'flex';
    document.querySelector('.sh-My-order-account-right-items-two').style.display = 'block';
    document.querySelector('.sh-wishlist-details').style.display = 'none';
    document.querySelector('.sh-reviewed-details').style.display = 'none';
    document.querySelector('.sh-past-ordered-details').style.display = 'none';
}
/* ==== SHOW WSIH LIST ==== */
function showWishlist(){
    document.querySelector('.sh-wishlist-details').style.display = 'block';
    document.querySelector('.sh-ordered-details').style.display = 'none';
    document.querySelector('.sh-reviewed-details').style.display = 'none';
}
function showWishlistTwo(){
    document.querySelector('.sh-past-ordered-details').style.display = 'none';
    document.querySelector('.sh-reviewed-details').style.display = 'none';
    document.querySelector('.sh-wishlist-box').style.display = 'block';
}
function showPastPurchase(){
    document.querySelector('.sh-past-ordered-details').style.display = 'flex';
    document.querySelector('.sh-wishlist-box').style.display = 'none';
    document.querySelector('.sh-reviewed-details').style.display = 'none';
}
function showReview(){
    document.querySelector('.sh-reviewed-details').style.display = 'block';
    document.querySelector('.sh-past-ordered-details').style.display = 'none';
    document.querySelector('.sh-wishlist-details').style.display = 'none';
    document.querySelector('.sh-order-sub-items').style.display = 'none';
    document.querySelector('.sh-My-order-account-right-items-two').style.display = 'none';
}