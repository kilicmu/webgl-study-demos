export default {
  initGL(el = document.querySelector("app")) {
    const canvas = el;
    // webgl context
    const gl = canvas.getContext("webgl");
    if (!gl) {
      throw "gl iniialize fail";
    }
    return gl;
  },
  
  /**
   * 获取一个webgl 的着色器
   * use: 
   *  const vertexShaderSource = document.querySelector("#vertex-shader-2d").text
   *  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
   * @param {WebGLRenderingContextBase} gl 
   * @param {number} type 
   * @param {string} source 
   * @return WebGLShader
   */
  createShader(gl, type, source){
    const shader = gl.createShader(type); // -> 着色器
    gl.shaderSource(shader, source); // 提供数据源给着色器
    gl.compileShader(shader); // 编译一个着色器
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if(success){
      return shader;
    }
    console.error(gl.getShaderInfoLog(shader)) // 错误处理
    gl.deleteShader(shader);
  },

  /**
   * 着色器链接
   * use:
   *  const program = createProgram(gl, vertexShader, fragmentShader)
   * @param {*} gl 
   * @param {*} vertexShader 
   * @param {*} fragmentShader 
   */
  createProgram(gl, vertexShader, fragmentShader){
    const program = gl.createProgram();
    program.attachShader(program, vertexShader);
    program.attachShader(program, fragmentShader);
    program.linkProgram(program);

    const  success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if(success){
      return program;
    }
    console.log(gl.getProgramParameter(program));
    gl.deleteProgram(program);
  }



  
}