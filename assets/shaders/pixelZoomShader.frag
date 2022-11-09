#pragma header

uniform float pixelZoom;
// zooms the game 6 times
void main() {
    vec2 camPos = getCamPos(floor(openfl_TextureCoordv * openfl_TextureSize) / openfl_TextureSize);

    camPos = vec2(0.5, 0.5) + ((camPos - vec2(0.5, 0.5)) * pixelZoom);

    gl_FragColor = textureCam(bitmap, camPos);
}