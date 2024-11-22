/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";

export const PostTerminalsRequestType: core.serialization.Schema<
    serializers.PostTerminalsRequestType.Raw,
    ButtonclikrApi.PostTerminalsRequestType
> = core.serialization.enum_([
    "125158LLC",
    "3Delta",
    "3DeltaPws",
    "911SoftwareCreditline",
    "abcLiquors",
    "abc610SE",
    "achDirect",
    "aciRcsSwitch",
    "acoSoftware",
    "activantFalcon",
    "adsGilbarco",
    "adyen",
    "ahcc",
    "ajb",
    "ajbFipayDirectTandem",
    "ajbIcip610",
    "ajbRtsIbm",
    "ajbRtsTandem",
    "ajbBevn",
    "ajbRue21",
    "ajbSpoch",
    "allureGlobal",
    "alohaEnhanced610",
    "alohaTerm",
    "aprivaGateway",
    "aprivaIwl255",
    "apriva610",
    "aprivapayAtt",
    "aprivapayMobile",
    "aptosEpicorRetail",
    "ascom",
    "asig",
    "aurus",
    "authorizeNet",
    "automatedCashSystems",
    "b2kSystems",
    "bevnSoftware",
    "billabong",
    "bncb",
    "bobEvans610",
    "bookstoreManager",
    "boost2Delta",
    "boostBoraPayer",
    "boostDirectInsite",
    "boostMpg",
    "breakawayVisionPos",
    "bridgepay",
    "brinkSoftware",
    "buyAtab",
    "caclGift",
    "cardinalHealth610",
    "cayan",
    "ccciWebsite",
    "cdsGlobalPaydq",
    "cenposHostCapture",
    "cenposIsoEmd",
    "cfre610",
    "chargePayments",
    "chargesmartPaywareConnect",
    "chrb610",
    "chsp",
    "ckfrIntrixSupercharge",
    "clre610Salepoint",
    "comdataSmartdesq",
    "commerciant",
    "crackerBarrel",
    "crainAtlanta",
    "craneVendingServices",
    "creditCall",
    "ctrSystems",
    "cubicPaymentApplication",
    "cyberSource",
    "cyberSourceVsntConversion",
    "cyberSourceVsntResellerBasic",
    "cyberSourceVsntResellerPremier",
    "dataBusnessSystems",
    "dataCap",
    "dataCapDialTran",
    "dataCapEpayRepro",
    "dataCapGiftEpay",
    "dataCapIpTran",
    "dataCapIpTranLt",
    "dataCapIpTranLtMoble",
    "dataCapNetEpay",
    "dataCapTranRepro",
    "dataCapTwinTran",
    "dataCapTwinTxnServer",
    "dataVantage",
    "dataVantageFnln610",
    "dbsTplusEnHanced",
    "dbsTransactionPlus",
    "dealBird",
    "dejavoo",
    "delego",
    "digicom",
    "directInsite",
    "discGoTech",
    "dl610Snt",
    "dlglVarSoftware",
    "dlgl610s",
    "dominosAci",
    "ecommercePlus",
    "edgil",
    "eesCompanies",
    "elavonEnConcert610",
    "elavonFuseboxGateway",
    "elavonProtobase",
    "elavonPayments",
    "elpl610r",
    "epayHealthcareMonetra",
    "equinox",
    "esdCard",
    "eatouch",
    "exatouchVsb",
    "exit41",
    "expressTriPos",
    "ezDine",
    "ezRetail",
    "fandango",
    "firstGlobalBillingSapwalletVsb",
    "fitb610s",
    "fredmeyr610",
    "freedomPay",
    "ftniGatewayEtran",
    "futurePosVsb",
    "GambleidTsevo",
    "Giftango",
    "Givex",
    "gmsPaymentGateway",
    "gmsPajb",
    "gnctSoftware",
    "goEMerchant",
    "govolution",
    "grantStreet",
    "greatLakesScrip",
    "greatLakesScripVar",
    "gsiCommerce",
    "handpoint",
    "harleyOwnersGroup",
    "highradius",
    "hp",
    "hypercom5500m",
    "hypercomPaymentServer",
    "hypercomT4205",
    "hypercomT4205E2e",
    "hypercomT4210",
    "hypercomT4210E2e",
    "hypercom4220Dial",
    "hypercom4220DialE2e",
    "hypercom4220Ssl",
    "hypercom4220SslE2e",
    "i2cVsb",
    "ibmace",
    "icVerify",
    "incentPay",
    "index",
    "ingenico610",
    "ingenico720",
    "ingenicoIct2203xDial",
    "ingenicoIct2203xDialE2ee",
    "ingenicoIct2203xDialPilot",
    "ingenicoIct2203xSsl",
    "ingenicoIct2203xSslE2ee",
    "ingenicoIct2203xSSLPilot",
    "ingenicoIct220Ctls3xDial",
    "ingenicoIct220Ctls3xDialEe2e",
    "ingenicoIct220Ctls3xSsl",
    "ingenicoIct220Ctls3xSslE2ee",
    "ingenicoIct2503xDial",
    "ingenicoIct2503xDialE2ee",
    "ingenicoIct2503xSsl",
    "ingenicoIct2503xSSLE2ee",
    "ingenicoIwl222BtDial",
    "ingenicoIwl222BtDialE2ee",
    "ingenicoIwl222BtSsl",
    "ingenicoIwl222BtSSlE2ee",
    "ingenicoIwl252BtDial",
    "ingenicoIw252BtDialE2ee",
    "ingenicoIw252BtSsl",
    "ingenicoIw252BtSslE2ee",
    "ingenicoIw2553g",
    "ingenicoIw2553gE2ee",
    "ingenicoSiEnterprise",
    "instamed",
    "ipayGateway",
    "isd",
    "islandPacific",
    "isvOpenmotionVsb",
    "isv510",
    "isv600",
    "isv610",
    "isvVsk",
    "itransact",
    "jewlSoftware",
    "jockeyEcomm",
    "jockeyRetail",
    "kachyng",
    "klik",
    "kmartGift",
    "kubra",
    "lightYear",
    "linked2Pay",
    "longRangeSystemsLrs",
    "lumberVisaK",
    "lumgPos",
    "magicWrighter",
    "magnetCardServices",
    "mainstreetMonetra510",
    "mainstreetMonetra610",
    "mastercardOpenapi",
    "mastercardPaymentGateway",
    "meiApriva",
    "menusoftDigitalDining",
    "merchantLinkCDG",
    "merchantLinkCredit",
    "meritSolar",
    "microsSymphony",
    "microsalePos",
    "midniteExpressSlipstream",
    "mightyTicket",
    "milleniumRetailSolutions",
    "mobileAccept",
    "mobileAcceptFlatRate",
    "mobileCheckoutQms",
    "mobileCheckoutStandard",
    "monetraAuth",
    "monroMuffler",
    "mpayGateway",
    "mtxepsWineps",
    "mvsp",
    "ncrAdvancedRestaurant",
    "ncrCinema",
    "ncrCounterpoint510",
    "ncrCounterpoint610",
    "ncrRetalixConnectedPayments",
    "ncrSilver",
    "ncrSilverPro",
    "ncrSilverProQms",
    "neoGames610",
    "networkMerchants",
    "nsbEps",
    "nourdersOdp",
    "nurit2159",
    "nurit8400EDial",
    "oCharleys",
    "olo",
    "opConnect",
    "optimalPaymentsGateway",
    "orccCollectPay",
    "orccAciWorldwide",
    "orderTalk",
    "paVitalcheck",
    "paFidelityExpress",
    "paGrantStreet",
    "parkmobile",
    "paxSp30Casio",
    "payGov",
    "paydiantSj",
    "payFirstEdcVpos",
    "paypalPayflowLink",
    "paypalPayflowLinkReseller",
    "paypalPayflowPro",
    "paypalPayflowProReseller",
    "payright",
    "paytechVsb",
    "pcAmerica",
    "PLSTQ610",
    "plugNPlay",
    "poynt",
    "precida",
    "pricetonCardConnect",
    "princetonEcommCollectpay",
    "princetonPayments",
    "princetonPayware",
    "propSoftware",
    "purecommerceVsb",
    "pxpSolutionsRetail",
    "rediantRposLighthouse",
    "rainbowApparel",
    "rdyc610s",
    "redOakPs",
    "redfinNetwork",
    "remcoSoftware",
    "rentACenter",
    "reproOnlyIngIct220Dial",
    "reproOnlyIngIct220DialE2ee",
    "reproOnlyIngIct220SslE2ee",
    "reproOnlyIngIct250Dial",
    "reproOnlyIngIct250DialE2ee",
    "reproOnlyIngIct250Ssl",
    "reproOnlyIngIct250SslE2ee",
    "reproOnlyVerifoneVx520DcDial",
    "reproOnlyVerifoneVx520DcSsl",
    "reproOnlyVerifoneVx520DialCtls",
    "reproOnlyVerifoneVx520SslCtls",
    "retrieverSoftware",
    "revlinkCollect",
    "revtrak",
    "reamMobile",
    "roamMobileTest",
    "roamData",
    "salepoint",
    "salepointClaires",
    "sbcSolutions",
    "secureTrading",
    "sequoiaRetialSystems",
    "shci610",
    "shift4OnTheNet",
    "sightlinePayments",
    "slimCdEntNonReseller",
    "slimCdEnterprise",
    "slimCdPro",
    "slimCdProNonReseller",
    "snlh610",
    "southernDataComm",
    "spsEzpay",
    "squirrelSystems",
    "ster610",
    "storisVision9",
    "ststSoftware",
    "talbots",
    "tangiblePayments",
    "tenderRetail",
    "tillster",
    "tnspayGateway",
    "toast",
    "toyzPos",
    "transactionWirelessSvs",
    "transax",
    "tranzgate",
    "trem610",
    "triversity",
    "triversityPos",
    "trustcommVault610",
    "trustcommVault600",
    "trustcommerce2011",
    "tsysAmexPipPcSoftware",
    "tsysAmexPipTerminal",
    "tsysDialPay",
    "tsysPosPort",
    "twitpay",
    "uhaul",
    "uicBezel8",
    "upSolution610",
    "usaEpay",
    "usfs",
    "ventek",
    "verifone",
    "verifone510Terminal",
    "verifone600Terminal",
    "verifone610",
    "verifoneOmni3200",
    "verifonePaywareConnect",
    "verifonePaywareMobile",
    "verifonePaywarePc",
    "verifonePaywareTranactRita",
    "verifonePcChargeGoSoftware",
    "verifonePoint",
    "verifonePointEntMx",
    "verifonePointEntVx",
    "verifoneRuby",
    "verifoneVx510",
    "verifoneVx510DcDial",
    "verifoneVx510DcIp",
    "verifoneVx510DcSsl",
    "verifoneVx510le",
    "verifoneVx520DcDialCtlsE2ee",
    "verifoneVx520DcDialE2ee",
    "verifoneVx520DcIp1",
    "verifoneVx520DcIp2",
    "verifoneVx520DcIpCtls",
    "verifoneVx520DcIpCtlsE2ee",
    "verifoneVx520DcSslCtlsE2ee",
    "verifoneVx520DcSslE2ee",
    "verifoneVx520DialOnly",
    "verifoneVx570Dial",
    "verifoneVx570Ip",
    "verifoneVx570Ssl",
    "verifoneVx6803gGprs",
    "vicoSoftware",
    "virtualTerminal",
    "vistaEntertainment",
    "vitalcheck",
    "vmcAddOnAndroidByodQmd",
    "vmcAddOnAndroidByodStandard",
    "vmcAddOnBundleByodQms",
    "vmcAddOnBundleByodStandard",
    "vmcAddOnBundleCellularQmd",
    "vmcAddOnBundleCellularStandard",
    "vmcAddOnBundleWifiQmd",
    "vmcAddOnBundleWifiStandard",
    "vmcFieldBundleByodQmd",
    "vmcFieldBundleByodStandard",
    "vmcFieldBundleCellularQms",
    "vmcFieldBundleCellularStandard",
    "vmcStoreAndroidByodQms",
    "vmcStoreAndroidByodStandard",
    "vmcStoreBundleByodQms",
    "vmcStoreBundleByodStandard",
    "vmcStoreBundleCellularQms",
    "vmcStoreBundleCellularStandard",
    "vmcStoreBundleWifiQms",
    "vmcStoreBundleWifiStandard",
    "vPlus",
    "vsb",
    "vsbGreenbeanRecycle",
    "vsbKaizen",
    "vsbOrderbridge",
    "vsbPhonixManagedNetwork",
    "vsbSamurai",
    "vsbVisat",
    "vsbWiretrust",
    "vsbXgateway",
    "wandGift",
    "waySystemsMtt5000",
    "wendysCom",
    "whirl",
    "winn610s",
    "xpaySoftware",
    "xpient610",
    "xpientSolutions",
]);

export declare namespace PostTerminalsRequestType {
    type Raw =
        | "125158LLC"
        | "3Delta"
        | "3DeltaPws"
        | "911SoftwareCreditline"
        | "abcLiquors"
        | "abc610SE"
        | "achDirect"
        | "aciRcsSwitch"
        | "acoSoftware"
        | "activantFalcon"
        | "adsGilbarco"
        | "adyen"
        | "ahcc"
        | "ajb"
        | "ajbFipayDirectTandem"
        | "ajbIcip610"
        | "ajbRtsIbm"
        | "ajbRtsTandem"
        | "ajbBevn"
        | "ajbRue21"
        | "ajbSpoch"
        | "allureGlobal"
        | "alohaEnhanced610"
        | "alohaTerm"
        | "aprivaGateway"
        | "aprivaIwl255"
        | "apriva610"
        | "aprivapayAtt"
        | "aprivapayMobile"
        | "aptosEpicorRetail"
        | "ascom"
        | "asig"
        | "aurus"
        | "authorizeNet"
        | "automatedCashSystems"
        | "b2kSystems"
        | "bevnSoftware"
        | "billabong"
        | "bncb"
        | "bobEvans610"
        | "bookstoreManager"
        | "boost2Delta"
        | "boostBoraPayer"
        | "boostDirectInsite"
        | "boostMpg"
        | "breakawayVisionPos"
        | "bridgepay"
        | "brinkSoftware"
        | "buyAtab"
        | "caclGift"
        | "cardinalHealth610"
        | "cayan"
        | "ccciWebsite"
        | "cdsGlobalPaydq"
        | "cenposHostCapture"
        | "cenposIsoEmd"
        | "cfre610"
        | "chargePayments"
        | "chargesmartPaywareConnect"
        | "chrb610"
        | "chsp"
        | "ckfrIntrixSupercharge"
        | "clre610Salepoint"
        | "comdataSmartdesq"
        | "commerciant"
        | "crackerBarrel"
        | "crainAtlanta"
        | "craneVendingServices"
        | "creditCall"
        | "ctrSystems"
        | "cubicPaymentApplication"
        | "cyberSource"
        | "cyberSourceVsntConversion"
        | "cyberSourceVsntResellerBasic"
        | "cyberSourceVsntResellerPremier"
        | "dataBusnessSystems"
        | "dataCap"
        | "dataCapDialTran"
        | "dataCapEpayRepro"
        | "dataCapGiftEpay"
        | "dataCapIpTran"
        | "dataCapIpTranLt"
        | "dataCapIpTranLtMoble"
        | "dataCapNetEpay"
        | "dataCapTranRepro"
        | "dataCapTwinTran"
        | "dataCapTwinTxnServer"
        | "dataVantage"
        | "dataVantageFnln610"
        | "dbsTplusEnHanced"
        | "dbsTransactionPlus"
        | "dealBird"
        | "dejavoo"
        | "delego"
        | "digicom"
        | "directInsite"
        | "discGoTech"
        | "dl610Snt"
        | "dlglVarSoftware"
        | "dlgl610s"
        | "dominosAci"
        | "ecommercePlus"
        | "edgil"
        | "eesCompanies"
        | "elavonEnConcert610"
        | "elavonFuseboxGateway"
        | "elavonProtobase"
        | "elavonPayments"
        | "elpl610r"
        | "epayHealthcareMonetra"
        | "equinox"
        | "esdCard"
        | "eatouch"
        | "exatouchVsb"
        | "exit41"
        | "expressTriPos"
        | "ezDine"
        | "ezRetail"
        | "fandango"
        | "firstGlobalBillingSapwalletVsb"
        | "fitb610s"
        | "fredmeyr610"
        | "freedomPay"
        | "ftniGatewayEtran"
        | "futurePosVsb"
        | "GambleidTsevo"
        | "Giftango"
        | "Givex"
        | "gmsPaymentGateway"
        | "gmsPajb"
        | "gnctSoftware"
        | "goEMerchant"
        | "govolution"
        | "grantStreet"
        | "greatLakesScrip"
        | "greatLakesScripVar"
        | "gsiCommerce"
        | "handpoint"
        | "harleyOwnersGroup"
        | "highradius"
        | "hp"
        | "hypercom5500m"
        | "hypercomPaymentServer"
        | "hypercomT4205"
        | "hypercomT4205E2e"
        | "hypercomT4210"
        | "hypercomT4210E2e"
        | "hypercom4220Dial"
        | "hypercom4220DialE2e"
        | "hypercom4220Ssl"
        | "hypercom4220SslE2e"
        | "i2cVsb"
        | "ibmace"
        | "icVerify"
        | "incentPay"
        | "index"
        | "ingenico610"
        | "ingenico720"
        | "ingenicoIct2203xDial"
        | "ingenicoIct2203xDialE2ee"
        | "ingenicoIct2203xDialPilot"
        | "ingenicoIct2203xSsl"
        | "ingenicoIct2203xSslE2ee"
        | "ingenicoIct2203xSSLPilot"
        | "ingenicoIct220Ctls3xDial"
        | "ingenicoIct220Ctls3xDialEe2e"
        | "ingenicoIct220Ctls3xSsl"
        | "ingenicoIct220Ctls3xSslE2ee"
        | "ingenicoIct2503xDial"
        | "ingenicoIct2503xDialE2ee"
        | "ingenicoIct2503xSsl"
        | "ingenicoIct2503xSSLE2ee"
        | "ingenicoIwl222BtDial"
        | "ingenicoIwl222BtDialE2ee"
        | "ingenicoIwl222BtSsl"
        | "ingenicoIwl222BtSSlE2ee"
        | "ingenicoIwl252BtDial"
        | "ingenicoIw252BtDialE2ee"
        | "ingenicoIw252BtSsl"
        | "ingenicoIw252BtSslE2ee"
        | "ingenicoIw2553g"
        | "ingenicoIw2553gE2ee"
        | "ingenicoSiEnterprise"
        | "instamed"
        | "ipayGateway"
        | "isd"
        | "islandPacific"
        | "isvOpenmotionVsb"
        | "isv510"
        | "isv600"
        | "isv610"
        | "isvVsk"
        | "itransact"
        | "jewlSoftware"
        | "jockeyEcomm"
        | "jockeyRetail"
        | "kachyng"
        | "klik"
        | "kmartGift"
        | "kubra"
        | "lightYear"
        | "linked2Pay"
        | "longRangeSystemsLrs"
        | "lumberVisaK"
        | "lumgPos"
        | "magicWrighter"
        | "magnetCardServices"
        | "mainstreetMonetra510"
        | "mainstreetMonetra610"
        | "mastercardOpenapi"
        | "mastercardPaymentGateway"
        | "meiApriva"
        | "menusoftDigitalDining"
        | "merchantLinkCDG"
        | "merchantLinkCredit"
        | "meritSolar"
        | "microsSymphony"
        | "microsalePos"
        | "midniteExpressSlipstream"
        | "mightyTicket"
        | "milleniumRetailSolutions"
        | "mobileAccept"
        | "mobileAcceptFlatRate"
        | "mobileCheckoutQms"
        | "mobileCheckoutStandard"
        | "monetraAuth"
        | "monroMuffler"
        | "mpayGateway"
        | "mtxepsWineps"
        | "mvsp"
        | "ncrAdvancedRestaurant"
        | "ncrCinema"
        | "ncrCounterpoint510"
        | "ncrCounterpoint610"
        | "ncrRetalixConnectedPayments"
        | "ncrSilver"
        | "ncrSilverPro"
        | "ncrSilverProQms"
        | "neoGames610"
        | "networkMerchants"
        | "nsbEps"
        | "nourdersOdp"
        | "nurit2159"
        | "nurit8400EDial"
        | "oCharleys"
        | "olo"
        | "opConnect"
        | "optimalPaymentsGateway"
        | "orccCollectPay"
        | "orccAciWorldwide"
        | "orderTalk"
        | "paVitalcheck"
        | "paFidelityExpress"
        | "paGrantStreet"
        | "parkmobile"
        | "paxSp30Casio"
        | "payGov"
        | "paydiantSj"
        | "payFirstEdcVpos"
        | "paypalPayflowLink"
        | "paypalPayflowLinkReseller"
        | "paypalPayflowPro"
        | "paypalPayflowProReseller"
        | "payright"
        | "paytechVsb"
        | "pcAmerica"
        | "PLSTQ610"
        | "plugNPlay"
        | "poynt"
        | "precida"
        | "pricetonCardConnect"
        | "princetonEcommCollectpay"
        | "princetonPayments"
        | "princetonPayware"
        | "propSoftware"
        | "purecommerceVsb"
        | "pxpSolutionsRetail"
        | "rediantRposLighthouse"
        | "rainbowApparel"
        | "rdyc610s"
        | "redOakPs"
        | "redfinNetwork"
        | "remcoSoftware"
        | "rentACenter"
        | "reproOnlyIngIct220Dial"
        | "reproOnlyIngIct220DialE2ee"
        | "reproOnlyIngIct220SslE2ee"
        | "reproOnlyIngIct250Dial"
        | "reproOnlyIngIct250DialE2ee"
        | "reproOnlyIngIct250Ssl"
        | "reproOnlyIngIct250SslE2ee"
        | "reproOnlyVerifoneVx520DcDial"
        | "reproOnlyVerifoneVx520DcSsl"
        | "reproOnlyVerifoneVx520DialCtls"
        | "reproOnlyVerifoneVx520SslCtls"
        | "retrieverSoftware"
        | "revlinkCollect"
        | "revtrak"
        | "reamMobile"
        | "roamMobileTest"
        | "roamData"
        | "salepoint"
        | "salepointClaires"
        | "sbcSolutions"
        | "secureTrading"
        | "sequoiaRetialSystems"
        | "shci610"
        | "shift4OnTheNet"
        | "sightlinePayments"
        | "slimCdEntNonReseller"
        | "slimCdEnterprise"
        | "slimCdPro"
        | "slimCdProNonReseller"
        | "snlh610"
        | "southernDataComm"
        | "spsEzpay"
        | "squirrelSystems"
        | "ster610"
        | "storisVision9"
        | "ststSoftware"
        | "talbots"
        | "tangiblePayments"
        | "tenderRetail"
        | "tillster"
        | "tnspayGateway"
        | "toast"
        | "toyzPos"
        | "transactionWirelessSvs"
        | "transax"
        | "tranzgate"
        | "trem610"
        | "triversity"
        | "triversityPos"
        | "trustcommVault610"
        | "trustcommVault600"
        | "trustcommerce2011"
        | "tsysAmexPipPcSoftware"
        | "tsysAmexPipTerminal"
        | "tsysDialPay"
        | "tsysPosPort"
        | "twitpay"
        | "uhaul"
        | "uicBezel8"
        | "upSolution610"
        | "usaEpay"
        | "usfs"
        | "ventek"
        | "verifone"
        | "verifone510Terminal"
        | "verifone600Terminal"
        | "verifone610"
        | "verifoneOmni3200"
        | "verifonePaywareConnect"
        | "verifonePaywareMobile"
        | "verifonePaywarePc"
        | "verifonePaywareTranactRita"
        | "verifonePcChargeGoSoftware"
        | "verifonePoint"
        | "verifonePointEntMx"
        | "verifonePointEntVx"
        | "verifoneRuby"
        | "verifoneVx510"
        | "verifoneVx510DcDial"
        | "verifoneVx510DcIp"
        | "verifoneVx510DcSsl"
        | "verifoneVx510le"
        | "verifoneVx520DcDialCtlsE2ee"
        | "verifoneVx520DcDialE2ee"
        | "verifoneVx520DcIp1"
        | "verifoneVx520DcIp2"
        | "verifoneVx520DcIpCtls"
        | "verifoneVx520DcIpCtlsE2ee"
        | "verifoneVx520DcSslCtlsE2ee"
        | "verifoneVx520DcSslE2ee"
        | "verifoneVx520DialOnly"
        | "verifoneVx570Dial"
        | "verifoneVx570Ip"
        | "verifoneVx570Ssl"
        | "verifoneVx6803gGprs"
        | "vicoSoftware"
        | "virtualTerminal"
        | "vistaEntertainment"
        | "vitalcheck"
        | "vmcAddOnAndroidByodQmd"
        | "vmcAddOnAndroidByodStandard"
        | "vmcAddOnBundleByodQms"
        | "vmcAddOnBundleByodStandard"
        | "vmcAddOnBundleCellularQmd"
        | "vmcAddOnBundleCellularStandard"
        | "vmcAddOnBundleWifiQmd"
        | "vmcAddOnBundleWifiStandard"
        | "vmcFieldBundleByodQmd"
        | "vmcFieldBundleByodStandard"
        | "vmcFieldBundleCellularQms"
        | "vmcFieldBundleCellularStandard"
        | "vmcStoreAndroidByodQms"
        | "vmcStoreAndroidByodStandard"
        | "vmcStoreBundleByodQms"
        | "vmcStoreBundleByodStandard"
        | "vmcStoreBundleCellularQms"
        | "vmcStoreBundleCellularStandard"
        | "vmcStoreBundleWifiQms"
        | "vmcStoreBundleWifiStandard"
        | "vPlus"
        | "vsb"
        | "vsbGreenbeanRecycle"
        | "vsbKaizen"
        | "vsbOrderbridge"
        | "vsbPhonixManagedNetwork"
        | "vsbSamurai"
        | "vsbVisat"
        | "vsbWiretrust"
        | "vsbXgateway"
        | "wandGift"
        | "waySystemsMtt5000"
        | "wendysCom"
        | "whirl"
        | "winn610s"
        | "xpaySoftware"
        | "xpient610"
        | "xpientSolutions";
}
