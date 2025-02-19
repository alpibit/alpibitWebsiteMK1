use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn interpolate_color(start_color: &str, end_color: &str, progress: f64) -> String {
    // Parse hex colors
    let start = parse_hex_color(start_color);
    let end = parse_hex_color(end_color);

    // Interpolate each component
    let r = interpolate_component(start.0, end.0, progress);
    let g = interpolate_component(start.1, end.1, progress);
    let b = interpolate_component(start.2, end.2, progress);

    // Return new hex color
    format!("#{:02x}{:02x}{:02x}", r, g, b)
}

fn parse_hex_color(hex: &str) -> (u8, u8, u8) {
    let hex = hex.trim_start_matches('#');
    let r = u8::from_str_radix(&hex[0..2], 16).unwrap_or(0);
    let g = u8::from_str_radix(&hex[2..4], 16).unwrap_or(0);
    let b = u8::from_str_radix(&hex[4..6], 16).unwrap_or(0);
    (r, g, b)
}

fn interpolate_component(start: u8, end: u8, progress: f64) -> u8 {
    let start_f = f64::from(start);
    let end_f = f64::from(end);
    ((start_f + (end_f - start_f) * progress).round() as u8).min(255)
}
