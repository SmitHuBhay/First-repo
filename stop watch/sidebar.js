const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('Button');

toggleButton.addEventListener('click', () => {
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-200px'; // Hide the sidebar
    } else {
        sidebar.style.left = '0px'; // Show the sidebar
    }
});
