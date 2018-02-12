
let baseImgUrl = "static/images/"
let loadPageUrl = ""

const tabMenuList = [
  {
    id: 'hscode',
    name: 'HS编码',
    imageUrl: baseImgUrl + 'fuwu/hscode.png',
    pageUrl: loadPageUrl + "hsCode/hsCodeQueryList.html"
  },
  {
    id: 'decl',
    name: '报关单',
    imageUrl: baseImgUrl + 'fuwu/decl.png',
    pageUrl: loadPageUrl + "decl/declList.html"
  },
  {
    id: 'cdl',
    name: '集报清单',
    imageUrl: baseImgUrl + 'fuwu/cdl.png',
    pageUrl: loadPageUrl + "cdl/cdlList.html"
  },
  {
    id: 'manifest',
    name: '公路舱单',
    imageUrl: baseImgUrl + 'fuwu/manifest.png',
    pageUrl: loadPageUrl + "deliverySerial/deliveryList.html"
  },
  {
    id: 'shipbill',
    name: '海运舱单',
    imageUrl: baseImgUrl + 'fuwu/shipbill.png',
    pageUrl: loadPageUrl + "shipBill/shipBillList.html"
  },
  {
    id: 'mfcfm',
    name: '舱单确报',
    imageUrl: baseImgUrl + 'fuwu/mfcfm.png',
    pageUrl: loadPageUrl + "mfcfm/mfcfmList.html"
  },
  {
   id: 'datacount',
   name: '数据统计',
   imageUrl: baseImgUrl + 'fuwu/datacount.png',
   pageUrl: ""
   },
  {
    id: 'check',
    name: '口岸查验',
    imageUrl: baseImgUrl + 'fuwu/check.png',
    pageUrl: loadPageUrl + "check/checkList.html"
  },
  {
    id: 'message',
    name: '消息中心',
    imageUrl: baseImgUrl + 'fuwu/message.png',
    pageUrl: loadPageUrl + "message/messageList.html"
  }
]


const swiperImgList = [
  {imageUrl: baseImgUrl + 'swiper/swiper1.png',name:"swiper1"},
  {imageUrl: baseImgUrl + 'swiper/swiper2.png',name:"swiper2"},
  {imageUrl: baseImgUrl + 'swiper/swiper3.png',name:"swiper3"},
  {imageUrl: baseImgUrl + 'swiper/swiper4.png',name:"swiper4"},
  {imageUrl: baseImgUrl + 'swiper/swiper5.png',name:"swiper5"}
  ]

export { tabMenuList,swiperImgList}
