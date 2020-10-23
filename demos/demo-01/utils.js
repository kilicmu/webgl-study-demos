

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
export function  createShader(gl, type, source){
    const shader = gl.createShader(type); // -> 着色器
    gl.shaderSource(shader, source); // 提供数据源给着色器
    gl.compileShader(shader); // 编译一个着色器
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if(success){
      return shader;
    }
    console.error(gl.getShaderInfoLog(shader)) // 错误处理
    gl.deleteShader(shader);
  }

  /**
   * 着色器链接
   * use:
   *  const program = createProgram(gl, vertexShader, fragmentShader)
   * @param {*} gl 
   * @param {*} vertexShader 
   * @param {*} fragmentShader 
   */
export function createProgram(gl, vertexShader, fragmentShader){
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const  success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if(success){
      return program;
    }
    console.log(gl.getProgramParameter(program));
    gl.deleteProgram(program);
  }

  export function resizeCanvasToDisplaySize(canvas){
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    if(canvas.width !== displayWidth || canvas.height !== displayHeight){
      canvas.width = displayWidth;
      canvas.height = displayHeight;
    }
  }