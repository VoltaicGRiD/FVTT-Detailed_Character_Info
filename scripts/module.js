const r = "detailedcharinfo",
    i = r;

class s extends DocumentSheet {
    get title() {
        return "Detailed Character Info";
    }

    async getData() {
		const context = super.getData();
		context.flags = context.data.flags;
		return context;
    }

    activateListeners(e, h) {
        super.activateListeners(e);
        //h.find("button.reveal").on("click", this._onClickControlButton.bind(this));
    }

    //async _onClickControlButton(e) {
    //    console.log("submit clicked");

    //    const button = event.currentTarget as HTMLElement;
    //    const action = button.dataset.action;

    //    let message = ChatMessage;
    //    let data = {
    //        content: action,
    //        type: CONST.CHAT_MESSAGE_TYPES.OTHER
    //    };
    //    message.create(data);
    //}
}

let t;

Hooks.once("init", () => {
    console.log("Hello World!");

    Handlebars.registerHelper('ifNotEquals', function (arg1, arg2, options) {
        return (arg1 != arg2) ? options.fn(this) : options.inverse(this);
    });
});

Hooks.on("renderActorSheetSFRPGCharacter", (o, e) => {
    console.log(o);
    var l = o;
    const n = $('<a class="header-button"><i class="fa-solid fa-circle-info"></i>Details</button>');
    console.log(e.find(".window-header").html), (t = game.modules.get(i));
    const a = d();
    (t.detailedInfo = new s(l.document, a)),
        n.on("click", () => {
            t.detailedInfo.render(!0);
        }),
        e.find(".window-header .window-title").append(n),
        console.log(t.active);
});

function d() {
    return foundry.utils.mergeObject(DocumentSheet.defaultOptions, {
        id: "detailed-char-info",
        template: `modules/detailedcharinfo/templates/datatabbed.hbs`,
        width: 800,
        height: 950,
        title: "Detailed Character Info",
        minimizable: !0,
        resizeable: !0,
        popOut: !0,
        submitOnClose: !0,
        submitOnChange: 0,
        closeOnSubmit: !0,
        editable: !0,
        tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "tab1" }]
    });
}
