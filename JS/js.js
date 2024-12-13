
function generateEmails() {
    const username = document.getElementById('username').value;
    const startNum = parseInt(document.getElementById('start_num').value);
    const endNum = parseInt(document.getElementById('end_num').value);
    const domain = document.getElementById('domain').value;

    if (!username || !domain || startNum > endNum) {
        showToast('error', 'Invalid input. Please check your data.');
        return;
    } else {
        showToast('success', 'success!');
    }

    const output = document.getElementById('output');
    output.value = '';

    for (let i = startNum; i <= endNum; i++) {
        const email = `${username}${i}@${domain}`;
        output.value += email + '\n';
    }
}

function copyEmails() {
    const output = document.getElementById('output');
    output.select();
    document.execCommand('copy');
    showToast('success', 'Emails copied to clipboard!');
}

function downloadEmails() {
    const output = document.getElementById('output').value;
    const blob = new Blob([output], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'mail.txt';
    a.click();
}

function viewInNewTab() {
    const output = document.getElementById('output').value;
    const newWindow = window.open();
    newWindow.document.write(`<pre>${output}</pre>`);
}


function showToast(type, message) {
    let backgroundColor;

    switch (type) {
        case 'success':
            backgroundColor = "linear-gradient(to right, #00b09b, #96c93d)";
            break;
        case 'warning':
            backgroundColor = "linear-gradient(to right, #ff9800, #ff5722)";
            break;
        case 'error':
            backgroundColor = "linear-gradient(to right, #f44336, #e91e63)";
            break;
        default:
            backgroundColor = "linear-gradient(to right, #2196f3, #21cbf3)";
            break;
    }


    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: backgroundColor,
    }).showToast();
}

