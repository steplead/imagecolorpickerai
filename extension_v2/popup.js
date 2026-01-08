document.getElementById('pickBtn').addEventListener('click', async () => {
    if (!window.EyeDropper) {
        alert('Your browser does not support the EyeDropper API. Please update Chrome.');
        return;
    }

    const eyeDropper = new EyeDropper();
    const pickBtn = document.getElementById('pickBtn');
    const resultDiv = document.getElementById('result');
    const hexValue = document.getElementById('hex');
    const preview = document.getElementById('preview');

    try {
        const result = await eyeDropper.open();
        const hex = result.sRGBHex.toUpperCase();

        // Update UI
        pickBtn.style.display = 'none';
        resultDiv.style.display = 'block';
        hexValue.textContent = hex;
        preview.style.backgroundColor = hex;

        // Set up View button
        document.getElementById('viewBtn').onclick = () => {
            // In a real app, we might search for the color or just open the detail page if we have a match.
            // Since we don't have IDs for every possible hex code, we'll redirect to a search/analyze 
            // or a specific landing page if we implement hex-based routes. 
            // For now, let's target the site with a query param that the site can handle.
            const url = `https://imagecolorpickerai.com/?picked=${hex.replace('#', '')}`;
            window.open(url, '_blank');
        };

    } catch (e) {
        console.log('Color picking cancelled or failed:', e);
    }
});
