// content.js
const overlay = document.createElement('div');
overlay.id = 'overlay-extension';
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
overlay.style.display = 'flex';
overlay.style.flexDirection = 'column'; // Change to column to stack message and image
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.textAlign = 'center';

// Create the message element
const message = document.createElement('div');
message.textContent = 'Binky wants you to take a quick break. Look at a spot 20 feet away for 20 seconds.';
message.style.color = '#fff';
message.style.fontSize = '18px';
message.style.marginBottom = '20px'; // Add some margin below the message

// Create the image element
const image = document.createElement('img');
image.src = 'https://previews.dropbox.com/p/thumb/AC_8t6rSO0duudUDHYuWJkkoYC0eKRQgD_8SB0j8IhW6FKOKmn4fopBmUHhLOP9C-dFqZn5IskWVldKL_1ktfRO3f_4zeEq7xbIJ9N2TEae_gkhQ_KlvgHti4Z9g9oUiLH0NsAwgzpY9hVVfBbjh85SYJ1H1t7tKK-AQ1FY8d6i-dfvjDryhhef_QMUuM2xo7gME_9tdXepiSNUzhEqwSEphwWwbEXcpYYoGl1OA_hFEzf6x4NI5fVQ6CjnW_HMAY0DMQnZBhorNrSdvuu6KlQub86_X-IWYI213Dq6mYidIM1nTcIfdxcY-VrSrPkvUvG-GrmrRDrm98_kEhoNCckJE/p.jpeg'; // Use chrome.runtime.getURL to get the correct path
image.style.maxWidth = '90%';
image.style.maxHeight = '90%';

// Append message and image to the overlay
overlay.appendChild(message);
overlay.appendChild(image);

document.body.appendChild(overlay);

setTimeout(() => {
  document.body.removeChild(overlay);
}, 20000); // 20 seconds