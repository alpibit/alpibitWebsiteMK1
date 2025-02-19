let wasmModule = null;

export async function initWasm() {
    if (wasmModule) return wasmModule;

    try {
        const wasmUrl = '/wasm-colors/pkg/wasm_colors_bg.wasm';
        const jsUrl = '/wasm-colors/pkg/wasm_colors.js';

        const script = document.createElement('script');
        script.src = jsUrl;
        document.body.appendChild(script);

        await new Promise((resolve) => {
            script.onload = resolve;
        });

        wasmModule = await window.wasm_colors;
        return wasmModule;
    } catch (err) {
        console.error('Failed to load WASM module:', err);
        return null;
    }
}

export function interpolateColor(startColor, endColor, progress) {
    if (!wasmModule) return startColor;
    return wasmModule.interpolate_color(startColor, endColor, progress);
}