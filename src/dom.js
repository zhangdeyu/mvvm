/**
 * 判断是否为元素节点
 * @param {Element} el
 * @return {Boolean}
 */
export function isElement(el) {
    return el.nodeType === 1
}

/**
 * 判断是否为文本节点
 * @param {Element} el
 * @return {Boolean}
 */
export function isTetxNode(el) {
    return el.nodeType === 3
}

/**
 * 清空元素的所有子节点
 * @param {Element} el 
 * @return {Element}
 */
export function empty(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }

    return el
}

/**
 * 获取节点的属性
 * @param {ELement} node 
 * @param {String} name 
 * @return {String}
 */
export function getAttr(node, name) {
    return node.getAttribute(name) || ''
}

/**
 * 移出节点属性
 * @param {Element} node 
 * @param {String} name 
 */
export function removeAttr(node, name) {
    node.removeAttribute(name)
}

/**
 * 设置属性
 * @param {ELement} node 
 * @param {String} name 
 * @param {String|Boolean} value 
 */
export function setAttr(node, name, value) {
    // 设置为null undefined false则移除属性
    if (value == null || value === false) {
        return removeAttr(node, name)
    }

    node.setAttribute(name, value)
}

/**
 * 检查是否含有属性
 * @param {ELement} node
 * @param {String} name
 */
export function hasAttr(node, name) {
    return node.hasAttribute(name)
}

/**
 * 节点是否有className
 * @param {Element} node
 * @param {String} className
 * @returns {Boolean}
 */
export function hasClass(node, className) {
    return node.classList.contains(className)
}

/**
 * 向节点中添加className
 * @param {Element} node 
 * @param {String} className 
 */
export function addClass(node, className) {
    if (!className || hasClass(node, className)) {
        return
    }

    node.classList.add(className)
}

/**
 * 删除节点中的className
 * @param {Element} node 
 * @param {String} className 
 */
export function removeClass(node, className) {
    node.classList.remove(className)
}

/**
 * 节点绑定事件
 * @param {Element} node 
 * @param {Event} evt 
 * @param {Function} callback 
 * @param {Boolean} capture 
 */
export function addEvent(node, evt, callback, capture) {
    node.addEventListener(evt, callback, capture)
}

/**
 * 节点移除事件
 * @param {Element} node
 * @param {Event} evt
 * @param {Function} callback
 * @param {Boolean} capture
 */
export function removeEvent(node, evt, callback, capture) {
    node.removeEventListener(evt, callback, capture)
}

export default function DOM () {
    this.empty = empty
    this.getAttr = getAttr
    this.removeAttr = removeAttr
    this.setAttr = setAttr
    this.hasAttr = hasAttr
    this.hasClass = hasClass
    this.addClass = addClass
    this.removeClass = removeClass
    this.addEvent = addEvent
    this.removeEvent = removeEvent
}