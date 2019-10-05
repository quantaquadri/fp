(window.webpackJsonp=window.webpackJsonp||[]).push([[0], {
    106:function(e, t, a) {
        "use strict";
        t.a= {
            pageNavigation: {
                noMorePages: "No more pages to fetch"
            }
        }
    }
    , 1184:function(e, t) {}
    , 1186:function(e, t) {}
    , 142:function(e, t, a) {
        e.exports=a.p+"static/media/arrows_rev.5d85df36.svg"
    }
    , 143:function(e, t) {
        t.getTokenIDURL=function(e, t) {
            var a;
            return"AXIE"===t?a="https://axieinfinity.com/axie/"+e: "CK"===t?a="https://www.cryptokitties.co/kitty/"+e: "MLBCB"===t?a="https://www.mlbcryptobaseball.com/asset/"+e: "FLOWER"===t&&(a="https://flowerpatch.app/card/"+e), a
        }
    }
    , 144:function(e, t, a) {
        e.exports=a.p+"static/media/purple_box_empty.d43bf52b.png"
    }
    , 1445:function(e, t) {}
    , 145:function(e, t, a) {
        e.exports=a.p+"static/media/pink_box_empty.1eafb6eb.png"
    }
    , 147:function(e, t, a) {}
    , 166:function(e, t, a) {
        e.exports=a.p+"static/media/twitter.c282f1a6.svg"
    }
    , 167:function(e, t, a) {
        e.exports=a.p+"static/media/mail.213723fa.svg"
    }
    , 1670:function(e, t, a) {}
    , 1671:function(e, t, a) {}
    , 1672:function(e, t, a) {}
    , 1673:function(e, t, a) {}
    , 1674:function(e, t, a) {}
    , 1675:function(e, t, a) {}
    , 1676:function(e, t, a) {}
    , 1677:function(e, t, a) {}
    , 1678:function(e, t, a) {}
    , 1679:function(e, t, a) {}
    , 168:function(e, t, a) {
        e.exports=a.p+"static/media/lock.9c08c293.svg"
    }
    , 1680:function(e, t, a) {}
    , 1681:function(e, t, a) {}
    , 1682:function(e, t, a) {}
    , 1683:function(e, t, a) {}
    , 1684:function(e, t, a) {}
    , 1685:function(e, t, a) {}
    , 1686:function(e, t, a) {}
    , 1687:function(e, t, a) {}
    , 1688:function(e, t, a) {}
    , 1690:function(e, t, a) {}
    , 1691:function(e, t, a) {}
    , 1693:function(e, t, a) {}
    , 1694:function(e, t, a) {
        "use strict";
        a.r(t);
        var n=a(0), s=a.n(n), r=a(75), i=a.n(r), o=a(24), c=a(7), l=a(8), d=a(10), m=a(9), u=a(11), p=(a(614), a(40)), y=a(62), f= {
            en: {
                Tagline: {
                    TAGLINE: "An over the counter method people use to swap digital assets. Choose your own terms and counterparty. Swap safely. Proudly built on", EMAIL: "Email Support", DONATIONS: "Donations are appreciated!", HELP: "FAQ"
                }
                , Navbar: {
                    PLACEHOLDER: "Search by Order JSON", SIGN_IN: "Sign in"
                }
                , Trade: {
                    HEADING:"Create a New Swap", SUBHEADING:"Create an over-the-counter trade on your terms", SENDING:"Sending", RECEIVING:"Receiving", BUTTONBAR: {
                        expirationButton: "Expiration", instantButton: "Instant", moreButton: "More Filters", instantButtonTip: "Coming Soon"
                    }
                    , FIELDS: {
                        amount: {
                            name: "Amount"
                        }
                        , makerAddress: {
                            name: "Maker Address", help: "A maker address belongs to the account generating the swap."
                        }
                        , takerAddress: {
                            name: "Optional Taker Address", help: "A taker address belongs to the account filling the swap.", asteriksMessage: ""
                        }
                        , tokenAddress: {
                            name: "Token Address", help: "This token address will be used to determine which token will be swapped."
                        }
                        , tokenId: {
                            name: "TokenID"
                        }
                    }
                    , CTA:"CREATE & SIGN ORDER", CREATE_OFFER:"CREATE OFFER", LOADING:"Please wait..", ERROR:"Oops, something went wrong."
                }
                , Status: {
                    HEADING:"Swap Status", SUBHEADING:"View and interact with an over-the-counter trade", SEND:"Send", RECEIVE:"Receive", ORDER:"Order", STATUS:"Status", STATUSES: {
                        READY: "Ready for finalization", PENDING: "Pending deposits", INVALID: "Invalid Order", INVALID_MAKER_ASSET_AMOUNT: "Invalid Maker Amount", INVALID_TAKER_ASSET_AMOUNT: "Invalid Taker Amount", FILLABLE: "Ready for fill", EXPIRED: "Order Expired", FULLY_FILLED: "Order Completely Filled", CANCELLED: "Order Cancelled", UNKNOWN: "Unknown"
                    }
                    , FIELDS: {
                        tokenAddress: "Token", name: "Name", symbol: "Symbol", amount: "Amount", balance: "Deposited", tokenId: "TokenID", makerAddress: "Maker", takerAddress: "Taker"
                    }
                    , BUTTONS: {
                        WITHDRAW: "Withdraw", SHARE: "Share", DEPOSIT: "Deposit", FINALIZE: "Finalize", FILL: "Fill", CANCEL: "Cancel"
                    }
                    , REFRESH: {
                        TITLE: "Please refresh", DESCRIPTION: "We had trouble connecting to the network."
                    }
                    , LOADING:"Please wait..", ERROR:"Oops, something went wrong."
                }
                , ModalCommon: {
                    UNLOCK:"Unlock", SIGN:"Sign", FILL:"Fill", METAMASKCONFIRM:"Please confirm on Metamask", MINING:"Mining Transaction", CANCEL:"Cancel", OOPS:"OOPS, Something went wrong", FILLSUCCESS:"Fill Successful", SUCCESS:"Success", CANCELSUCCESS:"Cancel Successful", SOCIALDESCRIPTION:"Boxswap is how people trade their digital assets on their own terms. Now come check out this swap!", SOCIAL:function(e, t, a, n) {
                        return"Swap ".concat(e, " ").concat(t, " for ").concat(a, " ").concat(n)
                    }
                    , ERRORTITLE:"What the ..", NOTOKEN:function(e) {
                        return"You don't have ".concat(e, "!")
                    }
                }
                , MetamaskModal: {
                    TITLE: "Please login to Metamask", SIGNINTITLE: "Please sign in using Metamask", DESCRIPTION: "Our gateway to the Ethereum blockchain", LINKTEXT: "Don't have Metamask?"
                }
                , PermissionModal: {
                    TITLE: "Please authorize this website from MetaMask", DESCRIPTION: "Our gateway to the Ethereum blockchain", LINKTEXT: "Authorize"
                }
                , ShareModal: {
                    TITLE: "Order JSON", DESCRIPTION: "To fill the order, a counterparty can use either a short url or the order JSON that contains the order parameters.", YOURORDER: "Your Order JSON", SHARE: "Share it with the provided url"
                }
                , Modal: {
                    erc20: {
                        1: {
                            TIME:"To swap, tokens must be unlocked.", CHANGE:"Change", APPROVE:function(e) {
                                return"Approve ".concat(e, " for Trading")
                            }
                        }
                        , 2: {
                            TIME:"By signing, you agree to the terms of this swap.", CHANGE:"Change", SIGN:function(e, t, a, n) {
                                return"Sign ".concat(t, " ").concat(e, " for ").concat(n, " ").concat(a)
                            }
                        }
                    }
                    , erc721: {
                        1: {
                            TIME:"In order to swap, you must first unlock your tokens.", CHANGE:"Change", APPROVE:function(e) {
                                return"Approve ".concat(e, " for Trading")
                            }
                        }
                        , 2: {
                            TIME:"By signing, you agree to the terms of this swap", CHANGE:"Change", SIGN:function(e, t, a, n) {
                                return"Sign ".concat(t, " ").concat(e, " for ").concat(n, " ").concat(a)
                            }
                        }
                    }
                    , erc721ck: {
                        1: {
                            TIME:"In order to swap, you must first unlock your tokens.", CHANGE:"Change", APPROVE:function(e) {
                                return"Approve ".concat(e, " for Trading")
                            }
                        }
                        , 2: {
                            TIME:"By signing, you agree to the terms of this swap", CHANGE:"Change", SIGN:function(e, t, a, n) {
                                return"Sign ".concat(t, " ").concat(e, " for ").concat(n, " ").concat(a)
                            }
                        }
                    }
                }
                , TakerModal: {
                    erc20: {
                        1: {
                            TIME:"To swap, tokens must be unlocked.", CHANGE:"Change", APPROVE:function(e) {
                                return"Approve ".concat(e, " for Trading")
                            }
                        }
                        , 2: {
                            TIME:"By signing, you agree to the terms of this swap.", CHANGE:"Change", FILL:function(e, t, a, n) {
                                return"Fill ".concat(t, " ").concat(e, " for ").concat(n, " ").concat(a)
                            }
                        }
                        , 3: {
                            TIME:"Cancel to stop accepting fills for this contract.", CHANGE:"Change", CANCEL:function(e, t, a, n) {
                                return"Cancel ".concat(t, " ").concat(e, " for ").concat(n, " ").concat(a)
                            }
                        }
                    }
                    , erc721: {
                        1: {
                            TIME:"In order to swap, you must first unlock your tokens.", CHANGE:"Change", APPROVE:function(e) {
                                return"Approve ".concat(e, " for Trading")
                            }
                        }
                        , 2: {
                            TIME:"By signing, you agree to the terms of this swap.", CHANGE:"Change", FILL:function(e, t, a, n) {
                                return"Fill ".concat(t, " ").concat(e, " for ").concat(n, " ").concat(a)
                            }
                        }
                        , 3: {
                            TIME:"Cancel to stop accepting fills for this contract.", CHANGE:"Change", CANCEL:function(e, t, a, n) {
                                return"Cancel ".concat(t, " ").concat(e, " for ").concat(n, " ").concat(a)
                            }
                        }
                    }
                    , erc721ck: {
                        1: {
                            TIME:"In order to swap, you must first unlock your tokens.", CHANGE:"Change", APPROVE:function(e) {
                                return"Approve ".concat(e, " for Trading")
                            }
                        }
                        , 2: {
                            TIME:"By signing, you agree to the terms of this swap.", CHANGE:"Change", FILL:function(e, t, a, n) {
                                return"Fill ".concat(t, " ").concat(e, " for ").concat(n, " ").concat(a)
                            }
                        }
                        , 3: {
                            TIME:"Cancel to stop accepting fills for this contract.", CHANGE:"Change", CANCEL:function(e, t, a, n) {
                                return"Cancel ".concat(t, " ").concat(e, " for ").concat(n, " ").concat(a)
                            }
                        }
                    }
                }
                , TokenCardDropdown: {
                    OFFER: "OFFER", SWAP: "SWAP", SEND: "SEND"
                }
                , My: {
                    ERROR: "Failed to retrieve orders.", INVALID_ORDER: "Invalid order.", PENDING_ORDER: "Pending", COMPLETE_ORDER: "Complete", ARCHIVE: "Archive", UNARCHIVE: "Unarchive", ORDER_HASH: "Order Hash", OTHER_TRADER: "Other Trader", EMPTY_LIST: "There's nothing here."
                }
            }
        }
        ;
        f.es=f.en;
        var b, h, g, k, v, E, w=f, A=[ {
            display_name: "EN", name: "English", code: "en", icon_url: "https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg"
        }
        ], S=function() {
            var e, t=window.localStorage.getItem("lang");
            return e=t, A.find(function(t) {
                return t.code===e
            }
            )||A[0]
        }
        , N=function(e) {
            window.localStorage.setItem("lang", e)
        }
        , x=a(20), I=a.n(x), T=a(13), C=a(12), O=(a(639), a(23)), M=a.n(O), D=function(e) {
            return 0===e.indexOf("erc721")?"erc721": e
        }
        , P=a(116), L=a.n(P), _=(a(147), a(65)), F=a.n(_), U=a(29), R=a.n(U), j=a(245), B=a.n(j), H=a(166), G=a.n(H), W=a(167), V=a.n(W), K=w[S().code].ModalCommon, Y=w[S().code].ShareModal, J=function(e) {
            var t=e.heading, a=e.headerSVG, n=e.text, r=e.linkURL, i=e.metamaskPending, o=e.pending, c=e.onCTA, l=e.onClose, d=e.ctaText, m=e.linkText, u=e.tradeHeading, p=e.onLinkClick;
            return s.a.createElement("div", null, s.a.createElement("div", {
                className: "modal-header"
            }
            , s.a.createElement("button", {
                type: "button", className: "close", onClick: l
            }
            , s.a.createElement(T.a, {
                svgStyle: {
                    width: "14px"
                }
                , src:F.a
            }
            ))), s.a.createElement("div", {
                className: "modal-body"
            }
            , s.a.createElement("div", {
                className: "row justify-content-center"
            }
            , u&&s.a.createElement("div", {
                className: "trade-heading col-12 d-flex justify-content-around"
            }
            , s.a.createElement("div", {
                className: "d-inline-block position-relative"
            }
            , s.a.createElement("img", {
                className: "img-fluid outer-modal-box", alt: "", src: u.images[0]
            }
            ), s.a.createElement("img", {
                className: "img-fluid position-absolute inner-modal-box", alt: "", src: u.innerImages[0]
            }
            ), s.a.createElement("h4", {
                className: "box-text"
            }
            , u.amounts[0], " ", s.a.createElement("span", null, u.makerSymbol))), s.a.createElement(T.a, {
                className:"headerImage", src:u.arrowsSVG, svgStyle: {
                    maxWidth: "52px"
                }
            }
            ), s.a.createElement("div", {
                className: "d-inline-block position-relative"
            }
            , s.a.createElement("img", {
                className: "img-fluid outer-modal-box", src: u.images[1], alt: ""
            }
            ), s.a.createElement("img", {
                className: "img-fluid position-absolute inner-modal-box", src: u.innerImages[1], alt: ""
            }
            ), s.a.createElement("h4", {
                className: "box-text"
            }
            , u.amounts[1], " ", s.a.createElement("span", null, u.takerSymbol)))), a&&s.a.createElement("div", {
                className: "col-12 text-center"
            }
            , s.a.createElement(T.a, {
                svgStyle: {
                    height: "68px", marginBottom: "21px"
                }
                , src:a
            }
            )), t&&s.a.createElement("div", {
                className: "row"
            }
            , s.a.createElement("div", {
                className: "col-12 text-center"
            }
            , s.a.createElement("h2", null, t))), s.a.createElement("div", {
                className: "col-12 text-center"
            }
            , s.a.createElement("p", null, n))), c&&s.a.createElement("div", {
                className: "row my-3"
            }
            , s.a.createElement("div", {
                className: "col-12"
            }
            , s.a.createElement("button", {
                className: "btn btn-primary btn-block ".concat(o?"btn-disabled": ""), disabled: o, onClick: c
            }
            , d))), o&&s.a.createElement("div", {
                className: "row mt-2 mb-3"
            }
            , s.a.createElement("div", {
                className: "modal-seperator"
            }
            ), s.a.createElement("div", {
                className: "col-12"
            }
            , s.a.createElement("div", {
                className: "LoaderWithText text-center"
            }
            , s.a.createElement(I.a, {
                type: "Circles", color: "#DD3BAD", height: 18, width: 18
            }
            ), s.a.createElement("div", {
                className: "bottomText"
            }
            , " ", K.MINING)))), i&&s.a.createElement("div", {
                className: "row mt-2 mb-3"
            }
            , s.a.createElement("div", {
                className: "modal-seperator"
            }
            ), s.a.createElement("div", {
                className: "col-12"
            }
            , s.a.createElement("div", {
                className: "LoaderWithText text-center"
            }
            , s.a.createElement(T.a, {
                svgStyle: {
                    width: "24px", height: "24px"
                }
                , src:R.a
            }
            ), s.a.createElement("div", {
                className: "bottomText"
            }
            , K.METAMASKCONFIRM)))), m&&s.a.createElement("p", {
                className: "text-center text-underline font-italic cursor-pointer"
            }
            , p&&!r&&s.a.createElement("a", {
                target:"_blank", href:"#", rel:"noopener noreferrer", onClick:function(e) {
                    e.preventDefault(), p(e)
                }
            }
            , m), r&&!p&&s.a.createElement("a", {
                target: "_blank", href: r, rel: "noopener noreferrer"
            }
            , m))))
        }
        , X=function(e) {
            var t=e.orderJSON, a=e.orderStatusUrl, n=e.onClose;
            return s.a.createElement("div", {
                className: "modal-content"
            }
            , s.a.createElement("div", {
                className: "modal-header"
            }
            , s.a.createElement("button", {
                type: "button", className: "close", onClick: n
            }
            , s.a.createElement(T.a, {
                svgStyle: {
                    width: "14px"
                }
                , src:F.a
            }
            ))), s.a.createElement("div", {
                className: "modal-body json-order"
            }
            , s.a.createElement("div", {
                className: "row"
            }
            , s.a.createElement("div", null, s.a.createElement("p", {
                className: "title"
            }
            , Y.TITLE), s.a.createElement("p", null, Y.DESCRIPTION), s.a.createElement("p", {
                className: "desc pointer"
            }
            , Y.YOURORDER), s.a.createElement("div", null, s.a.createElement("textarea", {
                readOnly: !0, className: "order-textarea", value: t
            }
            ), s.a.createElement("div", {
                id: "orderJSON"
            }
            , s.a.createElement(L.a, {
                className: "textarea-copy btn btn-outline-secondary", "data-clipboard-text": t
            }
            , "copy"), s.a.createElement(C.o, {
                placement: "top", target: "orderJSON", trigger: "click"
            }
            , "Copied!"))), s.a.createElement("p", {
                className: "desc pointer"
            }
            , " ", Y.SHARE), s.a.createElement("div", {
                className: "input-group mb-3"
            }
            , s.a.createElement("input", {
                readOnly: !0, type: "text", className: "form-control", value: a, "aria-label": "Recipient's username", "aria-describedby": "button-addon2"
            }
            ), s.a.createElement("div", {
                id: "statusUrl", className: "input-group-append"
            }
            , s.a.createElement(L.a, {
                className: "btn btn-outline-secondary", "data-clipboard-text": a
            }
            , "copy"), s.a.createElement(C.o, {
                delay: {
                    show: 2, hide: 1
                }
                , placement:"top", target:"statusUrl", trigger:"click"
            }
            , "Copied!"))))), s.a.createElement("div", {
                className: "row pt-3"
            }
            , s.a.createElement("a", {
                className: "social-icon", href: "fb-messenger://share/?link=".concat(a)
            }
            , s.a.createElement(T.a, {
                svgStyle: {
                    width: "22px", maxHeight: "22px"
                }
                , src:B.a
            }
            )), s.a.createElement("a", {
                className: "social-icon", href: "#"
            }
            , s.a.createElement(T.a, {
                svgStyle: {
                    width: "22px", maxHeight: "22px"
                }
                , src:G.a
            }
            )), s.a.createElement("a", {
                className: "social-icon", href: "#"
            }
            , s.a.createElement(T.a, {
                svgStyle: {
                    width: "22px", maxHeight: "22px"
                }
                , src:V.a
            }
            )))))
        }
        , z=a(66), Q=a(26), Z=a(25), q="0x06012c8cf97bead5deae237070f9587f8e7a266d", $=[ {
            constant:!0, inputs:[ {
                name: "_interfaceID", type: "bytes4"
            }
            ], name:"supportsInterface", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"cfoAddress", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            , {
                name: "_preferredTransport", type: "string"
            }
            ], name:"tokenMetadata", outputs:[ {
                name: "infoUrl", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"promoCreatedCount", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"name", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_to", type: "address"
            }
            , {
                name: "_tokenId", type: "uint256"
            }
            ], name:"approve", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"ceoAddress", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"GEN0_STARTING_PRICE", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_address", type: "address"
            }
            ], name:"setSiringAuctionAddress", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"totalSupply", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"pregnantKitties", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_kittyId", type: "uint256"
            }
            ], name:"isPregnant", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"GEN0_AUCTION_DURATION", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"siringAuction", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_from", type: "address"
            }
            , {
                name: "_to", type: "address"
            }
            , {
                name: "_tokenId", type: "uint256"
            }
            ], name:"transferFrom", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_address", type: "address"
            }
            ], name:"setGeneScienceAddress", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_newCEO", type: "address"
            }
            ], name:"setCEO", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_newCOO", type: "address"
            }
            ], name:"setCOO", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_kittyId", type: "uint256"
            }
            , {
                name: "_startingPrice", type: "uint256"
            }
            , {
                name: "_endingPrice", type: "uint256"
            }
            , {
                name: "_duration", type: "uint256"
            }
            ], name:"createSaleAuction", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant: !1, inputs: [], name: "unpause", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function"
        }
        , {
            constant:!0, inputs:[ {
                name: "", type: "uint256"
            }
            ], name:"sireAllowedToAddress", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_matronId", type: "uint256"
            }
            , {
                name: "_sireId", type: "uint256"
            }
            ], name:"canBreedWith", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "", type: "uint256"
            }
            ], name:"kittyIndexToApproved", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_kittyId", type: "uint256"
            }
            , {
                name: "_startingPrice", type: "uint256"
            }
            , {
                name: "_endingPrice", type: "uint256"
            }
            , {
                name: "_duration", type: "uint256"
            }
            ], name:"createSiringAuction", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "val", type: "uint256"
            }
            ], name:"setAutoBirthFee", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_addr", type: "address"
            }
            , {
                name: "_sireId", type: "uint256"
            }
            ], name:"approveSiring", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_newCFO", type: "address"
            }
            ], name:"setCFO", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_genes", type: "uint256"
            }
            , {
                name: "_owner", type: "address"
            }
            ], name:"createPromoKitty", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "secs", type: "uint256"
            }
            ], name:"setSecondsPerBlock", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"paused", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant: !1, inputs: [], name: "withdrawBalance", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"ownerOf", outputs:[ {
                name: "owner", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"GEN0_CREATION_LIMIT", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"newContractAddress", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_address", type: "address"
            }
            ], name:"setSaleAuctionAddress", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_owner", type: "address"
            }
            ], name:"balanceOf", outputs:[ {
                name: "count", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_v2Address", type: "address"
            }
            ], name:"setNewAddress", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"secondsPerBlock", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant: !1, inputs: [], name: "pause", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_owner", type: "address"
            }
            ], name:"tokensOfOwner", outputs:[ {
                name: "ownerTokens", type: "uint256[]"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_matronId", type: "uint256"
            }
            ], name:"giveBirth", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant: !1, inputs: [], name: "withdrawAuctionBalances", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function"
        }
        , {
            constant:!0, inputs:[], name:"symbol", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "", type: "uint256"
            }
            ], name:"cooldowns", outputs:[ {
                name: "", type: "uint32"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "", type: "uint256"
            }
            ], name:"kittyIndexToOwner", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_to", type: "address"
            }
            , {
                name: "_tokenId", type: "uint256"
            }
            ], name:"transfer", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"cooAddress", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"autoBirthFee", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"erc721Metadata", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_genes", type: "uint256"
            }
            ], name:"createGen0Auction", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_kittyId", type: "uint256"
            }
            ], name:"isReadyToBreed", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"PROMO_CREATION_LIMIT", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_contractAddress", type: "address"
            }
            ], name:"setMetadataAddress", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"saleAuction", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_id", type: "uint256"
            }
            ], name:"getKitty", outputs:[ {
                name: "isGestating", type: "bool"
            }
            , {
                name: "isReady", type: "bool"
            }
            , {
                name: "cooldownIndex", type: "uint256"
            }
            , {
                name: "nextActionAt", type: "uint256"
            }
            , {
                name: "siringWithId", type: "uint256"
            }
            , {
                name: "birthTime", type: "uint256"
            }
            , {
                name: "matronId", type: "uint256"
            }
            , {
                name: "sireId", type: "uint256"
            }
            , {
                name: "generation", type: "uint256"
            }
            , {
                name: "genes", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_sireId", type: "uint256"
            }
            , {
                name: "_matronId", type: "uint256"
            }
            ], name:"bidOnSiringAuction", outputs:[], payable:!0, stateMutability:"payable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"gen0CreatedCount", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"geneScience", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_matronId", type: "uint256"
            }
            , {
                name: "_sireId", type: "uint256"
            }
            ], name:"breedWithAuto", outputs:[], payable:!0, stateMutability:"payable", type:"function"
        }
        , {
            inputs: [], payable: !1, stateMutability: "nonpayable", type: "constructor"
        }
        , {
            payable: !0, stateMutability: "payable", type: "fallback"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !1, name: "owner", type: "address"
            }
            , {
                indexed: !1, name: "matronId", type: "uint256"
            }
            , {
                indexed: !1, name: "sireId", type: "uint256"
            }
            , {
                indexed: !1, name: "cooldownEndBlock", type: "uint256"
            }
            ], name:"Pregnant", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !1, name: "from", type: "address"
            }
            , {
                indexed: !1, name: "to", type: "address"
            }
            , {
                indexed: !1, name: "tokenId", type: "uint256"
            }
            ], name:"Transfer", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !1, name: "owner", type: "address"
            }
            , {
                indexed: !1, name: "approved", type: "address"
            }
            , {
                indexed: !1, name: "tokenId", type: "uint256"
            }
            ], name:"Approval", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !1, name: "owner", type: "address"
            }
            , {
                indexed: !1, name: "kittyId", type: "uint256"
            }
            , {
                indexed: !1, name: "matronId", type: "uint256"
            }
            , {
                indexed: !1, name: "sireId", type: "uint256"
            }
            , {
                indexed: !1, name: "genes", type: "uint256"
            }
            ], name:"Birth", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !1, name: "newContract", type: "address"
            }
            ], name:"ContractUpgrade", type:"event"
        }
        ], ee="0x71c118b00759b0851785642541ceb0f4ceea0bd5", te=[ {
            constant:!1, inputs:[ {
                name: "_tokenId1", type: "uint256"
            }
            , {
                name: "_tokenId2", type: "uint256"
            }
            ], name:"exhaustChibis", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_adultTimeSecs", type: "uint256"
            }
            ], name:"setAdultTime", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"name", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_to", type: "address"
            }
            , {
                name: "_tokenId", type: "uint256"
            }
            ], name:"approve", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_comission", type: "uint256"
            }
            ], name:"setComission", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_address", type: "address"
            }
            , {
                name: "amount", type: "uint256"
            }
            ], name:"weiToOwner", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_setPaused", type: "bool"
            }
            ], name:"setGameStateFCF", outputs:[ {
                name: "_pausedFCF", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            , {
                name: "_price", type: "uint256"
            }
            ], name:"setChibiForFusion", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"totalSupply", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "", type: "uint256"
            }
            ], name:"chibies", outputs:[ {
                name: "owner", type: "address"
            }
            , {
                name: "founder", type: "bool"
            }
            , {
                name: "nameChibi", type: "string"
            }
            , {
                name: "father", type: "uint256"
            }
            , {
                name: "mother", type: "uint256"
            }
            , {
                name: "gen", type: "uint256"
            }
            , {
                name: "forFusion", type: "bool"
            }
            , {
                name: "fusionPrice", type: "uint256"
            }
            , {
                name: "exhausted", type: "uint256"
            }
            , {
                name: "adult", type: "uint256"
            }
            , {
                name: "infoUrl", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_priceChibi", type: "uint256"
            }
            ], name:"setChibiGEN0Price", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_address", type: "address"
            }
            ], name:"setGeneContractAddress", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"approvedFor", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_address", type: "address"
            }
            ], name:"setBattleRemoveContractAddress", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            , {
                name: "_name", type: "string"
            }
            ], name:"renameChibi", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"contract_owner", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_setPaused", type: "bool"
            }
            ], name:"setGameState", outputs:[ {
                name: "_paused", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_fatherId", type: "uint256"
            }
            , {
                name: "_motherId", type: "uint256"
            }
            , {
                name: "_seed", type: "uint256"
            }
            , {
                name: "_name", type: "string"
            }
            , {
                name: "_battleRoar", type: "string"
            }
            , {
                name: "_region", type: "uint8"
            }
            ], name:"fusionChibis", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!0, stateMutability:"payable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_address", type: "address"
            }
            ], name:"setBattleContractAddress", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_setPaused", type: "bool"
            }
            ], name:"setGameStateFusion", outputs:[ {
                name: "_pausedFusions", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_owner", type: "address"
            }
            ], name:"tokensOf", outputs:[ {
                name: "", type: "uint256[]"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"queryFusionData", outputs:[ {
                name: "fusions", type: "uint256[]"
            }
            , {
                name: "forFusion", type: "bool"
            }
            , {
                name: "costFusion", type: "uint256"
            }
            , {
                name: "adult", type: "uint256"
            }
            , {
                name: "exhausted", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"ownerOf", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"tokenMetadata", outputs:[ {
                name: "infoUrl", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_exhaustionTime", type: "uint256"
            }
            ], name:"setExhaustionTime", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_owner", type: "address"
            }
            ], name:"balanceOf", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"isNecromancer", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant: !1, inputs: [], name: "acceptOwnership", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"cancelChibiForFusion", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"queryChibi", outputs:[ {
                name: "nameChibi", type: "string"
            }
            , {
                name: "infoUrl", type: "string"
            }
            , {
                name: "dna", type: "uint16[13]"
            }
            , {
                name: "father", type: "uint256"
            }
            , {
                name: "mother", type: "uint256"
            }
            , {
                name: "gen", type: "uint256"
            }
            , {
                name: "adult", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_address", type: "address"
            }
            ], name:"setFcfContractAddress", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_name", type: "string"
            }
            , {
                name: "_battleRoar", type: "string"
            }
            , {
                name: "_region", type: "uint8"
            }
            , {
                name: "_seed", type: "uint256"
            }
            ], name:"buyChibiWithFcf", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_name", type: "string"
            }
            , {
                name: "_battleRoar", type: "string"
            }
            , {
                name: "_region", type: "uint8"
            }
            , {
                name: "_seed", type: "uint256"
            }
            ], name:"buyGEN0Chibi", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!0, stateMutability:"payable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_name", type: "string"
            }
            , {
                name: "_battleRoar", type: "string"
            }
            , {
                name: "_region", type: "uint8"
            }
            , {
                name: "_seed", type: "uint256"
            }
            , {
                name: "_specialId", type: "uint256"
            }
            ], name:"mintSpecial", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"symbol", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"contract_newOwner", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_to", type: "address"
            }
            , {
                name: "_tokenId", type: "uint256"
            }
            ], name:"transfer", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_price", type: "uint256"
            }
            ], name:"setMinimumPriceFusion", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"takeOwnership", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"getGameState", outputs:[ {
                name: "_paused", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            , {
                name: "_infoUrl", type: "string"
            }
            ], name:"changeInfoUrl", outputs:[ {
                name: "success", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"tokenURI", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"queryChibiAdd", outputs:[ {
                name: "owner", type: "address"
            }
            , {
                name: "founder", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"priceChibi", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"queryFusionData_ext", outputs:[ {
                name: "forFusion", type: "bool"
            }
            , {
                name: "fusionPrice", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "prefix", type: "string"
            }
            ], name:"setInfoUrlPrefix", outputs:[ {
                name: "infoUrlPrefix", type: "string"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_newOwner", type: "address"
            }
            ], name:"transferOwnership", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            inputs: [], payable: !1, stateMutability: "nonpayable", type: "constructor"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !1, name: "tokenId", type: "uint256"
            }
            , {
                indexed: !0, name: "_owner", type: "address"
            }
            , {
                indexed: !1, name: "founder", type: "bool"
            }
            , {
                indexed: !1, name: "_name", type: "string"
            }
            , {
                indexed: !1, name: "dna", type: "uint16[13]"
            }
            , {
                indexed: !1, name: "father", type: "uint256"
            }
            , {
                indexed: !1, name: "mother", type: "uint256"
            }
            , {
                indexed: !1, name: "gen", type: "uint256"
            }
            , {
                indexed: !1, name: "adult", type: "uint256"
            }
            , {
                indexed: !1, name: "infoUrl", type: "string"
            }
            ], name:"ChibiCreated", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !1, name: "tokenId", type: "uint256"
            }
            , {
                indexed: !1, name: "price", type: "uint256"
            }
            ], name:"ChibiForFusion", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !1, name: "tokenId", type: "uint256"
            }
            ], name:"ChibiForFusionCancelled", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !1, name: "tokenId", type: "uint256"
            }
            , {
                indexed: !1, name: "battleRoar", type: "string"
            }
            ], name:"WarriorCreated", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "_from", type: "address"
            }
            , {
                indexed: !0, name: "_to", type: "address"
            }
            ], name:"OwnershipTransferred", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "_from", type: "address"
            }
            , {
                indexed: !0, name: "_to", type: "address"
            }
            , {
                indexed: !1, name: "_tokenId", type: "uint256"
            }
            ], name:"Transfer", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "_owner", type: "address"
            }
            , {
                indexed: !0, name: "_approved", type: "address"
            }
            , {
                indexed: !1, name: "_tokenId", type: "uint256"
            }
            ], name:"Approval", type:"event"
        }
        ], ae="0x6b9f9d8ef588470932b693864a62021cabb65ce9", ne=[ {
            constant:!0, inputs:[ {
                name: "interfaceId", type: "bytes4"
            }
            ], name:"supportsInterface", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"name", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "tokenId", type: "uint256"
            }
            ], name:"getApproved", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "to", type: "address"
            }
            , {
                name: "tokenId", type: "uint256"
            }
            ], name:"approve", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"totalSupply", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "baseURI", type: "string"
            }
            ], name:"setTokenMetadataBaseURI", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_productId", type: "uint256"
            }
            ], name:"priceOfActivation", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "from", type: "address"
            }
            , {
                name: "to", type: "address"
            }
            , {
                name: "tokenId", type: "uint256"
            }
            ], name:"transferFrom", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "owner", type: "address"
            }
            , {
                name: "index", type: "uint256"
            }
            ], name:"tokenOfOwnerByIndex", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "from", type: "address"
            }
            , {
                name: "to", type: "address"
            }
            , {
                name: "tokenId", type: "uint256"
            }
            ], name:"safeTransferFrom", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"withdrawalWallet", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "index", type: "uint256"
            }
            ], name:"tokenByIndex", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_productId", type: "uint256"
            }
            ], name:"isMinterOnly", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_keyId", type: "uint256"
            }
            , {
                name: "_attributes", type: "uint256"
            }
            ], name:"setKeyAttributes", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant: !1, inputs: [], name: "withdrawBalance", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function"
        }
        , {
            constant:!0, inputs:[ {
                name: "tokenId", type: "uint256"
            }
            ], name:"ownerOf", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"getAllProductIds", outputs:[ {
                name: "", type: "uint256[]"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "", type: "uint256"
            }
            ], name:"productKeys", outputs:[ {
                name: "productId", type: "uint256"
            }
            , {
                name: "attributes", type: "uint256"
            }
            , {
                name: "issuedTime", type: "uint256"
            }
            , {
                name: "expirationTime", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "owner", type: "address"
            }
            ], name:"balanceOf", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "", type: "uint256"
            }
            ], name:"products", outputs:[ {
                name: "id", type: "uint256"
            }
            , {
                name: "price", type: "uint256"
            }
            , {
                name: "activationPrice", type: "uint256"
            }
            , {
                name: "available", type: "uint256"
            }
            , {
                name: "supply", type: "uint256"
            }
            , {
                name: "sold", type: "uint256"
            }
            , {
                name: "interval", type: "uint256"
            }
            , {
                name: "minterOnly", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_productId", type: "uint256"
            }
            ], name:"totalSold", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"symbol", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "account", type: "address"
            }
            ], name:"addMinter", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant: !1, inputs: [], name: "renounceMinter", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_productId", type: "uint256"
            }
            , {
                name: "_isMinterOnly", type: "bool"
            }
            ], name:"setMinterOnly", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_productId", type: "uint256"
            }
            , {
                name: "_price", type: "uint256"
            }
            , {
                name: "_activationPrice", type: "uint256"
            }
            , {
                name: "_initialAvailable", type: "uint256"
            }
            , {
                name: "_supply", type: "uint256"
            }
            , {
                name: "_interval", type: "uint256"
            }
            , {
                name: "_minterOnly", type: "bool"
            }
            ], name:"createProduct", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "to", type: "address"
            }
            , {
                name: "approved", type: "bool"
            }
            ], name:"setApprovalForAll", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_productId", type: "uint256"
            }
            , {
                name: "_beneficiary", type: "address"
            }
            ], name:"minterOnlyPurchase", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "account", type: "address"
            }
            ], name:"isMinter", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_productId", type: "uint256"
            }
            , {
                name: "_beneficiary", type: "address"
            }
            ], name:"purchase", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!0, stateMutability:"payable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"activate", outputs:[], payable:!0, stateMutability:"payable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "from", type: "address"
            }
            , {
                name: "to", type: "address"
            }
            , {
                name: "tokenId", type: "uint256"
            }
            , {
                name: "_data", type: "bytes"
            }
            ], name:"safeTransferFrom", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_productId", type: "uint256"
            }
            ], name:"priceOf", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_productId", type: "uint256"
            }
            ], name:"productInfo", outputs:[ {
                name: "", type: "uint256"
            }
            , {
                name: "", type: "uint256"
            }
            , {
                name: "", type: "uint256"
            }
            , {
                name: "", type: "uint256"
            }
            , {
                name: "", type: "uint256"
            }
            , {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_keyId", type: "uint256"
            }
            ], name:"keyInfo", outputs:[ {
                name: "", type: "uint256"
            }
            , {
                name: "", type: "uint256"
            }
            , {
                name: "", type: "uint256"
            }
            , {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_productId", type: "uint256"
            }
            , {
                name: "_increment", type: "uint256"
            }
            ], name:"incrementAvailability", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "tokenId", type: "uint256"
            }
            ], name:"tokenURI", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "", type: "uint256"
            }
            ], name:"allProductIds", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_keyId", type: "uint256"
            }
            ], name:"isKeyActive", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "owner", type: "address"
            }
            , {
                name: "operator", type: "address"
            }
            ], name:"isApprovedForAll", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_productId", type: "uint256"
            }
            , {
                name: "_price", type: "uint256"
            }
            ], name:"setPrice", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            inputs:[ {
                name: "name", type: "string"
            }
            , {
                name: "symbol", type: "string"
            }
            , {
                name: "baseURI", type: "string"
            }
            , {
                name: "withdrawalWallet", type: "address"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"constructor"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "owner", type: "address"
            }
            , {
                indexed: !0, name: "purchaser", type: "address"
            }
            , {
                indexed: !1, name: "keyId", type: "uint256"
            }
            , {
                indexed: !1, name: "productId", type: "uint256"
            }
            , {
                indexed: !1, name: "attributes", type: "uint256"
            }
            , {
                indexed: !1, name: "issuedTime", type: "uint256"
            }
            , {
                indexed: !1, name: "expirationTime", type: "uint256"
            }
            ], name:"KeyIssued", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "owner", type: "address"
            }
            , {
                indexed: !0, name: "activator", type: "address"
            }
            , {
                indexed: !1, name: "keyId", type: "uint256"
            }
            , {
                indexed: !1, name: "productId", type: "uint256"
            }
            , {
                indexed: !1, name: "attributes", type: "uint256"
            }
            , {
                indexed: !1, name: "issuedTime", type: "uint256"
            }
            , {
                indexed: !1, name: "expirationTime", type: "uint256"
            }
            ], name:"KeyActivated", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !1, name: "id", type: "uint256"
            }
            , {
                indexed: !1, name: "price", type: "uint256"
            }
            , {
                indexed: !1, name: "activationPrice", type: "uint256"
            }
            , {
                indexed: !1, name: "available", type: "uint256"
            }
            , {
                indexed: !1, name: "supply", type: "uint256"
            }
            , {
                indexed: !1, name: "interval", type: "uint256"
            }
            , {
                indexed: !1, name: "minterOnly", type: "bool"
            }
            ], name:"ProductCreated", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !1, name: "productId", type: "uint256"
            }
            , {
                indexed: !1, name: "available", type: "uint256"
            }
            ], name:"ProductAvailabilityChanged", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !1, name: "productId", type: "uint256"
            }
            , {
                indexed: !1, name: "price", type: "uint256"
            }
            ], name:"ProductPriceChanged", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "account", type: "address"
            }
            ], name:"MinterAdded", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "account", type: "address"
            }
            ], name:"MinterRemoved", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "from", type: "address"
            }
            , {
                indexed: !0, name: "to", type: "address"
            }
            , {
                indexed: !0, name: "tokenId", type: "uint256"
            }
            ], name:"Transfer", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "owner", type: "address"
            }
            , {
                indexed: !0, name: "approved", type: "address"
            }
            , {
                indexed: !0, name: "tokenId", type: "uint256"
            }
            ], name:"Approval", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "owner", type: "address"
            }
            , {
                indexed: !0, name: "operator", type: "address"
            }
            , {
                indexed: !1, name: "approved", type: "bool"
            }
            ], name:"ApprovalForAll", type:"event"
        }
        ], se=[ {
            constant:!0, inputs:[], name:"name", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_spender", type: "address"
            }
            , {
                name: "_value", type: "uint256"
            }
            ], name:"approve", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"totalSupply", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_from", type: "address"
            }
            , {
                name: "_to", type: "address"
            }
            , {
                name: "_value", type: "uint256"
            }
            ], name:"transferFrom", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"decimals", outputs:[ {
                name: "", type: "uint8"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_owner", type: "address"
            }
            ], name:"balanceOf", outputs:[ {
                name: "balance", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"symbol", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_to", type: "address"
            }
            , {
                name: "_value", type: "uint256"
            }
            ], name:"transfer", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_owner", type: "address"
            }
            , {
                name: "_spender", type: "address"
            }
            ], name:"allowance", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            payable: !0, stateMutability: "payable", type: "fallback"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "owner", type: "address"
            }
            , {
                indexed: !0, name: "spender", type: "address"
            }
            , {
                indexed: !1, name: "value", type: "uint256"
            }
            ], name:"Approval", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "from", type: "address"
            }
            , {
                indexed: !0, name: "to", type: "address"
            }
            , {
                indexed: !1, name: "value", type: "uint256"
            }
            ], name:"Transfer", type:"event"
        }
        ], re=[ {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"tokenURI", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"name", outputs:[ {
                name: "_name", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"getApproved", outputs:[ {
                name: "_approved", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_to", type: "address"
            }
            , {
                name: "_tokenId", type: "uint256"
            }
            ], name:"approve", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"implementsERC721", outputs:[ {
                name: "_implementsERC721", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"totalSupply", outputs:[ {
                name: "_totalSupply", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_from", type: "address"
            }
            , {
                name: "_to", type: "address"
            }
            , {
                name: "_tokenId", type: "uint256"
            }
            ], name:"transferFrom", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_owner", type: "address"
            }
            , {
                name: "_index", type: "uint256"
            }
            ], name:"tokenOfOwnerByIndex", outputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"ownerOf", outputs:[ {
                name: "_owner", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_tokenId", type: "uint256"
            }
            ], name:"tokenMetadata", outputs:[ {
                name: "_infoUrl", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_owner", type: "address"
            }
            ], name:"balanceOf", outputs:[ {
                name: "_balance", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_owner", type: "address"
            }
            , {
                name: "_tokenId", type: "uint256"
            }
            , {
                name: "_approvedAddress", type: "address"
            }
            , {
                name: "_metadata", type: "string"
            }
            ], name:"mint", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"symbol", outputs:[ {
                name: "_symbol", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_to", type: "address"
            }
            , {
                name: "_tokenId", type: "uint256"
            }
            ], name:"transfer", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"numTokensTotal", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "_owner", type: "address"
            }
            ], name:"getOwnerTokens", outputs:[ {
                name: "_tokenIds", type: "uint256[]"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "_to", type: "address"
            }
            , {
                indexed: !0, name: "_tokenId", type: "uint256"
            }
            ], name:"Mint", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "_from", type: "address"
            }
            , {
                indexed: !0, name: "_to", type: "address"
            }
            , {
                indexed: !1, name: "_tokenId", type: "uint256"
            }
            ], name:"Transfer", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "_owner", type: "address"
            }
            , {
                indexed: !0, name: "_approved", type: "address"
            }
            , {
                indexed: !1, name: "_tokenId", type: "uint256"
            }
            ], name:"Approval", type:"event"
        }
        ], ie=[ {
            constant:!0, inputs:[], name:"name", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "guy", type: "address"
            }
            , {
                name: "wad", type: "uint256"
            }
            ], name:"approve", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"totalSupply", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "src", type: "address"
            }
            , {
                name: "dst", type: "address"
            }
            , {
                name: "wad", type: "uint256"
            }
            ], name:"transferFrom", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "wad", type: "uint256"
            }
            ], name:"withdraw", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"decimals", outputs:[ {
                name: "", type: "uint8"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "", type: "address"
            }
            ], name:"balanceOf", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"symbol", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "dst", type: "address"
            }
            , {
                name: "wad", type: "uint256"
            }
            ], name:"transfer", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant: !1, inputs: [], name: "deposit", outputs: [], payable: !0, stateMutability: "payable", type: "function"
        }
        , {
            constant:!0, inputs:[ {
                name: "", type: "address"
            }
            , {
                name: "", type: "address"
            }
            ], name:"allowance", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            payable: !0, stateMutability: "payable", type: "fallback"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "src", type: "address"
            }
            , {
                indexed: !0, name: "guy", type: "address"
            }
            , {
                indexed: !1, name: "wad", type: "uint256"
            }
            ], name:"Approval", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "src", type: "address"
            }
            , {
                indexed: !0, name: "dst", type: "address"
            }
            , {
                indexed: !1, name: "wad", type: "uint256"
            }
            ], name:"Transfer", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "dst", type: "address"
            }
            , {
                indexed: !1, name: "wad", type: "uint256"
            }
            ], name:"Deposit", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "src", type: "address"
            }
            , {
                indexed: !1, name: "wad", type: "uint256"
            }
            ], name:"Withdrawal", type:"event"
        }
        ], oe=[ {
            constant:!0, inputs:[ {
                name: "_interfaceID", type: "bytes4"
            }
            ], name:"supportsInterface", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"proxyOwner", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"name", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "assetId", type: "uint256"
            }
            ], name:"getApproved", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "operator", type: "address"
            }
            , {
                name: "assetId", type: "uint256"
            }
            ], name:"approve", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "x", type: "int256"
            }
            , {
                name: "y", type: "int256"
            }
            ], name:"ownerOfLand", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "user", type: "address"
            }
            ], name:"setLatestToNow", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"totalSupply", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "x", type: "int256"
            }
            , {
                name: "y", type: "int256"
            }
            , {
                name: "beneficiary", type: "address"
            }
            ], name:"assignNewParcel", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "x", type: "int256[]"
            }
            , {
                name: "y", type: "int256[]"
            }
            ], name:"ownerOfLandMany", outputs:[ {
                name: "", type: "address[]"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "", type: "address"
            }
            ], name:"latestPing", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "x", type: "int256[]"
            }
            , {
                name: "y", type: "int256[]"
            }
            , {
                name: "data", type: "string"
            }
            ], name:"updateManyLandData", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "from", type: "address"
            }
            , {
                name: "to", type: "address"
            }
            , {
                name: "assetId", type: "uint256"
            }
            ], name:"transferFrom", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "operator", type: "address"
            }
            , {
                name: "assetId", type: "uint256"
            }
            ], name:"isAuthorized", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "", type: "address"
            }
            ], name:"authorizedDeploy", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "owner", type: "address"
            }
            , {
                name: "index", type: "uint256"
            }
            ], name:"tokenOfOwnerByIndex", outputs:[ {
                name: "assetId", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"decimals", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"pure", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "beneficiary", type: "address"
            }
            ], name:"authorizeDeploy", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "x", type: "int256"
            }
            , {
                name: "y", type: "int256"
            }
            , {
                name: "to", type: "address"
            }
            ], name:"transferLand", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "from", type: "address"
            }
            , {
                name: "to", type: "address"
            }
            , {
                name: "assetId", type: "uint256"
            }
            ], name:"safeTransferFrom", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "", type: "bytes"
            }
            ], name:"initialize", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "x", type: "int256"
            }
            , {
                name: "y", type: "int256"
            }
            ], name:"landData", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "x", type: "int256[]"
            }
            , {
                name: "y", type: "int256[]"
            }
            , {
                name: "to", type: "address"
            }
            ], name:"transferManyLand", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "assetId", type: "uint256"
            }
            ], name:"exists", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "owner", type: "address"
            }
            ], name:"tokensOf", outputs:[ {
                name: "", type: "uint256[]"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant: !1, inputs: [], name: "ping", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function"
        }
        , {
            constant:!0, inputs:[ {
                name: "assetId", type: "uint256"
            }
            ], name:"ownerOf", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"GET_METADATA", outputs:[ {
                name: "", type: "bytes4"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "operator", type: "address"
            }
            , {
                name: "assetId", type: "uint256"
            }
            ], name:"isUpdateAuthorized", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "assetId", type: "uint256"
            }
            ], name:"tokenMetadata", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "x", type: "int256"
            }
            , {
                name: "y", type: "int256"
            }
            ], name:"encodeTokenId", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"pure", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "owner", type: "address"
            }
            ], name:"balanceOf", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"currentContract", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"description", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "value", type: "uint256"
            }
            ], name:"decodeTokenId", outputs:[ {
                name: "", type: "int256"
            }
            , {
                name: "", type: "int256"
            }
            ], payable:!1, stateMutability:"pure", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "x", type: "int256[]"
            }
            , {
                name: "y", type: "int256[]"
            }
            , {
                name: "beneficiary", type: "address"
            }
            ], name:"assignMultipleParcels", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "x", type: "int256[]"
            }
            , {
                name: "y", type: "int256[]"
            }
            , {
                name: "beneficiary", type: "address"
            }
            , {
                name: "metadata", type: "string"
            }
            ], name:"createEstateWithMetadata", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "owner", type: "address"
            }
            ], name:"landOf", outputs:[ {
                name: "", type: "int256[]"
            }
            , {
                name: "", type: "int256[]"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"owner", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "registry", type: "address"
            }
            ], name:"setEstateRegistry", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"symbol", outputs:[ {
                name: "", type: "string"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "", type: "uint256"
            }
            ], name:"updateOperator", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "operator", type: "address"
            }
            , {
                name: "authorized", type: "bool"
            }
            ], name:"setApprovalForAll", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "x", type: "int256"
            }
            , {
                name: "y", type: "int256"
            }
            ], name:"exists", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "assetId", type: "uint256"
            }
            , {
                name: "operator", type: "address"
            }
            ], name:"setUpdateOperator", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "from", type: "address"
            }
            , {
                name: "to", type: "address"
            }
            , {
                name: "assetId", type: "uint256"
            }
            , {
                name: "userData", type: "bytes"
            }
            ], name:"safeTransferFrom", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "x", type: "int256[]"
            }
            , {
                name: "y", type: "int256[]"
            }
            , {
                name: "beneficiary", type: "address"
            }
            ], name:"createEstate", outputs:[ {
                name: "", type: "uint256"
            }
            ], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "x", type: "int256"
            }
            , {
                name: "y", type: "int256"
            }
            , {
                name: "data", type: "string"
            }
            ], name:"updateLandData", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!0, inputs:[], name:"estateRegistry", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "assetHolder", type: "address"
            }
            , {
                name: "operator", type: "address"
            }
            ], name:"isApprovedForAll", outputs:[ {
                name: "", type: "bool"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!0, inputs:[ {
                name: "assetId", type: "uint256"
            }
            ], name:"getApprovedAddress", outputs:[ {
                name: "", type: "address"
            }
            ], payable:!1, stateMutability:"view", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "_newOwner", type: "address"
            }
            ], name:"transferOwnership", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "x", type: "int256[]"
            }
            , {
                name: "y", type: "int256[]"
            }
            , {
                name: "estateId", type: "uint256"
            }
            ], name:"transferManyLandToEstate", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "x", type: "int256"
            }
            , {
                name: "y", type: "int256"
            }
            , {
                name: "estateId", type: "uint256"
            }
            ], name:"transferLandToEstate", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            constant:!1, inputs:[ {
                name: "beneficiary", type: "address"
            }
            ], name:"forbidDeploy", outputs:[], payable:!1, stateMutability:"nonpayable", type:"function"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "registry", type: "address"
            }
            ], name:"EstateRegistrySet", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "assetId", type: "uint256"
            }
            , {
                indexed: !0, name: "holder", type: "address"
            }
            , {
                indexed: !0, name: "operator", type: "address"
            }
            , {
                indexed: !1, name: "data", type: "string"
            }
            ], name:"Update", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "assetId", type: "uint256"
            }
            , {
                indexed: !0, name: "operator", type: "address"
            }
            ], name:"UpdateOperator", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "from", type: "address"
            }
            , {
                indexed: !0, name: "to", type: "address"
            }
            , {
                indexed: !0, name: "assetId", type: "uint256"
            }
            , {
                indexed: !1, name: "operator", type: "address"
            }
            , {
                indexed: !1, name: "userData", type: "bytes"
            }
            ], name:"Transfer", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "from", type: "address"
            }
            , {
                indexed: !0, name: "to", type: "address"
            }
            , {
                indexed: !0, name: "assetId", type: "uint256"
            }
            ], name:"Transfer", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "operator", type: "address"
            }
            , {
                indexed: !0, name: "holder", type: "address"
            }
            , {
                indexed: !1, name: "authorized", type: "bool"
            }
            ], name:"ApprovalForAll", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !0, name: "owner", type: "address"
            }
            , {
                indexed: !0, name: "operator", type: "address"
            }
            , {
                indexed: !0, name: "assetId", type: "uint256"
            }
            ], name:"Approval", type:"event"
        }
        , {
            anonymous:!1, inputs:[ {
                indexed: !1, name: "_prevOwner", type: "address"
            }
            , {
                indexed: !1, name: "_newOwner", type: "address"
            }
            ], name:"OwnerUpdate", type:"event"
        }
        ], ce= {
            1: {
                "0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d": {
                    ApiUrl: "https://axieinfinity.com/api/axies/", address: "0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d", image_file: "axie.png", name: "AXIE Infinity", symbol: "AXIE", type: "erc721"
                }
                , "0x2f2d5aa0efdb9ca3c9bb789693d06bebea88792f": {
                    ApiUrl: "https://us-central1-block-cities.cloudfunctions.net/api/network/1/token/image/", address: "0x2f2d5aa0efdb9ca3c9bb789693d06bebea88792f", image_file: "block.png", name: "BlockCities", symbol: "BLOCK", type: "erc721"
                }
                , "0x06012c8cf97bead5deae237070f9587f8e7a266d": {
                    ApiUrl: "https://api.cryptokitties.co/kitties/", address: "0x06012c8cf97bead5deae237070f9587f8e7a266d", image_file: "ck.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fck.svg?alt=media&token=f35597fe-792d-4a75-aef3-b47b10f1f342", name: "CryptoKitties", symbol: "CK", type: "erc721ck"
                }
                , "0x09fe5f0236f0ea5d930197dce254d77b04128075": {
                    address: "0x09fe5f0236f0ea5d930197dce254d77b04128075", decimals: 18, image_file: "cwt.png", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fck.svg?alt=media&token=f35597fe-792d-4a75-aef3-b47b10f1f342", name: "WrappedKitties", symbol: "WCK", type: "erc20", optional: !0
                }
                , "0x4d3814d4da8083b41861dec2f45b4840e8b72d68": {
                    address: "0x4d3814d4da8083b41861dec2f45b4840e8b72d68", image_file: "csc.png", name: "CSC", imageApiField: "image_url", ApiUrl: "https://dapp-engine-api-dot-river-octagon-223922.appspot.com/getAsset/?contract=0x4d3814d4da8083b41861dec2f45b4840e8b72d68&assetId=", symbol: "CSC", type: "erc721"
                }
                , "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359": {
                    address: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359", decimals: 18, image_file: "dai.svg", name: "Dai Stablecoin", symbol: "DAI", type: "erc20"
                }
                , "0x23d80c4ee8fb55d4183dd9329296e176dc7464e1": {
                    address: "0x23d80c4ee8fb55d4183dd9329296e176dc7464e1", decimals: 18, image_file: "donut.png", name: "Donut", symbol: "DONUT", type: "erc20"
                }
                , "0x4f41d10f7e67fd16bde916b4a6dc3dd101c57394": {
                    address: "0x4f41d10f7e67fd16bde916b4a6dc3dd101c57394", image_file: "flower.png", name: "Flowerpatch", imageApiField: "thumbnailImage", ApiUrl: "https://flowerpatch.app/render/flower-", symbol: "FLOWER", type: "erc721"
                }
                , "0x92bf969865c80eda082fd5d8b4e28da4d58e1c3a": {
                    address: "0x92bf969865c80eda082fd5d8b4e28da4d58e1c3a", decimals: 18, image_file: "axie.png", name: "LUNA", symbol: "LUNA", type: "erc20", optional: !0
                }
                , "0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d": {
                    address: "0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d", image_file: "mana.svg", name: "Decentraland", imageApiField: "thumbnailImage", ApiUrl: "https://api.decentraland.org/v1/parcels/", symbol: "LAND", type: "erc721"
                }
                , "0x0f5d2fb29fb7d3cfee444a200298f468908cc942": {
                    address: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942", decimals: 18, image_file: "mana.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fmana.svg?alt=media&token=7f55096a-303a-4d71-b4ea-f067ab99f077", name: "Decentraland", symbol: "MANA", type: "erc20"
                }
                , "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2": {
                    address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2", decimals: 18, image_file: "mkr.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fmkr.svg?alt=media&token=c3998339-639c-4c05-a9e4-d18251e544bc", name: "Maker", symbol: "MKR", type: "erc20"
                }
                , "0x8c9b261faef3b3c2e64ab5e58e04615f8c788099": {
                    ApiUrl: "https://api-dot-cryptobaseball-b691f.appspot.com/playerId/", address: "0x8c9b261faef3b3c2e64ab5e58e04615f8c788099", image_file: "mlbcb.png", name: "Cryptobaseball", symbol: "MLBCB", type: "erc721"
                }
                , "0x1276dce965ada590e42d62b3953ddc1ddceb0392": {
                    address: "0x1276dce965ada590e42d62b3953ddc1ddceb0392", image_file: "neon.png", name: "NeonDistrict", symbol: "NEON", type: "erc721"
                }
                , "0xe94327d07fc17907b4db788e5adf2ed424addff6": {
                    address: "0xe94327d07fc17907b4db788e5adf2ed424addff6", decimals: 18, image_file: "rep.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Frep.svg?alt=media&token=d10ed2af-c133-4e45-b564-8063b3d8a495", name: "Reputation", symbol: "REP", type: "erc20"
                }
                , "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": {
                    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", decimals: 18, image_file: "weth.svg", name: "Wrapped Ether", symbol: "WETH", type: "erc20"
                }
                , "0xe41d2489571d322189246dafa5ebde1f4699f498": {
                    address: "0xe41d2489571d322189246dafa5ebde1f4699f498", decimals: 18, image_file: "zrx.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fzrx.svg?alt=media&token=66e127de-3891-4c1f-87c4-b13309a25f47", name: "0x", symbol: "ZRX", type: "erc20"
                }
            }
            , 42: {
                "0x2002d3812f58e35f0ea1ffbf80a75a38c32175fa": {
                    address: "0x2002d3812f58e35f0ea1ffbf80a75a38c32175fa", decimals: 18, image_file: "zrx.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fzrx.svg?alt=media&token=66e127de-3891-4c1f-87c4-b13309a25f47", name: "0xProtocol", symbol: "ZRX", type: "erc20"
                }
                , "0x7b6b10caa9e8e9552ba72638ea5b47c25afea1f3": {
                    address: "0x7b6b10caa9e8e9552ba72638ea5b47c25afea1f3", decimals: 18, image_file: "mkr.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fmkr.svg?alt=media&token=c3998339-639c-4c05-a9e4-d18251e544bc", name: "Maker", symbol: "MKR", type: "erc20"
                }
                , "0x31fb614e223706f15d0d3c5f4b08bdf0d5c78623": {
                    address: "0x31fb614e223706f15d0d3c5f4b08bdf0d5c78623", decimals: 18, image_file: "gnt.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fgnt.svg?alt=media&token=789f53df-e15d-4aee-8eef-177d4b1dc563", name: "Golem Network Token", symbol: "GNT", type: "erc20"
                }
                , "0x8cb3971b8eb709c14616bd556ff6683019e90d9c": {
                    address: "0x8cb3971b8eb709c14616bd556ff6683019e90d9c", decimals: 18, image_file: "rep.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Frep.svg?alt=media&token=d10ed2af-c133-4e45-b564-8063b3d8a495", name: "Augur", symbol: "REP", type: "erc20"
                }
            }
            , 0: {
                1: {
                    address: "0x0000000000000000000000000000000000000000", decimals: 18, img: "", name: "Unknown", symbol: "Unknown", type: "erc20"
                }
                , 2: {
                    address: "0x0000000000000000000000000000000000000000", decimals: 18, img: "", name: "Unknown", symbol: "Unknown", type: "erc20"
                }
            }
        }
        , le=a(30), de=a(21), me=a(341), ue="0x0000000000000000000000000000000000000000", pe=new Q.BigNumber(6e9);
        Object(de.c)().then(function(e) {
            e.web3?(E=e.web3, b=e.provider, g=new me(b), k=new le.Web3Wrapper(E.currentProvider), E.version.getNetwork(function(e, t) {
                e||(t=parseInt(t, 10)), h=new Q.ContractWrappers(b, {
                    networkId: t
                }
                ), console.log(h.erc721Proxy.address), console.log(h.erc20Proxy.address), console.log(h.exchange.address), v=ce[t]
            }
            )):(g=new me(e.provider), v=ce[1])
        }
        );
        var ye, fe=function(e) {
            var t=e.tokenAddress, a=e.tokenType, n=e.decimals, s=void 0===n?0: n, r=e.userAddress;
            return new Promise(function(e, n) {
                var i, o=r;
                if(o)switch(a) {
                    case"eth":g.getBalance(o).then(function(a) {
                        var n=a/Math.pow(10, 18);
                        e( {
                            tokenAddress: t, amount: n
                        }
                        )
                    }
                    ).catch(function(e) {
                        n(e)
                    }
                    );
                    break;
                    case"erc20":i=se, g.contract(i).at(t).balanceOf(o).then(function(a) {
                        var n=a.balance/Math.pow(10, s);
                        e( {
                            tokenAddress: t, amount: n
                        }
                        )
                    }
                    ).catch(function(e) {
                        n(e)
                    }
                    );
                    break;
                    case"erc721ck":case"erc721chibi":case"erc721":i=re, g.contract(i).at(t).balanceOf(o).then(function(a) {
                        var n=a[0]/1;
                        e( {
                            tokenAddress: t, amount: n
                        }
                        )
                    }
                    ).catch(function(e) {
                        n(e)
                    }
                    );
                    break;
                    default:throw new Error( {
                        error: "no token type in getTokenAmount"
                    }
                    )
                }
                else n(new Error( {
                    error: "no user present"
                }
                ))
            }
            )
        }
        , be=function(e) {
            var t=e.amountAsk, a=e.currency, n=e.userAddress;
            return new Promise(function(e, s) {
                var r, i=n;
                if(i)switch(a.type) {
                    case"eth":g.getBalance(i).then(function(n) {
                        var s=n/Math.pow(10, 18);
                        e( {
                            hasToken: t<=s, currency: a
                        }
                        )
                    }
                    ).catch(function(e) {
                        s(e)
                    }
                    );
                    break;
                    case"erc20":r=se, g.contract(r).at(a.address).balanceOf(i).then(function(n) {
                        var s=n.balance/Math.pow(10, a.decimals);
                        e( {
                            hasToken: t<=s, currency: a
                        }
                        )
                    }
                    ).catch(function(e) {
                        s(e)
                    }
                    );
                    break;
                    case"erc721ck":case"erc721chibi":case"erc721":Ee( {
                        tokenAddress: a.address, tokenType: a.type, tokenID: t
                    }
                    ).then(function(t) {
                        var s=t.ownerAddress.toLowerCase()===n.toLowerCase();
                        e( {
                            hasToken: s, currency: a
                        }
                        )
                    }
                    ).catch(function(e) {
                        s(e)
                    }
                    );
                    break;
                    default:throw new Error( {
                        error: "no token type in getTokenAmount"
                    }
                    )
                }
                else s(new Error( {
                    error: "no user present"
                }
                ))
            }
            )
        }
        , he=function(e) {
            var t=e.tokenAddress, a=e.tokenType, n=e.decimals, s=void 0===n?0: n, r=e.recipientAddress, i=e.sendAmount, o=e.userAddress;
            return new Promise(function(e, n) {
                var c=o;
                if(c)switch(a) {
                    case"eth": var l=new Q.BigNumber(me.toWei(i, "ether"));
                    g.sendTransaction( {
                        from: o, to: r, value: me.toWei(i, "ether"), gas: "21000", data: "0x"
                    }
                    ).then(function(t) {
                        e(t)
                    }
                    ).catch(function(e) {
                        n(e)
                    }
                    );
                    break;
                    case"erc20":var d=se, m=g.contract(d).at(t);
                    l=le.Web3Wrapper.toBaseUnitAmount(new Q.BigNumber(i), s);
                    m.transfer(r, l, {
                        from: o, gasPrice: pe
                    }
                    ).then(function(t) {
                        e(t)
                    }
                    ).catch(function(e) {
                        n(e)
                    }
                    );
                    break;
                    case"erc721ck":case"erc721chibi":(m=g.contract($).at(t)).transfer(r, i, {
                        from: o, gasPrice: pe
                    }
                    ).then(function(t) {
                        e(t)
                    }
                    ).catch(function(e) {
                        n(e)
                    }
                    );
                    break;
                    case"erc721":d=re;
                    (m=g.contract(d).at(t)).transferFrom(c, r, i, {
                        from: o, gasPrice: pe
                    }
                    ).then(function(t) {
                        e(t)
                    }
                    ).catch(function(e) {
                        n(e)
                    }
                    );
                    break;
                    default:throw new Error( {
                        error: "no token type in getTokenAmount"
                    }
                    )
                }
                else n(new Error( {
                    error: "no user present"
                }
                ))
            }
            )
        }
        , ge=function(e) {
            var t=e.productId, a=e.userAddress;
            return new Promise(function(e, n) {
                g.contract(ne).at(ae).purchase(t, a, {
                    from: a, gasPrice: pe, value: me.toWei(.001, "ether")
                }
                ).then(function(t) {
                    e(t)
                }
                ).catch(function(e) {
                    n(e)
                }
                )
            }
            )
        }
        , ke=function(e) {
            var t=e.tokenAddress, a=e.tokenType, n=e.index, s=e.userAddress;
            return new Promise(function(e, r) {
                var i=s;
                if(i)switch(a) {
                    case"erc721ck": case"erc721chibi": case"erc721": var o=re;
                    g.contract(o).at(t).tokenOfOwnerByIndex(i, n).then(function(a) {
                        var n=a[0];
                        e( {
                            tokenAddress: t, tokenID: n
                        }
                        )
                    }
                    ).catch(function(e) {
                        r(e)
                    }
                    );
                    break;
                    default:throw new Error( {
                        error: "no token type in getTokenAmount"
                    }
                    )
                }
                else r(new Error( {
                    error: "no user present"
                }
                ))
            }
            )
        }
        , ve=function(e) {
            var t=e.amount, a=e.type, n=e.userAddress;
            return new Promise(function(e, s) {
                if(n) {
                    var r=ie, i=g.contract(r).at("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
                    switch(a) {
                        case"1":i.deposit( {
                            from: n, gasPrice: pe, value: me.toWei(t, "ether")
                        }
                        ).then(function(t) {
                            e(t)
                        }
                        ).catch(function(e) {
                            s(e)
                        }
                        );
                        break;
                        case"2":var o=le.Web3Wrapper.toBaseUnitAmount(new Q.BigNumber(t), 18);
                        i.withdraw(o, {
                            from: n, gasPrice: pe
                        }
                        ).then(function(t) {
                            e(t)
                        }
                        ).catch(function(e) {
                            s(e)
                        }
                        );
                        break;
                        default:throw new Error( {
                            error: "no token type in getTokenAmount"
                        }
                        )
                    }
                }
                else s(new Error( {
                    error: "no user present"
                }
                ))
            }
            )
        }
        , Ee=function(e) {
            var t=e.tokenAddress, a=e.tokenType, n=e.tokenID;
            return new Promise(function(e, s) {
                switch(a) {
                    case"erc721ck": case"erc721chibi": case"erc721": var r=re;
                    g.contract(r).at(t).ownerOf(n).then(function(a) {
                        var n=a[0];
                        e( {
                            tokenAddress: t, ownerAddress: n
                        }
                        )
                    }
                    ).catch(function(e) {
                        s(e)
                    }
                    );
                    break;
                    default:throw new Error( {
                        error: "no token type in getTokenAmount"
                    }
                    )
                }
            }
            )
        }
        , we=function(e) {
            var t=e.tokenAddress, a=e.tokenType, n=e.tokenAmount, s=void 0===n?1: n, r=e.tokenId, i=void 0===r?null: r;
            return new Promise(function(e, n) {
                s=new Q.BigNumber(s);
                var r=Object(de.b)(), o=h.erc721Proxy.address;
                switch(a) {
                    case"erc20":h.erc20Token.getProxyAllowanceAsync(t, r).then(function(t) {
                        return e(t.comparedTo(s)>=0)
                    }
                    ).catch(function(e) {
                        n(e)
                    }
                    );
                    break;
                    case"erc721chibi":g.contract(te).at(ee).approvedFor(i).then(function(t) {
                        e(t[0]===o)
                    }
                    ).catch(function(e) {
                        n(e)
                    }
                    );
                    break;
                    case"erc721ck":g.contract($).at(q).kittyIndexToApproved(i).then(function(t) {
                        e(t[0]===o)
                    }
                    ).catch(function(e) {
                        n(e)
                    }
                    );
                    break;
                    case"erc721":h.erc721Token.isApprovedForAllAsync(t, r, o).then(function(t) {
                        return e(t)
                    }
                    ).catch(function(e) {
                        n(e)
                    }
                    );
                    break;
                    default:throw new Error( {
                        error: "no token type in isTokenAllowanceSufficient"
                    }
                    )
                }
            }
            )
        }
        , Ae=function(e) {
            var t=e.tokenAddress, a=e.tokenType, n=e.tokenId, s=void 0===n?null: n;
            return new Promise(function(e, n) {
                var r=Object(de.b)();
                switch(a) {
                    case"erc20":h.erc20Token.setUnlimitedProxyAllowanceAsync(t, r, {
                        gasPrice: pe
                    }
                    ).then(function(t) {
                        e(t)
                    }
                    ).catch(function(e) {
                        n(e)
                    }
                    );
                    break;
                    case"erc721ck":case"erc721chibi":var i=h.erc721Proxy.address;
                    g.contract($).at(t).approve(i, s, {
                        from: r, gas: 69423
                    }
                    ).then(function(t) {
                        return e(t)
                    }
                    ).catch(function(e) {
                        n(e)
                    }
                    );
                    break;
                    case"erc721":h.erc721Token.setProxyApprovalForAllAsync(t, r, !0, {
                        gasPrice: pe
                    }
                    ).then(function(t) {
                        return e(t)
                    }
                    ).catch(function(e) {
                        n(e)
                    }
                    );
                    break;
                    default:throw new Error( {
                        error: "no token type in grantUnlimitedAllowance"
                    }
                    )
                }
            }
            )
        }
        , Se=function(e) {
            var t=e.tokenAddress, a=e.tokenType, n=e.tokenId, s=void 0===n?null: n;
            switch(a) {
                case"erc20": return Q.assetDataUtils.encodeERC20AssetData(t);
                case"erc721ck": case"erc721": case"erc721chibi": return s=new Q.BigNumber(s), Q.assetDataUtils.encodeERC721AssetData(t, s);
                default:throw new Error( {
                    error: "no token type in createAssetData"
                }
                )
            }
        }
        , Ne=function(e) {
            if(!e)return"";
            var t, a=[ {
                value: 1, symbol: ""
            }
            , {
                value: 1e3, symbol: "k"
            }
            , {
                value: 1e6, symbol: "M"
            }
            , {
                value: 1e9, symbol: "G"
            }
            , {
                value: 1e12, symbol: "T"
            }
            , {
                value: 1e15, symbol: "P"
            }
            , {
                value: 1e18, symbol: "E"
            }
            ];
            for(t=a.length-1;
            t>0&&!(e>=a[t].value);
            t--);
            return(Number((e/a[t].value).toFixed(3))==Number(e)?"":"~")+(e/a[t].value).toFixed(3).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1")+a[t].symbol
        }
        , xe=function(e) {
            var t=e.makerAddress, a=e.takerAddress, n=e.makerAssetData, s=e.takerAssetData, r=e.makerTokenAmount, i=e.takerTokenAmount, o=e.currencies, c=e.expirationTimeSeconds, l=e.inputJSON;
            return new Promise(function(e, d) {
                var m, u, p=h.exchange.address, y=Object(Q.generatePseudoRandomSalt)();
                r?m=le.Web3Wrapper.toBaseUnitAmount(new Q.BigNumber(r), o[0].decimals): (m=new Q.BigNumber(1), r=1), i?u=le.Web3Wrapper.toBaseUnitAmount(new Q.BigNumber(i), o[1].decimals): (u=new Q.BigNumber(1), i=1);
                var f= {
                    makerAddress: t, takerAddress: a, makerFee: new Q.BigNumber(0), takerFee: new Q.BigNumber(0), senderAddress: ue, makerAssetAmount: m, takerAssetAmount: u, makerAssetData: n, takerAssetData: s, exchangeAddress: p, feeRecipientAddress: "0x66a836664adc7c525c0cc4527dee8619d4faf669", salt: y, expirationTimeSeconds: new Q.BigNumber(c)
                }
                ;
                Q.orderHashUtils.getOrderHashHex(f);
                Q.signatureUtils.ecSignOrderAsync(b, f, t).then(function(e) {
                    return Ie( {
                        signedOrder: e, inputJSON: l
                    }
                    )
                }
                ).then(function(t) {
                    return e(t)
                }
                ).catch(function(e) {
                    d(e)
                }
                )
            }
            )
        }
        , Ie=function(e) {
            var t=e.signedOrder;
            e.inputJSON;
            return new Promise(function(e, a) {
                Object(Z.c)( {
                    signedOrder: t, imageURL: "https://firebasestorage.googleapis.com/v0/b/swibble-7161b.appspot.com/o/robot.png?alt=media&token=10d3dec2-9254-49f8-abc8-70402cfb5ce0"
                }
                ), e(t)
            }
            )
        }
        , Te=function(e) {
            return v[e]?JSON.parse(JSON.stringify(v[e])): ce[0][1]
        }
        , Ce=function(e) {
            var t=Q.assetDataUtils.decodeAssetDataOrThrow(e.makerAssetData), a=Q.assetDataUtils.decodeAssetDataOrThrow(e.takerAssetData), n= {
                taker: v[a.tokenAddress]?JSON.parse(JSON.stringify(v[a.tokenAddress])): ce[0][1], maker: v[t.tokenAddress]?JSON.parse(JSON.stringify(v[t.tokenAddress])): ce[0][2]
            }
            ;
            t.tokenId&&(n.maker.tokenId=t.tokenId/1), a.tokenId&&(n.taker.tokenId=a.tokenId/1);
            var s=e.takerAssetAmount/1;
            n.taker&&n.taker.decimals&&(s/=Math.pow(10, n.taker.decimals));
            var r=e.makerAssetAmount/1;
            n.maker&&n.maker.decimals&&(r/=Math.pow(10, n.maker.decimals));
            var i= {
                taker: s, maker: r
            }
            ;
            return {
                order:Object(z.a)( {}
                , e), currencies:n, orderInfo: {}
                , amounts: i
            }
        }
        , Oe=function(e) {
            var t=e.order;
            return new Promise(function(e, a) {
                var n=function(e) {
                    var t=Object(z.a)( {}
                    , e);
                    return["makerFee", "takerFee", "makerAssetAmount", "takerAssetAmount", "salt", "expirationTimeSeconds"].forEach(function(e) {
                        t[e]=new Q.BigNumber(t[e])
                    }
                    ), delete t.bigNumbers, t
                }
                (t), s=Ce(n);
                h.exchange.getOrderInfoAsync(n).then(function(t) {
                    s.orderInfo=t, e(s)
                }
                ).catch(function(e) {
                    a(e)
                }
                )
            }
            )
        }
        , Me=function(e) {
            var t=e.signedOrder, a=e.fillTakerTokenAmount;
            e.shouldThrowOnInsufficientBalanceOrAllowance;
            return new Promise(function(e, n) {
                var s=Object(de.b)(), r=s;
                h.exchange.fillOrderAsync(t, a, s, {
                    gasPrice: pe, shouldValidate: !0
                }
                ).then(function(a) {
                    Object(Z.m)( {
                        signedOrder: t, imageURL: "", takerAddress: r, hash: a
                    }
                    ), e(a)
                }
                ).catch(function(i) {
                    h.exchange.fillOrderAsync(t, a, s, {
                        gasPrice: pe, gasLimit: 35e4, shouldValidate: !0
                    }
                    ).then(function(a) {
                        Object(Z.m)( {
                            signedOrder: t, imageURL: "", takerAddress: r, hash: a
                        }
                        ), e(a)
                    }
                    ).catch(function(e) {
                        console.log(e), n(e)
                    }
                    )
                }
                )
            }
            )
        }
        , De=function(e) {
            var t=e.order;
            return new Promise(function(e, a) {
                h.exchange.cancelOrderAsync(t, {
                    gasPrice: pe
                }
                ).then(function(t) {
                    return e(t)
                }
                ).catch(function(e) {
                    a(e)
                }
                )
            }
            )
        }
        , Pe=function(e) {
            var t=e.hash;
            return new Promise(function(e, a) {
                k.awaitTransactionMinedAsync(t).then(function(t) {
                    return e(t)
                }
                ).catch(function(e) {
                    a(e)
                }
                )
            }
            )
        }
        , Le=a(117), _e=a.n(Le), Fe=function(e) {
            var t=e.tokenId, a=e.currency;
            return new Promise(function(e, n) {
                switch(a.symbol) {
                    case"AXIE":e( {
                        apiUrl:"https://axieinfinity.com/api/axies/"+t, headers: {}
                    }
                    );
                    break;
                    case"CSC":e( {
                        apiUrl:"https://dapp-engine-api-dot-river-octagon-223922.appspot.com/getAsset/?contract=0x4d3814d4da8083b41861dec2f45b4840e8b72d68&assetId="+t+"&populate=true", headers: {
                            "x-api-key": "AIzaSyAYm1n89H5IcnqlYm3Vi8kZ_t33LR1hULM"
                        }
                    }
                    );
                    break;
                    case"MLBCB":e( {
                        apiUrl:"https://cors-anywhere-boxswap.herokuapp.com/https://api.scarcityengine.io/getAssetImage/?assetId="+t+"&contract="+a.address, headers: {
                            "x-api-key": "AIzaSyCPr4QMPaI3Y-GSOVXEYmGyvc1DuJ2inJg"
                        }
                    }
                    );
                    break;
                    case"LAND":(function(e) {
                        var t=e.tokenID;
                        return new Promise(function(e, a) {
                            Object(de.b)();
                            var n=oe;
                            g.contract(n).at("0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d").decodeTokenId(t).then(function(t) {
                                e( {
                                    x: t[0], y: t[1]
                                }
                                )
                            }
                            ).catch(function(e) {
                                a(e)
                            }
                            )
                        }
                        )
                    }
                    )( {
                        tokenID: t
                    }
                    ).then(function(t) {
                        e( {
                            apiUrl:"https://api.decentraland.org/v1/parcels/"+t.x/1+"/"+t.y/1+"/map.png", headers: {}
                        }
                        )
                    }
                    ).catch(function(t) {
                        e( {
                            apiUrl:null, headers: {}
                        }
                        )
                    }
                    );
                    break;
                    case"GODS":e( {
                        apiUrl:"https://api.godsunchained.com/v0/card/"+t, headers: {}
                    }
                    );
                    break;
                    case"BX":case"CK":e( {
                        apiUrl:"https://api.cryptokitties.co/kitties/"+t, headers: {}
                    }
                    );
                    break;
                    case"NEON":(function(e) {
                        var t=e.currency, a=e.tokenID;
                        return new Promise(function(e, n) {
                            var s=re;
                            g.contract(s).at(t.address).tokenURI(a).then(function(t) {
                                e( {
                                    tokenURI: t[0]
                                }
                                )
                            }
                            ).catch(function(e) {
                                n(e)
                            }
                            )
                        }
                        )
                    }
                    )( {
                        currency: a, tokenID: t
                    }
                    ).then(function(t) {
                        e( {
                            apiUrl:"https://cors-anywhere-boxswap.herokuapp.com/"+t.tokenURI, headers: {}
                        }
                        )
                    }
                    ).catch(function(t) {
                        e( {
                            apiUrl:null, headers: {}
                        }
                        )
                    }
                    )
                }
            }
            )
        }
        , Ue=function(e) {
            var t=e.tokenId, a=e.currency;
            return new Promise(function(e, n) {
                var s=a.symbol, r=[], i="/img/tokenImages/box-"+a.image_file;
                if("FLOWER"===a.symbol)return e( {
                    imageData: "https://flowerpatch.app/render/flower-"+t+".png", tokenId: t, name: s, attributes: r
                }
                );
                if("BX"===a.symbol) {
                    return e( {
                        imageData: "/img/badges/access.svg", tokenId: t, name: s, attributes: r
                    }
                    )
                }
                if("BKC"===a.symbol)return e( {
                    imageData: "https://us-central1-block-cities.cloudfunctions.net/api/network/1/token/image/"+t+".png", tokenId: t, name: s, attributes: r
                }
                );
                Fe( {
                    tokenId: t, currency: a
                }
                ).then(function(e) {
                    return _e()( {
                        method: "get", url: e.apiUrl, headers: e.headers
                    }
                    )
                }
                ).then(function(n) {
                    var o=n.data;
                    switch(a.symbol) {
                        case"AXIE": i=o.image, s=o.name, r.push(o.class);
                        break;
                        case"CSC": i=o.data.assetMeta.data.webData.imagelocation;
                        break;
                        case"MLBCB": i=o.imageUrl;
                        break;
                        case"CK": i=o.image_url_png;
                        break;
                        default: i=o.image, s=o.name
                    }
                    e( {
                        imageData: i, tokenId: t, name: s, attributes: r
                    }
                    )
                }
                ).catch(function(a) {
                    e( {
                        imageData: i, tokenId: t, name: s, attributes: r
                    }
                    )
                }
                )
            }
            )
        }
        , Re=a(143), je=a(168), Be=a.n(je), He=a(76), Ge=a.n(He), We=a(583), Ve=a.n(We), Ke=a(171), Ye=a.n(Ke), Je=a(144), Xe=a.n(Je), ze=a(145), Qe=a.n(ze), Ze=a(584), qe=a.n(Ze), $e=a(202), et=a.n($e), tt=a(585), at=a.n(tt), nt=a(586), st=a.n(nt), rt=w[S().code].Status, it=w[S().code].TakerModal, ot=w[S().code].ModalCommon, ct=w[S().code].MetamaskModal, lt=w[S().code].PermissionModal, dt= {
            erc721: {}
            , erc721ck: {}
            , erc721axie: {}
        }
        , mt=function(e) {
            function t(e) {
                var a;
                Object(c.a)(this, t), (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).addressInputChange=function(e) {
                    return a.setState( {
                        searchAddress: e.target.value
                    }
                    )
                }
                , a.forceUpdateHandle=function() {
                    a.forceUpdate()
                }
                , a.search=function(e) {
                    e.preventDefault(), a.state.searchAddress&&a.props.history.push("/status/".concat(a.state.searchAddress))
                }
                , a.handleNoWeb3Connection=function() {
                    var e=Ce(JSON.parse(a.state.searchAddress)), t=e.order, n=e.currencies, s=e.orderInfo, r=e.amounts, i=a.createNewOrder(t, n, s, r);
                    a.setState( {
                        order: i, currencies: n, loading: !1, initialFetched: !0, failed: !1, modalStep: 6
                    }
                    , function() {
                        a.updateImages(), a.showModal()
                    }
                    )
                }
                , a.createNewOrder=function(e, t, n, s) {
                    var r= {
                        maker: null, taker: null
                    }
                    ;
                    t.maker&&t.maker.tokenId&&(r.maker=t.maker.tokenId), t.taker&&t.taker.tokenId&&(r.taker=t.taker.tokenId);
                    var i= {
                        entities: {
                            maker: {
                                currency: t.maker, address: e.makerAddress, amount: s.maker, tokenId: r.maker
                            }
                            , taker: {
                                currency: t.taker, address: e.takerAddress, amount: s.taker, tokenId: r.taker
                            }
                        }
                        , actualOrder:e, orderInfo:n, isUserTaker:e.takerAddress===ue?a.props.meta.userAddress!==e.makerAddress:a.props.meta.userAddress===e.takerAddress, isUserMaker:a.props.meta.userAddress===e.makerAddress
                    }
                    ;
                    return n.orderTakerAssetFilledAmount?i.takerCanFill=-1===n.orderTakerAssetFilledAmount.comparedTo(e.takerAssetAmount):i.takerCanFill=!0, i
                }
                , a.updateImageFromApi=function(e, t) {
                    var n=t.currency, s=D(n.type), r=e, i=t, o=a.state.innerImages;
                    dt[s]&&(dt[s]= {}
                    ), 0===s.indexOf("erc721")?(o[r]="../img/tokenImages/box-"+n.image_file, a.setState( {
                        innerImages: o
                    }
                    ), dt[s][i.tokenId]?(o[r]=dt[s][i.tokenId], a.setState( {
                        innerImages: o
                    }
                    )):Ue( {
                        tokenId: i.tokenId, currency: n
                    }
                    ).then(function(e) {
                        var t=e.imageData;
                        dt[s][i.tokenId]=t, o[r]=dt[s][i.tokenId], a.setState( {
                            innerImages: o
                        }
                        )
                    }
                    ).catch(function(e) {
                        o[r]="", a.setState( {
                            innerImages: o
                        }
                        )
                    }
                    )):0===s.indexOf("erc20")&&(o[r]="./img/tokenImages/box-"+n.image_file, a.setState( {
                        innerImages: o
                    }
                    ))
                }
                , a.updateShortenImageUrl=function() {
                    var e=a.state.order.entities, t=ot.SOCIAL(e.taker.amount, e.taker.currency.symbol, e.maker.amount, e.maker.currency.symbol), n="https://boxswap.io/status/"+a.state.searchAddress;
                    _e.a.post("https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyBPHa4AvIGZWQJ1wD9Hf54GNvrTY-m1c7w", {
                        dynamicLinkInfo: {
                            dynamicLinkDomain:"boxswap.page.link", link:n, socialMetaTagInfo: {
                                socialTitle: t, socialDescription: ot.SOCIALDESCRIPTION, socialImageLink: "https://firebasestorage.googleapis.com/v0/b/swibble-7161b.appspot.com/o/boxswap.png?alt=media&token=b7758b0f-977a-4049-843e-3ae578d0af10"
                            }
                        }
                        , suffix: {
                            option: "SHORT"
                        }
                    }
                    ).then(function(e) {
                        a.setState( {
                            shortUrl: e.data.shortLink
                        }
                        )
                    }
                    ).catch(function(e) {
                        console.log(e)
                    }
                    )
                }
                , a.updateImages=function() {
                    var e=a.getOrder(), t= {
                        maker: Qe.a, taker: Xe.a
                    }
                    , n= {
                        maker: Qe.a, taker: Xe.a
                    }
                    ;
                    if(!e)return t;
                    var s= {
                        maker: n.maker, taker: 5===e.orderInfo.orderStatus?n.taker: t.taker
                    }
                    ;
                    a.setState( {
                        images: s
                    }
                    );
                    var r= {
                        maker: e.entities.maker.currency.image_file?"../img/tokenImages/box-"+e.entities.maker.currency.image_file: "", taker: e.entities.taker.currency.image_file?"../img/tokenImages/box-"+e.entities.taker.currency.image_file: ""
                    }
                    ;
                    a.setState( {
                        innerImages: r
                    }
                    , function() {
                        e.entities.maker.currency&&0===e.entities.maker.currency.type.indexOf("erc721")&&a.updateImageFromApi("maker", e.entities.maker), e.entities.taker.currency&&0===e.entities.taker.currency.type.indexOf("erc721")&&a.updateImageFromApi("taker", e.entities.taker)
                    }
                    )
                }
                , a.getOrder=function(e) {
                    return a.state.order
                }
                , a.getList=function(e) {
                    var t=a.getOrder().entities[e], n="".concat(e, "Address"), r="erc721"==t.currency.type||"erc721ck"==t.currency.type, i=t.tokenId&&!0, o=t.amount&&!0, c=!r, l=t.amount+" "+t.currency.symbol, d=Object(Re.getTokenIDURL)(t.tokenId, t.currency.symbol);
                    return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                        className: "row"
                    }
                    , s.a.createElement("div", {
                        className: "col-2 h-pad-none"
                    }
                    , rt.FIELDS.name), s.a.createElement("div", {
                        className: "col-10 pl-3 pr-0 ellipsis"
                    }
                    , ": ", t.currency?t.currency.name:"Not supported")), c&&s.a.createElement("div", {
                        className: "row"
                    }
                    , s.a.createElement("div", {
                        className: "col-2 h-pad-none"
                    }
                    , rt.FIELDS.tokenAddress), s.a.createElement("div", {
                        className: "col-10 pl-3 pr-0 ellipsis"
                    }
                    , ":", " ", s.a.createElement("a", {
                        href: "https://www.etherscan.io/token/"+t.currency.address, target: "_blank"
                    }
                    , t.currency?t.currency.address:"Not supported"))), i&&s.a.createElement("div", {
                        className: "row rect-row  text-truncate"
                    }
                    , s.a.createElement("div", {
                        className: "col-2 h-pad-none"
                    }
                    , rt.FIELDS.tokenId), s.a.createElement("div", {
                        className: "col-10 pl-3 pr-0 ellipsis"
                    }
                    , ":\xa0", s.a.createElement("a", {
                        href: "https://www.etherscan.io/token/"+t.currency.address+"?a="+t.tokenId, target: "_blank"
                    }
                    , d?s.a.createElement("a", {
                        href: d, target: "_blank"
                    }
                    , "#", t.tokenId):t.tokenId))), o&&s.a.createElement("div", {
                        className: "row rect-row  text-truncate"
                    }
                    , s.a.createElement("div", {
                        className: "col-2 h-pad-none"
                    }
                    , rt.FIELDS.amount), s.a.createElement("div", {
                        className: "col-10 pl-3 pr-0 ellipsis"
                    }
                    , ": ", l)), s.a.createElement("div", {
                        className: "row"
                    }
                    , s.a.createElement("div", {
                        className: "col-2 h-pad-none"
                    }
                    , rt.FIELDS[n]), s.a.createElement("div", {
                        className: "col-10 pl-3 pr-0 ellipsis"
                    }
                    , ":", " ", t.address!==ue?s.a.createElement("a", {
                        href: "https://www.etherscan.io/address/"+t.address, target: "_blank"
                    }
                    , t.address):"Any")))
                }
                , a.showModal=function(e) {
                    e&&e.preventDefault(), a.setState( {
                        modalShown: !0
                    }
                    )
                }
                , a.hideModal=function(e) {
                    e&&e.preventDefault(), a.setState( {
                        loading: !1, error: !1, modalShown: !1
                    }
                    ), 4===a.state.modalStep&&window.location.reload()
                }
                , a.getModalContents=function() {
                    var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: 1, t=a.state, n=t.order, s=t.currencies, r=t.filledOrderHash, i=t.cancelledHash, o=t.approvalHash, c=t.images, l=t.innerImages, d=t.shortUrl;
                    switch(e) {
                        case 1:return {
                            modalType: "modalStandard", headingText: ot.UNLOCK, headingSVG: Be.a, text: o?"Transaction Hash:": it[D(s.taker.type)][e].TIME, linkText: o, linkURL: "https://etherscan.io/tx/"+o, onCTA: a.approve, ctaText: it[D(s.taker.type)][e].APPROVE(s.taker.symbol)
                        }
                        ;
                        case 2:return {
                            modalType:"modalStandard", tradeHeading: {
                                takerSymbol: s.maker.symbol, makerSymbol: s.taker.symbol, innerImages: [l.taker, l.maker], images: [c.taker, c.maker], arrowsSVG: Ye.a, amounts: [Ne(n.entities.taker.amount)||1, Ne(n.entities.maker.amount)||1]
                            }
                            , text:r?"Transaction Hash:":it[D(s.taker.type)][e].TIME, linkText:r, linkURL:"https://etherscan.io/tx/"+r, onCTA:a.fill, ctaText:it[D(s.taker.type)][e].FILL(s.taker.symbol, Ne(n.entities.taker.amount), s.maker.symbol, Ne(n.entities.maker.amount))
                        }
                        ;
                        case 3:return {
                            modalType: "modalStandard", headingText: ot.CANCEL, headingSVG: Ve.a, text: i?"Transaction Hash:": it[D(s.taker.type)][e].TIME, linkText: i, linkURL: "https://etherscan.io/tx/"+i, onCTA: a.cancel, ctaText: it[D(s.taker.type)][e].CANCEL(s.taker.symbol, Ne(n.entities.taker.amount), s.maker.symbol, Ne(n.entities.maker.amount))
                        }
                        ;
                        case 4:return i? {
                            modalType: "modalStandard", headingText: ot.CANCELSUCCESS, headingSVG: Ge.a, text: "Transaction Hash: ", linkText: i, linkURL: "https://etherscan.io/tx/"+i
                        }
                        :r? {
                            modalType: "modalStandard", headingText: ot.FILLSUCCESS, headingSVG: Ge.a, text: "Transaction Hash: ", linkText: r, linkURL: "https://etherscan.io/tx/"+r
                        }
                        : {
                            modalType: "modalStandard", headingText: ot.SUCCESS, headingSVG: Ge.a, text: "", linkText: "", linkURL: ""
                        }
                        ;
                        case 5:return {
                            modalType: "modalShare", orderJSON: JSON.stringify(n.actualOrder, void 0, 4), orderStatusUrl: d
                        }
                        ;
                        case 6:if(window.ethereum) {
                            var m=function() {
                                Object(de.a)().then(function() {}
                                ).catch(function() {}
                                )
                            }
                            ;
                            return m(), {
                                modalType: "modalStandard", headingText: lt.TITLE, headingSVG: R.a, text: lt.DESCRIPTION, linkText: lt.LINKTEXT, onLinkClick: m
                            }
                        }
                        return {
                            modalType: "modalStandard", headingText: ct.TITLE, headingSVG: R.a, text: ct.DESCRIPTION, linkText: ct.LINKTEXT, linkURL: "https://metamask.io/#how-it-works"
                        }
                        ;
                        case 9:var u=1!==n.entities.taker.amount?Ne(n.entities.taker.amount)+" "+s.taker.symbol:"that "+s.taker.symbol;
                        return {
                            modalType: "modalStandard", headingText: ot.ERRORTITLE, headingSVG: et.a, text: ot.NOTOKEN(u), linkText: "", linkURL: ""
                        }
                    }
                }
                , a.approve=function() {
                    a.setState( {
                        loading: !0, error: !1, metamaskPending: !0, pending: !1
                    }
                    );
                    var e=a.state, t=e.order, n=e.currencies;
                    Ae( {
                        tokenAddress: t.entities.taker.currency.address, tokenType: n.taker.type, tokenId: n.taker.tokenId
                    }
                    ).then(function(e) {
                        return a.setState( {
                            approvalHash: e, pending: !0, metamaskPending: !1
                        }
                        ), Pe( {
                            hash: e
                        }
                        )
                    }
                    ).then(function(e) {
                        a.state.modalShown&&a.setState( {
                            metamaskPending: !1, pending: !1, modalStep: 2
                        }
                        , function() {
                            a.showModal()
                        }
                        )
                    }
                    ).catch(function() {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, error: !0
                        }
                        , function() {
                            a.hideModal()
                        }
                        )
                    }
                    )
                }
                , a.fill=function() {
                    a.setState( {
                        metamaskPending: !0, pending: !1, loading: !0, error: !1
                    }
                    );
                    var e=a.state.order;
                    Me( {
                        fillTakerTokenAmount: e.actualOrder.takerAssetAmount.minus(e.orderInfo.orderTakerAssetFilledAmount), signedOrder: e.actualOrder
                    }
                    ).then(function(e) {
                        return a.setState( {
                            filledOrderHash: e, pending: !0, metamaskPending: !1
                        }
                        ), Pe( {
                            hash: e
                        }
                        )
                    }
                    ).then(function(e) {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, modalStep: 4
                        }
                        )
                    }
                    ).catch(function() {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, error: !0
                        }
                        , function() {
                            a.hideModal()
                        }
                        )
                    }
                    )
                }
                , a.cancel=function() {
                    a.setState( {
                        metamaskPending: !0, pending: !1, loading: !0, error: !1
                    }
                    );
                    var e=a.state.order;
                    De( {
                        order: e.actualOrder
                    }
                    ).then(function(e) {
                        return a.setState( {
                            cancelledHash: e, pending: !0, metamaskPending: !1
                        }
                        ), Pe( {
                            hash: e
                        }
                        )
                    }
                    ).then(function(e) {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, modalStep: 4
                        }
                        )
                    }
                    ).catch(function() {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, error: !0
                        }
                        , function() {
                            a.hideModal()
                        }
                        )
                    }
                    )
                }
                , a.shareModal=function(e) {
                    e.preventDefault(), a.setState( {
                        loading: !0, error: !1
                    }
                    ), a.setState( {
                        modalStep: 5
                    }
                    , function() {
                        a.showModal()
                    }
                    )
                }
                , a.cancelModal=function(e) {
                    e.preventDefault(), a.setState( {
                        loading: !0, error: !1
                    }
                    ), a.setState( {
                        modalStep: 3
                    }
                    , function() {
                        a.showModal()
                    }
                    )
                }
                , a.check=function(e) {
                    if(e&&e.preventDefault(), Object(de.b)()) {
                        a.setState( {
                            loading: !0, error: !1
                        }
                        );
                        var t=a.state, n=t.order, s=t.currencies, r=s.taker.tokenId?s.taker.tokenId:n.entities.taker.amount;
                        be( {
                            amountAsk: r, currency: s.taker, userAddress: Object(de.b)()
                        }
                        ).then(function(e) {
                            return e.hasToken?we( {
                                tokenAddress: n.entities.taker.currency.address, tokenAmount: n.entities.taker.amount, tokenType: s.taker.type, tokenId: s.taker.tokenId
                            }
                            ):Promise.reject( {
                                status: "noToken", data: e
                            }
                            )
                        }
                        ).then(function(e) {
                            e?a.setState( {
                                modalStep: 2
                            }
                            , function() {
                                a.showModal()
                            }
                            ):a.setState( {
                                modalStep: 1
                            }
                            , function() {
                                a.showModal()
                            }
                            )
                        }
                        ).catch(function(e) {
                            "noToken"!=e.status?a.setState( {
                                metamaskPending: !1, pending: !1, loading: !1, error: !0
                            }
                            ):a.setState( {
                                modalStep: 9, metamaskPending: !1, pending: !1, loading: !1, approvalHash: ""
                            }
                            , function() {
                                a.showModal()
                            }
                            )
                        }
                        )
                    }
                    else a.setState( {
                        modalStep: 6
                    }
                    , function() {
                        a.showModal()
                    }
                    )
                }
                , a.state= {
                    shortUrl:"", searchAddress:"", initialFetched:!1, loading:!1, images: {
                        maker: Qe.a, taker: Xe.a
                    }
                    , innerImages:["", ""]
                }
                , a.toggleModal=a.toggleModal.bind(Object(y.a)(Object(y.a)(a)));
                try {
                    a.state.searchAddress=e.match.params.searchAddress
                }
                catch(n) {}
                return a
            }
            return Object(u.a)(t, e), Object(l.a)(t, [ {
                key:"componentWillReceiveProps", value:function(e) {
                    var t=this;
                    this.setState( {
                        searchAddress: e.match.params.searchAddress, initialFetched: !1, loading: !1, metamaskPending: !1
                    }
                    , function() {
                        t.performSearch()
                    }
                    )
                }
            }
            , {
                key:"componentDidMount", value:function() {
                    this.state.searchAddress&&this.performSearch()
                }
            }
            , {
                key:"performSearch", value:function() {
                    var e=this;
                    if(!window.web3)return this.handleNoWeb3Connection();
                    Oe( {
                        order: JSON.parse(this.state.searchAddress)
                    }
                    ).then(function(t) {
                        var a=t.order, n=t.currencies, s=t.orderInfo, r=t.amounts, i=e.createNewOrder(a, n, s, r);
                        e.setState( {
                            order: i, currencies: n, loading: !1, initialFetched: !0, failed: !1
                        }
                        , function() {
                            e.updateImages(), e.updateShortenImageUrl()
                        }
                        )
                    }
                    ).catch(function() {
                        e.setState( {
                            loading: !1, failed: !0, initialFetched: !0
                        }
                        )
                    }
                    )
                }
            }
            , {
                key:"toggleModal", value:function() {
                    this.state.modalShown?this.hideModal(): this.showModal()
                }
            }
            , {
                key:"componentDidUpdate", value:function(e) {
                    var t=this, a=this.props;
                    this.state;
                    e.meta.userAddress!==a.meta.userAddress&&a.meta.userAddress&&6===this.state.modalStep&&this.setState( {
                        modalShown: !1
                    }
                    , function() {
                        t.check()
                    }
                    )
                }
            }
            , {
                key:"render", value:function() {
                    if(this.state.toStatus)return s.a.createElement(p.a, {
                        to: {
                            pathname: "/status/".concat(this.state.searchAddress)
                        }
                    }
                    );
                    var e=this.state.order|| {}
                    , t=e.orderInfo|| {}
                    , a=e.takerCanFill, n=e.isUserTaker, r=e.isUserMaker, i=(e.isValid, this.state), o=i.initialFetched, c=i.failed, l=(i.modalShown, i.modalStep), d=i.loading, m=i.error, u=i.images, y=i.innerImages, f=i.pending, b=i.metamaskPending, h=6===t.orderStatus, g="";
                    switch(t.orderStatus) {
                        case 0: g=rt.STATUSES.INVALID;
                        break;
                        case 1: g=rt.STATUSES.INVALID_MAKER_ASSET_AMOUNT;
                        break;
                        case 2: g=rt.STATUSES.INVALID_TAKER_ASSET_AMOUNT;
                        break;
                        case 3: g=rt.STATUSES.FILLABLE;
                        break;
                        case 4: g=rt.STATUSES.EXPIRED;
                        break;
                        case 5: g=rt.STATUSES.FULLY_FILLED;
                        break;
                        case 6: g=rt.STATUSES.CANCELLED;
                        break;
                        default: g=rt.STATUSES.UNKNOWN
                    }
                    var k=e.actualOrder?M()(1e3*e.actualOrder.expirationTimeSeconds).fromNow():"";
                    k=k?"expires "+k:"";
                    var v;
                    this.props.match.params.searchAddress;
                    if(o)if(c)v=s.a.createElement("div", {
                        className: "row text-center modal-body"
                    }
                    , s.a.createElement("div", {
                        className: "col-12"
                    }
                    , s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("button", {
                        style: {
                            border: "none", background: "none"
                        }
                        , onClick:this.forceUpdateHandle
                    }
                    , s.a.createElement(T.a, {
                        svgStyle: {
                            height: "88px"
                        }
                        , src:qe.a
                    }
                    ))), s.a.createElement("div", {
                        className: "row"
                    }
                    , s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("h2", null, rt.REFRESH.TITLE))), s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("p", null, rt.REFRESH.DESCRIPTION))));
                    else {
                        var E, w=this.getModalContents(l);
                        switch(w.modalType) {
                            case"modalStandard":E=s.a.createElement(C.h, {
                                centered: !0, className: "modalStandard", isOpen: this.state.modalShown, toggle: this.toggleModal
                            }
                            , s.a.createElement(J, {
                                heading: w.headingText, headerSVG: w.headingSVG, tradeHeading: w.tradeHeading, text: w.text, linkText: w.linkText, onLinkClick: w.onLinkClick, linkURL: w.linkURL, metamaskPending: b, pending: f, onCTA: w.onCTA, onClose: this.hideModal, ctaText: w.ctaText
                            }
                            ));
                            break;
                            case"modalShare":E=s.a.createElement(C.h, {
                                centered: !0, className: "modal-share", isOpen: this.state.modalShown, toggle: this.toggleModal
                            }
                            , s.a.createElement(X, {
                                orderJSON: w.orderJSON, orderStatusUrl: w.orderStatusUrl?w.orderStatusUrl: "Loading", onClose: this.hideModal
                            }
                            ))
                        }
                        v=s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                            className: "text-center status-container"
                        }
                        , s.a.createElement("div", {
                            className: "d-inline-block"
                        }
                        , s.a.createElement("div", {
                            className: "row d-none d-md-block text-center box-d"
                        }
                        , s.a.createElement("div", {
                            className: "col-12"
                        }
                        , s.a.createElement("div", {
                            className: "d-inline-block position-relative"
                        }
                        , s.a.createElement("img", {
                            className: "img-fluid outer-normal", src: u.taker
                        }
                        ), s.a.createElement("img", {
                            className: "img-fluid position-absolute inner-normal", src: y.taker
                        }
                        )), s.a.createElement(T.a, {
                            src:Ye.a, svgStyle: {
                                maxWidth: "82px", maxHeight: "72px"
                            }
                        }
                        ), s.a.createElement("div", {
                            className: "d-inline-block position-relative"
                        }
                        , s.a.createElement("img", {
                            className: "img-fluid outer-normal", src: u.maker
                        }
                        ), s.a.createElement("img", {
                            className: "img-fluid position-absolute inner-normal", src: y.maker
                        }
                        )))), s.a.createElement("div", {
                            className: "row"
                        }
                        , s.a.createElement("div", {
                            style: {
                                margin: "16px 8px"
                            }
                            , className:"col-12 d-md-none text-center"
                        }
                        , s.a.createElement("div", {
                            className: "d-inline-block position-relative"
                        }
                        , s.a.createElement("img", {
                            className: "img-fluid outer-normal", src: u.taker
                        }
                        ), s.a.createElement("img", {
                            className: "img-fluid position-absolute inner-normal", src: y.taker
                        }
                        ))), s.a.createElement("div", {
                            className: "trade-rectangle marg-center marg-right-md"
                        }
                        , s.a.createElement("h4", {
                            className: "text-uppercase"
                        }
                        , rt.SEND), this.getList("taker")), s.a.createElement("div", {
                            className: "col-12 d-md-none text-center"
                        }
                        , s.a.createElement(T.a, {
                            src:Ye.a, svgClassName:"Illustration Rotated pl-4", svgStyle: {
                                maxHeight: "64px"
                            }
                        }
                        )), s.a.createElement("div", {
                            style: {
                                margin: "16px 8px"
                            }
                            , className:"col-12 d-md-none text-center"
                        }
                        , s.a.createElement("div", {
                            className: "d-inline-block position-relative"
                        }
                        , s.a.createElement("img", {
                            className: "img-fluid outer-normal", src: u.maker
                        }
                        ), s.a.createElement("img", {
                            className: "img-fluid position-absolute inner-normal", src: y.maker
                        }
                        ))), s.a.createElement("div", {
                            className: "trade-rectangle marg-center"
                        }
                        , s.a.createElement("h4", {
                            className: "text-uppercase"
                        }
                        , rt.RECEIVE), this.getList("maker"))))), s.a.createElement("div", {
                            className: "row"
                        }
                        , s.a.createElement("div", {
                            className: "col-12 text-center"
                        }
                        , s.a.createElement("div", {
                            className: "m-auto d-inline-block bottom-buttons"
                        }
                        , n&&a&&!h&&s.a.createElement("div", null, s.a.createElement("button", {
                            type: "button", className: "btn btn-secondary text-uppercase ".concat(d?"btn-disable": ""), disabled: d, onClick: this.shareModal
                        }
                        , rt.BUTTONS.SHARE), s.a.createElement("button", {
                            type: "button", className: "btn btn-primary ml-4 text-uppercase ".concat(d?"btn-disable": ""), disabled: d, onClick: this.check
                        }
                        , rt.BUTTONS.FILL)), r&&!h&&s.a.createElement("div", null, s.a.createElement("button", {
                            type: "button", className: "btn btn-secondary text-uppercase ".concat(d?"btn-disable": ""), disabled: d, onClick: this.cancelModal
                        }
                        , rt.BUTTONS.CANCEL), s.a.createElement("button", {
                            type: "button", className: "btn btn-primary ml-4 text-uppercase ".concat(d?"btn-disable": ""), disabled: d, onClick: this.shareModal
                        }
                        , rt.BUTTONS.SHARE))))), s.a.createElement("div", null, s.a.createElement("div", {
                            className: "row mt-2"
                        }
                        , s.a.createElement("div", {
                            className: "col-12 col-md-6 col-lg-6"
                        }
                        , m&&s.a.createElement("p", {
                            className: "text-danger"
                        }
                        , rt.ERROR)))), E)
                    }
                    return s.a.createElement("div", {
                        className: "Status"
                    }
                    , s.a.createElement("div", {
                        className:"Banner", style: {
                            background: "url(".concat(at.a, ") left bottom no-repeat")
                        }
                    }
                    , s.a.createElement("div", {
                        className:"d-flex h-100 align-items-center justify-content-center", style: {
                            background: "url(".concat(st.a, ") right bottom no-repeat")
                        }
                    }
                    , s.a.createElement("h1", null, rt.HEADING), s.a.createElement("span", null, rt.SUBHEADING))), s.a.createElement("div", {
                        className: "BannerBelow"
                    }
                    , s.a.createElement("div", {
                        className: "row pt-3"
                    }
                    , s.a.createElement("div", {
                        className: "col-md-1 col-sm-2 offset-md-2 offset-sm-1"
                    }
                    , s.a.createElement("span", {
                        className: "header-descriptor"
                    }
                    , rt.ORDER, ":")), s.a.createElement("div", {
                        className: "col-md-7 col-sm-8"
                    }
                    , s.a.createElement("span", null, this.state.searchAddress))), s.a.createElement("div", {
                        className: "row pt-2"
                    }
                    , s.a.createElement("div", {
                        className: "col-md-1 col-sm-2 offset-md-2 offset-sm-1"
                    }
                    , s.a.createElement("span", {
                        className: "header-descriptor"
                    }
                    , rt.STATUS, ":")), s.a.createElement("div", {
                        className: "col-md-7 col-sm-8"
                    }
                    , s.a.createElement("span", null, g, " \xa0 \u2022 \xa0 ", k)))), s.a.createElement("div", {
                        className: "ContentArea"
                    }
                    , s.a.createElement("div", {
                        className: "row-container"
                    }
                    , this.state.initialFetched?v:s.a.createElement("div", {
                        className: "row text-center"
                    }
                    , s.a.createElement("div", {
                        className: "col-12"
                    }
                    , s.a.createElement(I.a, {
                        type: "Circles", color: "#DD3BAD"
                    }
                    ))))))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        ut=Object(p.f)(mt),
        pt= {
            OFFER_MODAL: "OFFER_MODAL", SWAP_PAGE: "SWAP_PAGE"
        }
        ,
        yt= {
            SEND: 91, ESTIMATE: 92, SUCCESS: 4, METAMASKSIGNIN: 7, WRAP: 8, OFFER: 9, BUY: 10, APPROVE_UNLOCK: 1, SIGN: 2, METAMASK_PERMISSION: 93, TOKEN_MISSING: 98, BUY_BADGE: 11, VIEW_BADGE: 12
        }
        ,
        ft=(a(1655), a(204)),
        bt=a(248),
        ht=(a(1670), a(142)),
        gt=a.n(ht),
        kt=a(200),
        vt=a.n(kt),
        Et=w[S().code].Trade,
        wt=(w[S().code].ModalCommon, w[S().code].ShareModal, function(e) {
            var t=e.option, a="/img/tokenImages/"+t.image_file;
            return s.a.createElement("div", {
                className: "CurrencyDropdownOption"
            }
            , t.image_file&&s.a.createElement("img", {
                src: a
            }
            ), s.a.createElement("div", {
                className: "d-inline-block"
            }
            , s.a.createElement("span", null, t.symbol), " ", s.a.createElement("span", null, t.name)))
        }
        ),
        At=function(e) {
            return s.a.createElement("div", {
                className: "modal-content offer-modal Trade"
            }
            , s.a.createElement("div", {
                className: "offer-modal-header"
            }
            , s.a.createElement("h5", null, "OFFER FOR", s.a.createElement("img", {
                src: e.innerImages[1]
            }
            ), e.params.takerAssetSymbol, " #", e.params.takerAmount.toString(), " "), s.a.createElement("button", {
                type: "button", className: "close", onClick: e.onClose
            }
            , s.a.createElement(T.a, {
                svgStyle: {
                    width: "14px"
                }
                , src:F.a
            }
            ))), s.a.createElement("div", {
                className: "text-center offer-modal-body"
            }
            , e.isOpen&&s.a.createElement(bt.a, {
                className: "offer-modal-calendar", selected: e.expDate, onChange: e.handleChange, minDate: M()().add(1, "days"), timeIntervals: 60, onClickOutside: e.toggleCalendar, inline: !0
            }
            ), !e.isOpen&&s.a.createElement("form", {
                className: "trade-container d-inline-block", onSubmit: e.onSubmit
            }
            , s.a.createElement("div", {
                className: "row d-block text-center box-d offered-currency-img-holder"
            }
            , s.a.createElement("img", {
                src: e.innerImages[0]
            }
            )), s.a.createElement("div", {
                className: "trade-rectangle marg-center"
            }
            , s.a.createElement("div", {
                className: "form-group"
            }
            , s.a.createElement(ft.PowerSelect, {
                options: e.meta.currencies, selected: e.currencies[0], optionComponent: s.a.createElement(wt, null), selectedOptionComponent: s.a.createElement(wt, null), onChange: e.setCurrencyAtIndex(0), placeholder: "Select Currency", searchIndices: ["name", "symbol"], className: "CurrencyDropdown offer-currency-dropdown ".concat(e.showInvalid&&!e.currencies[0]?"is-invalid": "")
            }
            )), e.fieldsToShow[0]), s.a.createElement("div", {
                className: "row"
            }
            , s.a.createElement("div", {
                className: "col-12 offer-button-holder"
            }
            , s.a.createElement("button", {
                className: "btn big-btn btn-primary px-5 m-auto d-block create-btn"
            }
            , Et.CREATE_OFFER)), s.a.createElement("div", {
                className: "expire-desc"
            }
            , s.a.createElement("span", null, "Expires"), s.a.createElement("span", null, s.a.createElement("button", {
                className: "react-datepicker-btn", onClick: e.toggleCalendar
            }
            , e.expDate.fromNow())))), s.a.createElement("div", {
                className: "row mt-2"
            }
            , s.a.createElement("div", {
                className: "col-12 col-md-6 col-lg-4 offset-lg-1"
            }
            , e.error&&s.a.createElement("p", {
                className: "text-danger"
            }
            , Et.ERROR))))))
        }
        ,
        St=w[S().code].Trade,
        Nt=function(e) {
            var t=e.option,
            a="/img/tokenImages/"+t.image_file;
            return s.a.createElement("div", {
                className: "CurrencyDropdownOption"
            }
            , t.image_file&&s.a.createElement("img", {
                src: a, alt: ""
            }
            ), s.a.createElement("div", {
                className: "d-inline-block"
            }
            , s.a.createElement("span", null, t.symbol), " ", s.a.createElement("span", null, t.name)))
        }
        ,
        xt=function(e) {
            return s.a.createElement("div", {
                className: "text-center"
            }
            , s.a.createElement("form", {
                className: "trade-container d-inline-block", onSubmit: e.onSubmit
            }
            , s.a.createElement("div", {
                className: "row d-none d-md-block text-center box-d"
            }
            , s.a.createElement("div", {
                className: "col-12"
            }
            , s.a.createElement("div", {
                className: "d-inline-block position-relative"
            }
            , s.a.createElement("img", {
                className: "img-fluid outer-normal", src: e.images[0], alt: ""
            }
            ), s.a.createElement("img", {
                className: "img-fluid position-absolute inner-normal", src: e.innerImages[0], alt: ""
            }
            )), s.a.createElement(T.a, {
                src:gt.a, svgStyle: {
                    maxWidth: "82px", maxHeight: "72px"
                }
            }
            ), s.a.createElement("div", {
                className: "d-inline-block position-relative"
            }
            , s.a.createElement("img", {
                className: "img-fluid outer-normal", src: e.images[1], alt: ""
            }
            ), s.a.createElement("img", {
                className: "img-fluid position-absolute inner-normal", src: e.innerImages[1], alt: ""
            }
            )))), s.a.createElement("div", {
                className: "row justify-content-between"
            }
            , s.a.createElement("div", {
                style: {
                    margin: "20px 8px"
                }
                , className:"col-12 d-md-none text-center"
            }
            , s.a.createElement("div", {
                className: "d-inline-block position-relative"
            }
            , s.a.createElement("img", {
                className: "img-fluid outer-normal", src: e.images[0], alt: ""
            }
            ), s.a.createElement("img", {
                className: "img-fluid position-absolute inner-normal", src: e.innerImages[0], alt: ""
            }
            ))), s.a.createElement("div", {
                className: "trade-rectangle trade-rectangle-shadow marg-center marg-right-md"
            }
            , s.a.createElement("h4", {
                className: "text-uppercase"
            }
            , St.SENDING), s.a.createElement("div", {
                className: "form-group"
            }
            , s.a.createElement(ft.PowerSelect, {
                options: e.meta.currencies, selected: e.currencies[0], optionComponent: s.a.createElement(Nt, null), selectedOptionComponent: s.a.createElement(Nt, null), onChange: e.setCurrencyAtIndex(0), placeholder: "Select Currency", searchIndices: ["name", "symbol"], className: "CurrencyDropdown ".concat(e.showInvalid&&!e.currencies[0]?"is-invalid": "")
            }
            )), e.fieldsToShow[0]), s.a.createElement("div", {
                className: "col-12 d-md-none text-center"
            }
            , s.a.createElement(T.a, {
                src:gt.a, svgClassName:"Illustration Rotated pl-4", svgStyle: {
                    maxHeight: "64px"
                }
            }
            )), s.a.createElement("div", {
                style: {
                    margin: "20px 8px"
                }
                , className:"col-12 d-md-none text-center"
            }
            , s.a.createElement("div", {
                className: "d-inline-block position-relative"
            }
            , s.a.createElement("img", {
                className: "img-fluid outer-normal", src: e.images[1], alt: ""
            }
            ), s.a.createElement("img", {
                className: "img-fluid position-absolute inner-normal", src: e.innerImages[1], alt: ""
            }
            ))), s.a.createElement("div", {
                className: "trade-rectangle trade-rectangle-shadow marg-center"
            }
            , s.a.createElement("h4", {
                className: "text-uppercase"
            }
            , St.RECEIVING), s.a.createElement("div", {
                className: "form-group"
            }
            , s.a.createElement(ft.PowerSelect, {
                options: e.meta.currencies, selected: e.currencies[1], optionComponent: s.a.createElement(Nt, null), selectedOptionComponent: s.a.createElement(Nt, null), onChange: e.setCurrencyAtIndex(1), placeholder: "Select Currency", searchIndices: ["name", "symbol"], className: "CurrencyDropdown ".concat(e.showInvalid&&!e.currencies[1]?"is-invalid": ""), required: !0
            }
            )), e.fieldsToShow[1])), s.a.createElement("div", {
                className: "row"
            }
            , s.a.createElement("div", {
                className: "col-12"
            }
            , s.a.createElement("button", {
                className: "btn big-btn btn-primary px-5 m-auto d-block trade-create-btn"
            }
            , St.CTA), s.a.createElement("div", {
                className: "expire-desc"
            }
            , s.a.createElement("span", null, "Expires"), s.a.createElement("span", null, s.a.createElement("button", {
                className: "react-datepicker-btn", onClick: e.toggleCalendar
            }
            , e.expDate.fromNow()), e.isOpen&&s.a.createElement(bt.a, {
                selected: e.expDate, onChange: e.handleChange, minDate: M()().add(1, "days"), timeIntervals: 60, onClickOutside: e.toggleCalendar, withPortal: !0, inline: !0
            }
            ))))), s.a.createElement("div", {
                className: "row mt-2"
            }
            , s.a.createElement("div", {
                className: "col-12 col-md-6 col-lg-4 offset-lg-1"
            }
            , e.error&&s.a.createElement("p", {
                className: "text-danger"
            }
            , St.ERROR)))))
        }
        ,
        It=w[S().code].Trade,
        Tt=w[S().code].Modal,
        Ct=w[S().code].ModalCommon,
        Ot=w[S().code].MetamaskModal,
        Mt=w[S().code].PermissionModal,
        Dt=[Xe.a,
        Qe.a],
        Pt= {
            erc721: {}
            ,
            erc721ck: {}
        }
        ,
        Lt=[[],
        ["takerAddress"]],
        _t= {
            erc20: [["amount", "makerAddress"], ["amount", "takerAddress"]], erc721: [["tokenId", "makerAddress"], ["tokenId", "takerAddress"]], erc721ck: [["tokenId", "makerAddress"], ["tokenId", "takerAddress"]]
        }
        ,
        Ft=function(e) {
            function t(e) {
                var a;
                Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).showModal=function(e) {
                    e&&e.preventDefault(),
                    a.props.setStateFromChild( {
                        modalShown: !0
                    }
                    )
                }
                ,
                a.hideModal=function(e) {
                    e&&e.preventDefault(),
                    a.props.setStateFromChild( {
                        loading: !1, error: !1, modalShown: !1
                    }
                    )
                }
                ,
                a.getCurrencyFromSymbol=function(e) {
                    if(e)for(var t=a.props.meta.currencies, n=0;
                    n<t.length;
                    n++)if(t[n].symbol===e.toUpperCase())return t[n]
                }
                ,
                a.handleChange=function(e) {
                    a.setState( {
                        expDate: e
                    }
                    ),
                    a.toggleCalendar()
                }
                ,
                a.toggleCalendar=function(e) {
                    e&&e.preventDefault(),
                    a.setState( {
                        isOpen: !a.state.isOpen
                    }
                    )
                }
                ,
                a.setPrice=function(e) {
                    var t=a.state,
                    n=t.currencies,
                    s=t.prices,
                    r=n[e];
                    Object(Z.j)( {
                        symbol: r.symbol
                    }
                    ).then(function(t) {
                        t&&(s[e]=t, a.setState( {
                            prices: s
                        }
                        ))
                    }
                    ).catch(function() {}
                    )
                }
                ,
                a.setImages=function(e) {
                    var t=a.state,
                    n=t.currencies,
                    s=t.fields,
                    r=t.innerImages,
                    i=n[e],
                    o=s[e],
                    c=D(i.type);
                    Pt[c]&&(Pt[c]= {}
                    ),
                    0===c.indexOf("erc721")?(r[e]="/img/tokenImages/box-"+i.image_file, a.setState( {
                        innerImages: r
                    }
                    ), Pt[c]&&Pt[c][o.tokenId]?(r[e]=Pt[c][o.tokenId], a.setState( {
                        innerImages: r
                    }
                    )):Ue( {
                        tokenId: o.tokenId, currency: i
                    }
                    ).then(function(t) {
                        if(o.tokenId===t.tokenId) {
                            var n=t.imageData;
                            Pt[c][o.tokenId]=n, r[e]=Pt[c][o.tokenId], a.setState( {
                                innerImages: r
                            }
                            )
                        }
                    }
                    ).catch(function(t) {
                        r[e]="", a.setState( {
                            innerImages: r
                        }
                        )
                    }
                    )):0===c.indexOf("erc20")&&(r[e]="/img/tokenImages/box-"+i.image_file, a.setState( {
                        innerImages: r
                    }
                    ))
                }
                ,
                a.setCurrencyAtIndex=function(e) {
                    return function(t) {
                        var n=t.option;
                        if(n) {
                            var s=n,
                            r=a.state,
                            i=r.currencies,
                            o=r.fields,
                            c=r.allFields,
                            l=r.prices,
                            d=D(s.type);
                            i[e]=s,
                            c[e]=_t[d][e],
                            l[e]="",
                            a.setState( {
                                currencies: i, fields: o, allFields: c, prices: l
                            }
                            , function() {
                                a.setImages(e), a.setPrice(e)
                            }
                            )
                        }
                    }
                }
                ,
                a.updateFieldValue=function(e, t) {
                    return function(n) {
                        a.updateFieldValueWithValue(e, t, n.target.value)
                    }
                }
                ,
                a.updateFieldValueWithValue=function(e, t, n) {
                    var s=a.state.fields;
                    s[e]||(s[e]= {}
                    ),
                    s[e][t]=n,
                    a.setState( {
                        fields: s
                    }
                    , function() {
                        "tokenId"===t&&a.setImages(e)
                    }
                    )
                }
                ,
                a.getFinalValues=function() {
                    var e=a.state,
                    t=e.currencies,
                    n=e.fields,
                    s=e.allFields,
                    r=n[1].takerAddress?n[1].takerAddress.toLowerCase():ue,
                    i=[ {
                        tokenId: n[0].tokenId, amount: n[0].amount, makerAddress: n[0].makerAddress?n[0].makerAddress.toLowerCase(): "", tokenAddress: t[0]?t[0].address.toLowerCase(): ""
                    }
                    ,
                    {
                        tokenId: n[1].tokenId, amount: n[1].amount, takerAddress: r, tokenAddress: t[1]?t[1].address.toLowerCase(): ""
                    }
                    ];
                    return i.forEach(function(e, t) {
                        Object.keys(e).forEach(function(e) {
                            s[t].indexOf(e)<0&&delete i[t][e]
                        }
                        )
                    }
                    ),
                    i
                }
                ,
                a.onSubmit=function(e) {
                    e.preventDefault();
                    var t=a.state.fields;
                    if(a.isInvalid())return a.setState( {
                        showInvalid: !0
                    }
                    ),
                    void(window.web3&&t[0].makerAddress||a.props.setStateFromChild( {
                        modalContents:a.getModalContents( {
                            step: yt.METAMASK_PERMISSION, currencies: a.state.currencies, approvalHash: a.state.approvalHash, innerImages: a.state.innerImages, images: a.state.images
                        }
                        )
                    }
                    , function() {
                        a.showModal()
                    }
                    ));
                    var n=a.state.currencies,
                    s=a.getFinalValues(),
                    r=a.props.setStateFromChild;
                    r( {
                        loading: !0, error: !1
                    }
                    , function() {
                        var e, t= {
                            tokenAddress: n[0].address, tokenType: n[0].type
                        }
                        ;
                        return s[0].amount&&(e=s[0].amount, t.tokenAmount=s[0].amount), s[0].tokenId&&(e=s[0].tokenId, t.tokenId=s[0].tokenId), be( {
                            amountAsk: e, currency: a.state.currencies[0], userAddress: a.props.meta.userAddress
                        }
                        ).then(function(e) {
                            return e.hasToken?we(t):Promise.reject( {
                                status: "noToken", data: e
                            }
                            )
                        }
                        ).then(function(e) {
                            r(e? {
                                modalContents:a.getModalContents( {
                                    step: yt.SIGN, currencies: a.state.currencies, approvalHash: "", innerImages: a.state.innerImages, images: a.state.images
                                }
                                ), modalStep:yt.SIGN
                            }
                            : {
                                modalContents:a.getModalContents( {
                                    step: yt.APPROVE_UNLOCK, currencies: a.state.currencies, approvalHash: "", innerImages: a.state.innerImages, images: a.state.images
                                }
                                ), modalStep:yt.APPROVE_UNLOCK, metamaskPending:!1, pending:!1, loading:!1
                            }
                            , function() {
                                a.showModal()
                            }
                            )
                        }
                        ).catch(function(e) {
                            console.log(JSON.stringify(e), JSON.stringify(e.data)), console.log("error", e.data), "noToken"!==e.status?r( {
                                metamaskPending: !1, pending: !1, loading: !1, error: !0
                            }
                            ):r( {
                                modalContents:a.getModalContents( {
                                    step: yt.TOKEN_MISSING, currencies: a.state.currencies, approvalHash: "", innerImages: a.state.innerImages, images: a.state.images
                                }
                                ), modalStep:yt.TOKEN_MISSING, metamaskPending:!1, pending:!1, loading:!1
                            }
                            , function() {
                                a.showModal()
                            }
                            )
                        }
                        )
                    }
                    )
                }
                ,
                a.sign=function() {
                    a.props.setStateFromChild( {
                        metamaskPending: !0, pending: !1, loading: !0, error: !1
                    }
                    );
                    var e=a.getFinalValues(),
                    t=e[0].amount,
                    n=e[1].amount,
                    s=a.state,
                    r=s.currencies,
                    i=s.innerImages;
                    e[0].tokenId&&(r[0].tokenId=e[0].tokenId, t="#"+e[0].tokenId),
                    e[1].tokenId&&(r[1].tokenId=e[1].tokenId, n="#"+e[1].tokenId);
                    var o=Se( {
                        tokenAddress: r[0].address, tokenType: r[0].type, tokenId: e[0].tokenId
                    }
                    ),
                    c=Se( {
                        tokenAddress: r[1].address, tokenType: r[1].type, tokenId: e[1].tokenId
                    }
                    ),
                    l= {
                        side1: {
                            name: r[0].name.toUpperCase(), description: t, image: i[0]
                        }
                        ,
                        side2: {
                            name: r[1].name.toUpperCase(), description: n, image: i[1]
                        }
                    }
                    ;
                    xe( {
                        makerAddress: e[0].makerAddress, takerAddress: e[1].takerAddress, makerAssetData: o, takerAssetData: c, makerTokenAmount: e[0].amount, takerTokenAmount: e[1].amount, currencies: r, expirationTimeSeconds: a.state.expDate.unix(), inputJSON: l
                    }
                    ).then(function(e) {
                        a.props.setStateFromChild( {
                            metamaskPending: !1, pending: !1, loading: !1, error: !1, modalShown: !1
                        }
                        , function() {
                            a.setState( {
                                contractAddress: JSON.stringify(e)
                            }
                            )
                        }
                        )
                    }
                    ).catch(function(e) {
                        a.props.setStateFromChild( {
                            metamaskPending: !1, pending: !1, loading: !1, error: !0
                        }
                        , function() {
                            a.hideModal()
                        }
                        )
                    }
                    )
                }
                ,
                a.approve=function() {
                    a.props.setStateFromChild( {
                        loading: !0, error: !1, metamaskPending: !0, pending: !1
                    }
                    );
                    var e=a.getFinalValues(),
                    t= {
                        tokenAddress: a.state.currencies[0].address, tokenType: a.state.currencies[0].type
                    }
                    ;
                    e[0].tokenId&&(t.tokenId=e[0].tokenId),
                    Ae(t).then(function(e) {
                        return a.props.setStateFromChild( {
                            metamaskPending:!1, pending:!0, modalContents:a.getModalContents( {
                                step: yt.APPROVE_UNLOCK, currencies: a.state.currencies, approvalHash: e, innerImages: a.state.innerImages, images: a.state.images
                            }
                            )
                        }
                        ), Pe( {
                            hash: e
                        }
                        )
                    }
                    ).then(function(e) {
                        a.props.setStateFromChild( {
                            metamaskPending:!1, pending:!1, modalContents:a.getModalContents( {
                                step: yt.SIGN, currencies: a.state.currencies, approvalHash: a.state.approvalHash, innerImages: a.state.innerImages, images: a.state.images
                            }
                            )
                        }
                        , function() {
                            a.showModal()
                        }
                        )
                    }
                    ).catch(function() {
                        a.props.setStateFromChild( {
                            metamaskPending: !1, pending: !1, loading: !1, error: !0
                        }
                        , function() {
                            a.hideModal()
                        }
                        )
                    }
                    )
                }
                ,
                a.isInvalid=function() {
                    var e=a.state,
                    t=e.currencies,
                    n=e.fields,
                    s=e.loading,
                    r=!1;
                    return!window.web3||(!!s||(2!==t.length||(!t[0]||!t[1]||(t.forEach(function(e, t) {
                        a.state.allFields[t].forEach(function(e) {
                            Lt[t].indexOf(e)<0&&!Boolean(n[t]&&n[t][e])&&(r=!0)
                        }
                        )
                    }
                    ), r))))
                }
                ,
                a.getModalContents=function(e) {
                    var t=e.step,
                    n=e.currencies,
                    s=e.approvalHash,
                    r=e.innerImages,
                    i=e.images,
                    o=a.getFinalValues(),
                    c=D(n[0].type);
                    switch(t) {
                        case yt.APPROVE_UNLOCK:return {
                            headingText: Ct.UNLOCK, headingSVG: Be.a, text: s?"Transaction Hash:": Tt[c][t].TIME, linkText: s, linkURL: "https://etherscan.io/tx/"+s, onCTA: a.approve, ctaText: Tt[c][t].APPROVE(n[0].symbol)
                        }
                        ;
                        case yt.SIGN:return {
                            tradeHeading: {
                                takerSymbol: n[1].symbol, makerSymbol: n[0].symbol, innerImages: r, images: i, arrowsSVG: gt.a, amounts: [Ne(o[0].amount)||1, Ne(o[1].amount)||1]
                            }
                            ,
                            text:Tt[c][t].TIME,
                            onCTA:a.sign,
                            ctaText:Tt[c][t].SIGN(n[0].symbol, Ne(o[0].amount)||1, n[1].symbol, Ne(o[1].amount)||1)
                        }
                        ;
                        case yt.METAMASK_PERMISSION:if(window.ethereum) {
                            var l=function() {
                                Object(de.a)().then(function() {}
                                ).catch(function() {}
                                )
                            }
                            ;
                            return l(),
                            {
                                headingText: Mt.TITLE, headingSVG: R.a, text: Mt.DESCRIPTION, linkText: Mt.LINKTEXT, onLinkClick: l
                            }
                        }
                        return {
                            headingText: Ot.TITLE, headingSVG: R.a, text: Ot.DESCRIPTION, linkText: Ot.LINKTEXT, linkURL: "https://metamask.io/#how-it-works"
                        }
                        ;
                        case yt.TOKEN_MISSING:var d=o[0].amount?Ne(o[0].amount)+" "+n[0].symbol:"that "+n[0].symbol;
                        return {
                            modalType: "modalStandard", headingText: Ct.ERRORTITLE, headingSVG: et.a, text: Ct.NOTOKEN(d), linkText: "", linkURL: ""
                        }
                    }
                }
                ;
                var n=e.meta.userAddress;
                return a.state= {
                    fields:[ {
                        makerAddress: n
                    }
                    ,
                    {}
                    ],
                    currencies:[],
                    allFields:[[],
                    []],
                    disabledFields:[["makerAddress"],
                    []],
                    images:Array.from(Dt),
                    innerImages:["",
                    ""],
                    prices:["",
                    ""],
                    showInvalid:!1,
                    expDate:M()().add(30, "day")
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    var e=this, t=this.props.params, a=t.makerAmount, n=t.makerAssetSymbol, s=t.takerAmount, r=t.takerAssetSymbol, i=t.takerAddress, o=this.state, c=o.currencies, l=o.fields, d=o.allFields, m=o.prices;
                    l[0]||(l[0]= {}
                    ), l[1]||(l[1]= {}
                    );
                    var u=this.getCurrencyFromSymbol(n), p=this.getCurrencyFromSymbol(r);
                    u&&(c[0]=u, d[0]=_t[D(u.type)][0], 0===u.type.indexOf("erc721")?l[0].tokenId=a: l[0].amount=a, m[0]=""), p&&(c[1]=p, d[1]=_t[D(p.type)][1], 0===p.type.indexOf("erc721")?l[1].tokenId=s: l[1].amount=s, m[1]=""), i&&(l[1].takerAddress=i), this.setState( {
                        currencies: c, fields: l, allFields: d, prices: m
                    }
                    , function() {
                        u&&(e.setImages(0), e.setPrice(0)), p&&(e.setImages(1), e.setPrice(1))
                    }
                    )
                }
            }
            , {
                key:"componentDidUpdate", value:function(e) {
                    var t=this.props, a=this.state;
                    if(e.meta.userAddress!==t.meta.userAddress) {
                        var n=a.fields;
                        n[0].makerAddress=t.meta.userAddress, this.setState( {
                            fields: n
                        }
                        ), t.meta.userAddress&&3===this.state.modalStep&&this.props.setStateFromChild( {
                            modalShown: !1
                        }
                        )
                    }
                }
            }
            , {
                key:"render", value:function() {
                    var e=this, t=this.state, a=t.currencies, n=t.contractAddress, r=t.error, i=t.images, o=t.innerImages, c=t.showInvalid, l=t.expDate, d=this.props, m=d.meta, u=d.onClose, y=d.params, f=d.componentType;
                    if(n)return s.a.createElement(p.a, {
                        to: {
                            pathname:"/status/".concat(n), state: {
                                searchAddress: n
                            }
                        }
                    }
                    );
                    var b, h=a.map(function(t, a) {
                        return e.state.allFields[a].map(function(t, n) {
                            var r, i=It.FIELDS[t], o=e.state.fields[a]|| {}
                            ;
                            if(f===pt.OFFER_MODAL&&"makerAddress"===t)return"";
                            if(0===n&&e.state.prices[a]) {
                                var c=o[t]?o[t]: 0;
                                r="~$"+String((e.state.prices[a]*c).toFixed(2))
                            }
                            return s.a.createElement("div", {
                                className: "form-group", key: "fields_".concat(a, "_").concat(t)
                            }
                            , s.a.createElement("label", {
                                htmlFor: "fields_".concat(a, "_").concat(t)
                            }
                            , i.name), i.help&&s.a.createElement("div", null, s.a.createElement("div", {
                                id: "tip_".concat(a, "_").concat(t), className: "d-inline-block help"
                            }
                            , s.a.createElement(T.a, {
                                svgStyle: {
                                    maxWidth: "14px"
                                }
                                , src:vt.a
                            }
                            )), s.a.createElement(C.o, {
                                placement: "top", target: "tip_".concat(a, "_").concat(t)
                            }
                            , i.help)), i.asteriksMessage&&s.a.createElement("label", {
                                className: "d-inline-block asteriks-message"
                            }
                            , i.asteriksMessage), s.a.createElement("input", {
                                className: "form-control ".concat(e.state.showInvalid&&Lt[a].indexOf(t)<0&&!o[t]?"is-invalid": ""), type: "text", name: t, id: "fields_".concat(a, "_").concat(t), onChange: e.updateFieldValue(a, t), value: o[t]||"", disabled: e.state.disabledFields[a].indexOf(t)>=0
                            }
                            ), s.a.createElement("span", {
                                className: "desc"
                            }
                            , r))
                        }
                        )
                    }
                    );
                    switch(f) {
                        case pt.SWAP_PAGE:b=s.a.createElement(xt, {
                            onSubmit: this.onSubmit, images: i, innerImages: o, meta: m, currencies: a, showInvalid: c, fieldsToShow: h, toggleCalendar: this.toggleCalendar, setCurrencyAtIndex: this.setCurrencyAtIndex, expDate: l, error: r, handleChange: this.handleChange, isOpen: this.state.isOpen
                        }
                        );
                        break;
                        case pt.OFFER_MODAL:b=s.a.createElement(At, {
                            onSubmit:this.onSubmit, images:i, innerImages:o, meta:m, currencies:a, showInvalid:c, fieldsToShow:h, toggleCalendar:this.toggleCalendar, setCurrencyAtIndex:this.setCurrencyAtIndex, expDate:l, error:r, onClose:function() {
                                return u()
                            }
                            , onChange:this.updateFieldValue, params:y, handleChange:this.handleChange, isOpen:this.state.isOpen
                        }
                        );
                        break;
                        default:b=null
                    }
                    return b
                }
            }
            ]),
            t
        }
        (s.a.Component),
        Ut=(a(1671), a(575), a(590)),
        Rt=a.n(Ut),
        jt=a(591),
        Bt=a.n(jt),
        Ht=w[S().code].Trade,
        Gt=(w[S().code].Modal, w[S().code].ModalCommon, w[S().code].MetamaskModal, w[S().code].PermissionModal, function(e) {
            function t(e) {
                var a;
                Object(c.a)(this, t), (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).modalFunction=function(e) {
                    var t=e.modalData, n=e.modalStatus, s=n|| {}
                    ;
                    t&&(s.modalData=t), a.setState(s, function() {
                        a.showModal()
                    }
                    )
                }
                , a.setStateFromChild=function(e, t) {
                    a.setState(e, function() {
                        t&&t()
                    }
                    )
                }
                , a.toggleModal=function() {
                    a.state.modalShown?a.hideModal(): a.showModal()
                }
                , a.showModal=function(e) {
                    e&&e.preventDefault(), a.setState( {
                        modalShown: !0
                    }
                    )
                }
                , a.hideModal=function(e) {
                    e&&e.preventDefault(), a.setState( {
                        loading: !1, error: !1, modalShown: !1
                    }
                    )
                }
                ;
                e.meta.userAddress;
                return a.state= {
                    contractAddress: "", modalShown: !1, showInvalid: !1
                }
                , a
            }
            return Object(u.a)(t, e), Object(l.a)(t, [ {
                key:"render", value:function() {
                    var e, t=this, a=this.props, n=this.state, r=(n.contractAddress, n.loading, n.error, n.modalShown), i=(n.modalStep, n.metamaskPending), o=n.pending, c=n.modalContents;
                    return r&&(e=s.a.createElement(J, {
                        heading: c.headingText, headerSVG: c.headingSVG, tradeHeading: c.tradeHeading, text: c.text, onLinkClick: c.onLinkClick, linkText: c.linkText, linkURL: c.linkURL, metamaskPending: i, pending: o, onCTA: c.onCTA, onClose: this.hideModal, ctaText: c.ctaText
                    }
                    )), s.a.createElement("div", {
                        className: "Trade"
                    }
                    , s.a.createElement("div", {
                        className:"Banner", style: {
                            background: "url(".concat(Rt.a, ") left bottom no-repeat")
                        }
                    }
                    , s.a.createElement("div", {
                        className:"d-flex h-100 align-items-center justify-content-center", style: {
                            background: "url(".concat(Bt.a, ") right bottom no-repeat")
                        }
                    }
                    , s.a.createElement("h1", null, Ht.HEADING), s.a.createElement("span", null, Ht.SUBHEADING))), s.a.createElement("div", {
                        className: "ContentArea"
                    }
                    , s.a.createElement(Ft, {
                        meta:a.meta, params:a.match.params, componentType:pt.SWAP_PAGE, setStateFromChild:function(e, a) {
                            return t.setStateFromChild(e, a)
                        }
                    }
                    )), s.a.createElement(C.h, {
                        centered: !0, isOpen: n.modalShown, toggle: this.toggleModal
                    }
                    , e))
                }
            }
            ]), t
        }
        (s.a.Component)),
        Wt=(a(1672), a(592)),
        Vt=a.n(Wt),
        Kt=a(593),
        Yt=a.n(Kt),
        Jt=a(594),
        Xt=a.n(Jt),
        zt=a(595),
        Qt=a.n(zt),
        Zt=a(596),
        qt=a.n(Zt),
        $t=a(597),
        ea=a.n($t),
        ta=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).toggleCollapse=function(e) {
                    return function() {
                        a.setState(function(t) {
                            return {
                                collapseID: t.collapseID!==e?e: ""
                            }
                        }
                        );
                        var t=document.getElementById(e);
                        t.style.maxHeight?t.style.maxHeight=null:(a.closeAll(), t.style.maxHeight=t.scrollHeight+"px")
                    }
                }
                ,
                a.addressInputChange=function(e) {
                    return a.setState( {
                        searchAddress: e.target.value
                    }
                    )
                }
                ,
                a.search=function(e) {
                    e.preventDefault(),
                    a.state.searchAddress&&a.props.history.push("/status/".concat(a.state.searchAddress))
                }
                ,
                a.state= {
                    collapseID: "collapseNone"
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    this.setState(function(e) {
                        return {
                            collapseID: "collapseOne"
                        }
                    }
                    );
                    var e=document.getElementById("collapseOne");
                    e.style.maxHeight=e.scrollHeight+"px"
                }
            }
            , {
                key:"closeAll", value:function() {
                    document.getElementById("collapseOne").style.maxHeight=null, document.getElementById("collapseTwo").style.maxHeight=null, document.getElementById("collapseThree").style.maxHeight=null
                }
            }
            , {
                key:"render", value:function() {
                    return s.a.createElement("div", {
                        className: "Landing"
                    }
                    , s.a.createElement("header", {
                        className: "App-header"
                    }
                    ), s.a.createElement("div", {
                        className: "outercontainer"
                    }
                    , s.a.createElement("img", {
                        src: Xt.a, className: "circle-leaves ", alt: ""
                    }
                    ), s.a.createElement("div", {
                        className: "container"
                    }
                    , s.a.createElement("div", {
                        className: "row mt-5"
                    }
                    , s.a.createElement("div", {
                        className: "col-12 col-md-6 pt-5"
                    }
                    , s.a.createElement("h3", {
                        className: "HeavyFont"
                    }
                    , "Wallet and Swapping made for NFT Traders"), s.a.createElement("p", {
                        className: "mt-5"
                    }
                    , "Find an existing over-the-counter order"), s.a.createElement("form", null, s.a.createElement("div", {
                        className: "input-group mt-3 custom-inputfull"
                    }
                    , s.a.createElement("input", {
                        type:"text", className:"form-control custom-input", placeholder:"Enter order json here\u2026", "aria-label":"Enter order json here\u2026", style: {
                            height: "40px"
                        }
                        , onChange:this.addressInputChange
                    }
                    ), s.a.createElement("div", {
                        className: "input-group-append"
                    }
                    , s.a.createElement("button", {
                        className:"btn btn-info text-uppercase ", style: {
                            width: "102px"
                        }
                        , type:"button", onClick:this.search
                    }
                    , "GO")))), s.a.createElement("p", {
                        className: "mt-3"
                    }
                    , "Manage your digital assets or create a new swap with custom terms"), s.a.createElement(o.b, {
                        to: "/wallet"
                    }
                    , s.a.createElement("button", {
                        className: "btn bigger-btn btn-accent mb-5 text-uppercase landing-btn", type: "button"
                    }
                    , "WALLET")), s.a.createElement(o.b, {
                        to: "/swap"
                    }
                    , s.a.createElement("button", {
                        className: "btn bigger-btn btn-primary mb-5 text-uppercase landing-btn", type: "button"
                    }
                    , "QUICK SWAP"))), s.a.createElement("div", {
                        className: "col-12 col-md-6 coin-animation"
                    }
                    , s.a.createElement("div", {
                        className: "pl-5"
                    }
                    , s.a.createElement("img", {
                        src: Vt.a, className: "circle-animated", alt: ""
                    }
                    )))))), s.a.createElement("div", {
                        className: "Mask pt-5 pb-4 px-3 px-md-5"
                    }
                    , s.a.createElement("div", {
                        className: "text-center pt-2"
                    }
                    , s.a.createElement("h4", {
                        className: "HeavyFont"
                    }
                    , "Our Wallet")), s.a.createElement("div", {
                        className: "row mt-md-5 px-sm-5 justify-content-center"
                    }
                    , s.a.createElement("div", {
                        className: "col-12 col-md-6"
                    }
                    , s.a.createElement("div", {
                        className: "text-center"
                    }
                    , s.a.createElement("img", {
                        src: Yt.a, className: "lady-animated img-fluid mt-4 mt-lg-3 mb-5", alt: ""
                    }
                    ))), s.a.createElement("div", {
                        className: "col-12 col-md-6 pl-lg-4 accordion-container"
                    }
                    , s.a.createElement("div", {
                        className: "accordion", id: "accordion"
                    }
                    , s.a.createElement("div", {
                        className: "card custom-card"
                    }
                    , s.a.createElement("div", {
                        className: "collapseOne"!==this.state.collapseID?"card-header custom-card-header collapsed show": "card-header custom-card-header collapsed", "data-toggle": "collapse", "data-target": "#collapseOne", onClick: this.toggleCollapse("collapseOne"), "aria-controls": "collapseOne", "aria-expanded": "false", id: "headingOne"
                    }
                    , s.a.createElement("div", {
                        className: "card-header-title"
                    }
                    , s.a.createElement("table", {
                        style: {
                            width: "100%"
                        }
                    }
                    , s.a.createElement("tbody", null, s.a.createElement("tr", null, s.a.createElement("td", null, s.a.createElement("span", null, "Easy digital asset management")), s.a.createElement("td", {
                        width: "20px"
                    }
                    , s.a.createElement("i", {
                        className:"collapseOne"===this.state.collapseID?"fa fa-angle-up rotate-icon":"fa fa-angle-down", style: {
                            float: "right"
                        }
                    }
                    ))))))), s.a.createElement("div", {
                        id: "collapseOne", className: "collapse show", "aria-labelledby": "headingOne", "data-parent": "#accordionExample"
                    }
                    , s.a.createElement("div", {
                        className: "card-x-padding card-body custom-card-body custom-border light-background"
                    }
                    , "All your NFTs in one place. Manage what you own and track the value of your portfolio with BoxSwap."))), s.a.createElement("div", {
                        className: "card custom-card"
                    }
                    , s.a.createElement("div", {
                        className: "collapseTwo"!==this.state.collapseID?"card-header custom-card-header collapsed show": "card-header custom-card-header collapsed", "data-toggle": "collapse", "data-target": "#collapseTwo", onClick: this.toggleCollapse("collapseTwo"), "aria-controls": "collapseTwo", "aria-expanded": "false", id: "headingTwo"
                    }
                    , s.a.createElement("div", {
                        className: "card-header-title"
                    }
                    , s.a.createElement("table", {
                        style: {
                            width: "100%"
                        }
                    }
                    , s.a.createElement("tbody", null, s.a.createElement("tr", null, s.a.createElement("td", null, s.a.createElement("span", null, "Secure peer-to-peer swapping ")), s.a.createElement("td", {
                        width: "20px"
                    }
                    , s.a.createElement("i", {
                        className:"collapseTwo"===this.state.collapseID?"fa fa-angle-up rotate-icon":"fa fa-angle-down", style: {
                            float: "right"
                        }
                    }
                    ))))))), s.a.createElement("div", {
                        id: "collapseTwo", className: "collapse show", "aria-labelledby": "headingTwo", "data-parent": "#accordionExample"
                    }
                    , s.a.createElement("div", {
                        className: "card-x-padding card-body custom-card-body custom-border light-background"
                    }
                    , "BoxSwap provides a safe and scam-free way to trade with anyone. Once a swap is executed, we swap the assets of both sides simultaneously."))), s.a.createElement("div", {
                        className: "card custom-card"
                    }
                    , s.a.createElement("div", {
                        className: "card-header custom-card-header collapsed", "data-toggle": "collapse", "data-target": "#collapseThree", onClick: this.toggleCollapse("collapseThree"), "aria-controls": "collapseThree", "aria-expanded": "false", id: "headingThree"
                    }
                    , s.a.createElement("div", {
                        className:"card-header-title", style: {
                            borderBottom: "none"
                        }
                    }
                    , s.a.createElement("table", {
                        style: {
                            width: "100%"
                        }
                    }
                    , s.a.createElement("tbody", null, s.a.createElement("tr", null, s.a.createElement("td", null, s.a.createElement("span", null, "Purchase ERC20 Tokens Instantly")), s.a.createElement("td", {
                        width: "20px"
                    }
                    , s.a.createElement("i", {
                        className:"collapseThree"===this.state.collapseID?"fa fa-angle-up rotate-icon":"fa fa-angle-down", style: {
                            float: "right"
                        }
                    }
                    ))))))), s.a.createElement("div", {
                        id: "collapseThree", className: "collapse show", "aria-labelledby": "headingThree", "data-parent": "#accordionExample"
                    }
                    , s.a.createElement("div", {
                        className: "card-x-padding card-body custom-card-body custom-border light-background"
                    }
                    , "BoxSwap offers instant purchasing of popular ERC20 assets used in our community of NFT traders, this is made possible by 0x Protocol.")))), s.a.createElement("a", {
                        className: "taglineLink", target: "_blank", href: "https://discord.gg/X23u9B7", rel: "noopener noreferrer"
                    }
                    , s.a.createElement("button", {
                        className: "btn bigger-btn btn-primary text-uppercase my-5"
                    }
                    , "ASK US ANYTHING"))))), s.a.createElement("div", {
                        className: "Mask2 py-5"
                    }
                    , s.a.createElement("div", {
                        className: "text-center pt-2"
                    }
                    , s.a.createElement("h4", null, "Swap in Three Easy Steps")), s.a.createElement("div", {
                        className: "mt-5 mb-sm-4 row px-md-3 justify-content-center"
                    }
                    , s.a.createElement("div", {
                        className: " col-12 col-lg-4 col-sm-6 mb-4 d-flex align-items-stretch custom-card-widths"
                    }
                    , s.a.createElement("div", {
                        className: "card card-body custom-card custom-card-body"
                    }
                    , s.a.createElement(T.a, {
                        src: Qt.a, className: "card-img-top SmallIcon"
                    }
                    ), s.a.createElement("div", {
                        className: "card-body custom-card-body"
                    }
                    , s.a.createElement("h5", {
                        className: "card-title"
                    }
                    , "Make"), s.a.createElement("p", {
                        className: "card-text mb-2"
                    }
                    , "Set the terms of your swap and sign to authorize.")))), s.a.createElement("div", {
                        className: "col-12 col-lg-4 col-sm-6  mb-4 d-flex align-items-stretch custom-card-widths"
                    }
                    , s.a.createElement("div", {
                        className: "card card-body custom-card custom-card-body"
                    }
                    , s.a.createElement(T.a, {
                        src: ea.a, className: "card-img-top SmallIcon"
                    }
                    ), s.a.createElement("div", {
                        className: "card-body custom-card-body"
                    }
                    , s.a.createElement("h5", {
                        className: "card-title"
                    }
                    , "Send"), s.a.createElement("p", {
                        className: "card-text mb-2"
                    }
                    , "Use the order json or url link of your swap to send the swap to others, or post on social media or forums.")))), s.a.createElement("div", {
                        className: "col-12 col-lg-4 col-sm-6  mb-4 d-flex align-items-stretch custom-card-widths"
                    }
                    , s.a.createElement("div", {
                        className: "card card-body custom-card custom-card-body"
                    }
                    , s.a.createElement(T.a, {
                        src: qt.a, className: "card-img-top SmallIcon"
                    }
                    ), s.a.createElement("div", {
                        className: "card-body custom-card-body"
                    }
                    , s.a.createElement("h5", {
                        className: "card-title"
                    }
                    , "Fill"), s.a.createElement("p", {
                        className: "card-text mb-2"
                    }
                    , "Anyone who has your swap\u2019s json or link can arrive at your order and choose to fill it.")))))))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        aa=Object(p.f)(ta),
        na= {
            1: {
                productId:1,
                badgeName:"BoxKey",
                badgeId:"boxKey",
                image:"/img/badges/access.svg",
                description:"Gives access to premium content and app features.",
                price:"0.2",
                buyDescription:"Feature Access \u2022 Capped at 1000 \u2022 Discord Role",
                stats: {
                    supply: 1e3
                }
                ,
                icons: {
                    access: {
                        iconName: "access", image: "/img/badges/badgeIcons/accessBadge.svg", description: "Feature Access"
                    }
                    ,
                    capped: {
                        iconName: "capped", image: "/img/badges/badgeIcons/lockBadge.svg", description: "Limited"
                    }
                    ,
                    discord: {
                        iconName: "Discord", image: "/img/badges/badgeIcons/discordBadge.svg", description: "Discord Role"
                    }
                }
            }
            ,
            2: {
                productId:2,
                badgeName:"Hustler",
                badgeId:"hustler",
                image:"/img/badges/hustler.svg",
                description:"Rewarded to trader who made the most swaps in the month.",
                stats: {}
                ,
                isPurchaseable:!1,
                icons: {
                    earned: {
                        iconName: "earned", image: "/img/badges/badgeIcons/rewardBadge.svg", description: "Reward Badge"
                    }
                    ,
                    discord: {
                        iconName: "Discord", image: "/img/badges/badgeIcons/discordBadge.svg", description: "Discord Role"
                    }
                }
            }
            ,
            3: {
                productId:3,
                badgeName:"Baller",
                badgeId:"baller",
                image:"/img/badges/baller.svg",
                description:"Rewarded to trader who made the most valuable swap of the month.",
                stats: {}
                ,
                isPurchaseable:!1,
                icons: {
                    earned: {
                        iconName: "earned", image: "/img/badges/badgeIcons/rewardBadge.svg", description: "Reward Badge"
                    }
                    ,
                    discord: {
                        iconName: "Discord", image: "/img/badges/badgeIcons/discordBadge.svg", description: "Discord Role"
                    }
                }
            }
        }
        ,
        sa=(a(2), {
            1: {
                ETH: {
                    address: "ETH", decimals: 18, image_file: "eth.svg", name: "Ethereum", symbol: "ETH", type: "eth"
                }
                , "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": {
                    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", decimals: 18, image_file: "weth.svg", name: "Wrapped Ether", symbol: "WETH", type: "erc20"
                }
                , "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359": {
                    address: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359", decimals: 18, image_file: "dai.svg", name: "Dai Stablecoin", symbol: "DAI", type: "erc20", assetData: "0xf47261b000000000000000000000000089d24a6b4ccb1b6faa2625fe562bdd9a23260359"
                }
                , "0xe41d2489571d322189246dafa5ebde1f4699f498": {
                    address: "0xe41d2489571d322189246dafa5ebde1f4699f498", decimals: 18, image_file: "zrx.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fzrx.svg?alt=media&token=66e127de-3891-4c1f-87c4-b13309a25f47", name: "0x", symbol: "ZRX", type: "erc20", assetData: "0xf47261b0000000000000000000000000e41d2489571d322189246dafa5ebde1f4699f498"
                }
                , "0x0f5d2fb29fb7d3cfee444a200298f468908cc942": {
                    address: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942", decimals: 18, image_file: "mana.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fmana.svg?alt=media&token=7f55096a-303a-4d71-b4ea-f067ab99f077", name: "Decentraland", symbol: "MANA", type: "erc20", assetData: "0xf47261b00000000000000000000000000f5d2fb29fb7d3cfee444a200298f468908cc942", websiteURL: "https://market.decentraland.org/"
                }
                , "0x92bf969865c80eda082fd5d8b4e28da4d58e1c3a": {
                    address: "0x92bf969865c80eda082fd5d8b4e28da4d58e1c3a", decimals: 18, image_file: "luna.png", name: "LUNA", symbol: "LUNA", type: "erc20", optional: !0
                }
                , "0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d": {
                    address: "0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d", image_file: "axie.png", name: "AXIE", symbol: "AXIE", type: "erc721", viewAllName: "axie", estimateBasePair: "ETH", websiteURL: "https://axieinfinity.com/", isProfile: "true"
                }
                , "0x2f2d5aA0EfDB9Ca3C9bB789693d06BEBEa88792F": {
                    address: "0x2f2d5aA0EfDB9Ca3C9bB789693d06BEBEa88792F", image_file: "block.png", name: "BlockCities", symbol: "BKC", type: "erc721", viewAllName: "blockcitie", estimateBasePair: "ETH", websiteURL: "https://www.blockcities.co", isProfile: "true"
                }
                , "0x8c9b261faef3b3c2e64ab5e58e04615f8c788099": {
                    address: "0x8c9b261faef3b3c2e64ab5e58e04615f8c788099", image_file: "mlbcb.png", name: "Cryptobaseball", symbol: "MLBCB", type: "erc721", viewAllName: "cryptobaseball", estimateBasePair: "ETH", websiteURL: "https://mlbcryptobaseball.com/", isProfile: "true"
                }
                , "0x06012c8cf97bead5deae237070f9587f8e7a266d": {
                    address: "0x06012c8cf97bead5deae237070f9587f8e7a266d", image_file: "ck.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fck.svg?alt=media&token=f35597fe-792d-4a75-aef3-b47b10f1f342", name: "CryptoKitties", symbol: "CK", type: "erc721ck", viewAllName: "cryptokitties", estimateBasePair: "ETH", websiteURL: "https://www.cryptokitties.co/", isProfile: "true"
                }
                , "0x09fe5f0236f0ea5d930197dce254d77b04128075": {
                    address: "0x09fe5f0236f0ea5d930197dce254d77b04128075", decimals: 18, image_file: "cwt.png", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fck.svg?alt=media&token=f35597fe-792d-4a75-aef3-b47b10f1f342", name: "WrappedKitties", symbol: "WK", type: "erc20", optional: !0
                }
                , "0x4d3814d4da8083b41861dec2f45b4840e8b72d68": {
                    address: "0x4d3814d4da8083b41861dec2f45b4840e8b72d68", image_file: "csc.png", name: "CSC", symbol: "CSC", type: "erc721", viewAllName: "spacecommanders", estimateBasePair: "ETH", websiteURL: "https://www.csc-game.com/", optional: !0, isProfile: "true"
                }
                , "0x6ebeaf8e8e946f0716e6533a6f2cefc83f60e8ab": {
                    address: "0x6ebeaf8e8e946f0716e6533a6f2cefc83f60e8ab", image_file: "gods.png", name: "Gods Unchained", symbol: "GODS", type: "erc721", viewAllName: "gods", estimateBasePair: "ETH", websiteURL: "https://godsunchained.com/", isProfile: "true", isNonSwappable: "true"
                }
                , "0x4f41d10f7e67fd16bde916b4a6dc3dd101c57394": {
                    address: "0x4f41d10f7e67fd16bde916b4a6dc3dd101c57394", image_file: "flower.png", name: "Flowerpatch", symbol: "FLOWER", type: "erc721", viewAllName: "flower", estimateBasePair: "ETH", websiteURL: "https://flowerpatch.app/", optional: !0, isProfile: "true"
                }
                , "0x1276dce965ada590e42d62b3953ddc1ddceb0392": {
                    address: "0x1276dce965ada590e42d62b3953ddc1ddceb0392", image_file: "neon.png", name: "NeonDistrict", symbol: "NEON", type: "erc721", viewAllName: "neon", estimateBasePair: "ETH", websiteURL: "https://neondistrict.io/", optional: !0, isProfile: "true"
                }
            }
            , 42: {
                "0x2002d3812f58e35f0ea1ffbf80a75a38c32175fa": {
                    address: "0x2002d3812f58e35f0ea1ffbf80a75a38c32175fa", decimals: 18, image_file: "zrx.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fzrx.svg?alt=media&token=66e127de-3891-4c1f-87c4-b13309a25f47", name: "0x", symbol: "ZRX", type: "erc20"
                }
                , "0x7b6b10caa9e8e9552ba72638ea5b47c25afea1f3": {
                    address: "0x7b6b10caa9e8e9552ba72638ea5b47c25afea1f3", decimals: 18, image_file: "mkr.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fmkr.svg?alt=media&token=c3998339-639c-4c05-a9e4-d18251e544bc", name: "Maker", symbol: "MKR", type: "erc20"
                }
                , "0x31fb614e223706f15d0d3c5f4b08bdf0d5c78623": {
                    address: "0x31fb614e223706f15d0d3c5f4b08bdf0d5c78623", decimals: 18, image_file: "gnt.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Fgnt.svg?alt=media&token=789f53df-e15d-4aee-8eef-177d4b1dc563", name: "Golem Network Token", symbol: "GNT", type: "erc20"
                }
                , "0x8cb3971b8eb709c14616bd556ff6683019e90d9c": {
                    address: "0x8cb3971b8eb709c14616bd556ff6683019e90d9c", decimals: 18, image_file: "rep.svg", img: "https://firebasestorage.googleapis.com/v0/b/blockswap-46c8d.appspot.com/o/img%2Ftokens%2Frep.svg?alt=media&token=d10ed2af-c133-4e45-b564-8063b3d8a495", name: "Augur", symbol: "REP", type: "erc20"
                }
            }
            , 0: {
                1: {
                    address: "0x0000000000000000000000000000000000000000", decimals: 18, img: "", name: "Unknown", symbol: "Unknown", type: "erc20"
                }
                , 2: {
                    address: "0x0000000000000000000000000000000000000000", decimals: 18, img: "", name: "Unknown", symbol: "Unknown", type: "erc20"
                }
            }
        }
        ),
        ra=(a(576), a(350)),
        ia=a.n(ra),
        oa=function(e) {
            var t=e.estimationAmount,
            a=e.estimateBasePair,
            n=e.estimationBasePrice,
            r=e.estimation,
            i=e.modalFunction,
            o=e.address;
            return s.a.createElement("div", null, a&&s.a.createElement("button", {
                className:"wallet-estimate-button transition", onClick:function() {
                    return i( {
                        type: "ESTIMATE", address: o, estimationAmount: t, estimationBasePrice: n
                    }
                    )
                }
            }
            , r?s.a.createElement("div", null, r.toString()):s.a.createElement("img", {
                src: ia.a, className: "wallet-item-edit", alt: "Snow"
            }
            )))
        }
        ,
        ca=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).state= {
                    number: null
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"render", value:function() {
                    var e, t=this.props, a=t.itemProps, n=a.image_file, r=a.name, i=a.symbol, o=a.address, c=a.assetData, l=a.viewAllName, d=a.estimateBasePair, m=a.websiteURL, u=t.modalFunction, p=t.tokenAmount, y=t.tokenPrice, f=t.estimation, b=t.estimationBasePrice, h=t.estimationAmount, g=t.estimationsFetched;
                    void 0!==y&&0!==y&&(e="$"+String((y*p).toFixed(2)));
                    var k=0;
                    return void 0!==p&&0!==p&&(k=Math.round(1e5*p)/1e5), s.a.createElement("tr", {
                        className: "table-row-card wallet-item"
                    }
                    , s.a.createElement("td", {
                        className: "wallet-item-asset"
                    }
                    , s.a.createElement("div", {
                        className: "d-inline-block"
                    }
                    , s.a.createElement("div", {
                        className: "d-inline-block wallet-item-wrapper-image"
                    }
                    , s.a.createElement("a", {
                        target: "_blank", href: m, rel: "noopener noreferrer"
                    }
                    , s.a.createElement("img", {
                        src: "/img/tokenImages/"+n, alt: ""
                    }
                    ))), s.a.createElement("div", {
                        className: "d-inline-block token-name"
                    }
                    , r))), s.a.createElement("td", {
                        align: "right"
                    }
                    , s.a.createElement("div", null, k, " ", i)), !this.props.infoDenied&&s.a.createElement("td", {
                        align: "right", className: "price-element"
                    }
                    , s.a.createElement("div", {
                        className: "total-price"
                    }
                    , e, d&&0!==k&&g&&s.a.createElement(oa, {
                        estimationAmount: h, estimateBasePair: d, estimationBasePrice: b, estimation: f, modalFunction: u, address: o
                    }
                    ))), s.a.createElement("td", {
                        align: "right"
                    }
                    , "WETH"===i&&s.a.createElement("button", {
                        className:"wallet-action-button transition", onClick:function() {
                            return u( {
                                type: "WRAP", address: o
                            }
                            )
                        }
                    }
                    , "WRAP"), c&&s.a.createElement("button", {
                        className:"wallet-action-button transition", onClick:function() {
                            return u( {
                                type: "BUY", assetData: c
                            }
                            )
                        }
                    }
                    , "BUY"), l&&k>0&&s.a.createElement("button", {
                        className:"wallet-action-button transition", onClick:function() {
                            return u( {
                                type: "VIEWALL", viewAllName: l
                            }
                            )
                        }
                    }
                    , "VIEW"), !l&&k>0&&s.a.createElement("button", {
                        className:"wallet-action-button ml-3 transition", onClick:function() {
                            return u( {
                                type: "SEND", address: o, tokenAmount: p, tokenPrice: y
                            }
                            )
                        }
                    }
                    , "GIFT")))
                }
            }
            ]),
            t
        }
        (n.Component),
        la=a(249),
        da=(a(199), a(1673), a(598)),
        ma=a.n(da),
        ua=a(599),
        pa=a.n(ua),
        ya=(w[S().code].Trade, function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t), (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).onMouseEnterDropdown=function() {
                    a.setState( {
                        dropdownOpen: !0
                    }
                    )
                }
                , a.onMouseLeaveDropdown=function() {
                    a.setState( {
                        dropdownOpen: !1
                    }
                    )
                }
                , a.toggleTooltip=function() {
                    a.setState( {
                        tooltipOpen: !a.state.tooltipOpen
                    }
                    )
                }
                , a.toggle=a.toggle.bind(Object(y.a)(Object(y.a)(a))), a.state= {
                    dropdownOpen: !1, tooltipOpen: !1
                }
                , a
            }
            return Object(u.a)(t, e), Object(l.a)(t, [ {
                key:"toggle", value:function() {
                    this.setState(function(e) {
                        return {
                            dropdownOpen: !e.dropdownOpen
                        }
                    }
                    )
                }
            }
            , {
                key:"componentDidUpdate", value:function(e) {}
            }
            , {
                key:"componentDidMount", value:function() {}
            }
            , {
                key:"render", value:function() {
                    var e, t=this.props, a=t.token, n=t.tokenType, r=t.modalFunction, i=t.traderId, o=t.userAddress, c=t.currencyData, l=(t.fullTokenInfo, a.tokenID), d=a.symbol, m=a.name, u=c.isNonSwappable, p=a.img, y=Object(Re.getTokenIDURL)(l, c.symbol);
                    if("Land"==n) {
                        var f=p.split("/");
                        "("+f[5]+","+f[6]+")"
                    }
                    return e=i&&i!==o?[s.a.createElement(C.b, {
                        key:1, onClick:function() {
                            return r( {
                                modalStep: yt.OFFER, tokenID: l, symbol: d
                            }
                            )
                        }
                    }
                    , "Offer")]:[s.a.createElement(C.b, {
                        key:2, onClick:function() {
                            return r( {
                                modalStep: yt.SWAP, tokenID: l, symbol: d
                            }
                            )
                        }
                    }
                    , "Swap"), s.a.createElement(C.b, {
                        key:1, onClick:function() {
                            return r( {
                                modalStep: yt.SEND, tokenID: l, symbol: d, currencyData: c
                            }
                            )
                        }
                    }
                    , "Gift")], s.a.createElement("div", {
                        className: "wallet-collectables-card-container col-4 col-sm-4 col-md-3 col-lg-2"
                    }
                    , s.a.createElement("div", {
                        className: "wallet-collectables-card"
                    }
                    , !u&&s.a.createElement(C.a, {
                        className: "wallet-token-edit transition", isOpen: this.state.dropdownOpen, onMouseOver: this.onMouseEnterDropdown, onMouseLeave: this.onMouseLeaveDropdown, toggle: this.toggle
                    }
                    , s.a.createElement(C.d, {
                        caret: !0
                    }
                    , s.a.createElement("img", {
                        src: ma.a, alt: "Snow", className: "hide transition"
                    }
                    )), s.a.createElement(C.c, {
                        right: !0
                    }
                    , e)), s.a.createElement("img", {
                        src: p, alt: n, className: "wallet-collectables-card-img"
                    }
                    ), s.a.createElement("div", {
                        className: "wallet-collectables-card-info"
                    }
                    , s.a.createElement("p", {
                        className: "ellipsis"
                    }
                    , m), s.a.createElement("h5", null, s.a.createElement("div", {
                        className: "tokenID transition ellipsis"
                    }
                    , l.toString()), y&&s.a.createElement("a", {
                        href: y, target: "_blank", className: "link-to-dapp-page hide transition"
                    }
                    , s.a.createElement("img", {
                        src: pa.a
                    }
                    ))))))
                }
            }
            ]), t
        }
        (n.Component)),
        fa=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).goBack=function() {
                    a.props.history;
                    a.props.history.push("/wallet")
                }
                ,
                a.onLoadMore=function() {
                    a.setState( {
                        loading: !0
                    }
                    , function() {
                        var e=a.state, t=(e.search, e.tokensData), n=e.perPage, s=e.remaining, r=e.lastGottenIndex, i=a.props, o=i.userAddress, c=i.traderId, l=i.currencyData, d=l.address, m=l.name, u=l.symbol, p=l.type, y=(l.imageApiField, l.image_file, l.ApiUrl, c||o), f=[], b=n<=s?n: s, h=Object(la.a)(t);
                        if(0!==b) {
                            for(var g=function(e) {
                                f.push(new Promise(function(t, a) {
                                    var n= {
                                        tokenID: "", tokenType: m, img: "", symbol: u, name: m, attributes: []
                                    }
                                    ;
                                    ke( {
                                        tokenAddress: d, tokenType: p, index: e, userAddress: y
                                    }
                                    ).then(function(e) {
                                        return n.tokenID=e.tokenID, Ue( {
                                            tokenId: e.tokenID, currency: l
                                        }
                                        )
                                    }
                                    ).then(function(e) {
                                        n.img=e.imageData, n.name=e.name, n.attributes=e.attributes, h.push(n), t(n)
                                    }
                                    ).catch(function() {}
                                    )
                                }
                                ))
                            }
                            , k=r;
                            k<b+r;
                            k++)g(k);
                            Promise.all(f).then(function(e) {
                                a.setState( {
                                    tokensData: h, lastGottenIndex: r+b, toGet: b, remaining: s-b
                                }
                                , function() {
                                    a.setState( {
                                        loading: !1
                                    }
                                    )
                                }
                                )
                            }
                            )
                        }
                    }
                    )
                }
                ,
                a.onSearch=function(e) {
                    a.setState( {
                        search: e.target.value
                    }
                    );
                    var t=a.state.tokensData,
                    n=a.props,
                    s=n.currencyData,
                    r=n.userAddress,
                    i=(n.traderId, s.address),
                    o=s.name,
                    c=s.symbol,
                    l=s.type,
                    d=(s.imageApiField, s.image_file, s.ApiUrl, e.target.value);
                    Ee( {
                        tokenAddress: i, tokenType: l, tokenID: d
                    }
                    ).then(function(e) {
                        if(e.ownerAddress===r)Ue( {
                            tokenId: d, currency: s
                        }
                        ).then(function(e) {
                            a.setState( {
                                searchedTokens:[ {
                                    tokenID: d, tokenType: o, img: e.imageData, name: e.name, symbol: c, attributes: e.attributes
                                }
                                ]
                            }
                            )
                        }
                        );
                        else {
                            var n=[];
                            t.forEach(function(e) {
                                e.tokenID.toString().startsWith(d)&&""!==d&&n.push(e)
                            }
                            ), a.setState( {
                                searchedTokens: n
                            }
                            )
                        }
                    }
                    )
                }
                ,
                a.state= {
                    imageData: "", tokenAmount: null, perPage: 12, remaining: 0, lastGottenIndex: 0, loading: !1, search: "", tokensData: [], searchedTokens: []
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidUpdate", value:function(e) {
                    var t=this;
                    e.userAddress!==this.props.userAddress?this.setState( {
                        tokenAmount: null, remaining: 0, lastGottenIndex: 0, loading: !1, search: "", tokensData: [], searchedTokens: []
                    }
                    , function() {
                        return t.onLoadMore()
                    }
                    ):e.amount!==this.props.amount&&this.setState( {
                        tokenAmount: this.props.amount, remaining: this.props.amount
                    }
                    , function() {
                        return t.onLoadMore()
                    }
                    )
                }
            }
            , {
                key:"componentDidMount", value:function() {
                    var e=this;
                    this.props.userAddress&&this.setState( {
                        tokenAmount: this.props.amount, remaining: this.props.amount
                    }
                    , function() {
                        return e.onLoadMore()
                    }
                    )
                }
            }
            , {
                key:"componentWillUnmount", value:function() {}
            }
            , {
                key:"render", value:function() {
                    var e=this.props.currencyData, t=(e.address, e.name), a=e.symbol, n=(e.type, e.imageApiField, e.image_file, e.ApiUrl, this.state), r=(n.allLoaded, n.tokensData), i=n.searchedTokens, o=(n.searchedSpecificToken, n.loading), c=n.remaining, l=(n.tokenAmount, this.props), d=l.modalFunction, m=l.userAddress, u=l.traderId, p=[];
                    return(r=""===this.state.search?r: i)&&r.forEach(function(a) {
                        p.push(s.a.createElement(ya, {
                            modalFunction: d, token: a, tokenType: t, key: a.tokenID, userAddress: m, traderId: u, currencyData: e
                        }
                        ))
                    }
                    ), s.a.createElement("div", null, s.a.createElement("div", {
                        className: "displayed-tokens-holder"
                    }
                    , s.a.createElement("input", {
                        className: "wallet-collectables-search", placeholder: "Enter token id here...", onChange: this.onSearch, value: this.state.search, type: "number", step: "any"
                    }
                    ), s.a.createElement("div", {
                        className: "row"
                    }
                    , p), 0===this.state.tokenAmount&&s.a.createElement("h3", null, "No ", a, " to display...")), s.a.createElement("div", null, o&&s.a.createElement("div", {
                        style: {
                            width: "100%", textAlign: "center"
                        }
                    }
                    , s.a.createElement(I.a, {
                        style: {
                            margin: "auto"
                        }
                        , type:"Circles", color:"#DD3BAD"
                    }
                    )), !o&&0!=c&&s.a.createElement("button", {
                        className: "load-more-button", onClick: this.onLoadMore
                    }
                    , "SEE MORE")))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        ba=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).goBack=function() {
                    a.props.history;
                    a.props.history.push("/wallet")
                }
                ,
                a.onLoadMore=function() {
                    a.setState( {
                        loading: !0
                    }
                    , function() {
                        var e=a.state, t=(e.search, e.tokensData), n=e.perPage, s=e.offset, r=e.tokenAmount, i=a.props, o=i.userAddress, c=i.traderId, l=i.currencyData, d=(l.address, l.name), m=l.symbol, u=(l.type, l.imageApiField, l.image_file, l.ApiUrl, c||o), p=Object(la.a)(t), y="https://api.cryptokitties.co/kitties?owner_wallet_address="+u+"&limit="+n+"&offset="+s;
                        _e()( {
                            method: "get", url: y
                        }
                        ).then(function(e) {
                            var t, i=e.data.kitties;
                            for(t=0;
                            t<i.length;
                            t++) {
                                var o= {
                                    tokenID: i[t].id, tokenType: d, img: i[t].image_url, name: i[t].name, symbol: m, fullTokenInfo: i[t]
                                }
                                ;
                                p.push(o)
                            }
                            var c=s+n, l=!1;
                            c>r&&(l=!0), a.setState( {
                                tokensData: p, offset: c, loading: !1, allLoaded: l
                            }
                            )
                        }
                        ).catch(function(e) {}
                        )
                    }
                    )
                }
                ,
                a.onSearch=function(e) {
                    a.setState( {
                        search: e.target.value
                    }
                    );
                    var t=a.state.tokensData,
                    n=a.props,
                    s=n.currencyData,
                    r=n.userAddress,
                    i=(n.traderId, s.address),
                    o=s.name,
                    c=s.symbol,
                    l=s.type,
                    d=(s.imageApiField, s.image_file, s.ApiUrl, e.target.value);
                    Ee( {
                        tokenAddress: i, tokenType: l, tokenID: d
                    }
                    ).then(function(e) {
                        if(e.ownerAddress===r)Ue( {
                            tokenId: d, currency: s
                        }
                        ).then(function(e) {
                            a.setState( {
                                searchedTokens:[ {
                                    tokenID: d, tokenType: o, img: e.imageData, name: e.name, symbol: c
                                }
                                ]
                            }
                            )
                        }
                        );
                        else {
                            var n=[];
                            t.forEach(function(e) {
                                e.tokenID.toString().startsWith(d)&&""!==d&&n.push(e)
                            }
                            ), a.setState( {
                                searchedTokens: n
                            }
                            )
                        }
                    }
                    )
                }
                ,
                a.state= {
                    imageData:"",
                    tokenAmount:null,
                    perPage:12,
                    allLoaded:!1,
                    offset:0,
                    loading:!1,
                    search:"",
                    tokensData:[],
                    searchedTokens:[],
                    currencyData: {}
                }
                ,
                a.state.currencyData=e.currencyData,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidUpdate", value:function(e) {
                    var t=this;
                    e.userAddress!==this.props.userAddress?this.setState( {
                        tokenAmount: this.props.amount, offset: 0, tokensData: [], searchedTokens: []
                    }
                    , function() {
                        return t.onLoadMore()
                    }
                    ):e.amount!==this.props.amount&&this.setState( {
                        tokenAmount: this.props.amount
                    }
                    , function() {
                        return t.onLoadMore()
                    }
                    )
                }
            }
            , {
                key:"componentDidMount", value:function() {
                    var e=this;
                    this.props.userAddress&&this.setState( {
                        tokenAmount: this.props.amount
                    }
                    , function() {
                        return e.onLoadMore()
                    }
                    )
                }
            }
            , {
                key:"componentWillUnmount", value:function() {}
            }
            , {
                key:"render", value:function() {
                    var e=this.props.currencyData, t=(e.address, e.name), a=e.symbol, n=(e.type, e.imageApiField, e.image_file, e.ApiUrl, this.props), r=n.modalFunction, i=n.userAddress, o=n.traderId, c=this.state, l=c.allLoaded, d=c.tokensData, m=c.searchedTokens, u=(c.searchedSpecificToken, c.loading), p=(c.remaining, c.tokenAmount), y=[];
                    return(d=""===this.state.search?d: m)&&d.forEach(function(a) {
                        y.push(s.a.createElement(ya, {
                            modalFunction: r, token: a, tokenType: t, key: a.tokenID, userAddress: i, traderId: o, currencyData: e
                        }
                        ))
                    }
                    ), s.a.createElement("div", null, s.a.createElement("div", {
                        className: "displayed-tokens-holder"
                    }
                    , s.a.createElement("input", {
                        className: "wallet-collectables-search", placeholder: "Enter token id here...", onChange: this.onSearch, value: this.state.search, type: "number", step: "any"
                    }
                    ), 0===p&&s.a.createElement("h3", null, "No ", a, " to display..."), s.a.createElement("div", {
                        className: "row"
                    }
                    , y)), s.a.createElement("div", null, u&&s.a.createElement("div", {
                        style: {
                            width: "100%", textAlign: "center"
                        }
                    }
                    , s.a.createElement(I.a, {
                        style: {
                            margin: "auto"
                        }
                        , type:"Circles", color:"#DD3BAD"
                    }
                    )), !u&&!l&&s.a.createElement("button", {
                        className: "load-more-button", onClick: this.onLoadMore
                    }
                    , "SEE MORE")))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        ha=(a(1674), function(e) {
            function t() {
                return Object(c.a)(this, t), Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e), Object(l.a)(t, [ {
                key:"render", value:function() {
                    var e=this.props, t=e.badges, a=e.isWallet, n=[];
                    return t.length&&t.forEach(function(e) {
                        var t=na[e.productId];
                        n.push(s.a.createElement(s.a.Fragment, {
                            key: "badgeKey"+e.tokenID
                        }
                        , s.a.createElement("img", {
                            className: "badge-header-icon", id: "badgeKey"+e.tokenID, src: t.image, alt: ""
                        }
                        ), s.a.createElement(C.o, {
                            placement: "top", delay: 0, target: "badgeKey"+e.tokenID
                        }
                        , t.badgeName+" #"+e.tokenID)))
                    }
                    ), s.a.createElement("div", {
                        className: "col-md-3 col-6 badges-holder"
                    }
                    , s.a.createElement("p", {
                        className: "profile-header-grey"
                    }
                    , "BADGES"), s.a.createElement("div", null, n, a&&s.a.createElement(o.b, {
                        to: "/badges"
                    }
                    , s.a.createElement("img", {
                        className: "badge-header-icon", src: "/img/badges/badgePlus.svg", alt: "badge", id: "add-badges"
                    }
                    ), s.a.createElement(C.o, {
                        placement: "top", target: "add-badges", trigger: "click"
                    }
                    , "Copied!"), s.a.createElement(C.o, {
                        placement: "top", delay: 0, target: "add-badges"
                    }
                    , "Get Badge"))))
                }
            }
            ]), t
        }
        (n.Component)),
        ga=w[S().code].MetamaskModal,
        ka=w[S().code].PermissionModal,
        va=w[S().code].ModalCommon,
        Ea=function(e) {
            var t=e.step,
            a=e.selectedSendToken,
            n=e.hash,
            s=e.wrapHash,
            r=e.currencyData,
            i=e.onSubmit,
            o=e.price,
            c=e.productId,
            l=e.text;
            switch(t) {
                case yt.SEND: var d=0===r.type.indexOf("erc721");
                return {
                    currencyData: r, tokenID: a.tokenID, tokenAmount: a.tokenAmount, tokenPrice: a.tokenPrice, headingText: "GIFT", imgUrl: "/img/tokenImages/box-"+r.image_file, text: r.name, linkText: n, linkURL: "https://etherscan.io/tx/"+n, onCTA: i, onSubmit: i, ctaText: "GIFT", type: yt.SEND, isNFT: d
                }
                ;
                case yt.ESTIMATE:var m=0===r.type.indexOf("erc721");
                return {
                    tokenAmount: a.estimationAmount, estimationBasePrice: a.estimationBasePrice, currencyData: r, headingText: "ESTIMATE VALUE", imgUrl: "./img/tokenImages/box-"+r.image_file, text: r.name, linkText: n, linkURL: "https://etherscan.io/tx/"+n, onCTA: (void 0).onSaveEstimatedValue, onSubmit: i, ctaText: "SAVE", type: yt.ESTIMATE, isNFT: m
                }
                ;
                case yt.SUCCESS:return n? {
                    type: yt.modalStandard, headingText: va.SUCCESS, headingSVG: Ge.a, text: "Transaction Hash: ", linkText: n, linkURL: "https://etherscan.io/tx/"+n
                }
                :s? {
                    type: yt.modalStandard, headingText: va.SUCCESS, headingSVG: Ge.a, text: "Transaction Hash: ", linkText: s, linkURL: "https://etherscan.io/tx/"+s
                }
                : {
                    type: yt.modalStandard, headingText: va.SUCCESS, headingSVG: Ge.a, text: "", linkText: "", linkURL: ""
                }
                ;
                case yt.METAMASK_PERMISSION:if(window.ethereum) {
                    var u=function() {
                        Object(de.a)().then(function() {}
                        ).catch(function() {}
                        )
                    }
                    ;
                    return u(),
                    {
                        headingText: ka.TITLE, headingSVG: R.a, text: ka.DESCRIPTION, linkText: ka.LINKTEXT, onLinkClick: u
                    }
                }
                return {
                    headingText: ga.TITLE, headingSVG: R.a, text: ga.DESCRIPTION, linkText: ga.LINKTEXT, linkURL: "https://metamask.io/#how-it-works"
                }
                ;
                case yt.METAMASKSIGNIN:return {
                    headingText: ga.SIGNINTITLE, headingSVG: R.a, text: ga.DESCRIPTION, linkText: ga.LINKTEXT, linkURL: "https://metamask.io/#how-it-works"
                }
                ;
                case yt.WRAP:return {
                    linkText: s, linkURL: "https://etherscan.io/tx/"+s, onCTA: (void 0).onWrap, onSubmit: i, type: yt.WRAP
                }
                ;
                case yt.OFFER:return {
                    type: yt.OFFER
                }
                ;
                case yt.BUY_BADGE:return {
                    productId: c, price: o, heading: "", imgUrl: "img/", text: l, linkText: n, linkURL: "https://etherscan.io/tx/"+n, onCTA: i, onSubmit: i, ctaText: "Buy badge for "+o+" ETH"
                }
                ;
                case yt.VIEW_BADGE:return {
                    productId: c, heading: "", imgUrl: "img/", text: l, onCTA: i, onSubmit: i, ctaText: "Buy badge for "+o+" ETH"
                }
            }
        }
        ,
        wa=function(e, t, a) {
            return new Promise(function(n, s) {
                var r=t.address, i=t.name, o=t.symbol, c=t.type, l=6;
                if(a<l&&(l=a), "erc721ck"===c) {
                    var d="https://api.cryptokitties.co/kitties?owner_wallet_address="+e+"&limit="+l+"&offset=0";
                    _e()( {
                        method: "get", url: d
                    }
                    ).then(function(e) {
                        var t, a=e.data.kitties, s=[];
                        for(t=0;
                        t<l;
                        t++) {
                            var r= {
                                tokenID: a[t].id, name: a[t].name, tokenType: i, img: a[t].image_url, symbol: o
                            }
                            ;
                            s.push(r)
                        }
                        n( {
                            tokensData: s
                        }
                        )
                    }
                    ).catch(function(e) {}
                    )
                }
                else {
                    for(var m=[], u=function(a) {
                        m.push(new Promise(function(n, s) {
                            var l= {
                                tokenID: "", tokenType: i, img: "", symbol: o
                            }
                            ;
                            ke( {
                                tokenAddress: r, tokenType: c, index: a, userAddress: e
                            }
                            ).then(function(e) {
                                return l.tokenID=e.tokenID, Ue( {
                                    tokenId: e.tokenID, currency: t
                                }
                                )
                            }
                            ).then(function(e) {
                                l.img=e.imageData, l.name=e.name, l.attributes=e.attributes, n(l)
                            }
                            ).catch(function() {}
                            )
                        }
                        ))
                    }
                    , p=0;
                    p<l;
                    p++)u(p);
                    Promise.all(m).then(function(e) {
                        n( {
                            tokensData: e
                        }
                        )
                    }
                    )
                }
            }
            )
        }
        ,
        Aa=a(341),
        Sa=new Q.BigNumber(6e9);
        Object(de.c)().then(function(e) {
            e.web3, e.provider, ye=new Aa(e.provider)
        }
        );
        var Na=function(e) {
            var t=e.userAddress;
            return new Promise(function(e, a) {
                var n=t;
                ye.contract(ne).at(ae).balanceOf(t, {
                    from: n, gasPrice: Sa
                }
                ).then(function(t) {
                    var a=t[0]/1;
                    e(a)
                }
                ).catch(function(e) {
                    a(e)
                }
                )
            }
            )
        }
        ,
        xa=function(e) {
            var t=e.key,
            a=e.userAddress;
            return new Promise(function(e, n) {
                var s=a;
                ye.contract(ne).at(ae).keyInfo(t, {
                    from: s, gasPrice: Sa
                }
                ).then(function(t) {
                    e( {
                        productId: t[0]/1, attributes: t[1]/1, issuedTime: t[2]/1, expirationTime: t[3]/1
                    }
                    )
                }
                ).catch(function(e) {
                    n(e)
                }
                )
            }
            )
        }
        ,
        Ia= {
            address: ae, name: "Boxswap Badge", symbol: "BX", type: "erc721", image_file: "/img/badges/access.svg", imageApiField: "", ApiUrl: "/img/badges/"
        }
        ,
        Ta=function(e) {
            var t=e.userAddress,
            a=e.badgesObject;
            return new Promise(function(e, n) {
                return Na( {
                    userAddress: t
                }
                ).then(function(e) {
                    return wa(t, Ia, e)
                }
                ).then(function(e) {
                    var n=[];
                    return e.tokensData.forEach(function(e) {
                        n.push(new Promise(function(n, s) {
                            return xa( {
                                key: e.tokenID, userAddress: t
                            }
                            ).then(function(t) {
                                var s=t.productId;
                                a[s].idList||(a[s].idList= {}
                                ), a[s].idList[e.tokenID]=!0, a[s].stats.owned=Object.keys(a[s].idList).length, n()
                            }
                            )
                        }
                        ))
                    }
                    ), Promise.all(n)
                }
                ).then(function(e) {
                    var n=[], s=function(e) {
                        n.push(new Promise(function(n, s) {
                            return function(e) {
                                var t=e.productId, a=e.userAddress;
                                return new Promise(function(e, n) {
                                    var s=a;
                                    ye.contract(ne).at(ae).totalSold(t, {
                                        from: s, gasPrice: Sa
                                    }
                                    ).then(function(t) {
                                        e(t[0])
                                    }
                                    ).catch(function(e) {
                                        n(e)
                                    }
                                    )
                                }
                                )
                            }
                            ( {
                                productId: e, userAddress: t
                            }
                            ).then(function(t) {
                                a[e].stats.circulating=t/1, n()
                            }
                            )
                        }
                        ))
                    }
                    ;
                    for(var r in a)s(r);
                    return Promise.all(n)
                }
                ).then(function(t) {
                    e(a)
                }
                ).catch(function(e) {
                    n(e)
                }
                )
            }
            )
        }
        ,
        Ca=function(e) {
            var t=e.userAddress;
            return new Promise(function(e, a) {
                return Na( {
                    userAddress: t
                }
                ).then(function(e) {
                    return wa(t, Ia, e)
                }
                ).then(function(e) {
                    var a=[];
                    return e.tokensData.forEach(function(e) {
                        a.push(new Promise(function(a, n) {
                            return xa( {
                                key: e.tokenID, userAddress: t
                            }
                            ).then(function(t) {
                                t.tokenID=e.tokenID/1, a(t)
                            }
                            )
                        }
                        ))
                    }
                    ), Promise.all(a)
                }
                ).then(function(t) {
                    return e(t)
                }
                ).catch(function(e) {
                    return a(e)
                }
                )
            }
            )
        }
        ,
        Oa=w[S().code].ModalCommon,
        Ma=function(e) {
            function t() {
                var e;
                return Object(c.a)(this, t),
                (e=Object(d.a)(this, Object(m.a)(t).call(this))).setMax=function() {
                    e.props.metamaskPending||e.props.pending||e.setState( {
                        amountValue: e.props.tokenAmount
                    }
                    )
                }
                ,
                e.handleChange=function(t) {
                    e.setState( {
                        amountValue: t.target.value
                    }
                    ),
                    e.props.isNFT&&e.setNFTImage(t.target.value)
                }
                ,
                e.setNFTImage=function(t) {
                    Ue( {
                        tokenId: t, currency: e.props.currencyData
                    }
                    ).then(function(t) {
                        e.setState( {
                            collectibleImage: t.imageData
                        }
                        )
                    }
                    ).catch(function() {}
                    )
                }
                ,
                e.state= {
                    amountValue: "", collectibleImage: null, isSpecificTokenId: !1
                }
                ,
                e
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    var e=this.props.tokenID;
                    e&&(this.setNFTImage(this.props.tokenID), this.setState( {
                        amountValue: e, isSpecificTokenId: !0
                    }
                    ))
                }
            }
            , {
                key:"render", value:function() {
                    var e=this, t=this.props, a=t.isNFT, n=t.heading, r=t.imgUrl, i=t.text, o=t.linkURL, c=t.metamaskPending, l=t.pending, d=t.onCTA, m=t.onClose, u=t.ctaText, p=t.linkText, y=t.onLinkClick, f=t.onSubmit, b=t.tokenAmount, h=t.tokenPrice, g=t.tokenID, k=this.state, v=k.collectibleImage, E=k.isSpecificTokenId, w=r;
                    v&&(w=v);
                    var A=Math.round(1e4*b)/1e4, S=this.state.amountValue?this.state.amountValue: 0, N=h?"$"+String((h*S).toFixed(2)): "";
                    return s.a.createElement("div", null, s.a.createElement("div", {
                        className: "modal-header"
                    }
                    , s.a.createElement("button", {
                        type: "button", className: "close", onClick: m
                    }
                    , s.a.createElement(T.a, {
                        svgStyle: {
                            width: "14px"
                        }
                        , src:F.a
                    }
                    ))), s.a.createElement("div", {
                        className: "modal-body send"
                    }
                    , s.a.createElement("form", {
                        className: "modal-form", onSubmit: f
                    }
                    , n&&s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("div", {
                        className: "header"
                    }
                    , n)), s.a.createElement("div", {
                        className: "row justify-content-center"
                    }
                    , w&&s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("img", {
                        src: w, className: "modal-image", alt: ""
                    }
                    )), i&&s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("p", null, i)), g&&s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("h2", null, "#"+g)), s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("div", {
                        className: "form-group "+(E?"hidden": "show")
                    }
                    , s.a.createElement("label", null, a?"TokenID":"Amount"), !a&&s.a.createElement("span", {
                        className: "desc pointer", onClick: this.setMax
                    }
                    , "Avail: ", A), s.a.createElement(C.f, null, s.a.createElement(C.e, {
                        autoComplete:"off", placeholder:"", onChange:function(t) {
                            return e.handleChange(t)
                        }
                        , value:this.state.amountValue, name:"sendAmount", type:"number", step:"any", disabled:c||l
                    }
                    )), !a&&s.a.createElement("span", {
                        className: "desc pointer"
                    }
                    , N)), s.a.createElement("div", {
                        className: "form-group"
                    }
                    , s.a.createElement("label", null, "Recipient Address"), s.a.createElement(C.f, null, s.a.createElement(C.e, {
                        placeholder: "", name: "recipientAddress", disabled: c||l
                    }
                    ))))), d&&s.a.createElement("div", {
                        className: "row mt-2 mb-3"
                    }
                    , s.a.createElement("div", {
                        className: "col-12"
                    }
                    , s.a.createElement("button", {
                        className: "btn btn-primary btn-block ".concat(l|c?"btn-disabled": ""), disabled: c||l, type: "submit"
                    }
                    , u)))), l&&s.a.createElement("div", {
                        className: "row mt-2 mb-3"
                    }
                    , s.a.createElement("div", {
                        className: "modal-seperator"
                    }
                    ), s.a.createElement("div", {
                        className: "col-12"
                    }
                    , s.a.createElement("div", {
                        className: "LoaderWithText text-center"
                    }
                    , s.a.createElement(I.a, {
                        type: "Circles", color: "#DD3BAD", height: 18, width: 18
                    }
                    ), s.a.createElement("div", {
                        className: "bottomText"
                    }
                    , " ", Oa.MINING)))), c&&s.a.createElement("div", {
                        className: "row mt-2 mb-3"
                    }
                    , s.a.createElement("div", {
                        className: "modal-seperator"
                    }
                    ), s.a.createElement("div", {
                        className: "col-12"
                    }
                    , s.a.createElement("div", {
                        className: "LoaderWithText text-center"
                    }
                    , s.a.createElement(T.a, {
                        svgStyle: {
                            width: "24px", height: "24px"
                        }
                        , src:R.a
                    }
                    ), s.a.createElement("div", {
                        className: "bottomText"
                    }
                    , Oa.METAMASKCONFIRM)))), p&&s.a.createElement("p", {
                        className: "text-center text-underline font-italic cursor-pointer"
                    }
                    , y&&!o&&s.a.createElement("a", {
                        target:"_blank", href:"#", onClick:function(e) {
                            e.preventDefault(), y(e)
                        }
                    }
                    , p), o&&!y&&s.a.createElement("a", {
                        target: "_blank", href: o
                    }
                    , p))))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        Da=w[S().code].ModalCommon,
        Pa=function(e) {
            function t() {
                var e;
                return Object(c.a)(this, t),
                (e=Object(d.a)(this, Object(m.a)(t).call(this))).toggle=function(t) {
                    e.props.pending||e.props.metamaskPending||e.state.activeTab!==t&&e.setState( {
                        activeTab: t
                    }
                    )
                }
                ,
                e.setMax=function() {
                    e.props.metamaskPending||e.props.pending||e.setState( {
                        amountValue: e.props.tokenAmount
                    }
                    )
                }
                ,
                e.handleChange=function(t) {
                    e.setState( {
                        amountValue: t.target.value
                    }
                    ),
                    e.props.isNFT&&Ue( {
                        tokenId: t.target.value, currency: e.props.currencyData
                    }
                    ).then(function(t) {
                        e.setState( {
                            collectibleImage: t.imageData
                        }
                        )
                    }
                    ).catch(function() {}
                    )
                }
                ,
                e.state= {
                    amountValue: "", collectibleImage: null
                }
                ,
                e.toggle=e.toggle.bind(Object(y.a)(Object(y.a)(e))),
                e.state= {
                    activeTab: "1"
                }
                ,
                e
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"render", value:function() {
                    var e=this, t=this.props, a=t.linkURL, n=t.metamaskPending, r=t.pending, i=t.onCTA, o=t.linkText, c=t.onLinkClick, l=t.wethAvailable, d=t.ethAvailable, m=Math.round(1e6*d)/1e6, u=Math.round(1e6*l)/1e6;
                    return s.a.createElement("div", null, s.a.createElement("div", {
                        className: "modal-body weth-wrapper"
                    }
                    , s.a.createElement(C.i, {
                        tabs: !0, className: "nav-justified"
                    }
                    , s.a.createElement(C.j, null, s.a.createElement(C.k, {
                        className:"1"===this.state.activeTab?"active":"", onClick:function() {
                            e.toggle("1")
                        }
                    }
                    , "WRAP")), s.a.createElement(C.j, null, s.a.createElement(C.k, {
                        className:"2"===this.state.activeTab?"active":"", onClick:function() {
                            e.toggle("2")
                        }
                    }
                    , "UNWRAP"))), s.a.createElement("div", {
                        className: "weth-wrapper-contents"
                    }
                    , s.a.createElement(C.l, {
                        activeTab: this.state.activeTab
                    }
                    , s.a.createElement(C.m, {
                        tabId: "1"
                    }
                    , s.a.createElement("div", {
                        className: "info-rows"
                    }
                    , s.a.createElement("div", {
                        className: "row justify-content-between"
                    }
                    , s.a.createElement("div", {
                        className: "left-col"
                    }
                    , "ETH Balance:"), s.a.createElement("div", {
                        className: "right-col"
                    }
                    , m, " ETH")), s.a.createElement("div", {
                        className: "row justify-content-between"
                    }
                    , s.a.createElement("div", {
                        className: "left-col"
                    }
                    , "WETH Balance:"), s.a.createElement("div", {
                        className: "right-col"
                    }
                    , u, " WETH")))), s.a.createElement(C.m, {
                        tabId: "2"
                    }
                    , s.a.createElement("div", {
                        className: "info-rows"
                    }
                    , s.a.createElement("div", {
                        className: "row justify-content-between"
                    }
                    , s.a.createElement("div", {
                        className: "left-col"
                    }
                    , "WETH Balance:"), s.a.createElement("div", {
                        className: "right-col"
                    }
                    , u, " WETH")), s.a.createElement("div", {
                        className: "row justify-content-between"
                    }
                    , s.a.createElement("div", {
                        className: "left-col"
                    }
                    , "ETH Balance:"), s.a.createElement("div", {
                        className: "right-col"
                    }
                    , m, " ETH")))), s.a.createElement("div", {
                        className: "row input justify-content-between"
                    }
                    , s.a.createElement("div", {
                        className: "left-col"
                    }
                    , "1"===this.state.activeTab?"Amount to wrap:":"Amount to unwrap:"), s.a.createElement("div", {
                        className: "right-col"
                    }
                    , s.a.createElement(C.f, null, s.a.createElement(C.e, {
                        placeholder:"", onChange:function(t) {
                            return e.handleChange(t)
                        }
                        , value:this.state.amountValue, name:"sendAmount", type:"number", step:"any", disabled:n||r, autocomplete:"off"
                    }
                    ))))), i&&s.a.createElement("div", {
                        className: "row mt-2 mb-3"
                    }
                    , s.a.createElement("div", {
                        className: "col-12"
                    }
                    , s.a.createElement("button", {
                        className:"btn btn-primary btn-block ".concat(n||r?"btn-disabled": ""), disabled:n||r, onClick:function(t) {
                            t.preventDefault(), i( {
                                amount: e.state.amountValue, tab: e.state.activeTab
                            }
                            )
                        }
                    }
                    , "1"===this.state.activeTab?"WRAP":"UNWRAP"))), r&&s.a.createElement("div", {
                        className: "row mt-2 mb-3"
                    }
                    , s.a.createElement("div", {
                        className: "modal-seperator"
                    }
                    ), s.a.createElement("div", {
                        className: "col-12"
                    }
                    , s.a.createElement("div", {
                        className: "LoaderWithText text-center"
                    }
                    , s.a.createElement(I.a, {
                        type: "Circles", color: "#DD3BAD", height: 18, width: 18
                    }
                    ), s.a.createElement("div", {
                        className: "bottomText"
                    }
                    , " ", Da.MINING)))), n&&s.a.createElement("div", {
                        className: "row mt-2 mb-3"
                    }
                    , s.a.createElement("div", {
                        className: "modal-seperator"
                    }
                    ), s.a.createElement("div", {
                        className: "col-12"
                    }
                    , s.a.createElement("div", {
                        className: "LoaderWithText text-center"
                    }
                    , s.a.createElement(T.a, {
                        svgStyle: {
                            width: "24px", height: "24px"
                        }
                        , src:R.a
                    }
                    ), s.a.createElement("div", {
                        className: "bottomText"
                    }
                    , Da.METAMASKCONFIRM)))), o&&s.a.createElement("p", {
                        className: "text-center text-underline font-italic cursor-pointer mb-4"
                    }
                    , c&&!a&&s.a.createElement("a", {
                        target:"_blank", href:"#", onClick:function(e) {
                            e.preventDefault(), c(e)
                        }
                    }
                    , o), a&&!c&&s.a.createElement("a", {
                        target: "_blank", href: a
                    }
                    , o)))))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        La=(w[S().code].ModalCommon, w[S().code].ShareModal, function(e) {
            function t() {
                var e;
                return Object(c.a)(this, t), (e=Object(d.a)(this, Object(m.a)(t).call(this))).setMax=function() {
                    e.props.metamaskPending||e.props.pending||e.setState( {
                        amountValue: e.props.tokenAmount
                    }
                    )
                }
                , e.handleChange=function(t) {
                    e.setState( {
                        amountValue: t.target.value
                    }
                    )
                }
                , e.state= {
                    amountValue: "", collectibleImage: null
                }
                , e
            }
            return Object(u.a)(t, e), Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    this.setState( {
                        amountValue: this.props.tokenAmount
                    }
                    )
                }
            }
            , {
                key:"render", value:function() {
                    var e=this, t=this.props, a=(t.isNFT, t.heading), n=(t.headerSVG, t.imgUrl), r=t.text, i=(t.linkURL, t.metamaskPending), o=t.pending, c=t.onCTA, l=t.onClose, d=t.ctaText, m=(t.linkText, t.tradeHeading, t.onLinkClick, t.onSubmit), u=(t.tokenAmount, t.currencyData), p=t.estimationBasePrice, y=n, f=this.state.amountValue?this.state.amountValue: 0, b="$"+String((p*f).toFixed(2));
                    return s.a.createElement("div", null, s.a.createElement("div", {
                        className: "modal-header"
                    }
                    , s.a.createElement("button", {
                        type: "button", className: "close", onClick: l
                    }
                    , s.a.createElement(T.a, {
                        svgStyle: {
                            width: "14px"
                        }
                        , src:F.a
                    }
                    ))), s.a.createElement("div", {
                        className: "modal-body send"
                    }
                    , s.a.createElement("form", {
                        className: "modal-form", onSubmit: m
                    }
                    , a&&s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("div", {
                        className: "header"
                    }
                    , a)), s.a.createElement("div", {
                        className: "row justify-content-center"
                    }
                    , y&&s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("img", {
                        src: y, className: "modal-image"
                    }
                    )), r&&s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("p", null, r)), s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("div", {
                        className: "form-group"
                    }
                    , s.a.createElement("label", null, "Estimated Value"), s.a.createElement(C.f, null, s.a.createElement(C.e, {
                        autocomplete:"off", placeholder:"", className:"estimate-input", onChange:function(t) {
                            return e.handleChange(t)
                        }
                        , value:this.state.amountValue, name:"sendAmount", type:"number", step:"any", disabled:i||o
                    }
                    ), s.a.createElement(C.g, {
                        addonType: "append", className: "estimate-input-append"
                    }
                    , "ETH")), s.a.createElement("span", {
                        className: "desc"
                    }
                    , b)))), c&&s.a.createElement("div", {
                        className: "row my-3"
                    }
                    , s.a.createElement("div", {
                        className: "col-12"
                    }
                    , s.a.createElement("button", {
                        className:"btn btn-primary btn-block ".concat(o|i?"btn-disabled": ""), disabled:i||o, onClick:function(t) {
                            t.preventDefault(), c( {
                                amount: e.state.amountValue, estimatedCurrency: e.props.currencyData, basePairSymbol: u.estimateValue
                            }
                            )
                        }
                    }
                    , d))))))
                }
            }
            ]), t
        }
        (s.a.Component)),
        _a=w[S().code].ModalCommon,
        Fa=function(e) {
            function t() {
                var e;
                return Object(c.a)(this, t),
                (e=Object(d.a)(this, Object(m.a)(t).call(this))).state= {
                    amountValue: "", collectibleImage: null
                }
                ,
                e
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    var e=this.props.tokenID;
                    e&&this.setState( {
                        amountValue: e
                    }
                    )
                }
            }
            , {
                key:"render", value:function() {
                    var e=this.props, t=(e.heading, e.imgUrl), a=e.text, n=e.linkURL, r=e.metamaskPending, i=e.pending, o=e.onCTA, c=e.onClose, l=e.ctaText, d=e.linkText, m=e.onLinkClick, u=e.onSubmit, p=(e.price, e.badgeName), y=this.state.collectibleImage, f=t;
                    return y&&(f=y), s.a.createElement("div", null, s.a.createElement("div", {
                        className: "modal-header"
                    }
                    , s.a.createElement("button", {
                        type: "button", className: "close", onClick: c
                    }
                    , s.a.createElement(T.a, {
                        svgStyle: {
                            width: "14px"
                        }
                        , src:F.a
                    }
                    ))), s.a.createElement("div", {
                        className: "modal-body send"
                    }
                    , s.a.createElement("form", {
                        className: "modal-form", onSubmit: u
                    }
                    , s.a.createElement("div", {
                        className: "row justify-content-center"
                    }
                    , f&&s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("img", {
                        src: f, className: "modal-image", alt: ""
                    }
                    )), s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("div", {
                        className: "badge-header"
                    }
                    , "Purchase "+p)), a&&s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("p", null, a))), o&&s.a.createElement("div", {
                        className: "row mt-2 mb-3"
                    }
                    , s.a.createElement("div", {
                        className: "col-12"
                    }
                    , s.a.createElement("button", {
                        className: "btn btn-primary btn-block ".concat(i|r?"btn-disabled": ""), disabled: r||i, type: "submit"
                    }
                    , l)))), i&&s.a.createElement("div", {
                        className: "row mt-2 mb-3"
                    }
                    , s.a.createElement("div", {
                        className: "modal-seperator"
                    }
                    ), s.a.createElement("div", {
                        className: "col-12"
                    }
                    , s.a.createElement("div", {
                        className: "LoaderWithText text-center"
                    }
                    , s.a.createElement(I.a, {
                        type: "Circles", color: "#DD3BAD", height: 18, width: 18
                    }
                    ), s.a.createElement("div", {
                        className: "bottomText"
                    }
                    , " ", _a.MINING)))), r&&s.a.createElement("div", {
                        className: "row mt-2 mb-3"
                    }
                    , s.a.createElement("div", {
                        className: "modal-seperator"
                    }
                    ), s.a.createElement("div", {
                        className: "col-12"
                    }
                    , s.a.createElement("div", {
                        className: "LoaderWithText text-center"
                    }
                    , s.a.createElement(T.a, {
                        svgStyle: {
                            width: "24px", height: "24px"
                        }
                        , src:R.a
                    }
                    ), s.a.createElement("div", {
                        className: "bottomText"
                    }
                    , _a.METAMASKCONFIRM)))), d&&s.a.createElement("p", {
                        className: "text-center text-underline font-italic cursor-pointer"
                    }
                    , m&&!n&&s.a.createElement("a", {
                        target:"_blank", href:"#", onClick:function(e) {
                            e.preventDefault(), m(e)
                        }
                    }
                    , d), n&&!m&&s.a.createElement("a", {
                        target: "_blank", href: n
                    }
                    , d))))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        Ua=(w[S().code].ModalCommon, function(e) {
            function t() {
                var e;
                return Object(c.a)(this, t), (e=Object(d.a)(this, Object(m.a)(t).call(this))).state= {
                    amountValue: "", collectibleImage: null
                }
                , e
            }
            return Object(u.a)(t, e), Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    var e=this.props.tokenID;
                    e&&this.setState( {
                        amountValue: e
                    }
                    )
                }
            }
            , {
                key:"render", value:function() {
                    var e=this.props, t=(e.heading, e.imgUrl), a=e.text, n=(e.linkURL, e.metamaskPending), r=e.pending, i=e.onCTA, o=e.onClose, c=e.ctaText, l=(e.linkText, e.onLinkClick, e.onSubmit), d=(e.price, e.badgeName), m=this.state.collectibleImage, u=t;
                    return m&&(u=m), s.a.createElement("div", null, s.a.createElement("div", {
                        className: "modal-header"
                    }
                    , s.a.createElement("button", {
                        type: "button", className: "close", onClick: o
                    }
                    , s.a.createElement(T.a, {
                        svgStyle: {
                            width: "14px"
                        }
                        , src:F.a
                    }
                    ))), s.a.createElement("div", {
                        className: "modal-body send"
                    }
                    , s.a.createElement("form", {
                        className: "modal-form", onSubmit: l
                    }
                    , s.a.createElement("div", {
                        className: "row justify-content-center"
                    }
                    , u&&s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("img", {
                        src: u, className: "modal-image", alt: ""
                    }
                    )), s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("div", {
                        className: "badge-header"
                    }
                    , "Purchase "+d)), a&&s.a.createElement("div", {
                        className: "col-12 text-center"
                    }
                    , s.a.createElement("p", null, a))), i&&s.a.createElement("div", {
                        className: "row mt-2 mb-3"
                    }
                    , s.a.createElement("div", {
                        className: "col-12"
                    }
                    , s.a.createElement("button", {
                        className: "btn btn-primary btn-block ".concat(r|n?"btn-disabled": ""), disabled: n||r, type: "submit"
                    }
                    , c))))))
                }
            }
            ]), t
        }
        (s.a.Component)),
        Ra=(w[S().code].Trade, w[S().code].Modal, w[S().code].ModalCommon),
        ja=w[S().code].MetamaskModal,
        Ba=w[S().code].PermissionModal,
        Ha=1e4,
        Ga=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).handleSignIn=function() {
                    a.setState( {
                        modalStep: yt.METAMASKSIGNIN, modalShown: !0
                    }
                    ),
                    Object(de.d)( {
                        isSignedIn: !1, userAddressParam: a.props.meta.userAddress
                    }
                    ).then(function(e) {
                        a.hideModal()
                    }
                    ).catch(function(e) {
                        e&&e.custom&&e.message&&alert(e.message)
                    }
                    )
                }
                ,
                a.setup0xInstant=function() {
                    var e=document.createElement("script");
                    e.src="https://instant.0xproject.com/instant.js",
                    document.head.appendChild(e)
                }
                ,
                a.zeroExInstant=function(e) {
                    window.zeroExInstant&&window.zeroExInstant.render( {
                        orderSource:"https://api.radarrelay.com/0x/v2/", affiliateInfo: {
                            feeRecipient: "0x66a836664aDc7c525c0Cc4527Dee8619d4FaF669", feePercentage: 0
                        }
                        , availableAssetDatas:[e], defaultSelectedAssetData:e
                    }
                    , "#root")
                }
                ,
                a.caculateTotalPrice=function(e, t, a, n, s, r) {
                    var i,
                    o,
                    c,
                    l,
                    d,
                    m=0;
                    for(var u in t)i=t[u].quote.USD.price,
                    o=e[u],
                    i&&o&&(m+=i*o);
                    for(var u in r) {
                        if(!e[u])break;
                        c=r[u].amount,
                        (d=t[l=r[u].basePairSymbol]?t[l].quote.USD.price: "")&&c&&(m+=d*c)
                    }
                    return m
                }
                ,
                a.handleNoWeb3Connection=function() {
                    window.web3||a.setState( {
                        loading: !1, modalStep: yt.METAMASK_PERMISSION, handlingNoWeb3Connection: !0
                    }
                    , function() {
                        a.showModal()
                    }
                    )
                }
                ,
                a.fetchData=function() {
                    a.fetchPrices(),
                    a.fetchAmounts(),
                    a.fetchEstimations()
                }
                ,
                a.fetchPrices=function() {
                    Object(Z.k)().then(function(e) {
                        if(e) {
                            var t=a.caculateTotalPrice(a.state.amounts, e, a.state.initialFetched, !0, a.state.estimationsFetched, a.state.estimations);
                            a.setState( {
                                prices: e, pricesFetched: !0, pricesDenied: !1, totalPrice: t
                            }
                            )
                        }
                    }
                    ).catch(function(e) {
                        console.log(e+"err"), a.setState( {
                            pricesFetched: !0, pricesDenied: !0
                        }
                        )
                    }
                    )
                }
                ,
                a.fetchEstimations=function() {
                    var e=a.props.meta.userAddress;
                    Object(Z.g)(e).then(function(e) {
                        var t=a.state.estimations;
                        e&&(t=e);
                        var n=a.caculateTotalPrice(a.state.amounts, a.state.prices, a.state.initialFetched, a.state.pricesFetched, !0, t);
                        a.setState( {
                            estimations: t, estimationsFetched: !0, estimationsDenied: !1, totalPrice: n
                        }
                        )
                    }
                    ).catch(function() {
                        a.setState( {
                            estimationsFetched: !0, estimationsDenied: !0
                        }
                        )
                    }
                    )
                }
                ,
                a.fetchAmounts=function() {
                    var e=a.props.meta.userAddress,
                    t=[],
                    n= {}
                    ;
                    for(var s in Ca( {
                        userAddress: e
                    }
                    ).then(function(e) {
                        a.setState( {
                            badges: e
                        }
                        )
                    }
                    ), sa[1])t.push(fe( {
                        tokenAddress: sa[1][s].address, tokenType: sa[1][s].type, decimals: sa[1][s].decimals, userAddress: e
                    }
                    ));
                    Promise.all(t).then(function(e) {
                        var t;
                        for(t=0;
                        t<e.length;
                        t++)n[sa[1][e[t].tokenAddress].symbol]=e[t].amount;
                        e=e.map(function(e) {
                            return 10*e
                        }
                        );
                        var s=a.caculateTotalPrice(n, a.state.prices, !0, a.state.pricesFetched, a.state.estimationsFetched, a.state.estimations);
                        a.setState( {
                            initialFetched: !0, amounts: n, totalPrice: s
                        }
                        )
                    }
                    ).catch(function(e) {
                        var t=a.caculateTotalPrice(n, a.state.prices, !0, a.state.pricesFetched, a.state.estimationsFetched, a.state.estimations);
                        a.setState( {
                            badges: [], initialFetched: !0, amounts: n, totalPrice: t
                        }
                        ), console.log(e)
                    }
                    )
                }
                ,
                a.modalFunction=function(e) {
                    window.web3||a.handleNoWeb3Connection(),
                    "SEND"==e.type?a.setState( {
                        modalStep: yt.SEND, selectedSendToken: e
                    }
                    , function() {
                        a.showModal()
                    }
                    ):"BUY"==e.type?a.zeroExInstant(e.assetData):"WRAP"==e.type?a.setState( {
                        modalStep: yt.WRAP
                    }
                    , function() {
                        a.showModal()
                    }
                    ):"VIEWALL"==e.type?a.props.history.push("/wallet/"+e.viewAllName):"ESTIMATE"==e.type&&a.setState( {
                        modalStep: yt.ESTIMATE, selectedSendToken: e
                    }
                    , function() {
                        a.showModal()
                    }
                    )
                }
                ,
                a.toggleModal=function() {
                    a.state.modalShown?a.hideModal(): a.showModal()
                }
                ,
                a.showModal=function(e) {
                    e&&e.preventDefault(),
                    a.setState( {
                        modalShown: !0
                    }
                    )
                }
                ,
                a.hideModal=function(e) {
                    e&&e.preventDefault(),
                    a.setState( {
                        wrapHash: null, sendHash: !1, loading: !1, error: !1, pending: !1, modalShown: !1
                    }
                    )
                }
                ,
                a.onSend=function(e) {
                    e.selectedSendToken;
                    var t=e.sendAmount,
                    n=e.recipientAddress;
                    a.setState( {
                        metamaskPending: !0, pending: !1, loading: !0, error: !1
                    }
                    );
                    var s=a.props.meta.userAddress,
                    r=sa[1][a.state.selectedSendToken.address],
                    i=r.address,
                    o=r.type,
                    c=r.decimals;
                    he( {
                        tokenAddress: i, tokenType: o, decimals: c, recipientAddress: n, sendAmount: t, userAddress: s
                    }
                    ).then(function(e) {
                        return a.setState( {
                            sendHash: e, pending: !0, metamaskPending: !1
                        }
                        ), Pe( {
                            hash: e
                        }
                        )
                    }
                    ).then(function(e) {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, modalStep: yt.SUCCESS
                        }
                        ), setTimeout(function() {
                            a.fetchAmounts()
                        }
                        , Ha)
                    }
                    ).catch(function() {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, error: !0
                        }
                        , function() {
                            a.hideModal()
                        }
                        )
                    }
                    )
                }
                ,
                a.onSubmit=function(e) {
                    e.preventDefault();
                    var t=e.target.sendAmount.value,
                    n=a.state,
                    s=n.modalStep,
                    r=n.selectedSendToken;
                    if(s==yt.SEND) {
                        var i=e.target.recipientAddress.value;
                        a.onSend( {
                            selectedSendToken: r, sendAmount: t, recipientAddress: i
                        }
                        )
                    }
                }
                ,
                a.onSaveEstimatedValue=function(e) {
                    var t=e.amount,
                    n=e.estimatedCurrency,
                    s=a.props.meta.userAddress;
                    Object(Z.l)( {
                        userAddress: s, tokenSymbol: n.symbol, amount: t, basePairSymbol: n.estimateBasePair
                    }
                    ).then(function(e) {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1
                        }
                        , function() {
                            a.hideModal(), a.fetchEstimations()
                        }
                        )
                    }
                    ).catch(function() {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, error: !0
                        }
                        , function() {
                            a.hideModal()
                        }
                        )
                    }
                    )
                }
                ,
                a.onWrap=function(e) {
                    var t=e.amount,
                    n=e.tab,
                    s=a.props.meta.userAddress;
                    a.setState( {
                        metamaskPending: !0, pending: !1, loading: !0, error: !1
                    }
                    ),
                    ve( {
                        amount: t, type: n, userAddress: s
                    }
                    ).then(function(e) {
                        return a.setState( {
                            wrapHash: e, pending: !0, metamaskPending: !1
                        }
                        ), Pe( {
                            hash: e
                        }
                        )
                    }
                    ).then(function(e) {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, modalStep: yt.SUCCESS
                        }
                        ), setTimeout(function() {
                            a.fetchAmounts()
                        }
                        , Ha)
                    }
                    ).catch(function() {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, error: !0
                        }
                        , function() {
                            a.hideModal()
                        }
                        )
                    }
                    )
                }
                ,
                a.getModalContents=function(e) {
                    var t=a.state,
                    n=(t.currencies, t.approvalHash, t.innerImages, t.images, t.modalData, t.selectedSendToken),
                    s=t.sendHash,
                    r=t.wrapHash;
                    switch(e) {
                        case yt.SEND: var i=sa[1][n.address], o=0===i.type.indexOf("erc721");
                        return {
                            currencyData: i, tokenAmount: n.tokenAmount, tokenPrice: n.tokenPrice, headingText: "GIFT", imgUrl: "/img/tokenImages/box-"+i.image_file, text: i.name, linkText: s, linkURL: "https://etherscan.io/tx/"+s, onCTA: a.onSubmit, onSubmit: a.onSubmit, ctaText: "GIFT", type: "SEND", isNFT: o
                        }
                        ;
                        case yt.ESTIMATE:var c=sa[1][n.address],
                        l=0===c.type.indexOf("erc721");
                        return {
                            tokenAmount: n.estimationAmount, estimationBasePrice: n.estimationBasePrice, currencyData: c, headingText: "ESTIMATE VALUE", imgUrl: "./img/tokenImages/box-"+c.image_file, text: c.name, linkText: s, linkURL: "https://etherscan.io/tx/"+s, onCTA: a.onSaveEstimatedValue, onSubmit: a.onSubmit, ctaText: "SAVE", type: "ESTIMATE", isNFT: l
                        }
                        ;
                        case yt.SUCCESS:return s? {
                            type: "modalStandard", headingText: Ra.SUCCESS, headingSVG: Ge.a, text: "Transaction Hash: ", linkText: s, linkURL: "https://etherscan.io/tx/"+s
                        }
                        :r? {
                            type: "modalStandard", headingText: Ra.SUCCESS, headingSVG: Ge.a, text: "Transaction Hash: ", linkText: r, linkURL: "https://etherscan.io/tx/"+r
                        }
                        : {
                            type: "modalStandard", headingText: Ra.SUCCESS, headingSVG: Ge.a, text: "", linkText: "", linkURL: ""
                        }
                        ;
                        case yt.METAMASK_PERMISSION:if(window.ethereum) {
                            var d=function() {
                                Object(de.a)().then(function() {}
                                ).catch(function() {}
                                )
                            }
                            ;
                            return d(),
                            {
                                headingText: Ba.TITLE, headingSVG: R.a, text: Ba.DESCRIPTION, linkText: Ba.LINKTEXT, onLinkClick: d
                            }
                        }
                        return {
                            headingText: ja.TITLE, headingSVG: R.a, text: ja.DESCRIPTION, linkText: ja.LINKTEXT, linkURL: "https://metamask.io/#how-it-works"
                        }
                        ;
                        case yt.METAMASKSIGNIN:return {
                            headingText: ja.SIGNINTITLE, headingSVG: R.a, text: ja.DESCRIPTION, linkText: ja.LINKTEXT, linkURL: "https://metamask.io/#how-it-works"
                        }
                        ;
                        case yt.WRAP:return {
                            linkText: r, linkURL: "https://etherscan.io/tx/"+r, onCTA: a.onWrap, onSubmit: a.onSubmit, type: "WRAP"
                        }
                    }
                }
                ,
                a.state= {
                    fields:[ {
                        makerAddress: e.meta.userAddress
                    }
                    ,
                    {}
                    ],
                    prices: {}
                    ,
                    estimations: {}
                    ,
                    amounts: {}
                    ,
                    modalData: {}
                    ,
                    modalShown:!1,
                    showInvalid:!1,
                    initialFetched:!1,
                    pricesFetched:!1,
                    estimationsFetched:!1,
                    expDate:M()().add(10, "day"),
                    totalPrice:"",
                    pricesDenied:!1,
                    estimationsDenied:!1,
                    handlingNoWeb3Connection:!1,
                    badges: {}
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    if(this.props.meta.userAddress&&this.fetchData(), this.setup0xInstant(), !window.web3)return this.handleNoWeb3Connection()
                }
            }
            , {
                key:"componentDidUpdate", value:function(e) {
                    if(!window.web3&&!this.state.handlingNoWeb3Connection)return this.handleNoWeb3Connection();
                    (this.props.meta.userAddress!==e.meta.userAddress||this.props.meta.userAddress&&!e.meta.userAddress||this.props.meta.firebaseUser&&e.meta.firebaseUser&&this.props.meta.firebaseUser.uid!==e.meta.firebaseUser.uid||!e.meta.firebaseUser&&this.props.meta.firebaseUser||!this.props.meta.firebaseUser&&e.meta.firebaseUser)&&this.fetchData()
                }
            }
            , {
                key:"render", value:function() {
                    var e, t, a=this, n=this.state, r=(n.currencies, n.contractAddress, n.loading, n.error, n.modalShown), i=n.modalStep, o=(n.images, n.innerImages, n.metamaskPending), c=n.pending, l=n.amounts, d=n.prices, m=n.initialFetched, u=n.pricesFetched, p=n.estimations, y=n.estimationsFetched, f=n.totalPrice, b=(n.pricesDenied, n.estimationsDenied), h=n.badges, g=!u||b;
                    if(r)if("SEND"==(t=this.getModalContents(i)).type)e=s.a.createElement(Ma, {
                        currencyData: t.currencyData, tokenAmount: t.tokenAmount, tokenPrice: t.tokenPrice, heading: t.headingText, isNFT: t.isNFT, imgUrl: t.imgUrl, tradeHeading: t.tradeHeading, text: t.text, onLinkClick: t.onLinkClick, linkText: t.linkText, linkURL: t.linkURL, metamaskPending: o, pending: c, onCTA: t.onCTA, onSubmit: t.onSubmit, onClose: this.hideModal, ctaText: t.ctaText
                    }
                    );
                    else if("WRAP"==t.type) {
                        var k=l.WETH, v=l.ETH;
                        e=s.a.createElement(Pa, {
                            currencyData: t.currencyData, tokenAmount: t.tokenAmount, tokenPrice: t.tokenPrice, heading: t.headingText, isNFT: t.isNFT, imgUrl: t.imgUrl, tradeHeading: t.tradeHeading, text: t.text, onLinkClick: t.onLinkClick, linkText: t.linkText, linkURL: t.linkURL, metamaskPending: o, pending: c, onCTA: t.onCTA, onSubmit: t.onSubmit, onClose: this.hideModal, ctaText: t.ctaText, wethAvailable: k, ethAvailable: v
                        }
                        )
                    }
                    else e="ESTIMATE"==t.type?s.a.createElement(La, {
                        estimationBasePrice: t.estimationBasePrice, currencyData: t.currencyData, tokenAmount: t.tokenAmount, tokenPrice: t.tokenPrice, heading: t.headingText, isNFT: t.isNFT, imgUrl: t.imgUrl, tradeHeading: t.tradeHeading, text: t.text, onLinkClick: t.onLinkClick, linkText: t.linkText, linkURL: t.linkURL, metamaskPending: o, pending: c, onCTA: t.onCTA, onSubmit: t.onSubmit, onClose: this.hideModal, ctaText: t.ctaText
                    }
                    ):s.a.createElement(J, {
                        heading: t.headingText, headerSVG: t.headingSVG, tradeHeading: t.tradeHeading, text: t.text, linkText: t.linkText, onLinkClick: t.onLinkClick, linkURL: t.linkURL, metamaskPending: o, pending: c, onCTA: t.onCTA, onClose: this.hideModal, ctaText: t.ctaText
                    }
                    );
                    var E=[], w=this.props.meta.userAddress;
                    for(var A in sa[1])E.push(sa[1][A]);
                    return m?s.a.createElement("div", {
                        className: "wallet-container", id: "wallet-container"
                    }
                    , s.a.createElement("div", {
                        className: "container"
                    }
                    , s.a.createElement("div", {
                        className: "row justify-content-between"
                    }
                    , s.a.createElement("div", null, u&&0!==f&&s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                        className: "header-description"
                    }
                    , "TOTAL ASSETS"), s.a.createElement("div", {
                        className: "header-title"
                    }
                    , "$", f&&f.toFixed(2)))), s.a.createElement(ha, {
                        badges: h, isWallet: !0
                    }
                    )), s.a.createElement(C.n, {
                        className: "Wallet"
                    }
                    , s.a.createElement("thead", null, s.a.createElement("tr", null, s.a.createElement("th", {
                        className: "wallet-item-asset"
                    }
                    , "ASSET"), s.a.createElement("th", {
                        className: "right-align"
                    }
                    , "BALANCE"), !g&&s.a.createElement("th", {
                        className: "right-align price-element"
                    }
                    , "BALANCE (USD)"), s.a.createElement("th", {
                        className: "right-align"
                    }
                    , "ACTIONS"))), s.a.createElement("tbody", {
                        className: "table-wrapper"
                    }
                    , E.map(function(e, t) {
                        var n, r, i=l[e.symbol], o=d[e.symbol], c=d.ETH?d.ETH.quote.USD.price: "";
                        return p[e.symbol]&&(n=(r=p[e.symbol].amount)&&c?"~$"+String((c*r).toFixed(2)): ""), e.optional&&!i?null:(o&&(o=o.quote.USD.price), s.a.createElement(ca, {
                            modalFunction:function(e) {
                                return a.modalFunction(Object(z.a)( {}
                                , e))
                            }
                            , key:t, infoDenied:g, tokenAmount:i, tokenPrice:o, estimationAmount:r, estimationBasePrice:c, estimation:n, estimationsFetched:y, itemProps:e, userAddress:w
                        }
                        ))
                    }
                    ))), s.a.createElement(C.h, {
                        centered: !0, isOpen: this.state.modalShown, toggle: this.toggleModal
                    }
                    , e))):s.a.createElement("div", {
                        className: "row text-center"
                    }
                    , s.a.createElement("div", {
                        className: "col-12 my-5"
                    }
                    , s.a.createElement(I.a, {
                        type: "Circles", color: "#DD3BAD"
                    }
                    )), s.a.createElement(C.h, {
                        centered: !0, isOpen: this.state.modalShown, toggle: this.toggleModal
                    }
                    , e))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        Wa=Object(p.f)(Ga),
        Va= {
            1: {
                cryptobaseball: "0x8c9b261faef3b3c2e64ab5e58e04615f8c788099", cryptokitties: "0x06012c8cf97bead5deae237070f9587f8e7a266d", chibi: "0x71c118b00759b0851785642541ceb0f4ceea0bd5", axie: "0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d", estates: "0x959e104e1a4db6317fa58f8295f586e1a978c297", land: "0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d", gods: "0x6ebeaf8e8e946f0716e6533a6f2cefc83f60e8ab", flower: "0x4f41d10f7e67fd16bde916b4a6dc3dd101c57394", marble: "0x1d963688fe2209a98db35c67a041524822cf04ff", spacecommanders: "0x4d3814d4da8083b41861dec2f45b4840e8b72d68", neon: "0x1276dce965ada590e42d62b3953ddc1ddceb0392", blockcities: "0x2f2d5aa0efdb9ca3c9bb789693d06bebea88792f"
            }
        }
        ,
        Ka=a(205),
        Ya=a.n(Ka),
        Ja=(w[S().code].Trade, w[S().code].Modal, w[S().code].ModalCommon, w[S().code].MetamaskModal, w[S().code].PermissionModal, 1e4),
        Xa=function(e) {
            function t(e) {
                var a,
                n,
                s;
                Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).onSend=function(e) {
                    e.selectedSendToken;
                    var t=e.sendAmount,
                    n=e.recipientAddress;
                    a.setState( {
                        metamaskPending: !0, pending: !1, loading: !0, error: !1, sendHash: null
                    }
                    );
                    var s=a.props.meta.userAddress,
                    r=a.state.currencyData,
                    i=r.address,
                    o=r.type,
                    c=r.decimals;
                    he( {
                        tokenAddress: i, tokenType: o, decimals: c, recipientAddress: n, sendAmount: t, userAddress: s
                    }
                    ).then(function(e) {
                        return a.setState( {
                            sendHash: e, pending: !0, metamaskPending: !1
                        }
                        ), Pe( {
                            hash: e
                        }
                        )
                    }
                    ).then(function(e) {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, modalStep: yt.SUCCESS
                        }
                        ), setTimeout(function() {
                            a.fetchData()
                        }
                        , Ja)
                    }
                    ).catch(function() {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, error: !0, sendHash: null
                        }
                        , function() {
                            a.hideModal()
                        }
                        )
                    }
                    )
                }
                ,
                a.onSubmit=function(e) {
                    e.preventDefault();
                    var t=e.target.sendAmount.value,
                    n=a.state,
                    s=n.modalStep,
                    r=n.selectedSendToken;
                    if(s==yt.SEND) {
                        var i=e.target.recipientAddress.value;
                        a.onSend( {
                            selectedSendToken: r, sendAmount: t, recipientAddress: i
                        }
                        )
                    }
                }
                ,
                a.toggleModal=function() {
                    a.state.modalShown?a.hideModal(): a.showModal()
                }
                ,
                a.showModal=function(e) {
                    e&&e.preventDefault(),
                    a.setState( {
                        modalShown: !0
                    }
                    )
                }
                ,
                a.hideModal=function(e) {
                    e&&e.preventDefault(),
                    a.setState( {
                        wrapHash: null, sendHash: !1, loading: !1, error: !1, pending: !1, modalShown: !1
                    }
                    )
                }
                ,
                a.handleSignIn=function() {
                    a.setState( {
                        modalStep: 7, modalShown: !0
                    }
                    ),
                    Object(de.d)( {
                        isSignedIn: !1, userAddressParam: a.props.meta.userAddress
                    }
                    ).then(function(e) {
                        a.hideModal()
                    }
                    ).catch(function(e) {
                        e&&e.custom&&e.message&&alert(e.message)
                    }
                    )
                }
                ,
                a.modalFunction=function(e) {
                    window.web3||a.handleNoWeb3Connection(),
                    e.modalStep==yt.SEND?a.setState( {
                        modalStep: yt.SEND, selectedSendToken: e, sendHash: null, wrapHash: null, modalShown: !0
                    }
                    ):e.modalStep==yt.BUY?a.zeroExInstant(e.assetData):e.modalStep==yt.WRAP?a.setState( {
                        modalStep: yt.WRAP, sendHash: null, wrapHash: null, modalShown: !0
                    }
                    ):e.modalStep==yt.SWAP?a.props.history.push("/swap/"+e.symbol+"/"+e.tokenID):e.modalStep==yt.ESTIMATE&&a.setState( {
                        modalStep: yt.ESTIMATE, selectedSendToken: e, sendHash: null, wrapHash: null, modalShown: !0
                    }
                    )
                }
                ,
                a.handleNoWeb3Connection=function() {
                    window.web3||a.setState( {
                        loading: !1, modalStep: yt.METAMASK_PERMISSION, handlingNoWeb3Connection: !0
                    }
                    , function() {
                        a.showModal()
                    }
                    )
                }
                ,
                a.fetchData=function() {
                    var e=a.state.currencyData,
                    t=e.address,
                    n=(e.name, e.symbol, e.type),
                    s=(e.imageApiField, e.image_file, e.ApiUrl, a.props.meta.userAddress),
                    r=a.state.traderId?a.state.traderId: s;
                    fe( {
                        tokenAddress: t, tokenType: n, userAddress: r
                    }
                    ).then(function(e) {
                        a.setState( {
                            tokenAmount: e.amount
                        }
                        )
                    }
                    )
                }
                ,
                a.goBack=function() {
                    var e=a.props.meta.onlyComponent;
                    a.props.history;
                    if(a.state.traderId) {
                        var t=(e?"/inlineprofile/": "/profile/")+a.state.traderId;
                        a.props.history.push(t)
                    }
                    else a.props.history.push("/wallet")
                }
                ,
                a.state= {
                    tokenAmount: null, modalShown: !1, traderId: null
                }
                ;
                try {
                    n=e.match.params.collectiblesName
                }
                catch(i) {}
                try {
                    s=e.match.params.traderId
                }
                catch(i) {}
                if(n) {
                    var r=Va[1][n];
                    a.state.currencyData=sa[1][r]
                }
                return s&&(a.state.traderId=s),
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidUpdate", value:function(e) {
                    this.state.traderId||e.meta.userAddress===this.props.meta.userAddress||this.fetchData()
                }
            }
            , {
                key:"componentDidMount", value:function() {
                    (this.state.traderId||this.props.meta.userAddress)&&this.fetchData()
                }
            }
            , {
                key:"componentWillUnmount", value:function() {}
            }
            , {
                key:"render", value:function() {
                    var e, t, a=this.state, n=a.currencyData, r=a.tokenAmount, i=a.modalShown, o=a.modalStep, c=a.metamaskPending, l=a.pending, d=a.traderId, m=n.name, u=n.symbol, p=(n.image_file, n.address, this.props.meta.userAddress);
                    if(i) {
                        var y=this.state, f=y.selectedSendToken, b=y.sendHash, h=y.wrapHash, g=y.currencyData;
                        t=Ea( {
                            step: o, selectedSendToken: f, hash: b, wrapHash: h, currencyData: g, onSubmit: this.onSubmit
                        }
                        ), e=o==yt.SEND?s.a.createElement(Ma, {
                            tokenID: t.tokenID, currencyData: t.currencyData, tokenAmount: t.tokenAmount, tokenPrice: t.tokenPrice, heading: t.headingText, isNFT: t.isNFT, imgUrl: t.imgUrl, tradeHeading: t.tradeHeading, onLinkClick: t.onLinkClick, linkText: t.linkText, linkURL: t.linkURL, metamaskPending: c, pending: l, onCTA: t.onCTA, onSubmit: t.onSubmit, onClose: this.hideModal, ctaText: t.ctaText
                        }
                        ):s.a.createElement(J, {
                            heading: t.headingText, headerSVG: t.headingSVG, tradeHeading: t.tradeHeading, text: t.text, onLinkClick: t.onLinkClick, linkText: t.linkText, linkURL: t.linkURL, metamaskPending: c, pending: l, onCTA: t.onCTA, onClose: this.hideModal, ctaText: t.ctaText
                        }
                        )
                    }
                    var k=d?s.a.createElement("button", {
                        className: "btn back-button opacity-hover transition", onClick: this.goBack
                    }
                    , s.a.createElement("img", {
                        src: Ya.a
                    }
                    ), s.a.createElement("span", null, "Back")):s.a.createElement("button", {
                        className: "btn back-button opacity-hover transition", onClick: this.goBack
                    }
                    , s.a.createElement("img", {
                        src: Ya.a
                    }
                    ), s.a.createElement("span", null, "Wallet"));
                    return s.a.createElement("div", {
                        className: "wallet-container"
                    }
                    , s.a.createElement("div", {
                        className: "container"
                    }
                    , k, s.a.createElement("div", {
                        className: "wallet-collectables-header"
                    }
                    , s.a.createElement("div", null, s.a.createElement("div", {
                        className: "header-title"
                    }
                    , m), r?s.a.createElement("h5", null, r+" "+u):null)), "CryptoKitties"!=m&&s.a.createElement(fa, {
                        currencyData: n, modalFunction: this.modalFunction, userAddress: p, amount: r, traderId: d
                    }
                    ), "CryptoKitties"==m&&s.a.createElement(ba, {
                        currencyData: n, modalFunction: this.modalFunction, userAddress: p, amount: r, traderId: d
                    }
                    )), s.a.createElement(C.h, {
                        centered: !0, isOpen: this.state.modalShown, toggle: this.toggleModal
                    }
                    , e))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        za=Object(p.f)(Xa),
        Qa=a(106),
        Za= {
            orderParams: {
                makerAddress: "makerAddress", takerAddress: "takerAddress"
            }
        }
        ,
        qa=(a(1675), a(600)),
        $a=a.n(qa),
        en=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).state= {
                    status: ""
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    var e=this, t=this.props.order;
                    Oe( {
                        order: t.signedOrder
                    }
                    ).then(function(t) {
                        t.order, t.currencies;
                        var a, n=t.orderInfo;
                        t.amounts;
                        switch(n.orderStatus) {
                            case 0: a="INVALID";
                            break;
                            case 1: case 2: a="UNFILLABLE";
                            break;
                            case 3: a="OPEN";
                            break;
                            case 4: a="EXPIRED";
                            break;
                            case 5: a="COMPLETED";
                            break;
                            case 6: a="CANCELLED";
                            break;
                            default: a="UNKNOWN"
                        }
                        e.setState( {
                            status: a
                        }
                        )
                    }
                    )
                }
            }
            , {
                key:"render", value:function() {
                    this.state.status;
                    var e, t, a, n, r, i, o=this.props, c=o.order, l=o.userAddress, d=c.swapDetails, m=c.swapURL, u=c.makerCurrencySymbol, p=c.takerCurrencySymbol, y=c.makerAddress, f=d.maker, b=d.taker, h=c.signedOrder, g=(h.makerAssetAmount, h.takerAssetAmount, Object(Re.getTokenIDURL)(d.maker.description.slice(1), u)), k=Object(Re.getTokenIDURL)(d.taker.description.slice(1), p);
                    l==y?(e=f.description, a=f.name, r=g, t=b.description, n=b.name, i=k): (t=f.description, n=f.name, i=g, e=b.description, a=b.name, r=k);
                    var v, E=c.updatedAt.seconds, w=M()(1e3*E).fromNow();
                    return v=null, console.log(c), s.a.createElement("tr", {
                        className: "table-row-card order-card"
                    }
                    , s.a.createElement("td", null, s.a.createElement("div", {
                        className: "swap-info"
                    }
                    , s.a.createElement("div", {
                        className: "swap-info-text"
                    }
                    , s.a.createElement("div", {
                        className: "swap-info-description"
                    }
                    , r?s.a.createElement("a", {
                        href: r, target: "_blank"
                    }
                    , e):e), s.a.createElement("div", {
                        className: "swap-info-name"
                    }
                    , a)), s.a.createElement("img", {
                        className: "arrow-img", src: $a.a
                    }
                    ), s.a.createElement("div", {
                        className: "swap-info-text"
                    }
                    , s.a.createElement("div", {
                        className: "swap-info-description"
                    }
                    , " ", i?s.a.createElement("a", {
                        href: i, target: "_blank"
                    }
                    , t):t), s.a.createElement("div", {
                        className: "swap-info-name"
                    }
                    , n))), s.a.createElement("div", {
                        className:"swap-link", style: {
                            clear: "both"
                        }
                    }
                    , s.a.createElement("a", {
                        href: m, target: "_blank"
                    }
                    , m))), s.a.createElement("td", {
                        align: "right"
                    }
                    , s.a.createElement("p", {
                        className: "order-status order-status-".concat(this.state.status.toLowerCase())
                    }
                    , this.state.status)), s.a.createElement("td", {
                        className: "swap-info-right", align: "right"
                    }
                    , v, s.a.createElement("div", {
                        className: "swap-info-updated"
                    }
                    , "Updated ", w)))
                }
            }
            ]),
            t
        }
        (n.Component),
        tn=(a(1676), function(e) {
            return s.a.createElement("div", {
                className: "page-navigation"
            }
            , e.fetchPrevPage?e.nextPageLoading?s.a.createElement("button", {
                className: "disabled", onClick: e.fetchPrevPage
            }
            , "PREV"):s.a.createElement("button", {
                onClick: e.fetchPrevPage
            }
            , "PREV"):s.a.createElement("button", {
                className: "hide"
            }
            , "PREV"), s.a.createElement("div", {
                className: "page-number"
            }
            , e.pageNumber), e.fetchNextPage?e.nextPageLoading?s.a.createElement("button", {
                className: "disabled", onClick: e.fetchNextPage
            }
            , "NEXT"):s.a.createElement("button", {
                onClick: e.fetchNextPage
            }
            , "NEXT"):s.a.createElement("button", {
                className: "hide"
            }
            , "NEXT"))
        }
        ),
        an=Za.orderParams.makerAddress,
        nn=Za.orderParams.takerAddress,
        sn=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).handleNoWeb3Connection=function() {
                    window.web3||a.setState( {
                        loading: !1, modalStep: 6, handlingNoWeb3Connection: !0
                    }
                    , function() {
                        a.showModal()
                    }
                    )
                }
                ,
                a.fetchNextPage=function() {
                    var e=a.props.meta.userAddress,
                    t=a.state,
                    n=t.orderData,
                    s=t.currentTab,
                    r=t.pageLimit,
                    i=n[s],
                    o=i.prevStack,
                    c=i.nextPage,
                    l=i.current,
                    d=c;
                    e&&(a.setState( {
                        nextPageLoading: !0
                    }
                    ), Object(Z.i)( {
                        userAddress: e, targetAddress: s, pageToFetch: d, pageLimit: r
                    }
                    ).then(function(e) {
                        n[s]=Object(z.a)( {
                            prevStack: o
                        }
                        , e, {
                            initialOrdersFetched: !0
                        }
                        ), n[s].prevStack.push(l), a.setState( {
                            nextPageLoading: !1, orderData: n
                        }
                        )
                    }
                    ).catch(function(e) {
                        e.message===Qa.a.pageNavigation.noMorePages&&(n[s].nextPage=null), a.setState( {
                            orderData: n, nextPageLoading: !1
                        }
                        )
                    }
                    ))
                }
                ,
                a.fetchPrevPage=function() {
                    var e=a.props.meta.userAddress,
                    t=a.state,
                    n=t.orderData,
                    s=t.currentTab,
                    r=t.pageLimit,
                    i=n[s].prevStack,
                    o=i[i.length-1];
                    e&&(a.setState( {
                        nextPageLoading: !0
                    }
                    ), Object(Z.i)( {
                        userAddress: e, targetAddress: s, pageToFetch: o, pageLimit: r
                    }
                    ).then(function(e) {
                        n[s]=Object(z.a)( {}
                        , n[s], e, {
                            initialOrdersFetched: !0
                        }
                        ), n[s].prevStack.pop(), a.setState( {
                            nextPageLoading: !1, orderData: n
                        }
                        )
                    }
                    ).catch(function(e) {
                        a.setState( {
                            nextPageLoading: !1
                        }
                        )
                    }
                    ))
                }
                ,
                a.fetchData=function() {
                    var e=a.props.meta.userAddress,
                    t=a.state,
                    n=t.orderData,
                    s=t.currentTab,
                    r=t.pageLimit;
                    e&&Object(Z.i)( {
                        userAddress: e, targetAddress: s, pageToFetch: null, pageLimit: r
                    }
                    ).then(function(e) {
                        n[s]=Object(z.a)( {}
                        , n[s], e, {
                            initialOrdersFetched: !0
                        }
                        ), a.setState( {
                            orderData: n
                        }
                        )
                    }
                    ).catch(function(e) {
                        n[s].initialOrdersFetched=!0, a.setState( {
                            orderData: n
                        }
                        )
                    }
                    )
                }
                ,
                a.setTab=function(e) {
                    var t=a.state.orderData;
                    a.setState( {
                        currentTab: e
                    }
                    , function() {
                        t[nn].initialOrdersFetched||a.fetchData()
                    }
                    )
                }
                ,
                a.state= {
                    modalShown:!1,
                    loading:!1,
                    pageLimit:7,
                    nextPageLoading:!1,
                    currentTab:an,
                    tabLoading:!1,
                    orderData: {
                        makerAddress: {
                            orders: [], initialOrdersFetched: !1, nextPage: void 0, current: void 0, prevStack: []
                        }
                        ,
                        takerAddress: {
                            orders: [], initialOrdersFetched: !1, nextPage: void 0, current: void 0, prevStack: []
                        }
                    }
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    this.props.meta.userAddress&&this.fetchData(an)
                }
            }
            , {
                key:"componentDidUpdate", value:function(e) {
                    if(!window.web3&&!this.state.handlingNoWeb3Connection)return this.handleNoWeb3Connection();
                    (this.props.meta.firebaseUser&&e.meta.firebaseUser&&this.props.meta.firebaseUser.uid!==e.meta.firebaseUser.uid||!e.meta.firebaseUser&&this.props.meta.firebaseUser||!this.props.meta.firebaseUser&&e.meta.firebaseUser)&&this.fetchData()
                }
            }
            , {
                key:"render", value:function() {
                    var e=this, t=this.state, a=t.orderData, n=t.nextPageLoading, r=t.currentTab, i=a[r], o=i.orders, c=i.nextPage, l=i.prevStack, d=i.initialOrdersFetched, m=c?this.fetchNextPage: null, u=0!==l.length?this.fetchPrevPage: null, p=l.length+1, y=this.props.meta.userAddress, f=[];
                    o.length&&o.forEach(function(e) {
                        f.push(s.a.createElement(en, {
                            order: e, userAddress: y, key: e.createdAt
                        }
                        ))
                    }
                    );
                    var b=s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
                        className:r===an?"tab-button selected":"tab-button", onClick:function() {
                            return e.setTab(an)
                        }
                    }
                    , "Made by You"), s.a.createElement("button", {
                        className:r===nn?"tab-button selected":"tab-button", onClick:function() {
                            return e.setTab(nn)
                        }
                    }
                    , "Offered to You"));
                    return s.a.createElement("div", {
                        className: "wallet-container"
                    }
                    , s.a.createElement("div", {
                        className: "container"
                    }
                    , s.a.createElement("h5", {
                        className: "header-title"
                    }
                    , "Swap History"), b, d?f.length?s.a.createElement("div", null, s.a.createElement(C.n, null, s.a.createElement("tbody", {
                        className: "table-wrapper"
                    }
                    , f)), s.a.createElement(tn, {
                        fetchPrevPage: u, fetchNextPage: m, nextPageLoading: n, pageNumber: p
                    }
                    )):s.a.createElement("h5", {
                        className: "no-orders"
                    }
                    , "No orders to show."):s.a.createElement("div", {
                        className: "row text-center"
                    }
                    , s.a.createElement("div", {
                        className: "col-12 my-5"
                    }
                    , s.a.createElement(I.a, {
                        type: "Circles", color: "#DD3BAD"
                    }
                    )), s.a.createElement(C.h, {
                        centered: !0, isOpen: this.state.modalShown, toggle: this.toggleModal
                    }
                    , void 0))))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        rn=Object(p.f)(sn),
        on=a(146),
        cn=a.n(on),
        ln=(a(577), a(601)),
        dn=a.n(ln),
        mn=a(602),
        un=a.n(mn),
        pn=a(603),
        yn=a.n(pn),
        fn=a(604),
        bn=a.n(fn),
        hn=function(e) {
            return s.a.createElement("div", {
                className: "col-md-3 col-6 socials-holder"
            }
            , s.a.createElement("p", {
                className: "profile-header-grey"
            }
            , "SOCIALS"), e.discord&&s.a.createElement(s.a.Fragment, null, s.a.createElement(C.o, {
                placement: "top", target: "discord", trigger: "hover", delay: 0
            }
            , e.clipboardMessage||e.discord), s.a.createElement("div", {
                id: "discord", className: "profile-header-icon"
            }
            , s.a.createElement(L.a, {
                className: "invisible-clipboard", "data-clipboard-text": e.discord, onSuccess: e.onClipboardSuccess
            }
            , s.a.createElement(T.a, {
                src: un.a
            }
            )))), " ", e.twitter&&s.a.createElement(s.a.Fragment, null, s.a.createElement(C.o, {
                placement: "top", target: "twitter", delay: 0
            }
            , "Twitter"), s.a.createElement("a", {
                id: "twitter", className: "profile-header-icon", href: "https://twitter.com/"+e.twitter, target: "_blank", rel: "noopener noreferrer"
            }
            , s.a.createElement(T.a, {
                src: dn.a
            }
            ))), " ", e.instagram&&s.a.createElement(s.a.Fragment, null, s.a.createElement(C.o, {
                placement: "top", target: "instagram", delay: 0
            }
            , "Instagram"), s.a.createElement("a", {
                id: "instagram", className: "profile-header-icon", href: "https://instagram.com/"+e.instagram, target: "_blank", rel: "noopener noreferrer"
            }
            , s.a.createElement(T.a, {
                src: yn.a
            }
            ))), " ", e.website&&s.a.createElement(s.a.Fragment, null, s.a.createElement(C.o, {
                placement: "top", target: "website", delay: 0
            }
            , "Website"), s.a.createElement("a", {
                id: "website", className: "profile-header-icon", href: "https://"+e.website, target: "_blank", rel: "noopener noreferrer"
            }
            , s.a.createElement(T.a, {
                src: bn.a
            }
            ))))
        }
        ,
        gn=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).onClipboardSuccess=function() {
                    a.setState( {
                        clipboardMessage: "Copied!"
                    }
                    , function() {
                        setTimeout(function() {
                            a.setState( {
                                clipboardMessage: ""
                            }
                            )
                        }
                        , 2e3)
                    }
                    )
                }
                ,
                a.state= {
                    clipboardMessage: ""
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"render", value:function() {
                    var e=this.props, t=e.profileInfo, a=e.traderId, n=e.badges, r=t=t|| {}
                    , i=r.discord, o=r.twitter, c=r.instagram, l=r.website, d=n&&n.length>0, m=this.state.clipboardMessage, u=t.username?t.username: "Anonymous";
                    return s.a.createElement("div", {
                        className: "profile-header"
                    }
                    , s.a.createElement("div", {
                        className: "row justify-content-between"
                    }
                    , s.a.createElement("div", {
                        className: "col-md-6 col-s-12 trader-blocky-holder"
                    }
                    , s.a.createElement("div", {
                        id: "blocky", className: "trader-blocky"
                    }
                    , s.a.createElement(cn.a, {
                        className: "blocky-circle", scale: 6, seed: a
                    }
                    )), s.a.createElement("div", {
                        className:"profile-collectibles-info", style: {
                            float: "left"
                        }
                    }
                    , s.a.createElement("h5", {
                        className: "profile-header-name"
                    }
                    , u), s.a.createElement("small", {
                        className: "profile-header-address"
                    }
                    , a))), d&&s.a.createElement(ha, {
                        badges: n
                    }
                    ), (i||o||c||l)&&s.a.createElement(hn, {
                        discord: i, twitter: o, instagram: c, website: l, onClipboardSuccess: this.onClipboardSuccess, clipboardMessage: m
                    }
                    )))
                }
            }
            ]),
            t
        }
        (n.Component),
        kn=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).fetchData=function() {
                    var e=a.props,
                    t=e.traderId,
                    n=e.currencyData,
                    s=e.amount;
                    wa(t, n, s).then(function(e) {
                        a.setState( {
                            tokensData: e.tokensData, loading: !1
                        }
                        )
                    }
                    )
                }
                ,
                a.state= {
                    tokenAmount: null, loading: !0, tokensData: []
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidUpdate", value:function(e) {
                    var t=this;
                    e.traderId!==this.props.traderId?this.setState( {
                        tokensData: []
                    }
                    , function() {
                        t.fetchData()
                    }
                    ):e.amount!==this.props.amount&&this.fetchData()
                }
            }
            , {
                key:"componentDidMount", value:function() {
                    var e=this;
                    this.props.traderId&&this.setState( {
                        tokenAmount: this.props.amount
                    }
                    , function() {
                        return e.fetchData()
                    }
                    )
                }
            }
            , {
                key:"componentWillUnmount", value:function() {}
            }
            , {
                key:"render", value:function() {
                    var e=this.props.currencyData.name, t=this.props, a=t.modalFunction, n=t.userAddress, r=t.traderId, i=t.currencyData, o=(t.setStateFromChild, this.state), c=o.tokensData, l=o.loading, d=[];
                    return c&&c.forEach(function(t) {
                        d.push(s.a.createElement(ya, {
                            className: "profile-token-card", modalFunction: a, token: t, tokenType: e, key: t.tokenID, userAddress: n, traderId: r, currencyData: i
                        }
                        ))
                    }
                    ), s.a.createElement("td", null, s.a.createElement("div", {
                        className: "displayed-tokens-holder"
                    }
                    , s.a.createElement("div", {
                        className: "row profile-displayed-tokens-holder"
                    }
                    , d), s.a.createElement("div", null, l&&s.a.createElement("div", {
                        style: {
                            width: "100%", textAlign: "center"
                        }
                    }
                    , s.a.createElement(I.a, {
                        style: {
                            margin: "auto"
                        }
                        , type:"Circles", color:"#DD3BAD"
                    }
                    )))))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        vn=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).state= {
                    modalShown: !1, currencyData: null
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    var e=this.props.tokenAddress;
                    this.setState( {
                        currencyData: sa[1][e]
                    }
                    )
                }
            }
            , {
                key:"render", value:function() {
                    var e=this.props, t=e.traderId, a=e.amount, n=e.modalFunction, r=this.state.currencyData;
                    if(!r)return null;
                    var i=r.image_file, c=r.name, l=r.symbol, d=r.websiteURL, m=this.props.meta, u=m.userAddress, p=(m.onlyComponent?"/inlineprofile/": "/profile/")+t+"/"+r.viewAllName;
                    return s.a.createElement(s.a.Fragment, null, s.a.createElement("tr", {
                        className: "profile-collectibles"
                    }
                    , s.a.createElement("td", {
                        className: "profile-collectibles-icon"
                    }
                    , s.a.createElement("a", {
                        target: "_blank", href: d, rel: "noopener noreferrer"
                    }
                    , s.a.createElement("img", {
                        src: "/img/tokenImages/"+i, alt: ""
                    }
                    )), s.a.createElement("div", {
                        className: "profile-collectibles-info"
                    }
                    , s.a.createElement("h5", {
                        className: "profile-header-currency-name"
                    }
                    , c), s.a.createElement("small", {
                        className: "profile-collectable-symbol"
                    }
                    , "".concat(a, " ").concat(l)))), s.a.createElement("td", {
                        className: "profile-collectable-browse"
                    }
                    , s.a.createElement(o.b, {
                        to: p
                    }
                    , s.a.createElement("div", {
                        className: "browse-button transition"
                    }
                    , "BROWSE ALL")))), s.a.createElement("tr", {
                        className: "profile-collectibles"
                    }
                    , s.a.createElement(kn, {
                        modalFunction: n, currencyData: r, traderId: t, userAddress: u, amount: this.props.amount
                    }
                    )))
                }
            }
            ]),
            t
        }
        (n.Component),
        En=1e4,
        wn=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).handleNoWeb3Connection=function() {
                    window.web3||a.setState( {
                        loading: !1, modalStep: yt.METAMASK_PERMISSION, handlingNoWeb3Connection: !0
                    }
                    , function() {
                        a.showModal()
                    }
                    )
                }
                ,
                a.modalFunction=function(e) {
                    window.web3&&a.props.meta.userAddress?e.modalStep===yt.SEND?a.setState( {
                        modalStep: yt.SEND, selectedSendToken: e
                    }
                    , function() {
                        a.showModal()
                    }
                    ):e.modalStep===yt.SWAP?a.state.traderId!==a.props.meta.userAddress?a.props.history.push("/swap/0/0/"+e.symbol+"/"+e.tokenID):a.props.history.push("/swap/"+e.symbol+"/"+e.tokenID):e.modalStep===yt.OFFER?a.setState( {
                        modalStep: yt.OFFER, selectedOfferToken: e
                    }
                    , a.showModal()):e.modalStep===yt.VIEW_BADGE&&a.setState( {
                        modalStep: yt.VIEW_BADGE, selectedOfferToken: e
                    }
                    , a.showModal()):a.handleNoWeb3Connection()
                }
                ,
                a.toggleModal=function() {
                    a.state.modalShown?a.hideModal(): a.showModal()
                }
                ,
                a.showModal=function(e) {
                    e&&e.preventDefault(),
                    a.setState( {
                        modalShown: !0
                    }
                    )
                }
                ,
                a.hideModal=function(e) {
                    e&&e.preventDefault(),
                    a.setState( {
                        wrapHash: null, sendHash: !1, loading: !1, error: !1, pending: !1, modalShown: !1
                    }
                    )
                }
                ,
                a.onSend=function(e) {
                    e.selectedSendToken;
                    var t=e.sendAmount,
                    n=e.recipientAddress;
                    a.setState( {
                        metamaskPending: !0, pending: !1, loading: !0, error: !1
                    }
                    );
                    var s=a.props.meta.userAddress,
                    r=ce[1][a.state.selectedSendToken.currencyData.address],
                    i=r.address,
                    o=r.type,
                    c=r.decimals;
                    he( {
                        tokenAddress: i, tokenType: o, decimals: c, recipientAddress: n, sendAmount: t, userAddress: s
                    }
                    ).then(function(e) {
                        return a.setState( {
                            sendHash: e, pending: !0, metamaskPending: !1
                        }
                        ), Pe( {
                            hash: e
                        }
                        )
                    }
                    ).then(function(e) {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, modalStep: yt.SUCCESS
                        }
                        ), setTimeout(function() {
                            a.fetchData()
                        }
                        , En)
                    }
                    ).catch(function() {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, error: !0
                        }
                        , function() {
                            a.hideModal()
                        }
                        )
                    }
                    )
                }
                ,
                a.onSubmit=function(e) {
                    e.preventDefault();
                    var t=e.target.sendAmount.value,
                    n=a.state,
                    s=n.modalStep,
                    r=n.selectedSendToken;
                    if(s===yt.SEND) {
                        var i=e.target.recipientAddress.value;
                        a.onSend( {
                            selectedSendToken: r, sendAmount: t, recipientAddress: i
                        }
                        )
                    }
                }
                ,
                a.handleSignIn=function() {
                    a.setState( {
                        modalStep: yt.METAMASKSIGNIN, modalShown: !0
                    }
                    ),
                    Object(de.d)( {
                        isSignedIn: !1, userAddressParam: a.props.meta.userAddress
                    }
                    ).then(function(e) {
                        a.hideModal()
                    }
                    ).catch(function(e) {
                        e&&e.custom&&e.message&&alert(e.message)
                    }
                    )
                }
                ,
                a.fetchData=function() {
                    a.fetchTokensAndBadges()
                }
                ,
                a.fetchTokensAndBadges=function() {
                    var e,
                    t,
                    n=a.state.traderId,
                    s=[],
                    r=n.length<18,
                    i= {}
                    ,
                    o=[],
                    c=Object(Z.e)( {
                        userAddress: n
                    }
                    );
                    return r&&(c=Object(Z.f)( {
                        username: n
                    }
                    )),
                    c.then(function(i) {
                        if(e=i.profile, t=e?e.userAddress: n, r&&!e)throw a.setState( {
                            contentLocked: !0, initialFetched: !0
                        }
                        ), new Error("not valid username");
                        if(e&&e.username&&e.username!==n) {
                            var o=(a.props.meta.onlyComponent?"/inlineprofile/": "/profile/")+e.username;
                            a.props.history.push(o)
                        }
                        for(var c in sa[1])sa[1][c].isProfile&&s.push(fe( {
                            tokenAddress: sa[1][c].address, tokenType: sa[1][c].type, decimals: sa[1][c].decimals, userAddress: t
                        }
                        ));
                        return Promise.all(s)
                    }
                    ).then(function(n) {
                        var s;
                        for(s=0;
                        s<n.length;
                        s++)n[s].amount&&(i[sa[1][n[s].tokenAddress].symbol]= {
                            amount: n[s].amount, tokenAddress: n[s].tokenAddress
                        }
                        );
                        a.setState( {
                            amounts: i, initialFetched: !0, profileInfo: e, traderId: t
                        }
                        );
                        var r=a.state.badges;
                        return Ca( {
                            userAddress: t, badgesObject: r
                        }
                        )
                    }
                    ).then(function(e) {
                        if(!e.length)throw new Error("no badges");
                        a.setState( {
                            badges: e
                        }
                        )
                    }
                    ).catch(function(n) {
                        "no badges"!==n.message&&o&&0!==o.length||a.setState( {
                            amounts: i, initialFetched: !0, profileInfo: e, traderId: t, badges: o
                        }
                        )
                    }
                    )
                }
                ,
                a.setStateFromChild=function(e, t) {
                    a.setState(e, function() {
                        t&&t()
                    }
                    )
                }
                ,
                a.state= {
                    contentLocked:!1,
                    traderId:"",
                    amounts:[],
                    modalData: {}
                    ,
                    modalShown: !1, initialFetched: !1, badges: JSON.parse(JSON.stringify(na))
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    var e=this, t=this.props.match.params.traderId;
                    this.setState( {
                        traderId: t.toLowerCase()
                    }
                    , function() {
                        return e.fetchData()
                    }
                    )
                }
            }
            , {
                key:"componentDidUpdate", value:function(e) {
                    var t=this;
                    if(this.props.match.params.traderId!==e.match.params.traderId) {
                        var a=this.props.match.params.traderId;
                        this.setState( {
                            amounts: [], profileInfo: null, initialFetched: !1, contentLocked: !1, badges: JSON.parse(JSON.stringify(na)), traderId: a.toLowerCase()
                        }
                        , function() {
                            return t.fetchData()
                        }
                        )
                    }
                }
            }
            , {
                key:"render", value:function() {
                    var e, t, a=this, n=this.state, r=n.amounts, i=n.profileInfo, o=n.initialFetched, c=n.traderId, l=n.modalShown, d=n.modalStep, m=n.metamaskPending, u=n.pending, p=n.badges, y=n.contentLocked, f=this.props, b=f.meta, h=f.history;
                    if(e=this.state.modalContents, l) {
                        var g=this.state, k=g.selectedSendToken, v=g.sendHash, E=g.wrapHash;
                        if(e=Ea( {
                            step: d, selectedSendToken: k, hash: v, wrapHash: E, currencyData: k?k.currencyData: "", onSubmit: this.onSubmit
                        }
                        ), d!==yt.TOKEN_MISSING&&d!==yt.SIGN&&d!==yt.APPROVE_UNLOCK||(e=this.state.modalContents), d===yt.SEND)t=s.a.createElement(Ma, {
                            tokenID: e.tokenID, currencyData: e.currencyData, tokenAmount: e.tokenAmount, tokenPrice: e.tokenPrice, heading: e.headingText, isNFT: e.isNFT, imgUrl: e.imgUrl, tradeHeading: e.tradeHeading, onLinkClick: e.onLinkClick, linkText: e.linkText, linkURL: e.linkURL, metamaskPending: m, pending: u, onCTA: e.onCTA, onSubmit: e.onSubmit, onClose: this.hideModal, ctaText: e.ctaText
                        }
                        );
                        else if(d===yt.OFFER) {
                            var w=this.state.selectedOfferToken, A=this.props.meta;
                            t=s.a.createElement(Ft, {
                                meta:A, params: {
                                    makerAmount: 0, makerAssetSymbol: "DAI", takerAmount: w.tokenID, takerAssetSymbol: w.symbol, takerAddress: this.state.traderId
                                }
                                , componentType:pt.OFFER_MODAL, setStateFromChild:function(e, t) {
                                    return a.setStateFromChild(e, t)
                                }
                                , onClose:this.hideModal
                            }
                            )
                        }
                        else if(d===yt.VIEW_BADGE) {
                            var S=this.state.selectedSendToken, N=S.price, x=S.imgUrl, T=S.badgeName, O=S.productId, M=S.buyDescription;
                            e=Ea( {
                                step: d, onSubmit: this.onSubmit, price: N, text: M
                            }
                            ), t=s.a.createElement(Ua, {
                                price: N, heading: e.heading, badgeName: T, productId: O, imgUrl: x, text: e.text, onLinkClick: e.onLinkClick, linkText: e.linkText, linkURL: e.linkURL, metamaskPending: m, pending: u, onCTA: e.onCTA, onSubmit: this.onSubmit, onClose: this.hideModal, ctaText: e.ctaText
                            }
                            )
                        }
                        else t=s.a.createElement(J, {
                            heading: e.headingText, headerSVG: e.headingSVG, tradeHeading: e.tradeHeading, text: e.text, onLinkClick: e.onLinkClick, linkText: e.linkText, linkURL: e.linkURL, metamaskPending: m, pending: u, onCTA: e.onCTA, onClose: this.hideModal, ctaText: e.ctaText
                        }
                        )
                    }
                    var D=[];
                    if(this.state.initialFetched)for(var P in r)D.push(s.a.createElement(vn, {
                        modalFunction:this.modalFunction, key:P, tokenAddress:r[P].tokenAddress, amount:r[P].amount, traderId:c, meta:b, history:h, setStateFromChild:function(e, t) {
                            return a.setStateFromChild(e, t)
                        }
                    }
                    ));
                    return o?y?s.a.createElement("div", {
                        className: "profile-container"
                    }
                    , s.a.createElement("div", {
                        className: "content-locked"
                    }
                    , "This user does not have a profile.")):s.a.createElement("div", {
                        className: "profile-container"
                    }
                    , s.a.createElement("div", {
                        className: "container"
                    }
                    , s.a.createElement(gn, {
                        traderId: c, profileInfo: i, badges: p
                    }
                    ), s.a.createElement(C.n, null, s.a.createElement("tbody", null, D))), s.a.createElement(C.h, {
                        centered: !0, isOpen: this.state.modalShown, toggle: this.toggleModal
                    }
                    , t)):s.a.createElement("div", {
                        className: "row text-center"
                    }
                    , s.a.createElement("div", {
                        className: "col-12 my-5"
                    }
                    , s.a.createElement(I.a, {
                        type: "Circles", color: "#DD3BAD"
                    }
                    )), s.a.createElement(C.h, {
                        centered: !0, isOpen: this.state.modalShown, toggle: this.toggleModal
                    }
                    , t))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        An=Object(p.f)(wn),
        Sn=(a(1677), function(e, t) {
            var a= {}
            ;
            return t.forEach(function(t) {
                e[t]&&(a[t]=e[t])
            }
            ), a
        }
        ),
        Nn=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).fetchData=function() {
                    if(!a.props.meta.firebaseUser)throw new Error("Not signed in");
                    var e=a.props.meta.firebaseUser.uid;
                    JSON.parse(JSON.stringify(na));
                    Object(Z.e)( {
                        userAddress: e
                    }
                    ).then(function(e) {
                        var t= {
                            initialFetched: !0, userHasProfile: !1
                        }
                        ;
                        if(e.profile) {
                            var n=Sn(e.profile, ["username", "instagram", "twitter", "discord", "website"]);
                            t.originalInfo=JSON.parse(JSON.stringify(n)), t.currentInfo=n, t.userHasProfile=!0
                        }
                        a.setState(t)
                    }
                    ).catch(function(e) {}
                    )
                }
                ,
                a.infoHasChanged=function(e) {
                    var t=a.state.originalInfo;
                    for(var n in e)if(e[n]&&t[n]) {
                        if(e[n].toLowerCase()!==t[n].toLowerCase())return!0
                    }
                    else if(!t[n]&&e[n]||t[n]&&!e[n])return!0;
                    return!1
                }
                ,
                a.onChange=function(e) {
                    e.preventDefault();
                    var t=e.target,
                    n=t.name,
                    s=t.value,
                    r=a.state,
                    i=r.currentInfo,
                    o=r.originalInfo,
                    c=r.validationClasses,
                    l=r.validationMessages;
                    if(i[n]="discord"===n?s: s.toLowerCase(), "username"===n)if(s===o.username||""===s)l.username=null, c.username=null, a.setState( {
                        validationMessages: l, validationClasses: c, currentInfo: i
                    }
                    );
                    else if(s.length<6&&0!==s.length||s.length>16)l.username="Please enter either 0 or at least 6 characters",
                    c.username="validation-class-error",
                    a.setState( {
                        validationMessages: l, validationClasses: c, currentInfo: i
                    }
                    );
                    else {
                        var d=a.state.validationMessages;
                        d.username="",
                        c.username="",
                        a.setState( {
                            validationMessages: d, validationClasses: c, currentInfo: i
                        }
                        ),
                        "username"===n&&Object(Z.b)( {
                            username: s
                        }
                        ).then(function(e) {
                            if(s.toLowerCase()===a.state.currentInfo.username) {
                                var t=e.data;
                                d.username=t.error, c.username="validation-class-error", t.hasUsername?d.username="Username already claimed":t.success&&(d.username=t.success&&"Username available", c.username="validation-class-success"), a.setState( {
                                    validationMessages: d, validationClasses: c, currentInfo: i
                                }
                                )
                            }
                        }
                        ).catch(function(e) {}
                        )
                    }
                    else a.setState( {
                        currentInfo: i
                    }
                    )
                }
                ,
                a.onSubmit=function(e) {
                    e.preventDefault();
                    var t=a.state,
                    n=t.currentInfo,
                    s=t.userHasProfile,
                    r=a.props.meta.userAddress;
                    if(a.infoHasChanged(n)) {
                        for(var i in n)n[i]=n[i].trim();
                        a.setState( {
                            working: !0
                        }
                        ),
                        s?Object(Z.o)( {
                            profile: n, userAddress: r
                        }
                        ).then(function(e) {
                            a.props.history.push("/profile/"+r)
                        }
                        ):Object(Z.d)( {
                            profile: n, userAddress: r
                        }
                        ).then(function(e) {
                            a.props.history.push("/profile/"+r)
                        }
                        )
                    }
                }
                ,
                a.state= {
                    contentLocked:!1,
                    currentInfo: {
                        username: "", instagram: "", twitter: "", discord: "", website: ""
                    }
                    ,
                    originalInfo: {
                        username: "", instagram: "", twitter: "", discord: "", website: ""
                    }
                    ,
                    err:"",
                    validationMessages: {
                        username: "", instagram: "", twitter: "", discord: "", website: ""
                    }
                    ,
                    validationClasses: {
                        username: "", instagram: "", twitter: "", discord: "", website: ""
                    }
                    ,
                    userHasProfile:!1,
                    working:!1,
                    initialFetched:!1
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    if(this.props.meta.firebaseUser&&this.fetchData(), this.props.meta.userAddress&&!this.props.meta.firebaseUser)return this.props.history.push("/wallet")
                }
            }
            , {
                key:"componentDidUpdate", value:function(e) {
                    if(!window.web3&&!this.state.handlingNoWeb3Connection)return this.handleNoWeb3Connection();
                    (this.props.meta.firebaseUser&&e.meta.firebaseUser&&this.props.meta.firebaseUser.uid!==e.meta.firebaseUser.uid||!e.meta.firebaseUser&&this.props.meta.firebaseUser)&&this.fetchData(), !this.props.meta.firebaseUser&&e.meta.firebaseUser&&this.props.history.push("/wallet")
                }
            }
            , {
                key:"render", value:function() {
                    var e=this.state, t=e.currentInfo, a=e.initialFetched, n=e.validationMessages, r=e.validationClasses, i=e.contentLocked, c=t.username, l=t.instagram, d=t.twitter, m=t.discord, u=t.website, p=this.state.working, y=!this.infoHasChanged(t)||p;
                    return a?i?s.a.createElement("div", {
                        className: "profile-container"
                    }
                    , s.a.createElement("div", {
                        className: "content-locked"
                    }
                    , "You must own a", " ", s.a.createElement(o.b, {
                        className: "content-locked-link transition", to: "/badges/"
                    }
                    , "badge"), " ", "to access this feature.")):s.a.createElement("div", {
                        className: "profile-container"
                    }
                    , s.a.createElement("div", {
                        className: "edit-profile-form-container form-group"
                    }
                    , s.a.createElement("form", {
                        onSubmit: this.onSubmit, autoComplete: "off"
                    }
                    , s.a.createElement("h3", {
                        className: "title"
                    }
                    , "Edit Profile"), n&&n.username&&s.a.createElement("label", {
                        className: r.username, htmlFor: "username"
                    }
                    , n.username), n?!n.username&&s.a.createElement("label", {
                        htmlFor: "username"
                    }
                    , "Username"):s.a.createElement("label", {
                        htmlFor: "username"
                    }
                    , "Username"), s.a.createElement("input", {
                        type: "text", name: "username", onChange: this.onChange, value: c, disabled: p
                    }
                    ), s.a.createElement("span", {
                        className: "input-description"
                    }
                    , "https://boxswap.io/profile/".concat(c||"")), s.a.createElement("label", {
                        htmlFor: "discord"
                    }
                    , "Discord"), s.a.createElement("input", {
                        type: "text", name: "discord", onChange: this.onChange, value: m, disabled: p
                    }
                    ), s.a.createElement("span", {
                        className: "input-description"
                    }
                    , "Join our", " ", s.a.createElement("a", {
                        className: "transition", href: "https://discord.gg/74hqtSG", target: "_blank", rel: "noopener noreferrer"
                    }
                    , "Discord.")), s.a.createElement("label", {
                        htmlFor: "twitter"
                    }
                    , "Twitter"), s.a.createElement("input", {
                        type: "text", name: "twitter", onChange: this.onChange, value: d, disabled: p
                    }
                    ), " ", s.a.createElement("span", {
                        className: "input-description"
                    }
                    , "https://twitter.com/".concat(d||"")), s.a.createElement("label", {
                        htmlFor: "instagram"
                    }
                    , "Instagram"), s.a.createElement("input", {
                        type: "text", name: "instagram", onChange: this.onChange, value: l, disabled: p
                    }
                    ), " ", s.a.createElement("span", {
                        className: "input-description"
                    }
                    , "https://instagram.com/".concat(l||"")), s.a.createElement("label", {
                        htmlFor: "website"
                    }
                    , "Website"), s.a.createElement("input", {
                        type: "text", name: "website", onChange: this.onChange, value: u, disabled: p
                    }
                    ), s.a.createElement("span", {
                        className: "input-description"
                    }
                    , "https://".concat(u||"")), s.a.createElement("span", {
                        className: "input-description input-description-right"
                    }
                    , "*All fields optional"), s.a.createElement("button", {
                        type: "submit", className: "btn btn-primary edit-profile-save-button ".concat(y?"btn-inactive": "")
                    }
                    , p?s.a.createElement(I.a, {
                        type: "Circles", color: "#fff", height: 24
                    }
                    ):"Save")))):s.a.createElement("div", {
                        className: "row text-center"
                    }
                    , s.a.createElement("div", {
                        className: "col-12 my-5"
                    }
                    , s.a.createElement(I.a, {
                        type: "Circles", color: "#DD3BAD"
                    }
                    )))
                }
            }
            ]),
            t
        }
        (n.Component),
        xn=Object(p.f)(Nn),
        In=a(203),
        Tn=(a(1678), a(1679), function(e) {
            function t() {
                return Object(c.a)(this, t), Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e), Object(l.a)(t, [ {
                key:"render", value:function() {
                    var e=this.props, t=e.badgeId, a=e.productId, n=e.price, r=e.badgeName, i=e.image, o=e.description, c=e.stats, l=e.icons, d=e.isPurchaseable, m=e.modalFunction, u=e.buyDescription, p=[];
                    for(var y in l) {
                        var f=l[y], b=f.image, h=f.description, g=f.iconName;
                        p.push(s.a.createElement(s.a.Fragment, {
                            key: b
                        }
                        , s.a.createElement("img", {
                            key: b, description: h, src: b, id: "".concat(g).concat(t), alt: "icon"
                        }
                        ), h&&s.a.createElement(C.o, {
                            placement: "top", target: "".concat(g).concat(t), trigger: "hover", delay: 0
                        }
                        , h)))
                    }
                    var k=c.circulating, v=c.supply, E=c.owned, w="";
                    E&&(w=w?w.concat(" \u2022 "+E+" Owned"):w.concat(E+" Owned")), (k||0===k)&&(w=w?w.concat(" \u2022 "+k+" Circulating"):w.concat(k+" Circulating")), v&&(w=w?w.concat(" \u2022 "+v+" Supply"):w.concat(v+" Supply"));
                    var A=E?"":"unowned";
                    return s.a.createElement("div", {
                        className: "col-12 col-sm-6 col-md-4 badge-card-container"
                    }
                    , s.a.createElement("div", {
                        className: "badge-card"
                    }
                    , s.a.createElement("h3", null, r), s.a.createElement("img", {
                        className: "badge-img ".concat(A), src: i, alt: "badge"
                    }
                    ), s.a.createElement("div", {
                        className: "badge-description"
                    }
                    , o), s.a.createElement("div", {
                        className: "badge-stats"
                    }
                    , w), s.a.createElement("div", {
                        className: "badge-icons-container"
                    }
                    , s.a.createElement("div", {
                        className: "icons "+A
                    }
                    , p), d&&s.a.createElement("button", {
                        className:"buy-badge-button transition", onClick:function() {
                            m( {
                                modalStep: yt.BUY_BADGE, productId: a, buyDescription: u, price: n, imgUrl: i, badgeName: r
                            }
                            )
                        }
                    }
                    , E?"BUY MORE":"BUY NOW"))))
                }
            }
            ]), t
        }
        (n.Component)),
        Cn=1e4,
        On=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).modalFunction=function(e) {
                    window.web3||a.handleNoWeb3Connection(),
                    e.modalStep===yt.BUY_BADGE&&a.setState( {
                        modalStep: yt.BUY_BADGE, modalData: e
                    }
                    , function() {
                        a.showModal()
                    }
                    )
                }
                ,
                a.toggleModal=function() {
                    a.state.modalShown?a.hideModal(): a.showModal()
                }
                ,
                a.showModal=function(e) {
                    e&&e.preventDefault(),
                    a.setState( {
                        modalShown: !0
                    }
                    )
                }
                ,
                a.hideModal=function(e) {
                    e&&e.preventDefault(),
                    a.setState( {
                        wrapHash: null, hash: null, sendHash: null, loading: !1, error: !1, pending: !1, modalShown: !1
                    }
                    )
                }
                ,
                a.handleSignIn=function() {
                    a.setState( {
                        modalStep: yt.METAMASKSIGNIN, modalShown: !0
                    }
                    ),
                    Object(de.d)( {
                        isSignedIn: !1, userAddressParam: a.props.meta.userAddress
                    }
                    ).then(function(e) {
                        a.hideModal()
                    }
                    ).catch(function(e) {
                        e&&e.custom&&e.message&&alert(e.message)
                    }
                    )
                }
                ,
                a.handleNoWeb3Connection=function() {
                    window.web3||a.setState( {
                        loading: !1, modalStep: yt.METAMASK_PERMISSION, handlingNoWeb3Connection: !0
                    }
                    , function() {
                        a.showModal()
                    }
                    )
                }
                ,
                a.onSubmit=function(e) {
                    e.preventDefault();
                    var t=a.state.modalData.productId,
                    n=a.props.meta.userAddress;
                    a.setState( {
                        metamaskPending: !0, pending: !1, loading: !1, error: !1
                    }
                    ),
                    ge( {
                        productId: t, userAddress: n
                    }
                    ).then(function(e) {
                        return a.setState( {
                            hash: e, pending: !0, metamaskPending: !1
                        }
                        ), Pe( {
                            hash: e
                        }
                        )
                    }
                    ).then(function(e) {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, modalStep: yt.SUCCESS
                        }
                        ), setTimeout(function() {
                            a.fetchData()
                        }
                        , Cn)
                    }
                    ).catch(function() {
                        a.setState( {
                            metamaskPending: !1, pending: !1, loading: !1, error: !0
                        }
                        , function() {
                            a.hideModal()
                        }
                        )
                    }
                    )
                }
                ,
                a.fetchData=function() {
                    var e=a.props.meta.userAddress,
                    t=a.state.badges;
                    Ta( {
                        userAddress: e, badgesObject: t
                    }
                    ).then(function(e) {
                        a.setState( {
                            badges: e, loading: !1
                        }
                        )
                    }
                    ).catch(function(e) {
                        a.setState( {
                            badges: t, loading: !1
                        }
                        )
                    }
                    )
                }
                ,
                a.goBack=function() {
                    a.props.history.push("/wallet/")
                }
                ,
                a.state= {
                    badges:JSON.parse(JSON.stringify(na)),
                    modalData: {}
                    ,
                    modalShown: !1, sendHash: null, wrapHash: null, loading: !0
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    this.props.meta.userAddress&&this.fetchData()
                }
            }
            , {
                key:"componentDidUpdate", value:function(e) {
                    if(!window.web3&&!this.state.handlingNoWeb3Connection)return this.handleNoWeb3Connection();
                    this.props.meta.userAddress&&this.props.meta.userAddress!==e.meta.userAddress&&this.fetchData()
                }
            }
            , {
                key:"render", value:function() {
                    var e, t=this.state, a=t.badges, n=t.modalShown, r=t.modalStep, i=t.metamaskPending, o=t.pending, c=t.loading, l=t.hash, d=t.modalData, m=t.wrapHash, u=this.state.modalContents, p=[];
                    for(var y in a) {
                        var f=a[y], b=f.badgeName, h=f.badgeId, g=f.price, k=f.productId, v=f.image, E=f.description, w=f.stats, A=f.icons, S=f.buyDescription, N=f.isPurchaseable;
                        p.push(s.a.createElement(Tn, {
                            badgeId: h, productId: k, price: g, key: b, buyDescription: S, badgeName: b, image: v, description: E, stats: w, numberOwned: w.owned?w.owned: 0, icons: A, isPurchaseable: N, modalFunction: this.modalFunction
                        }
                        ))
                    }
                    if(p.sort(function(e, t) {
                        return t.props.numberOwned-e.props.numberOwned
                    }
                    ), n)if(r===yt.BUY_BADGE) {
                        g=d.price, h=d.badgeId;
                        var x, T=d.imgUrl;
                        b=d.badgeName, k=d.productId, S=d.buyDescription;
                        u=Ea( {
                            step: r, hash: l, wrapHash: m, onSubmit: this.onSubmit, price: g, text: S, productId: k
                        }
                        ), e=s.a.createElement(Fa, (x= {
                            price: g, heading: u.heading, badgeName: b, productId: k, imgUrl: T, text: u.text, onLinkClick: u.onLinkClick, linkText: u.linkText, linkURL: u.linkURL, metamaskPending: i, pending: o, onCTA: u.onCTA, onSubmit: this.onSubmit, onClose: this.hideModal
                        }
                        , Object(In.a)(x, "onCTA", u.onCTA), Object(In.a)(x, "ctaText", u.ctaText), x))
                    }
                    else u=Ea( {
                        step: r, hash: l, onSubmit: this.onSubmit
                    }
                    ), e=s.a.createElement(J, {
                        heading: u.headingText, headerSVG: u.headingSVG, tradeHeading: u.tradeHeading, text: u.text, linkText: u.linkText, onLinkClick: u.onLinkClick, linkURL: u.linkURL, metamaskPending: i, pending: o, onCTA: u.onCTA, onClose: this.hideModal, ctaText: u.ctaText
                    }
                    );
                    return s.a.createElement("div", {
                        className: "wallet-container"
                    }
                    , s.a.createElement("div", {
                        className: "container"
                    }
                    , s.a.createElement("button", {
                        className: "btn back-button opacity-hover transition", onClick: this.goBack
                    }
                    , s.a.createElement("img", {
                        src: Ya.a
                    }
                    ), s.a.createElement("span", null, "Wallet")), c&&s.a.createElement("div", {
                        style: {
                            width: "100%", textAlign: "center"
                        }
                    }
                    , s.a.createElement(I.a, {
                        style: {
                            margin: "auto"
                        }
                        , type:"Circles", color:"#DD3BAD"
                    }
                    )), s.a.createElement("div", {
                        className: "wallet-collectables-header"
                    }
                    , s.a.createElement("div", {
                        className: "header-title"
                    }
                    , "Badges")), s.a.createElement("div", {
                        className: "badge-collectibles-container"
                    }
                    , s.a.createElement("div", {
                        className: "row justify-content-around "
                    }
                    , p))), s.a.createElement(C.h, {
                        centered: !0, isOpen: this.state.modalShown, toggle: this.toggleModal
                    }
                    , e))
                }
            }
            ]),
            t
        }
        (n.Component),
        Mn=Object(p.f)(On),
        Dn=(a(1680), a(1681), a(170)),
        Pn=(a(1682), function(e) {
            function t() {
                return Object(c.a)(this, t), Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e), Object(l.a)(t, [ {
                key:"render", value:function() {
                    var e, t=this.props, a=t.children, n=Object(Dn.a)(t, ["children"]), r=n.type, i=(e=r).slice(0, 1).toUpperCase()+e.slice(1);
                    return s.a.createElement("div", {
                        className: "Checkable ".concat(i)
                    }
                    , s.a.createElement("label", {
                        className: "Checkable_label ".concat(i, "_label")
                    }
                    , s.a.createElement("input", Object.assign( {
                        className: "Checkable_input ".concat(i, "_input")
                    }
                    , n)), s.a.createElement("span", {
                        className: "Checkable_title ".concat(i, "_title")
                    }
                    , a)))
                }
            }
            ]), t
        }
        (s.a.Component));
        function Ln(e) {
            return s.a.createElement(Pn, Object.assign( {
                type: "checkbox"
            }
            , e))
        }
        a(1683);
        function _n(e) {
            return s.a.createElement(Pn, Object.assign( {
                type: "radio"
            }
            , e))
        }
        a(1684);
        var Fn=function(e) {
            function t(e) {
                var a;
                Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).setSelected=function(e, t) {
                    return function(n) {
                        var s=n.target.checked,
                        r=a.state.selected,
                        i=a.props.onChange,
                        o=r.indexOf(e),
                        c=o>=0;
                        if(t)if(s) {
                            if(c)return;
                            r.push(e)
                        }
                        else {
                            if(!c)return;
                            r.splice(o, 1)
                        }
                        else if(s) {
                            if(c)return;
                            r=[e]
                        }
                        else r=[];
                        a.setState( {
                            selected: r
                        }
                        , function() {
                            i(r)
                        }
                        )
                    }
                }
                ,
                a.getCheckboxHandler=function(e) {
                    return function(t) {
                        return a.updateItem(e)
                    }
                }
                ,
                a.expandList=function() {
                    return a.setState( {
                        expanded: !0
                    }
                    )
                }
                ;
                var n=[];
                return e.options.forEach(function(e) {
                    e.selected&&n.push(e.value)
                }
                ),
                a.state= {
                    expanded: !1, selected: n
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"render", value:function() {
                    var e=this, t=this.props, a=t.options, n=t.name, r=t.title, i=t.multiple, o=t.max, c=this.state.expanded, l=o;
                    l&&!c||(l=a.length);
                    var d=a.slice(0, l), m=l<a.length;
                    return s.a.createElement("div", {
                        className: "OptionGroup"
                    }
                    , s.a.createElement("h3", null, r), s.a.createElement("div", {
                        className: "OptionGroup_options"
                    }
                    , d.map(function(t) {
                        var a=i?Ln: _n;
                        return s.a.createElement(a, {
                            name: n, value: t.value, key: "checkable_".concat(n, "_").concat(t.value), onChange: e.setSelected(t.value, i), defaultChecked: t.selected
                        }
                        , t.title)
                    }
                    ), m&&s.a.createElement("button", {
                        type: "button", onClick: this.expandList
                    }
                    , "More")))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        Un=(a(1685), function(e) {
            function t(e) {
                var a;
                Object(c.a)(this, t), (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).setSelected=function(e) {
                    return function(t) {
                        var n=a.state.selected, s=a.props.onSelect;
                        n[e]=t, a.setState( {
                            selected: n
                        }
                        , function() {
                            s(a.state.selected)
                        }
                        )
                    }
                }
                ;
                var n= {}
                ;
                return e.groups.forEach(function(e) {
                    n[e.name]=[], e.options.forEach(function(t) {
                        t.selected&&n[e.name].push(t.value)
                    }
                    )
                }
                ), a.state= {
                    selected: n
                }
                , a
            }
            return Object(u.a)(t, e), Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    (0, this.props.onSelect)(this.state.selected)
                }
            }
            , {
                key:"render", value:function() {
                    var e=this, t=this.props.groups;
                    return s.a.createElement("div", {
                        className: "SelectionGroup"
                    }
                    , t.map(function(t) {
                        return s.a.createElement(Fn, Object.assign( {}
                        , t, {
                            key: t.name, onChange: e.setSelected(t.name)
                        }
                        ))
                    }
                    ))
                }
            }
            ]), t
        }
        (s.a.Component));
        a(1686);
        function Rn(e) {
            var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 9, a=arguments.length>2&&void 0!==arguments[2]?arguments[2]: "...", n=t+a.length;
            return e.length<=n?e: "".concat(e.slice(0, t)).concat(a)
        }
        var jn=function(e) {
            function t() {
                return Object(c.a)(this, t),
                Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"render", value:function() {
                    var e=this.props, t=e.src, a=e.title, n=e.text, r=e.classes, i=void 0===r?[]: r;
                    return s.a.createElement("div", {
                        className: "Activity_asset_image px-1 text-center ".concat(i.join(" "))
                    }
                    , s.a.createElement("img", {
                        className: "img-fluid", src: t, alt: a
                    }
                    ), s.a.createElement("div", {
                        className: "Activity_asset_image_title my-1"
                    }
                    , a), s.a.createElement("div", {
                        className: "Activity_asset_image_text my-1"
                    }
                    , n))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        Bn=function() {
            return null
        }
        ,
        Hn=function(e) {
            function t() {
                return Object(c.a)(this, t),
                Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"render", value:function() {
                    var e=this.props, t=e.renderTitle, a=void 0===t?Bn: t, n=e.renderCanvas, r=void 0===n?Bn: n, i=Object(Dn.a)(e, ["renderTitle", "renderCanvas"]), o=i.type, c=i.updatedAt.seconds, l=M()(1e3*c).fromNow(), d=a(i), m=r(i);
                    return s.a.createElement("div", {
                        className: "Activity_".concat(o)
                    }
                    , d&&s.a.createElement("h5", {
                        className: "Activity_head m-0"
                    }
                    , d), s.a.createElement("small", {
                        className: "Activity_time my-2 d-block"
                    }
                    , l), m&&s.a.createElement("div", {
                        className: "Activity_canvas"
                    }
                    , m))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        Gn=function(e) {
            function t() {
                var e,
                a;
                Object(c.a)(this, t);
                for(var n=arguments.length, r=new Array(n), i=0;
                i<n;
                i++)r[i]=arguments[i];
                return(a=Object(d.a)(this, (e=Object(m.a)(t)).call.apply(e, [this].concat(r)))).renderTitle=function(e) {
                    var t=e.assets,
                    a=e.makerAddress,
                    n=t[0],
                    r="".concat(n.singular||n.name, " #").concat(n.id);
                    return s.a.createElement(s.a.Fragment, null, s.a.createElement("a", {
                        href: "", target: "_blank"
                    }
                    , Rn(a)), " ", "posted", " ", s.a.createElement("a", {
                        href: n.link, target: "_blank"
                    }
                    , r), " ", "for sale")
                }
                ,
                a.renderCanvas=function(e) {
                    var t=e.assets[0];
                    return s.a.createElement("a", {
                        href: t.link, target: "_blank"
                    }
                    , s.a.createElement(jn, {
                        src: t.image, title: t.name, text: "#".concat(t.id), classes: ["d-inline-block", "align-middle"]
                    }
                    ))
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"render", value:function() {
                    return s.a.createElement(Hn, Object.assign( {}
                    , this.props, {
                        type: "sale", renderTitle: this.renderTitle, renderCanvas: this.renderCanvas
                    }
                    ))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        Wn=function(e) {
            function t() {
                var e,
                a;
                Object(c.a)(this, t);
                for(var n=arguments.length, r=new Array(n), i=0;
                i<n;
                i++)r[i]=arguments[i];
                return(a=Object(d.a)(this, (e=Object(m.a)(t)).call.apply(e, [this].concat(r)))).renderTitle=function(e) {
                    var t=e.makerAddress,
                    a=e.swapURL;
                    return s.a.createElement(s.a.Fragment, null, s.a.createElement("a", {
                        href: "profile/"+t, target: "_blank"
                    }
                    , Rn(t)), " ", "made an", " ", s.a.createElement("a", {
                        href: a, target: "_blank"
                    }
                    , "offer"))
                }
                ,
                a.createAsset=function(e) {
                    return s.a.createElement(jn, {
                        src: e.image, title: e.name, text: "".concat(e.quantity), classes: ["d-inline-block", "align-middle"]
                    }
                    )
                }
                ,
                a.renderCanvas=function(e) {
                    var t=e.assets;
                    return s.a.createElement(s.a.Fragment, null, a.createAsset(t[0]), s.a.createElement("div", {
                        className: "Activity_asset_swap d-inline-block align-middle text-center"
                    }
                    , s.a.createElement("img", {
                        src: Ye.a, alt: "Swap", className: "img-fluid"
                    }
                    )), a.createAsset(t[1]))
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"render", value:function() {
                    return s.a.createElement(Hn, Object.assign( {}
                    , this.props, {
                        type: "offer", renderTitle: this.renderTitle, renderCanvas: this.renderCanvas
                    }
                    ))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        Vn=function(e) {
            function t() {
                var e,
                a;
                Object(c.a)(this, t);
                for(var n=arguments.length, r=new Array(n), i=0;
                i<n;
                i++)r[i]=arguments[i];
                return(a=Object(d.a)(this, (e=Object(m.a)(t)).call.apply(e, [this].concat(r)))).renderTitle=function(e) {
                    var t=e.name,
                    a=e.takerAddress,
                    n=e.txnUrl,
                    r=void 0===n?"": n;
                    return s.a.createElement(s.a.Fragment, null, s.a.createElement("a", {
                        href: "profile/"+a, target: "_blank"
                    }
                    , Rn(t, 6)), " ", "sent a", " ", s.a.createElement("a", {
                        href: r, target: "_blank"
                    }
                    , "transaction"))
                }
                ,
                a.renderCanvas=function(e) {
                    var t=a.props.txnUrl;
                    return s.a.createElement(s.a.Fragment, null, s.a.createElement("a", {
                        href: t, target: "_blank"
                    }
                    , Rn(t, 30)))
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"render", value:function() {
                    var e=this.props.takerAddress;
                    return s.a.createElement("div", {
                        className: "row Activity_transaction_container"
                    }
                    , s.a.createElement("div", {
                        className: "Activity_user_picture"
                    }
                    , s.a.createElement("a", {
                        href: "profile/"+e, target: "_blank"
                    }
                    , s.a.createElement(cn.a, {
                        className: "img-fluid blocky-circle", scale: 5, seed: e
                    }
                    ))), s.a.createElement("div", {
                        className: "Activity_details"
                    }
                    , s.a.createElement(Hn, Object.assign( {}
                    , this.props, {
                        type: "transaction", renderTitle: this.renderTitle, renderCanvas: this.renderCanvas
                    }
                    ))))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        Kn=function(e) {
            function t() {
                return Object(c.a)(this, t),
                Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"render", value:function() {
                    var e=this.props, t=e.type, a=e.makerAddress, n=e.swapDetails, r=(e.signedOrder, e.makerCurrencyAddress), i=e.takerCurrencyAddress, o=s.a.Fragment;
                    o="sale"===t?Gn: Wn;
                    var c=Te(i), l=Te(r), d=[ {
                        quantity: n.maker.description, name: l.symbol, image: "../img/tokenImages/"+l.image_file
                    }
                    , {
                        quantity: n.taker.description, name: c.symbol, image: "../img/tokenImages/"+c.image_file
                    }
                    ], m=null;
                    if("sale"!==t) {
                        var u= {
                            takerAddress:this.props.makerAddress, updatedAt: {
                                seconds: Date.now()/1e3-5e4
                            }
                            , name:"JonathanDoe", txnUrl:"https://etherscan.io/tx/0x6af784624a815b7ac6d419fbf740bf1db2f422d68ca978d7b47a7e6c33a45107"
                        }
                        ;
                        m=s.a.createElement(Vn, u)
                    }
                    return s.a.createElement("div", {
                        className: "Activity mb-4"
                    }
                    , s.a.createElement("div", {
                        className: "row"
                    }
                    , s.a.createElement("div", {
                        className: "Activity_user_picture"
                    }
                    , s.a.createElement("a", {
                        href: "profile/"+a, target: "_blank"
                    }
                    , s.a.createElement(cn.a, {
                        className: "img-fluid blocky-circle", scale: 5, seed: a
                    }
                    )), m&&s.a.createElement("span", {
                        class: "Activity_linker"
                    }
                    )), s.a.createElement("div", {
                        className: "Activity_details"
                    }
                    , s.a.createElement(o, Object.assign( {}
                    , this.props, {
                        assets: d
                    }
                    )))), m)
                }
            }
            ]),
            t
        }
        (s.a.Component),
        Yn=function(e) {
            function t() {
                return Object(c.a)(this, t),
                Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"render", value:function() {
                    var e=this.props.activities;
                    return s.a.createElement("div", {
                        className: "ActivityGroup"
                    }
                    , e.map(function(e) {
                        return s.a.createElement(Kn, Object.assign( {}
                        , e, {
                            key: "activity_".concat(e.id)
                        }
                        ))
                    }
                    ))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        Jn=[ {
            title:"Tokens",
            name:"tokens",
            options:[ {
                title: "Axie", value: "AXIE"
            }
            ,
            {
                title: "Cryptokitties", value: "CK"
            }
            ,
            {
                title: "Neon District", value: "NEON"
            }
            ,
            {
                title: "Flower", value: "FLOWER"
            }
            ,
            {
                title: "MLB Champions", value: "MLBC"
            }
            ,
            {
                title: "Luna", value: "LUNA"
            }
            ,
            {
                title: "SpaceCommanders", value: "CSC"
            }
            ,
            {
                title: "ZRX", value: "ZRX"
            }
            ],
            multiple:!1
        }
        ],
        Xn=(Date.now(), Date.now(), function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t), (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).onSelect=function(e) {
                    a.setState( {
                        orders: [], options: e, hasError: !1, hasMore: !0, lastVisible: null
                    }
                    , function() {
                        a.fetchData(!0)
                    }
                    )
                }
                , a.scrollMonitor=function(e) {
                    a.shouldLoadMore()&&(a.containerRef.current.getBoundingClientRect().bottom-window.innerHeight<100&&a.fetchData())
                }
                , a.shouldLoadMore=function() {
                    var e=a.state;
                    return console.log(e), !(e.isLoading||!e.hasMore||e.hasError)
                }
                , a.fetchData=function() {
                    if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]||a.shouldLoadMore()) {
                        var e=a.state.fetchAttempts;
                        e++;
                        var t=a.state.options.tokens?a.state.options.tokens[0]: null;
                        a.setState( {
                            isLoading: !0, hasError: !1, fetchAttempts: e
                        }
                        , function() {
                            if(e===a.state.fetchAttempts) {
                                var n=a.state, s=n.lastVisible, r=n.orders, i= {
                                    pageLimit: 4, publicType: null, sort: null, token: t, last: s
                                }
                                ;
                                Object(Z.h)(i).then(function(e) {
                                    a.setState( {
                                        orderData: e, orders: r.concat(e.orders), isLoading: !1, lastVisible: e.lastVisible
                                    }
                                    )
                                }
                                ).catch(function(e) {
                                    var t= {
                                        isLoading: !1
                                    }
                                    ;
                                    e===Qa.a.pageNavigation.noMorePages?(alert("No more pages!"), t.hasMore=!1):t.hasError=!0, a.setState(t)
                                }
                                )
                            }
                        }
                        )
                    }
                }
                , a.state= {
                    options: [], orders: [], isLoading: !1, hasMore: !0, hasError: !1, lastVisible: null, fetchAttempts: 0
                }
                , a.containerRef=s.a.createRef(), a
            }
            return Object(u.a)(t, e), Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    this.fetchData(), window.addEventListener("scroll", this.scrollMonitor)
                }
            }
            , {
                key:"componentWillUnmount", value:function() {
                    window.removeEventListener("scroll", this.scrollMonitor)
                }
            }
            , {
                key:"render", value:function() {
                    return s.a.createElement("div", {
                        className: "feed-container", ref: this.containerRef
                    }
                    , s.a.createElement("div", {
                        className: "container"
                    }
                    , s.a.createElement("div", {
                        className: "row"
                    }
                    , s.a.createElement("div", {
                        className: "col-md-3 col-sm-12 mb-5 mt-4"
                    }
                    , s.a.createElement(Un, {
                        groups: Jn, onSelect: this.onSelect
                    }
                    )), s.a.createElement("div", {
                        className: "col-md-9 col-sm-12"
                    }
                    , s.a.createElement(Yn, {
                        activities: this.state.orders
                    }
                    ))), this.state.isLoading&&s.a.createElement("div", {
                        style: {
                            width: "100%", textAlign: "center"
                        }
                    }
                    , s.a.createElement(I.a, {
                        style: {
                            margin: "auto"
                        }
                        , type:"Circles", color:"#DD3BAD"
                    }
                    ))))
                }
            }
            ]), t
        }
        (n.Component)),
        zn=Object(p.f)(Xn),
        Qn=a(201),
        Zn=a.n(Qn),
        qn=a(605),
        $n=(a(1687), a(356)),
        es=a.n($n),
        ts=a(247),
        as=a.n(ts),
        ns=w[S().code].Navbar,
        ss=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).onMouseEnterDropdown=function() {
                    a.setState( {
                        dropdownOpen: !0
                    }
                    )
                }
                ,
                a.onMouseLeaveDropdown=function() {
                    a.setState( {
                        dropdownOpen: !1
                    }
                    )
                }
                ,
                a.getLanguageListener=function(e) {
                    return function(t) {
                        t.preventDefault(),
                        N(e),
                        window.location.reload()
                    }
                }
                ,
                a.addressInputChange=function(e) {
                    return a.setState( {
                        searchAddress: e.target.value
                    }
                    )
                }
                ,
                a.search=function(e) {
                    e.preventDefault(),
                    a.state.searchAddress&&a.props.history.push("/status/".concat(a.state.searchAddress))
                }
                ,
                a.handleSignIn=function(e) {
                    e&&e.preventDefault(),
                    Object(de.d)( {
                        isSignedIn: !1, userAddressParam: a.props.meta.userAddress
                    }
                    ).then(function(e) {}
                    ).catch(function(e) {
                        e&&e.custom&&e.message&&alert(e.message)
                    }
                    )
                }
                ,
                a.handleSignOut=function(e) {
                    e&&e.preventDefault(),
                    Object(de.e)( {
                        isSignedIn: !1
                    }
                    ).then(function(e) {}
                    ).catch(function(e) {
                        console.error(e)
                    }
                    )
                }
                ,
                a.toggle=a.toggle.bind(Object(y.a)(Object(y.a)(a))),
                a.state= {
                    dropdownOpen: !1, tooltipOpen: !1
                }
                ,
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"toggle", value:function() {
                    this.setState(function(e) {
                        return {
                            dropdownOpen: !e.dropdownOpen
                        }
                    }
                    )
                }
            }
            , {
                key:"render", value:function() {
                    var e=this, t=this.props.meta.firebaseUser, a="/landing"===this.props.location.pathname||"/"===this.props.location.pathname, n=16;
                    return n>9&&(n="9+"), s.a.createElement("nav", {
                        className: "navbar navbar-expand-lg navbar-light justify-content-start"
                    }
                    , s.a.createElement("div", {
                        className: "container"
                    }
                    , s.a.createElement("div", {
                        className: "navbar-brand"
                    }
                    , a?s.a.createElement("div", null, s.a.createElement("img", {
                        src: as.a, className: "logo-name", alt: ""
                    }
                    ), s.a.createElement("img", {
                        src: es.a, className: "logo", alt: ""
                    }
                    )):s.a.createElement("div", {
                        className: "d-flex flex-fill justify-content-end left", id: "main-nav"
                    }
                    , s.a.createElement(o.b, {
                        to: "/"
                    }
                    , s.a.createElement("img", {
                        src: es.a, alt: ""
                    }
                    )), s.a.createElement("span", {
                        className: "nav-item"
                    }
                    , s.a.createElement(o.b, {
                        to: "/swap", className: "nav-link nav-item-button", id: "navbar-tradeBtn"
                    }
                    , "Swap")))), t?t.uid&&s.a.createElement("span", {
                        className: "nav-item"
                    }
                    , s.a.createElement(C.a, {
                        className: "d-flex flex-fill justify-content-end", id: "main-nav", isOpen: this.state.dropdownOpen, onMouseOver: this.onMouseEnterDropdown, onMouseLeave: this.onMouseLeaveDropdown, toggle: this.toggle
                    }
                    , s.a.createElement(C.d, {
                        className: "blocky-circle-holder", caret: !0
                    }
                    , s.a.createElement(cn.a, {
                        className: "blocky-circle", scale: 4, seed: t.uid
                    }
                    )), s.a.createElement(C.c, {
                        right: !0
                    }
                    , " ", s.a.createElement(C.b, {
                        key:0, onClick:function() {
                            e.props.history.push("/wallet/")
                        }
                    }
                    , "Wallet"), s.a.createElement(C.b, {
                        key:1, onClick:function() {
                            e.props.history.push("/profile/".concat(t.uid.toLowerCase()))
                        }
                    }
                    , "Profile"), s.a.createElement(C.b, {
                        key:2, onClick:function() {
                            e.props.history.push("/orders/")
                        }
                    }
                    , "Orders"), s.a.createElement(C.b, {
                        key:3, onClick:function() {
                            e.props.history.push("/editprofile/")
                        }
                    }
                    , "Settings")))):s.a.createElement("div", {
                        className: "d-flex flex-fill justify-content-end", id: "main-nav"
                    }
                    , s.a.createElement("span", {
                        className: "nav-item"
                    }
                    , s.a.createElement("a", {
                        href: "#", className: "nav-link", onClick: this.handleSignIn
                    }
                    , ns.SIGN_IN)))))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        rs=Object(p.f)(ss),
        is=function(e) {
            return s.a.createElement(rs, e)
        }
        ,
        os=(a(1688), a(606)),
        cs=a.n(os),
        ls=a(607),
        ds=a.n(ls),
        ms=a(608),
        us=a.n(ms),
        ps=w[S().code].Tagline,
        ys=function(e) {
            function t() {
                return Object(c.a)(this, t),
                Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"render", value:function() {
                    return s.a.createElement("div", {
                        className: "Tagline"
                    }
                    , s.a.createElement("div", {
                        className: "container tagline"
                    }
                    , s.a.createElement("div", {
                        className: "row first-row"
                    }
                    , s.a.createElement("div", {
                        className: "tag-first col-12 col-lg-4"
                    }
                    , s.a.createElement("div", null, s.a.createElement("img", {
                        src:as.a, style: {
                            height: "28px"
                        }
                    }
                    )), s.a.createElement("div", {
                        className: "desc-text"
                    }
                    , ps.TAGLINE, " ", s.a.createElement("a", {
                        className: "taglineLink", href: "https://0x.org/"
                    }
                    , "0x"), ".")), s.a.createElement("div", {
                        className: "tag-help col-12 col-lg-4"
                    }
                    , s.a.createElement("div", null, ps.HELP), s.a.createElement("div", {
                        className: "desc-text"
                    }
                    , "Chat:", " ", s.a.createElement("a", {
                        className: "taglineLink", target: "_blank", href: "https://discord.gg/X23u9B7"
                    }
                    , "Discord"), s.a.createElement("br", null), ps.EMAIL, ":", " ", s.a.createElement("a", {
                        className: "taglineLink", href: "mailto:hello@boxylabs.com"
                    }
                    , "hello@boxylabs.com"), s.a.createElement("br", null), s.a.createElement("a", {
                        id: "terms", className: "taglineLink cursor-pointer", target: "_blank", href: "/boxswapterms.pdf"
                    }
                    , "Terms"), "\xa0&\xa0", s.a.createElement("a", {
                        id: "terms", className: "taglineLink cursor-pointer", target: "_blank", href: "/boxswapprivacy.pdf"
                    }
                    , "Privacy"))), s.a.createElement("div", {
                        className: "tag-donations col-12 col-lg-4"
                    }
                    , s.a.createElement("div", null, ps.DONATIONS), s.a.createElement("div", {
                        className: "desc-text"
                    }
                    , "ETH: 0x66a836664aDc7c525c0Cc4527Dee8619d4FaF669", s.a.createElement("br", null), "ZRX: 0x66a836664aDc7c525c0Cc4527Dee8619d4FaF669"))), s.a.createElement("div", {
                        className: "row second-row"
                    }
                    , s.a.createElement("a", {
                        className: "social-icon", href: "https://discord.gg/Y5FE3s7"
                    }
                    , s.a.createElement(T.a, {
                        src: ds.a
                    }
                    )), s.a.createElement("a", {
                        className: "social-icon", target: "_blank", href: "https://twitter.com/boxswapio"
                    }
                    , s.a.createElement(T.a, {
                        src: G.a
                    }
                    )), s.a.createElement("a", {
                        className: "social-icon", href: "https://medium.com/boxswap"
                    }
                    , s.a.createElement(T.a, {
                        src: us.a
                    }
                    )), s.a.createElement("a", {
                        className: "social-icon", href: "https://www.youtube.com/channel/UCG9UOsvZIZQuIpsvYkUJC9A"
                    }
                    , s.a.createElement(T.a, {
                        src: cs.a
                    }
                    )), s.a.createElement("a", {
                        className: "social-icon", href: "mailto:hello@boxylabs.com"
                    }
                    , s.a.createElement(T.a, {
                        src: V.a
                    }
                    )))))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        fs=function(e) {
            return s.a.createElement("div", {
                className: "footer"
            }
            , s.a.createElement(ys, e))
        }
        ,
        bs=100,
        hs=function() {
            bs+100<1e3&&(bs+=100)
        }
        ,
        gs=function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t),
                (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).startPollingForMetamaskAddress=function() {
                    setInterval(function() {
                        var e=Object(de.b)();
                        a.state.userAddress!==e&&a.setState( {
                            userAddress: e
                        }
                        ), a.state.firebaseUser&&a.state.firebaseUser.uid!==e&&Object(de.e)( {
                            isSignedIn: !0
                        }
                        ), hs()
                    }
                    , bs)
                }
                ,
                a.fetchInitial=function() {
                    window.web3.version.getNetwork(function(e, t) {
                        e?console.log("Something went wrong!"): a.setCurrencies(t)
                    }
                    )
                }
                ,
                a.setCurrencies=function(e) {
                    e=parseInt(e, 10);
                    var t=[];
                    for(var n in ce[e])t.push(ce[e][n]);
                    a.setState( {
                        networkId: e, currencies: t, userAddress: Object(de.b)(), initialFetched: !0
                    }
                    )
                }
                ,
                a.setSignedIn=function(e) {
                    var t=e.signedIn,
                    n=e.authData;
                    a.setState( {
                        signedIn: t, authData: n
                    }
                    )
                }
                ,
                a.state= {
                    authData: {}
                    ,
                    userAddress: Object(de.b)()
                }
                ,
                a.startPollingForMetamaskAddress(),
                a
            }
            return Object(u.a)(t, e),
            Object(l.a)(t, [ {
                key:"componentDidMount", value:function() {
                    var e=Object(qn.a)(Zn.a.mark(function e() {
                        var t=this;
                        return Zn.a.wrap(function(e) {
                            for(;
                            ;
                            )switch(e.prev=e.next) {
                                case 0:if(!window.web3) {
                                    e.next=6;
                                    break
                                }
                                return this.fetchInitial(), e.next=4, Object(de.a)();
                                case 4:e.next=7;
                                break;
                                case 6:this.setCurrencies(1);
                                case 7:Z.a.onAuthStateChanged(function(e) {
                                    e?t.setState( {
                                        firebaseUser: e
                                    }
                                    ):t.setState( {
                                        firebaseUser: ""
                                    }
                                    )
                                }
                                );
                                case 8:case"end":return e.stop()
                            }
                        }
                        , e, this)
                    }
                    ));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }
                ()
            }
            , {
                key:"render", value:function() {
                    var e=this.props, t=e.component, a=e.onlyComponent, n=e.noFooter, r=Object(Dn.a)(e, ["component", "onlyComponent", "noFooter"]), i=this.state, o=i.initialFetched, c=i.currencies, l=i.networkId, d=i.signedIn, m=i.authData, u=i.userAddress, p=i.firebaseUser, y= {
                        onlyComponent: a, currencies: c, networkId: l, userAddress: u, signedIn: d, authData: m, setSignedIn: this.setSignedIn.bind(this), firebaseUser: p
                    }
                    , f=s.a.createElement("div", {
                        className: "container my-5 text-center"
                    }
                    , s.a.createElement(I.a, {
                        type: "Circles", color: "#DD3BAD"
                    }
                    ));
                    return o&&(f=s.a.createElement(t, Object.assign( {}
                    , r, {
                        meta: y
                    }
                    ))), a?s.a.createElement("div", {
                        style: {
                            overflow: "scroll", height: "600px"
                        }
                    }
                    , f):s.a.createElement(s.a.Fragment, null, s.a.createElement(is, Object.assign( {}
                    , r, {
                        meta: y
                    }
                    )), f, !n&&s.a.createElement(fs, Object.assign( {}
                    , r, {
                        meta: y
                    }
                    )))
                }
            }
            ]),
            t
        }
        (s.a.Component),
        ks=(a(1689), a(1690), a(1691), function(e) {
            function t(e) {
                var a;
                return Object(c.a)(this, t), (a=Object(d.a)(this, Object(m.a)(t).call(this, e))).state= {}
                , a
            }
            return Object(u.a)(t, e), Object(l.a)(t, [ {
                key:"render", value:function() {
                    var e= {
                        network: this.props.network
                    }
                    ;
                    return s.a.createElement(s.a.Fragment, null, s.a.createElement(p.d, null, s.a.createElement(p.b, {
                        exact:!0, path:"/", render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: aa
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/swap", exact:!0, render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: Gt
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/swap/:makerAssetSymbol/:makerAmount/:takerAssetSymbol/:takerAmount", exact:!0, render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: Gt
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/swap/:makerAssetSymbol/:makerAmount", render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: Gt
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/landing", render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: aa
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/status", exact:!0, render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: ut
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/wallet", exact:!0, render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: Wa
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/orders", exact:!0, render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: rn
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/wallet/:collectiblesName", exact:!0, render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: za
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/status/:searchAddress", exact:!0, render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: ut
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/profile/:traderId", exact:!0, render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: An
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/profile/:traderId/:collectiblesName", exact:!0, render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: za
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/inlineprofile/:traderId", exact:!0, render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                onlyComponent: "true", component: An
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/inlineprofile/:traderId/:collectiblesName", exact:!0, render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                onlyComponent: "true", component: za
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/editprofile/", exact:!0, render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: xn
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/badges/", exact:!0, render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: Mn
                            }
                            , t, e))
                        }
                    }
                    ), s.a.createElement(p.b, {
                        path:"/feed/", exact:!0, render:function(t) {
                            return s.a.createElement(gs, Object.assign( {
                                component: zn, noFooter: "true"
                            }
                            , t, e))
                        }
                    }
                    )))
                }
            }
            ]), t
        }
        (s.a.Component)),
        vs=(a(1692), a(1693), {
            network:Object( {
                NODE_ENV: "production", PUBLIC_URL: ""
            }
            ).REACT_APP_ETH_NETWORK||"development"
        }
        ),
        Es=function() {
            i.a.render(s.a.createElement(o.a, null, s.a.createElement(ks, vs)), document.getElementById("root"))
        }
        ;
        "complete"===document.readyState?Es():window.addEventListener("load", Es)
    }
    ,
    171:function(e, t, a) {
        e.exports=a.p+"static/media/arrows.a4bb50ec.svg"
    }
    ,
    199:function(e, t, a) {}
    ,
    200:function(e, t, a) {
        e.exports=a.p+"static/media/help.223a1e34.svg"
    }
    ,
    202:function(e, t, a) {
        e.exports=a.p+"static/media/img-error.495183e0.svg"
    }
    ,
    205:function(e, t, a) {
        e.exports=a.p+"static/media/arrow-back.e9620d84.svg"
    }
    ,
    21:function(e, t, a) {
        "use strict";
        (function(e) {
            a.d(t, "c", function() {
                return b
            }
            ), a.d(t, "b", function() {
                return h
            }
            ), a.d(t, "a", function() {
                return g
            }
            ), a.d(t, "d", function() {
                return k
            }
            ), a.d(t, "e", function() {
                return v
            }
            );
            var n, s, r, i=a(250), o=a.n(i), c=a(26), l=a(349), d=a(28), m=a(25), u=a(3), p=a(341), y=!1, f=function() {
                var e=window.ethereum||window.web3&&window.web3.currentProvider;
                return e?(s=new o.a(e), window.web3=s, e=function(e) {
                    var t=new c.Web3ProviderEngine, a=e.isMetaMask?new c.MetamaskSubprovider(e): new l.SignerSubprovider(e);
                    return t.addProvider(a), t.addProvider(new c.RPCSubprovider("https://eth-mainnet.alchemyapi.io/jsonrpc/XW0dPsBJUBdoLfmEueIBVTV-Unl01J6f")), d.providerUtils.startProviderEngine(t), t
                }
                (e), setInterval(function() {
                    n=s&&s.eth&&s.eth.accounts&&s.eth.accounts[0]
                }
                , 1e3)):(e=(s=new o.a(new o.a.providers.HttpProvider("https://eth-mainnet.alchemyapi.io/jsonrpc/XW0dPsBJUBdoLfmEueIBVTV-Unl01J6f"))).currentProvider, s=null), y=!0, {
                    web3: s, provider: r=e
                }
            }
            ;
            f();
            var b=function() {
                return new Promise(function(e) {
                    e(y? {
                        web3: s, provider: r
                    }
                    :f())
                }
                )
            }
            , h=function() {
                return n
            }
            , g=function() {
                return new Promise(function(e, t) {
                    if(!window.ethereum)return window.web3?(n=s.eth.accounts[0], e(n)): t();
                    window.ethereum.enable().then(function(t) {
                        return n=s.eth.accounts[0], e(n)
                    }
                    ).catch(function(e) {
                        t()
                    }
                    )
                }
                )
            }
            , k=function(t) {
                t.isSignedIn;
                var a=t.userAddressParam;
                return new Promise(function(t, n) {
                    var s=new p(window.web3.currentProvider), r=a, i="You agree to boxswap terms and conditions and are signing in with eth address: "+r, o=u.bufferToHex(new e(i, "utf8"));
                    if(!r)return n( {
                        custom: !0, message: "Please sign into Metamask first and reload."
                    }
                    );
                    s.personal_sign(o, r).then(function(e) {
                        return console.log("Signed! Result is: ", e), console.log("Recovering..."), m.n( {
                            msg: o, signed: e, from: r
                        }
                        )
                    }
                    ).then(function(e) {
                        return console.log(e.customToken), m.a.signInWithCustomToken(e.customToken)
                    }
                    ).then(function(e) {
                        m.a.currentUser.getIdToken().then(function(a) {
                            return t( {
                                idToken: a, auth: e
                            }
                            )
                        }
                        )
                    }
                    ).catch(function(e) {
                        return n(e)
                    }
                    )
                }
                )
            }
            , v=function(e) {
                e.isSignedIn;
                return new Promise(function(e, t) {
                    return m.a.signOut().then(function(t) {
                        return e(t)
                    }
                    ).catch(function(e) {
                        return t(e)
                    }
                    )
                }
                )
            }
        }
        ).call(this, a(5).Buffer)
    }
    ,
    245:function(e, t, a) {
        e.exports=a.p+"static/media/facebook.b4ca5671.svg"
    }
    ,
    247:function(e, t, a) {
        e.exports=a.p+"static/media/logo_name.1491ef69.svg"
    }
    ,
    25:function(e, t, a) {
        "use strict";
        a.d(t, "i", function() {
            return m
        }
        ),
        a.d(t, "h", function() {
            return u
        }
        ),
        a.d(t, "j", function() {
            return p
        }
        ),
        a.d(t, "k", function() {
            return y
        }
        ),
        a.d(t, "g", function() {
            return f
        }
        ),
        a.d(t, "b", function() {
            return b
        }
        ),
        a.d(t, "c", function() {
            return h
        }
        ),
        a.d(t, "m", function() {
            return g
        }
        ),
        a.d(t, "n", function() {
            return k
        }
        ),
        a.d(t, "e", function() {
            return v
        }
        ),
        a.d(t, "f", function() {
            return E
        }
        ),
        a.d(t, "d", function() {
            return w
        }
        ),
        a.d(t, "o", function() {
            return A
        }
        ),
        a.d(t, "l", function() {
            return S
        }
        ),
        a.d(t, "a", function() {
            return N
        }
        );
        var n=a(66),
        s=a(54),
        r=a.n(s),
        i=(a(1538), a(1539), a(1540), a(26), a(106)),
        o=r.a.initializeApp( {
            apiKey: "AIzaSyBPHa4AvIGZWQJ1wD9Hf54GNvrTY-m1c7w", authDomain: "swibble-7161b.firebaseapp.com", databaseURL: "https://swibble-7161b.firebaseio.com", projectId: "swibble-7161b", storageBucket: "swibble-7161b.appspot.com", messagingSenderId: "364071684284"
        }
        ),
        c=o.firestore(),
        l=o.auth(),
        d=function(e) {
            var t=Object(n.a)( {}
            , e);
            return["makerFee",
            "takerFee",
            "makerAssetAmount",
            "takerAssetAmount",
            "salt",
            "expirationTimeSeconds"].forEach(function(e) {
                t[e]=t[e].toString()
            }
            ),
            t
        }
        ,
        m=function(e) {
            var t=e.userAddress,
            a=e.targetAddress,
            n=e.pageToFetch,
            s=e.pageLimit;
            return new Promise(function(e, r) {
                var o=c.collection("orders").where(a, "==", t).orderBy("updatedAt", "desc").limit(s), l=n||o;
                return l.get().then(function(n) {
                    var r;
                    if(0===n.docs.length)throw new Error(i.a.pageNavigation.noMorePages);
                    if(n.docs.length===s) {
                        var o=n.docs[n.docs.length-1];
                        r=c.collection("orders").where(a, "==", t).orderBy("updatedAt", "desc").startAfter(o).limit(s)
                    }
                    var d=[];
                    n.forEach(function(e) {
                        d.push(e.data())
                    }
                    ), e( {
                        orders: d, nextPage: r, current: l
                    }
                    )
                }
                ).catch(function(e) {
                    e.message, i.a.pageNavigation.noMorePages, r(e)
                }
                )
            }
            )
        }
        ,
        u=function(e) {
            var t=e.pageLimit,
            a=(e.publicType, e.sort, e.token),
            s=e.last;
            return new Promise(function(e, r) {
                var o=c.collection("orders").orderBy("updatedAt", "desc");
                return a&&(o=o.where("tags", "array-contains", a)), o=o.limit(t), s&&(o=o.startAfter(s)), o.get().then(function(t) {
                    var a, s=[];
                    if(t.forEach(function(e) {
                        var t=e.data();
                        s.push(Object(n.a)( {
                            id: e.id
                        }
                        , t))
                    }
                    ), 0===t.docs.length)throw new Error(i.a.pageNavigation.noMorePages);
                    a=t.docs[t.docs.length-1], e( {
                        orders: s, lastVisible: a
                    }
                    )
                }
                ).catch(function(e) {
                    e.message, i.a.pageNavigation.noMorePages, r(e)
                }
                )
            }
            )
        }
        ,
        p=function(e) {
            var t=e.symbol;
            return new Promise(function(e, a) {
                return"WETH"===t&&(t="ETH"), r.a.database().ref("/db/prices/"+t+"/quote/USD").once("value").then(function(t) {
                    var a=t.child("price").val();
                    e(a)
                }
                ).catch(function(e) {
                    a(e)
                }
                )
            }
            )
        }
        ,
        y=function() {
            return new Promise(function(e, t) {
                return r.a.database().ref("/db/prices/").once("value").then(function(t) {
                    var a=t.val();
                    e(a)
                }
                ).catch(function(e) {
                    t(e)
                }
                )
            }
            )
        }
        ,
        f=function(e) {
            return new Promise(function(t, a) {
                return r.a.database().ref("/estimated-token-values/"+e).once("value").then(function(e) {
                    var a=e.val();
                    t(a)
                }
                ).catch(function(e) {
                    a(e)
                }
                )
            }
            )
        }
        ,
        b=function(e) {
            var t=e.username;
            return new Promise(function(e, a) {
                r.a.functions().httpsCallable("checkUsername")( {
                    username: t
                }
                ).then(function(t) {
                    e(t)
                }
                ).catch(function(e) {
                    a(e)
                }
                )
            }
            )
        }
        ,
        h=function(e) {
            var t=e.signedOrder,
            a=e.imageURL;
            r.a.functions().httpsCallable("createOrder")( {
                order: d(t), imageURL: a, mode: "prod"
            }
            )
        }
        ,
        g=function(e) {
            var t=e.signedOrder,
            a=e.imageURL,
            n=e.takerAddress,
            s=e.hash;
            r.a.functions().httpsCallable("settledOrder")( {
                order: d(t), imageURL: a, takerAddress: n, hash: s, mode: "prod"
            }
            )
        }
        ,
        k=function(e) {
            var t=e.msg,
            a=e.signed,
            n=e.from;
            return new Promise(function(e, s) {
                r.a.functions().httpsCallable("signForAuthToken")( {
                    msg: t, signed: a, from: n
                }
                ).then(function(t) {
                    e(t.data)
                }
                ).catch(function(e) {
                    console.log("error:"+e.message), s(e)
                }
                )
            }
            )
        }
        ,
        v=function(e) {
            var t=e.userAddress;
            return new Promise(function(e, a) {
                var n=r.a.functions().httpsCallable("fetchProfile");
                if(!t)throw new Error("No userAddress defined");
                n( {
                    userAddress: t
                }
                ).then(function(t) {
                    e(t.data)
                }
                ).catch(function(e) {
                    a(e)
                }
                )
            }
            )
        }
        ,
        E=function(e) {
            var t=e.username;
            return new Promise(function(e, a) {
                var n=r.a.functions().httpsCallable("fetchProfile");
                if(!t)throw new Error("No username defined");
                n( {
                    username: t
                }
                ).then(function(t) {
                    e(t.data)
                }
                ).catch(function(e) {
                    a(e)
                }
                )
            }
            )
        }
        ,
        w=function(e) {
            var t=e.profile,
            a=e.userAddress;
            return new Promise(function(e, n) {
                r.a.functions().httpsCallable("createProfile")( {
                    userAddress: a, profile: t
                }
                ).then(function(t) {
                    e(t.data)
                }
                ).catch(function(e) {
                    console.log("error:"+e.message), n(e)
                }
                )
            }
            )
        }
        ,
        A=function(e) {
            var t=e.profile,
            a=e.userAddress;
            return new Promise(function(e, n) {
                r.a.functions().httpsCallable("updateProfile")( {
                    userAddress: a, profile: t
                }
                ).then(function(t) {
                    e(t.data)
                }
                ).catch(function(e) {
                    console.log("error:"+e.message), n(e)
                }
                )
            }
            )
        }
        ,
        S=function(e) {
            var t=e.userAddress,
            a=e.tokenSymbol,
            n=e.amount,
            s=e.basePairSymbol;
            return new Promise(function(e, r) {
                if(!n)return o.database().ref("estimated-token-values/"+t+"/"+a).remove().then(function(t) {
                    e(t)
                }
                ).catch(function(e) {
                    console.log("error:"+e.message), r(e)
                }
                );
                var i=parseFloat(n);
                o.database().ref("estimated-token-values/"+t+"/"+a).set( {
                    amount: i, basePairSymbol: s
                }
                ).then(function(t) {
                    e(t)
                }
                ).catch(function(e) {
                    console.log("error:"+e.message), r(e)
                }
                )
            }
            )
        }
        ,
        N=(r.a, l)
    }
    ,
    29:function(e, t, a) {
        e.exports=a.p+"static/media/metamask.99053b1e.svg"
    }
    ,
    350:function(e, t) {
        e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAABGdBTUEAALGPC/xhBQAABoNJREFUaAXVmm1sFEUYx+fZ9torKRQlKESxRU0kwQ+GqMFPUKS8+AIoGl++2Lur3N7VlhK4O0GBRkS8vQMKld5dLXcXX6IBRCRgFLAlTURRQRLfYqKfNDH6QVGB9nrdHZ853LLs3V53r7e9Zb/s7DPP7Px/+8zOzM4skGvocHi3z6B0eDORyFwCMIVQco5wJJ6M+PdrYYBWhtXsjR7hcQTqIZROUmsDIPtqp93wTHu7YzArT22w4nWjJ/Q0kegbhNAybX1wrG761OVqSMtH0OEWnqKEvJkf7jI2RvJjjOQKJaSlAV186EmR0rf0wF2JLHw0scK+orOzNcVslgV0eIUnqEjeNgYnY16BtCSg17unekC88BM2zRtlyQWcj9ZN9y+zJCCDedYr3DUskk8oodcXAPd/EWizLGAxIBHuG67wp1Pcko3e0MOr2nZOV9719S7/OQ7KFgKBP5V2vWlKYIYlANkgDpJ0MD2Y7lND7o2u/ZqUkwbsDv/SCyb7AaHflryJOtzhxwiI71CKGHgAwI82u62+u2PNb7JQdnY0C3OoSE/gbOY6pT1fmuO4hpJG0MkLK5VwTCyl9I6hgXSv1ytMU4pP7PGfLYcy3ZEEwm2IR3wnSgbY6A0/ij3ku3LklDCIOeuSSPrUkD2RdWcykATOX+1/9RUA92Ii5tvGrCUBdPKhR0CUNOBksXTWgER7m1Z3XDUWMkjORhuwMeeEBA42JqK+rfJdxv0ddHmCKyQJ9mH0bLKIfGecX/5QVllZ37Or7XelH7aAe4goHcNoT5btHHCb4lHfFvmanccV0CicLBQ7nu8rCdRHo74/ZBs7M0gQxeM446nBoWRzIuZ/SZnP0uMG6HCHluPT3q83cllCNSBd/I57RUjXJyOBoLrMuAE6PcFlVIIDhcIphH9nB26BOpKK/Kyk6Z0Mm6FIEik4cirFswep1Oto2T1VZde8NBWQwWFHcABrr9BUYDxjNkkP9q5qj03QU9Q0QAcvPGQCXIYJp2Dvdbe7L+kBzLPGoad4bh+XJ/SgROlBzC1m5C5XBmRLIhrYnLvmbGvRARvdwgNYDYOrzK5ubBYcCl5OxgKbjNylqIBOT3gpDgXv43yy+HBAtiZigY1G4Jhv0cZBl1dYgr3lITPgOIBX4lH/C0bhigZoJhxwZFsiEthQCFxRAB18eDGl4iG8mb1QEVrlxgo3ZkCnV1gkifQDM+Dwy/fVZNS/Xgter73gd7DRHcZPFvGwGXAc4YLxmO95vRD5/AoCNBMOvxyERNQfyCfaSJ7hYcLpCS3ESTOLXJWRivT5cqFkrHhwrE5DUzVXc/B+nKEcxoWTosPhl3g4GfP59T0I/V66m6iDDy3AyB0xBQ5gOzbLdfpl6/fUBWgmHDahHfFYYK1+ycY8R30Hnd5gPW4+HsHb6vo8MVI9dig7cfplGhzTkjeCTXxovkilo7jmUXQ4rLsDJ85rjDyQQnw1AR0eYR5G7kMz4DByu/CdaytEsNEy2r0opeuvdTj2MDQBq7hq3DOAT40+sfz+0DlekZN1aAJ2dTVf4CbRpbjwekp2HtsZOnEQbx3bPYyXHgFkS+Q8v7NOeYu4EPgXJpElY4XE8q+VAo6xjABKqfS8FEmf1IQk8JkSXn8a9uAaSot+/+J6jgDiLGUufo3XMkhXc7hWWQ2LZHWFfQkOKp8r7aOlca+gCyP33Gh+ZuYrAe9jFTFIURSzIPG/k38m2qoW48LPaT2CcCiI7I2sKykc05kBbGnZXYk7p3NGhFNSJw5LfatW77plxIYJBomRXDQ6JERx87EZIXGkKe2RAbwopRicag2TzhwaTJ3MBWmbXLMYm+sXuaQjVAz357xWgGP6MoC49z03l1hssDPTqcE+9hujMr876P67ombyIoT4UmnHyHZj5DxWgWPaLgMSknn/lGLlNG4x30qk4ZO5IGvsNtZcv2K+Gbioj7cSHNOVAQRKNQGZE4OkotjX1LL7ZnYtHx0da87XVNkacN1yPe6sWg6O6QQmenho4BdZdP4z/FxeYZ/f09n6a34/6+Ry4tCQxvuXSyS9TUwP9PH8jpty5VrRxgER8zZPtWhsrrfjZOC40x+cqM6z4nU5/s+FgPmHK+w4UjgBOI0dST8lXP+UanoqLPguWhFIrYn9PnWn2oiv5kUco0/h51I//g7VP4GrOC3/QZvta20LRpAkMUIrUeZZhOqnCFQ79e4z7e31w9aWrk/dfz3YXc1fh13EAAAAAElFTkSuQmCC"
    }
    ,
    356:function(e, t, a) {
        e.exports=a.p+"static/media/logo.fd6410f3.svg"
    }
    ,
    575:function(e, t, a) {
        e.exports=a.p+"static/media/icon-trade.df375aa2.svg"
    }
    ,
    576:function(e, t, a) {}
    ,
    577:function(e, t, a) {}
    ,
    583:function(e, t, a) {
        e.exports=a.p+"static/media/cancel_popup.0e0910b9.svg"
    }
    ,
    584:function(e, t, a) {
        e.exports=a.p+"static/media/refresh.133f7de1.svg"
    }
    ,
    585:function(e, t, a) {
        e.exports=a.p+"static/media/left_background.36602422.svg"
    }
    ,
    586:function(e, t, a) {
        e.exports=a.p+"static/media/right_background.fca45243.svg"
    }
    ,
    590:function(e, t, a) {
        e.exports=a.p+"static/media/leftBack.9b8a9502.svg"
    }
    ,
    591:function(e, t, a) {
        e.exports=a.p+"static/media/rightBack.51f84d47.svg"
    }
    ,
    592:function(e, t, a) {
        e.exports=a.p+"static/media/circle-animated.5926fac6.svg"
    }
    ,
    593:function(e, t, a) {
        e.exports=a.p+"static/media/lady-animated.1e077f4c.svg"
    }
    ,
    594:function(e, t, a) {
        e.exports=a.p+"static/media/circle-leaves.bf88099e.svg"
    }
    ,
    595:function(e, t, a) {
        e.exports=a.p+"static/media/paperplus-animated.c5972d0c.svg"
    }
    ,
    596:function(e, t, a) {
        e.exports=a.p+"static/media/checks-animated.976fc46a.svg"
    }
    ,
    597:function(e, t, a) {
        e.exports=a.p+"static/media/plane-animated.8d3f0e64.svg"
    }
    ,
    598:function(e, t) {
        e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAKCAYAAADGmhxQAAAABGdBTUEAALGPC/xhBQAAAbhJREFUOBHNVL1OAkEY3F3gCE+BiYkVsbCksPAEQ6cPYGI0Yvx5Aq31DdDCRE20p0TBszGhtDIWVvAUhPO8dQYPA9zu0rrN3c43M9/cwn5SYNVqtXwUhmdaiE2t9YKU8l0KcdkJggfW5y3f95fAvwCvnHC78DoNguBznpb1SqWyreP4EL1L8OmjfzPreeetVmsoGS4Mw67QeiVlJmUDTU5S+ARQrVZXv6PoEVBhAubrICvlxlMQvM7gU9t1328g2NEUyI2Ub57nlRVPzhiOJK2PEWCNr6ZVr9dzCHeD2mw40guR1rfkmLTE6G0MxyIOjNkUCFvc21Ycx9Z6r9dbhm7RpmUt4RgpLm8KmE3hv1I0qhMQJGsdDay1saeL4/KmntkUL8TYzPRUQljraGCtjb1cHJc39cympFJXYzPDcxALcWfARxBvKW5dYKujwbPrJifeA6sek0R1Op17RG0YSAOVyRy4Gow0Su1C/5HSE5NyL4VPAPRmD0DpkMjEMYcD+F2YRT5+Ds7BIo+eXzc3XKLlqPoaDvex/ZuDuXz+mnMsoTgfnKPouYOeJZx6XynVbLfbL07Rfyn+AO5UwMIBWm3MAAAAAElFTkSuQmCC"
    }
    ,
    599:function(e, t, a) {
        e.exports=a.p+"static/media/external_link.2c4ede5b.svg"
    }
    ,
    600:function(e, t, a) {
        e.exports=a.p+"static/media/arrow.5765ebb9.svg"
    }
    ,
    601:function(e, t, a) {
        e.exports=a.p+"static/media/profile_twitter.482ad8c8.svg"
    }
    ,
    602:function(e, t, a) {
        e.exports=a.p+"static/media/profile_discord.cb55c2a2.svg"
    }
    ,
    603:function(e, t, a) {
        e.exports=a.p+"static/media/profile_instagram.8b148237.svg"
    }
    ,
    604:function(e, t, a) {
        e.exports=a.p+"static/media/profile_website.9907f996.svg"
    }
    ,
    606:function(e, t, a) {
        e.exports=a.p+"static/media/youtube.d1798a9f.svg"
    }
    ,
    607:function(e, t, a) {
        e.exports=a.p+"static/media/discord.a94fcdda.svg"
    }
    ,
    608:function(e, t, a) {
        e.exports=a.p+"static/media/medium.08a6c67e.svg"
    }
    ,
    609:function(e, t, a) {
        e.exports=a(1694)
    }
    ,
    639:function(e, t, a) {}
    ,
    65:function(e, t, a) {
        e.exports=a.p+"static/media/cancel.41c6f95d.svg"
    }
    ,
    701:function(e, t) {}
    ,
    703:function(e, t) {}
    ,
    722:function(e, t) {}
    ,
    725:function(e, t) {}
    ,
    76:function(e, t, a) {
        e.exports=a.p+"static/media/success_popup.ccbef778.svg"
    }
}

,
[[609,
1,
2]]]);
//# sourceMappingURL=main.fc0158ec.chunk.js.map