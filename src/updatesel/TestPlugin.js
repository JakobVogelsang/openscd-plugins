

export default class PluginTester extends HTMLElement {
    doc;

    /** Entry point for this plug-in */
    async run() {
        const name = doc?.querySelector('IED')?.getAttribute('name') ?? 'NONAME'
        console.log(name)
    }
}