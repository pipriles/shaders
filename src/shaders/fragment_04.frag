// uniform vec2 u_mouse;
// uniform vec2 u_resolution;
// uniform float u_time;
// 
// void main() {
//   vec2 pos = ( gl_FragCoord.xy / u_resolution.xy ) * 26.0 - 13.0;
//   vec2 mouse = u_mouse / u_resolution;
//   float x = sin(u_time + length(pos.xy)) + cos((mouse.x * 9.0) + pos.x);
//   float y = cos(u_time + length(pos.xy)) + sin((mouse.y * 9.0)+ pos.y);
//   gl_FragColor = vec4( x * 0.5, y * 0.9, x * y, 1.0 );
// }
//
uniform float u_time;
uniform vec2 u_resolution;

void main() {

    vec2 r = u_resolution;
    float t = u_time;
    vec3 c;
    float l,z=t;

    for(int i=0;i<3;i++) {
        vec2 uv,p=gl_FragCoord.xy/r;
        uv=p;
        p-=.5;
        p.x*=r.x/r.y;
        z+=.07;
        l=length(p);
        uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
        c[i]=.01/length(mod(uv,1.)-.5);
    }

    gl_FragColor=vec4(c/l,t);
}

// precision mediump float;
// 
// #define PI 3.14159265359
// 
// uniform vec2 u_resolution;
// uniform vec2 u_mouse;
// uniform float u_time;
// 
// float plot(vec2 st, float pct){
//   return  smoothstep( pct-0.02, pct, st.y) -
//           smoothstep( pct, pct+0.02, st.y);
// }
// 
// void main() {
//     vec2 st = gl_FragCoord.xy/u_resolution;
// 
//     // float y = mod(st.x, 0.25); // return st.x modulo of 0.5
//     // float y = fract(st.x * 10.0); // return only the fraction part of a number
//     // float y = ceil(st.x);  // nearest integer that is greater than or equal to st.x
//     // float y = floor(st.x); // nearest integer less than or equal to st.x
//     // float y = sign(st.x);  // est.xtract the sign of st.x
//     // float y = abs(st.x * 10.0);   // return the absolute value of st.x
//     // float y = clamp(st.x,0.4,0.6); // constrain st.x to lie between 0.0 and 1.0
//     // float y = min(0.0,st.x);   // return the lesser of st.x and 0.0
//     // float y = max(0.0,st.x);   // return the greater of x and 0.0
// 
//     vec3 color = vec3(y);
// 
//     float pct = plot(st,y);
//     color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);
// 
//     gl_FragColor = vec4(color,1.0);
// }
// 
