const engine  = (chrome || window.chrome);
const archive = "https://archive.today/submit/?url=";

window.addEventListener("load", () => {
    document.getElementById("archive").addEventListener("click", () => {
        engine.windows.getCurrent((window) => {
            engine.tabs.query({ active: true, windowId: window.id }, (tabs) => {
                engine.tabs.create({ url: archive + encodeURI(tabs[0].url), active: false }, () => {})
            });
        });
    });
});