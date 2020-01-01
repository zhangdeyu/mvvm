/**
 * 是否是常规指令表达式
 * @param   {String}   expression
 * @return  {Boolean}
 */
export function isNormal(expression) {
    return normalRE.test(expression) && !booleanRE.test(expression)
}

/**
 * 表达式变量添加 scope
 * @return  {String}
 */
export function addScope(expression) {
    if (isNormal(expression)) {
        return 'scope.' + expression
    }

    expression = (' ' + expression).replace(replaceConstRE, saveConst)
    expression = expression.replace(replaceScopeRE, replaceScope)
    expression = expression.replace(saveConstRE, returnConst)

    return expression
}