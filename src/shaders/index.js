import { Lightning } from '@lightningjs/sdk'

/**
 * 4x4 box blur shader which works in conjunction with a 50% rescale.
 */
export default class BlurShader extends Lightning.shaders.WebGLDefaultShader {
  constructor(context) {
    super(context)
    this._fade = [0, 0, 0, 0]
  }
  set top(num) {
    this._fade[0] = num
    this.redraw()
  }

  get top() {
    return this._fade[0]
  }

  set right(num) {
    this._fade[1] = num
    this.redraw()
  }

  get right() {
    return this._fade[1]
  }

  set bottom(num) {
    this._fade[2] = num
    this.redraw()
  }

  get bottom() {
    return this._fade[2]
  }

  set left(num) {
    this._fade[3] = num
    this.redraw()
  }

  get left() {
    return this._fade[3]
  }
  set fade(v) {
    if (Array.isArray(v)) {
      if (v.length === 2) {
        this._fade = [v[0], v[1], v[0], v[1]]
      } else if (v.length === 3) {
        this._fade = [v[0], v[1], v[2], this._fade[3]]
      } else if (v.length === 4) {
        this._fade = v
      } else {
        this._fade = [v[0], v[0], v[0], v[0]]
      }
    } else {
      this._fade = [v, v, v, v]
    }
    this.redraw()
  }

  get fade() {
    return this._fade
  }

  setupUniforms(operation) {
    super.setupUniforms(operation)
    const dx = 10 //1.0 / operation.getTextureWidth(0)
    const dy = 10 //1.0 / operation.getTextureHeight(0)
    const owner = operation.shaderOwner
    const renderPrecision = this.ctx.stage.getRenderPrecision()
    const fade = this._fade.map(f => f * renderPrecision)
    this._setUniform('fade', new Float32Array(fade), this.gl.uniform4fv)
    this._setUniform('stepTextureCoord', new Float32Array([dx, dy]), this.gl.uniform2fv)
    this._setUniform(
      'resolution',
      new Float32Array([owner._w * renderPrecision, owner._h * renderPrecision]),
      this.gl.uniform2fv
    )
  }
}

BlurShader.vertexShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    uniform vec2 stepTextureCoord;
    attribute vec2 aVertexPosition;
    attribute vec2 aTextureCoord;
    attribute vec4 aColor;
    uniform vec2 projection;
    varying vec4 vColor;
    varying vec2 vTextureCoord;
    varying vec2 vTextureCoordUl;
    varying vec2 vTextureCoordUr;
    varying vec2 vTextureCoordBl;
    varying vec2 vTextureCoordBr;

    void main(void){
        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);
        vTextureCoordUl = aTextureCoord - stepTextureCoord;
        vTextureCoordBr = aTextureCoord + stepTextureCoord;
        vTextureCoordUr = vec2(vTextureCoordBr.x, vTextureCoordUl.y);
        vTextureCoordBl = vec2(vTextureCoordUl.x, vTextureCoordBr.y);
        vColor = aColor;
        gl_Position.y = -sign(projection.y) * gl_Position.y;
        vTextureCoord = aTextureCoord;
        
    }
`

BlurShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoordUl;
    varying vec2 vTextureCoordUr;
    varying vec2 vTextureCoordBl;
    varying vec2 vTextureCoordBr;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    varying vec2 vTextureCoord;
    uniform vec2 resolution;
    uniform vec4 fade;

    void main(void){
        vec4 color = 0.25 * (texture2D(uSampler, vTextureCoordUl) + texture2D(uSampler, vTextureCoordUr) + texture2D(uSampler, vTextureCoordBl) + texture2D(uSampler, vTextureCoordBr));
        vec2 halfRes = 0.5 * resolution.xy;
        vec2 point = vTextureCoord.xy * resolution.xy;

        vec2 pos1;
        vec2 pos2;
        vec2 d;
        float c;
        float t = 0.0;

        if(fade[0] > 0.0) {
            pos1 = vec2(point.x, point.y);
            pos2 = vec2(point.x, point.y + fade[0]);
            d = pos2 - pos1;
            c = dot(pos1, d) / dot(d, d);
            t = smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0));
            color = mix(vec4(0.0), color, t);
        }

        if(fade[1] > 0.0) {
          vec2 pos1 = vec2(point.x - resolution.x - fade[1], vTextureCoord.y);
          vec2 pos2 = vec2(point.x - resolution.x, vTextureCoord.y);
          d = pos1 - pos2;
          c = dot(pos2, d) / dot(d, d);
          t = smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0));
          color = mix(vec4(0.0), color, t);
        }

        if(fade[2] > 0.0) {
          vec2 pos1 = vec2(vTextureCoord.x, point.y - resolution.y - fade[2]);
          vec2 pos2 = vec2(vTextureCoord.x, point.y - resolution.y);
          d = pos1 - pos2;
          c = dot(pos2, d) / dot(d, d);
          t = smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0));
          color = mix(vec4(0.0), color, t);
        } 
      
        if(fade[3] > 0.0) {
          pos1 = vec2(point.x, point.y);
          pos2 = vec2(point.x + fade[3], point.y);
          d = pos2 - pos1;
          c = dot(pos1, d) / dot(d, d);
          t = smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0));
          color = mix(vec4(0.0), color, t);
        }

        gl_FragColor = color;
    }
`
