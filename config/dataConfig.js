/**
 *
 * @param {*} code 状态值
 * @param {*} message 返回信息
 * @param {*} obj 返回值
 * @returns
 */
function dataConfig(code, message, obj) {
  return {
    code: code,
    message: message,
    obj: obj
  }
}

module.exports = dataConfig