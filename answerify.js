function answerify() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    while(node = walker.nextNode()) {
        node.nodeValue = node.nodeValue.replace(/a/ig, '∀')
    }
}
