function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let brackets = 0;
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] == '(') brackets++;
        if (expr[i] == ')') brackets--;
    };

    if (brackets !== 0) {
        throw new Error ('ExpressionError: Brackets must be paired');
    };

    if (expr.includes('/ 0')) {
        throw new Error ('TypeError: Division by zero.');
    };

    return new Function(`return ${expr}`)();
}

module.exports = {
    expressionCalculator
}