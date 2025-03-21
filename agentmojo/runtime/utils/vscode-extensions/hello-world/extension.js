const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('agentmojo-hello-world.helloWorld', function () {
        vscode.window.showInformationMessage('Hello from AgentMojo!');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
