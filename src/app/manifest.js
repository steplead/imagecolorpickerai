export default function manifest() {
    return {
        name: 'Image Color Picker AI',
        short_name: 'ColorPicker',
        description: 'Extract precise hex codes and cultural history from any image.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
