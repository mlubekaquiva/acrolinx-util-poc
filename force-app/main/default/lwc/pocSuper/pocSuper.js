import { LightningElement } from 'lwc';

export default class PocSuper extends LightningElement {
    printText() {
        const node = document.querySelector(".ql-editor");
        if(!node) {
            return;
        }
        const text = this.getFormattedText(node);
        console.log(text);
    }

    hackText() {
        document.querySelector('.ql-editor > p').firstChild.nodeValue = 'Hacked!';
    }

    printLightningInputText() {
        const node = document.querySelector('.cmsAuthorManagedContentForm .title > lightning-input')
        if(!node) {
            return;
        }
        const text = node.value;
        console.log(text);
    }

    hackLightningInputText() {
        document.querySelector('.cmsAuthorManagedContentForm .title > lightning-input').value = 'Hacked!';
    }

    getFormattedText(node) {
        function recursor(n) {
            const a = [];
            if (n.nodeType !== 3) {
                (n.childNodes || []).forEach((childNode) => {
                    a.push(...recursor(childNode));
                });
            } else {
                a.push(n.data);
            }
            return a;
        }
        return recursor(node)
            .map((a) => a.trim())
            .filter((a) => a)
            .join(" ");
    }
}